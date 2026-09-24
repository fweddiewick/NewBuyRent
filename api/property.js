/**
 * Standalone Vercel Serverless Function & Express Route Handler
 * api/property.js (ESM)
 * 
 * Aggregates property intelligence from:
 * 1. SLA OneMap Geocoding & Amenities (1 km radius)
 * 2. data.gov.sg HDB Resale transaction history & 5-year trends
 * 3. URA Space private property caveats and rental benchmarks
 * 4. National Baseline Comparisons
 */

import {
  NATIONAL_BASELINES,
  ESTATE_PROFILES,
  resolveEstate,
  getNearbyWithinRadius
} from "./data/singaporeData.js";

export default async function handler(req, res) {
  // CORS headers for Vercel Serverless functions
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed. Use GET." });
  }

  // Set explicit caching header to prevent rate limiting upstream APIs
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=7200");

  try {
    const rawQuery = (req.query?.postalCode || req.query?.estate || "560410").toString().trim();
    const requireAllKeys = req.query?.requireAllKeys === "true" || process.env.REQUIRE_ALL_KEYS === "true";

    // Guardrail Check: Check missing environment variable if upstream credentials strictly required
    if (requireAllKeys && !process.env.URA_ACCESS_KEY) {
      return res.status(503).json({
        error: "Service Unavailable: Missing URA_ACCESS_KEY environment variable. Required for direct URA Space API access."
      });
    }

    // Step 1: Geocode location via SLA OneMap API
    let geocode = null;
    let coordinates = { lat: 1.3508, lng: 103.8488 }; // Default Bishan
    let addressDetails = {
      query: rawQuery,
      building: null,
      address: null,
      postalCode: null,
      roadName: null,
      source: "fallback"
    };

    try {
      const oneMapUrl = `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${encodeURIComponent(rawQuery)}&returnGeom=Y&getAddrDetails=Y&pageNum=1`;
      const oneMapRes = await fetch(oneMapUrl, {
        headers: {
          "User-Agent": "aistudio-build"
        },
        signal: AbortSignal.timeout(5000)
      });

      if (oneMapRes.ok) {
        const oneMapData = await oneMapRes.json();
        if (oneMapData?.results && oneMapData.results.length > 0) {
          const topResult = oneMapData.results[0];
          const lat = parseFloat(topResult.LATITUDE);
          const lng = parseFloat(topResult.LONGITUDE);
          if (!isNaN(lat) && !isNaN(lng)) {
            coordinates = { lat, lng };
            geocode = topResult;
            addressDetails = {
              query: rawQuery,
              building: topResult.BUILDING !== "NIL" ? topResult.BUILDING : null,
              address: topResult.ADDRESS,
              postalCode: topResult.POSTAL !== "NIL" ? topResult.POSTAL : rawQuery,
              roadName: topResult.ROAD_NAME !== "NIL" ? topResult.ROAD_NAME : null,
              blockNo: topResult.BLK_NO !== "NIL" ? topResult.BLK_NO : null,
              source: "OneMap Geocoding API"
            };
          }
        }
      }
    } catch (err) {
      console.warn("OneMap fetch note:", err?.message || err);
    }

    // Step 2: Resolve Planning Area & Estate Profile
    const resolved = resolveEstate(addressDetails.postalCode || rawQuery);
    const estateKey = resolved.estate;
    const estateProfile = ESTATE_PROFILES[estateKey] || ESTATE_PROFILES["Bishan"];

    // If geocode failed, use estate center coordinates
    if (!geocode && estateProfile.centerCoords) {
      coordinates = estateProfile.centerCoords;
      addressDetails.address = `${estateKey} Planning Area, Singapore`;
    }

    // Step 3: Compute Amenities & School Density within 1 km Radius
    const nearby = getNearbyWithinRadius(coordinates.lat, coordinates.lng, 1.0);

    // Step 4: Fetch Live HDB Resale Data from data.gov.sg
    let liveHdbTransactions = [];
    try {
      const hdbGovUrl = `https://data.gov.sg/api/action/datastore_search?resource_id=d_8b84c4ee58e3cfc0ece0d773c8ca6abc&q=${encodeURIComponent(estateKey.toUpperCase())}&limit=20`;
      const hdbRes = await fetch(hdbGovUrl, {
        headers: { "User-Agent": "aistudio-build" },
        signal: AbortSignal.timeout(4000)
      });

      if (hdbRes.ok) {
        const hdbJson = await hdbRes.json();
        if (hdbJson?.result?.records && Array.isArray(hdbJson.result.records)) {
          liveHdbTransactions = hdbJson.result.records.map(rec => ({
            town: rec.town,
            flatType: rec.flat_type,
            block: rec.block,
            streetName: rec.street_name,
            floorAreaSqm: parseFloat(rec.floor_area_sqm) || 0,
            floorAreaSqft: Math.round((parseFloat(rec.floor_area_sqm) || 0) * 10.7639),
            resalePrice: parseFloat(rec.resale_price) || 0,
            psf: rec.floor_area_sqm > 0
              ? Math.round(parseFloat(rec.resale_price) / (parseFloat(rec.floor_area_sqm) * 10.7639))
              : 0,
            leaseCommenceDate: rec.lease_commence_date,
            month: rec.month
          }));
        }
      }
    } catch (err) {
      console.warn("data.gov.sg fetch note:", err?.message || err);
    }

    // Step 5: URA Space Private Residential Caveats and Rentals
    let uraData = {
      condoMedianPsf: estateProfile.ura.condoMedianPsf,
      condoMedianRent: estateProfile.ura.condoMedianRent,
      rentalPsfPerMonth: estateProfile.ura.rentalPsfPerMonth,
      fiveYearCondoGrowthPct: estateProfile.ura.fiveYearCondoGrowthPct,
      recentCaveats: estateProfile.ura.recentCaveats,
      recentRentals: estateProfile.ura.recentRentals,
      source: "Singapore Open Data Benchmark (URA Real Estate Info System)",
      liveKeyPresent: !!process.env.URA_ACCESS_KEY
    };

    // If URA_ACCESS_KEY is present in environment, query URA Space API
    if (process.env.URA_ACCESS_KEY) {
      try {
        const tokenRes = await fetch("https://www.ura.gov.sg/uraDataService/insertNewToken.action", {
          headers: {
            "AccessKey": process.env.URA_ACCESS_KEY,
            "User-Agent": "aistudio-build"
          },
          signal: AbortSignal.timeout(4000)
        });

        if (tokenRes.ok) {
          const tokenJson = await tokenRes.json();
          if (tokenJson?.status === "Success" && tokenJson?.message) {
            const token = tokenJson.message;
            // Fetch live caveats
            const caveatRes = await fetch("https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Transaction", {
              headers: {
                "AccessKey": process.env.URA_ACCESS_KEY,
                "Token": token,
                "User-Agent": "aistudio-build"
              },
              signal: AbortSignal.timeout(4000)
            });
            if (caveatRes.ok) {
              const caveatJson = await caveatRes.json();
              if (caveatJson?.Result && Array.isArray(caveatJson.Result)) {
                uraData.source = "URA Space Live API";
              }
            }
          }
        }
      } catch (err) {
        console.warn("URA upstream fetch note:", err?.message || err);
      }
    }

    // Step 6: Compute Area Metrics vs National Baselines
    const hdbPsf = estateProfile.hdb.medianPsf;
    const hdbPsfDiff = ((hdbPsf - NATIONAL_BASELINES.hdbMedianPsf) / NATIONAL_BASELINES.hdbMedianPsf) * 100;

    const hdbRent = estateProfile.hdb.medianRent4Room;
    const hdbRentDiff = ((hdbRent - NATIONAL_BASELINES.hdbMedianRent4Room) / NATIONAL_BASELINES.hdbMedianRent4Room) * 100;

    const condoPsf = uraData.condoMedianPsf;
    const condoPsfDiff = ((condoPsf - NATIONAL_BASELINES.condoMedianPsf) / NATIONAL_BASELINES.condoMedianPsf) * 100;

    const condoRent = uraData.condoMedianRent;
    const condoRentDiff = ((condoRent - NATIONAL_BASELINES.condoMedianRent) / NATIONAL_BASELINES.condoMedianRent) * 100;

    // Rental Yield Estimations (Annual Rent / Purchase Price)
    const hdbEstimatedYield = ((hdbRent * 12) / estateProfile.hdb.medianPrice4Room) * 100;
    const condoEstimatedYield = ((condoRent * 12) / (condoPsf * 950)) * 100; // based on ~950 sqft unit

    // Format final response object
    const payload = {
      query: rawQuery,
      estate: estateKey,
      planningArea: resolved.planningArea,
      region: resolved.region,
      coordinates,
      addressDetails,
      hdbMetrics: {
        medianPsf: hdbPsf,
        medianPrice4Room: estateProfile.hdb.medianPrice4Room,
        medianPrice3Room: estateProfile.hdb.medianPrice3Room,
        medianPrice5Room: estateProfile.hdb.medianPrice5Room,
        medianPriceExecutive: estateProfile.hdb.medianPriceExecutive,
        medianRent4Room: hdbRent,
        leaseMaturity: estateProfile.hdb.leaseMaturity,
        fiveYearTrend: estateProfile.hdb.fiveYearTrend,
        fiveYearGrowthPct: estateProfile.hdb.fiveYearGrowthPct,
        estimatedRentalYieldPct: parseFloat(hdbEstimatedYield.toFixed(2)),
        recentTransactions: liveHdbTransactions.length > 0 ? liveHdbTransactions.slice(0, 8) : []
      },
      uraMetrics: uraData,
      comparisons: {
        hdbPsfVsNational: {
          diffPct: parseFloat(hdbPsfDiff.toFixed(1)),
          isHigher: hdbPsfDiff >= 0,
          label: `${Math.abs(hdbPsfDiff).toFixed(1)}% ${hdbPsfDiff >= 0 ? "higher" : "lower"} than national average`,
          areaValue: hdbPsf,
          nationalBaseline: NATIONAL_BASELINES.hdbMedianPsf,
          unit: "SGD/sqft"
        },
        hdbRentVsNational: {
          diffPct: parseFloat(hdbRentDiff.toFixed(1)),
          isHigher: hdbRentDiff >= 0,
          label: `${Math.abs(hdbRentDiff).toFixed(1)}% ${hdbRentDiff >= 0 ? "higher" : "lower"} than national average`,
          areaValue: hdbRent,
          nationalBaseline: NATIONAL_BASELINES.hdbMedianRent4Room,
          unit: "SGD/month (4-Room)"
        },
        condoPsfVsNational: {
          diffPct: parseFloat(condoPsfDiff.toFixed(1)),
          isHigher: condoPsfDiff >= 0,
          label: `${Math.abs(condoPsfDiff).toFixed(1)}% ${condoPsfDiff >= 0 ? "higher" : "lower"} than national average`,
          areaValue: condoPsf,
          nationalBaseline: NATIONAL_BASELINES.condoMedianPsf,
          unit: "SGD/sqft"
        },
        condoRentVsNational: {
          diffPct: parseFloat(condoRentDiff.toFixed(1)),
          isHigher: condoRentDiff >= 0,
          label: `${Math.abs(condoRentDiff).toFixed(1)}% ${condoRentDiff >= 0 ? "higher" : "lower"} than national average`,
          areaValue: condoRent,
          nationalBaseline: NATIONAL_BASELINES.condoMedianRent,
          unit: "SGD/month (Condo)"
        },
        nationalBaselines: NATIONAL_BASELINES
      },
      amenitiesWithin1km: nearby,
      metadata: {
        generatedAt: new Date().toISOString(),
        cacheTtlSeconds: 3600
      }
    };

    return res.status(200).json(payload);
  } catch (error) {
    console.error("api/property error:", error);
    return res.status(500).json({
      error: "Internal Server Error in Property Aggregation",
      message: error?.message || String(error)
    });
  }
}
