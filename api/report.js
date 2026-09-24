/**
 * Standalone Vercel Serverless Function & Express Route Handler
 * api/report.js (ESM)
 * 
 * Powered by Google Gemini (@google/genai)
 * Generates an empathetic, jargon-free Singapore Buy vs Rent intelligence report.
 */

import { GoogleGenAI } from "@google/genai";

function generateSynthesizedReport(estate, hdbMetrics, uraMetrics, comparisons, amenitiesWithin1km, userPreferences) {
  const isHigherPsf = comparisons?.hdbPsfVsNational?.isHigher ?? false;
  const psfDiff = Math.abs(comparisons?.hdbPsfVsNational?.diffPct || 0);
  const rentDiff = Math.abs(comparisons?.hdbRentVsNational?.diffPct || 0);
  const schoolsCount = amenitiesWithin1km?.counts?.primarySchoolsCount || 0;
  const mrtsCount = amenitiesWithin1km?.counts?.mrtStationsCount || 0;

  const estimatedMortgage = Math.round((hdbMetrics.medianPrice4Room * 0.75 * 0.046) / 12);
  const monthlyRent = hdbMetrics.medianRent4Room;
  const buyScore = estimatedMortgage < monthlyRent ? 75 : 65;

  return {
    verdict: buyScore >= 70 ? "Buy" : "Lean Buy",
    verdictScore: buyScore,
    headline: `In ${estate}, buying builds long-term equity with monthly mortgage outlays comparable to open-market rent.`,
    executiveSummary: `${estate} is an established residential enclave offering high day-to-day convenience. Resale 4-room flats command a median price of SGD ${hdbMetrics.medianPrice4Room.toLocaleString()}, with historical 5-year capital appreciation of +${hdbMetrics.fiveYearGrowthPct}%. For young couples eligible for HDB housing grants and CPF Ordinary Account servicing, buying anchors your housing overhead while shielding against lease-renewal volatility.\n\nConversely, if your priority is preserving upfront cash reserves or waiting for an ongoing BTO queue, renting at approximately SGD ${monthlyRent.toLocaleString()}/month provides maximum flexibility without lock-in.`,
    affordabilityAssessment: `Resale PSF in ${estate} stands at SGD ${hdbMetrics.medianPsf}/sqft, which is ${psfDiff}% ${isHigherPsf ? "above" : "below"} the Singapore national median of SGD 585/sqft. While the sticker price reflects the location's prime positioning, a standard 75% loan-to-value mortgage equates to approximately SGD ${estimatedMortgage.toLocaleString()} per month, substantially covered by the combined monthly CPF contributions of a working couple.`,
    buyPros: [
      `Strong equity accumulation: Mortgage payments convert directly into home equity rather than unrecoverable rent.`,
      `Stable family nest: Immediate security with access to ${schoolsCount} primary school(s) within the critical MOE 1km boundary.`,
      `Convenient daily transit: ${mrtsCount > 0 ? `${mrtsCount} MRT station(s) within walking distance` : "Established bus and arterial links"} ensuring high rental desirability and capital retention.`
    ],
    buyCons: [
      `Initial capital outlay: Requires 25% downpayment (minimum 5% cash if bank loan, or 20% CPF/cash if HDB loan).`,
      `Lease tenure consideration: Note the remaining lease on older resale blocks to ensure long-term resale liquidity.`
    ],
    rentPros: [
      `Zero upfront downpayment burden: Keep liquidity free for career moves, weddings, or emergency investments.`,
      `Agile lifestyle: Test living in ${estate} before committing half a million dollars to a multi-decade loan.`
    ],
    rentCons: [
      `Pure expense: SGD ${monthlyRent.toLocaleString()} monthly rent yields zero equity or capital return.`,
      `Landlord dependency: Exposed to rent escalation and potential relocation at the end of each 1-2 year tenancy.`
    ],
    schoolAndFamilyAnalysis: schoolsCount > 0
      ? `With ${schoolsCount} primary school(s) located within 1 km (including ${amenitiesWithin1km.schools[0]?.name || "prominent neighborhood schools"}), parents enjoy significant priority during MOE Phase 2C balloting.`
      : `While there are no primary schools directly inside the 1km radius, reputable schools are situated within the wider 1-2 km perimeter.`,
    recommendation: `For young couples with stable CPF OA monthly contributions and planned stay duration over 5 years, BUYING is the more financially advantageous path. If waiting for BTO completion within 2 years, temporary renting is sensible.`,
    monthlyCashflowEstimate: {
      estimatedMonthlyMortgage: `~SGD ${estimatedMortgage.toLocaleString()}/mo (largely CPF OA serviceable)`,
      estimatedMonthlyRent: `~SGD ${monthlyRent.toLocaleString()}/mo (out-of-pocket cash)`,
      cashflowVerdict: "Mortgage payments build your asset column, whereas renting represents recurring cash outflow."
    }
  };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed. Use POST." });
  }

  // Guardrail Check: Check missing environment variable before calling upstream Gemini
  if (!process.env.GEMINI_API_KEY) {
    return res.status(503).json({
      error: "Service Unavailable: Missing GEMINI_API_KEY environment variable. Please ensure GEMINI_API_KEY is configured in your project settings."
    });
  }

  try {
    const {
      estate,
      planningArea,
      region,
      addressDetails,
      hdbMetrics,
      uraMetrics,
      comparisons,
      amenitiesWithin1km,
      userPreferences = {}
    } = req.body || {};

    if (!estate || !hdbMetrics) {
      return res.status(400).json({
        error: "Bad Request: Missing required property payload (estate or hdbMetrics)."
      });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });

    const primarySchoolsList = (amenitiesWithin1km?.schools || [])
      .map(s => `${s.name} (${s.distanceMeters}m away)`)
      .join(", ") || "None within 1km";

    const mrtsList = (amenitiesWithin1km?.mrts || [])
      .map(m => `${m.name} [${m.line}] (~${m.walkMinutes} min walk, ${m.distanceMeters}m)`)
      .join(", ") || "No direct MRT within 1km";

    const hawkersCount = amenitiesWithin1km?.counts?.hawkersCount ?? 0;
    const supermarketsCount = amenitiesWithin1km?.counts?.supermarketsCount ?? 0;
    const polyclinicsCount = amenitiesWithin1km?.counts?.polyclinicsCount ?? 0;

    const persona = userPreferences.persona || "Young Couple (First-Time Buyers)";
    const horizon = userPreferences.horizon || "5 to 10 years";

    const prompt = `
You are Singapore's leading Property Decision Co-Pilot, helping young couples, homebuyers, and renters evaluate whether to BUY or RENT in Singapore.
Your tone is empathetic, clear, objective, and free of real-estate jargon.

Location: ${estate} (${planningArea}, ${region} Region)
Address: ${addressDetails?.address || estate}
Target Persona: ${persona}
Horizon: ${horizon}
HDB Metrics:
- Resale Median PSF: SGD ${hdbMetrics.medianPsf}/sqft (${comparisons?.hdbPsfVsNational?.label || "N/A"})
- 4-Room Median Price: SGD ${hdbMetrics.medianPrice4Room.toLocaleString()}
- 3-Room: SGD ${hdbMetrics.medianPrice3Room.toLocaleString()} | 5-Room: SGD ${hdbMetrics.medianPrice5Room.toLocaleString()}
- 4-Room Median Rent: SGD ${hdbMetrics.medianRent4Room.toLocaleString()}/mo (${comparisons?.hdbRentVsNational?.label || "N/A"})
- 5-Year Capital Growth: +${hdbMetrics.fiveYearGrowthPct}% (vs national benchmark ${comparisons?.nationalBaselines?.fiveYearHdbGrowthPct}%)
- Estimated Yield: ${hdbMetrics.estimatedRentalYieldPct}%
- Lease Profile: ${hdbMetrics.leaseMaturity}

Private Property (URA Space):
- Condo Median PSF: SGD ${uraMetrics?.condoMedianPsf || "N/A"}/sqft
- Condo Median Rent: SGD ${uraMetrics?.condoMedianRent || "N/A"}/mo

Amenities within 1 km:
- MRT Stations: ${mrtsList}
- Primary Schools (MOE Phase 2C 1km Priority): ${primarySchoolsList}
- Daily Amenities: ${hawkersCount} Hawkers, ${supermarketsCount} Supermarkets, ${polyclinicsCount} Polyclinics within 1km.

Generate a JSON object with:
{
  "verdict": "Buy" | "Rent" | "Rent First, Buy Later",
  "verdictScore": number 1 to 100,
  "headline": "A punchy, empathetic summary verdict for the couple",
  "executiveSummary": "2-3 plain-English paragraphs analyzing this area.",
  "affordabilityAssessment": "Clear comparison of this area vs national Singapore averages, explaining CPF OA usage vs out-of-pocket rent.",
  "buyPros": ["3 specific advantages of buying here"],
  "buyCons": ["2 candid drawbacks of buying here"],
  "rentPros": ["2 advantages of renting here"],
  "rentCons": ["2 drawbacks of renting here"],
  "schoolAndFamilyAnalysis": "Impact of 1km primary school priority (MOE Phase 2C) on family planning and capital retention.",
  "recommendation": "Clear actionable verdict for young couples.",
  "monthlyCashflowEstimate": {
    "estimatedMonthlyMortgage": "e.g. ~SGD 2,500/mo (serviceable via CPF OA)",
    "estimatedMonthlyRent": "e.g. ~SGD 3,300/mo (out-of-pocket cash)",
    "cashflowVerdict": "Comparison between mortgage equity vs rent expenditure"
  }
}
Return ONLY valid JSON.
`;

    let reportData = null;
    let modelUsed = "gemini-3.8-flash";

    // Attempt generation with primary model gemini-3.8-flash
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      const text = response.text || "";
      reportData = JSON.parse(text.trim());
    } catch (primaryErr) {
      console.warn("Primary model gemini-3.8-flash notice:", primaryErr?.message || primaryErr);
      
      // Secondary attempt with gemini-3.1-flash-lite
      try {
        modelUsed = "gemini-3.1-flash-lite";
        const secondaryRes = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });
        const text = secondaryRes.text || "";
        reportData = JSON.parse(text.trim());
      } catch (secErr) {
        console.warn("Secondary model notice, applying rule-based synthesis:", secErr?.message || secErr);
        modelUsed = "synthesized_fallback";
        reportData = generateSynthesizedReport(
          estate,
          hdbMetrics,
          uraMetrics,
          comparisons,
          amenitiesWithin1km,
          userPreferences
        );
      }
    }

    return res.status(200).json({
      success: true,
      report: reportData,
      modelUsed,
      generatedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error("api/report error:", error);
    return res.status(500).json({
      error: "Internal Server Error in Report Generation",
      message: error?.message || String(error)
    });
  }
}
