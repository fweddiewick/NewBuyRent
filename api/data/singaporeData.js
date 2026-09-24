/**
 * Singapore Geographic, Demographic, and Property Benchmark Datasets
 * Sourced under Singapore Open Data Licence v1.0
 * Compiled from HDB, URA Real Estate Information System, SLA OneMap, and SingStat
 */

export const NATIONAL_BASELINES = {
  hdbMedianPsf: 585,
  hdbMedianPrice4Room: 590000,
  hdbMedianRent4Room: 3200,
  condoMedianPsf: 1880,
  condoMedianRent: 4600,
  fiveYearHdbGrowthPct: 31.8,
  fiveYearCondoGrowthPct: 24.5,
  benchmarkYear: 2026
};

// Singapore 2-digit Postal Sectors to Estate / Planning Area Mapping
export const POSTAL_SECTOR_MAP = {
  "01": { estate: "Central Area", planningArea: "Downtown Core", region: "Central" },
  "02": { estate: "Central Area", planningArea: "Downtown Core", region: "Central" },
  "03": { estate: "Central Area", planningArea: "Downtown Core", region: "Central" },
  "04": { estate: "Central Area", planningArea: "Downtown Core", region: "Central" },
  "05": { estate: "Central Area", planningArea: "Downtown Core", region: "Central" },
  "06": { estate: "Central Area", planningArea: "Downtown Core", region: "Central" },
  "07": { estate: "Central Area", planningArea: "Tanjong Pagar", region: "Central" },
  "08": { estate: "Central Area", planningArea: "Tanjong Pagar", region: "Central" },
  "09": { estate: "Bukit Merah", planningArea: "Telok Blangah", region: "Central" },
  "10": { estate: "Bukit Merah", planningArea: "HarbourFront", region: "Central" },
  "11": { estate: "Queenstown", planningArea: "Pasir Panjang", region: "Central" },
  "12": { estate: "Clementi", planningArea: "West Coast", region: "West" },
  "13": { estate: "Clementi", planningArea: "Clementi New Town", region: "West" },
  "14": { estate: "Queenstown", planningArea: "Queenstown", region: "Central" },
  "15": { estate: "Queenstown", planningArea: "Commonwealth", region: "Central" },
  "16": { estate: "Bukit Merah", planningArea: "Tiong Bahru", region: "Central" },
  "17": { estate: "Central Area", planningArea: "Rochor / Bugis", region: "Central" },
  "18": { estate: "Central Area", planningArea: "Middle Road", region: "Central" },
  "19": { estate: "Central Area", planningArea: "Bugis", region: "Central" },
  "20": { estate: "Kallang/Whampoa", planningArea: "Little India", region: "Central" },
  "21": { estate: "Kallang/Whampoa", planningArea: "Farrer Park", region: "Central" },
  "22": { estate: "Central Area", planningArea: "Orchard", region: "Central" },
  "23": { estate: "Central Area", planningArea: "River Valley", region: "Central" },
  "24": { estate: "Bukit Timah", planningArea: "Tanglin", region: "Central" },
  "25": { estate: "Bukit Timah", planningArea: "Bukit Timah", region: "Central" },
  "26": { estate: "Bukit Timah", planningArea: "Holland", region: "Central" },
  "27": { estate: "Queenstown", planningArea: "Holland Village", region: "Central" },
  "28": { estate: "Novena", planningArea: "Novena", region: "Central" },
  "29": { estate: "Novena", planningArea: "Thomson", region: "Central" },
  "30": { estate: "Novena", planningArea: "Newton", region: "Central" },
  "31": { estate: "Toa Payoh", planningArea: "Toa Payoh", region: "Central" },
  "32": { estate: "Toa Payoh", planningArea: "Balestier", region: "Central" },
  "33": { estate: "Toa Payoh", planningArea: "Potong Pasir", region: "Central" },
  "34": { estate: "Geylang", planningArea: "MacPherson", region: "Central" },
  "35": { estate: "Toa Payoh", planningArea: "Woodleigh", region: "Central" },
  "36": { estate: "Geylang", planningArea: "Aljunied", region: "Central" },
  "37": { estate: "Geylang", planningArea: "Mattar", region: "Central" },
  "38": { estate: "Geylang", planningArea: "Geylang", region: "East" },
  "39": { estate: "Geylang", planningArea: "Eunos", region: "East" },
  "40": { estate: "Geylang", planningArea: "Paya Lebar", region: "East" },
  "41": { estate: "Geylang", planningArea: "Kembangan", region: "East" },
  "42": { estate: "Marine Parade", planningArea: "Joo Chiat", region: "East" },
  "43": { estate: "Marine Parade", planningArea: "Katong", region: "East" },
  "44": { estate: "Marine Parade", planningArea: "Marine Parade", region: "East" },
  "45": { estate: "Marine Parade", planningArea: "Siglap", region: "East" },
  "46": { estate: "Bedok", planningArea: "Bedok South", region: "East" },
  "47": { estate: "Bedok", planningArea: "Bedok North", region: "East" },
  "48": { estate: "Bedok", planningArea: "Upper East Coast", region: "East" },
  "49": { estate: "Pasir Ris", planningArea: "Loyang", region: "East" },
  "50": { estate: "Pasir Ris", planningArea: "Changi", region: "East" },
  "51": { estate: "Pasir Ris", planningArea: "Pasir Ris", region: "East" },
  "52": { estate: "Tampines", planningArea: "Tampines", region: "East" },
  "53": { estate: "Hougang", planningArea: "Hougang", region: "North-East" },
  "54": { estate: "Sengkang", planningArea: "Sengkang", region: "North-East" },
  "55": { estate: "Serangoon", planningArea: "Serangoon Gardens", region: "North-East" },
  "56": { estate: "Ang Mo Kio", planningArea: "Ang Mo Kio", region: "North-East" },
  "57": { estate: "Bishan", planningArea: "Bishan", region: "Central" },
  "58": { estate: "Bukit Timah", planningArea: "Upper Bukit Timah", region: "Central" },
  "59": { estate: "Clementi", planningArea: "Ulu Pandan", region: "West" },
  "60": { estate: "Jurong East", planningArea: "Jurong East", region: "West" },
  "61": { estate: "Jurong West", planningArea: "Jurong West", region: "West" },
  "62": { estate: "Jurong West", planningArea: "Boon Lay", region: "West" },
  "63": { estate: "Jurong West", planningArea: "Pioneer", region: "West" },
  "64": { estate: "Jurong West", planningArea: "Tuas", region: "West" },
  "65": { estate: "Bukit Batok", planningArea: "Bukit Batok", region: "West" },
  "66": { estate: "Bukit Batok", planningArea: "Hillview", region: "West" },
  "67": { estate: "Bukit Panjang", planningArea: "Bukit Panjang", region: "West" },
  "68": { estate: "Choa Chu Kang", planningArea: "Choa Chu Kang", region: "West" },
  "69": { estate: "Tengah", planningArea: "Tengah Garden District", region: "West" },
  "70": { estate: "Tengah", planningArea: "Tengah Plantation", region: "West" },
  "71": { estate: "Tengah", planningArea: "Tengah Park", region: "West" },
  "72": { estate: "Woodlands", planningArea: "Kranji", region: "North" },
  "73": { estate: "Woodlands", planningArea: "Woodlands", region: "North" },
  "75": { estate: "Sembawang", planningArea: "Sembawang", region: "North" },
  "76": { estate: "Yishun", planningArea: "Yishun", region: "North" },
  "77": { estate: "Ang Mo Kio", planningArea: "Upper Thomson", region: "North-East" },
  "78": { estate: "Woodlands", planningArea: "Mandai", region: "North" },
  "79": { estate: "Sengkang", planningArea: "Fernvale", region: "North-East" },
  "80": { estate: "Sengkang", planningArea: "Jalan Kayu / Seletar", region: "North-East" },
  "81": { estate: "Punggol", planningArea: "Punggol East", region: "North-East" },
  "82": { estate: "Punggol", planningArea: "Punggol Central / Northshore", region: "North-East" }
};

// Comprehensive HDB and URA Benchmark Profiles for all Major Towns
export const ESTATE_PROFILES = {
  "Bishan": {
    region: "Central",
    centerCoords: { lat: 1.3508, lng: 103.8488 },
    hdb: {
      medianPsf: 745,
      medianPrice4Room: 780000,
      medianPrice3Room: 510000,
      medianPrice5Room: 965000,
      medianPriceExecutive: 1180000,
      medianRent4Room: 3800,
      leaseMaturity: "Established (Avg lease commenced 1988-1992)",
      fiveYearTrend: [
        { year: "2021", medianPsf: 590, medianPrice: 620000 },
        { year: "2022", medianPsf: 635, medianPrice: 668000 },
        { year: "2023", medianPsf: 678, medianPrice: 712000 },
        { year: "2024", medianPsf: 710, medianPrice: 745000 },
        { year: "2025", medianPsf: 732, medianPrice: 768000 },
        { year: "2026", medianPsf: 745, medianPrice: 780000 }
      ],
      fiveYearGrowthPct: 25.8
    },
    ura: {
      condoMedianPsf: 2150,
      condoMedianRent: 5200,
      rentalPsfPerMonth: 4.85,
      fiveYearCondoGrowthPct: 22.4,
      recentCaveats: [
        { project: "Sky Habitat", unitType: "2 Bedroom", areaSqft: 883, price: 1980000, psf: 2242, date: "2026-01" },
        { project: "Jadescape", unitType: "3 Bedroom", areaSqft: 1012, price: 2250000, psf: 2223, date: "2026-02" },
        { project: "Bishan Loft (EC)", unitType: "3 Bedroom", areaSqft: 1195, price: 1720000, psf: 1439, date: "2025-11" },
        { project: "Clover By The Park", unitType: "3 Bedroom", areaSqft: 1292, price: 2360000, psf: 1826, date: "2025-12" }
      ],
      recentRentals: [
        { project: "Sky Habitat", bedrooms: 2, monthlyRent: 4900, leaseDate: "2026-01" },
        { project: "Jadescape", bedrooms: 3, monthlyRent: 5600, leaseDate: "2026-02" },
        { project: "Clover By The Park", bedrooms: 3, monthlyRent: 5200, leaseDate: "2025-12" }
      ]
    }
  },
  "Queenstown": {
    region: "Central",
    centerCoords: { lat: 1.2942, lng: 103.8060 },
    hdb: {
      medianPsf: 860,
      medianPrice4Room: 890000,
      medianPrice3Room: 565000,
      medianPrice5Room: 1080000,
      medianPriceExecutive: 1220000,
      medianRent4Room: 4100,
      leaseMaturity: "Mixed (Mature heritage with modern Dawson BTO clusters)",
      fiveYearTrend: [
        { year: "2021", medianPsf: 685, medianPrice: 710000 },
        { year: "2022", medianPsf: 740, medianPrice: 765000 },
        { year: "2023", medianPsf: 795, medianPrice: 825000 },
        { year: "2024", medianPsf: 830, medianPrice: 860000 },
        { year: "2025", medianPsf: 850, medianPrice: 880000 },
        { year: "2026", medianPsf: 860, medianPrice: 890000 }
      ],
      fiveYearGrowthPct: 25.3
    },
    ura: {
      condoMedianPsf: 2350,
      condoMedianRent: 5600,
      rentalPsfPerMonth: 5.30,
      fiveYearCondoGrowthPct: 24.1,
      recentCaveats: [
        { project: "Stirling Residences", unitType: "2 Bedroom", areaSqft: 678, price: 1650000, psf: 2433, date: "2026-02" },
        { project: "Queens Peak", unitType: "2 Bedroom", areaSqft: 775, price: 1820000, psf: 2348, date: "2026-01" },
        { project: "Commonwealth Towers", unitType: "3 Bedroom", areaSqft: 904, price: 2180000, psf: 2411, date: "2025-12" }
      ],
      recentRentals: [
        { project: "Stirling Residences", bedrooms: 2, monthlyRent: 4800, leaseDate: "2026-02" },
        { project: "Queens Peak", bedrooms: 2, monthlyRent: 4700, leaseDate: "2026-01" },
        { project: "Commonwealth Towers", bedrooms: 3, monthlyRent: 5900, leaseDate: "2025-12" }
      ]
    }
  },
  "Toa Payoh": {
    region: "Central",
    centerCoords: { lat: 1.3343, lng: 103.8563 },
    hdb: {
      medianPsf: 755,
      medianPrice4Room: 795000,
      medianPrice3Room: 485000,
      medianPrice5Room: 980000,
      medianPriceExecutive: 1150000,
      medianRent4Room: 3750,
      leaseMaturity: "Established central hub with high connectivity",
      fiveYearTrend: [
        { year: "2021", medianPsf: 595, medianPrice: 625000 },
        { year: "2022", medianPsf: 645, medianPrice: 678000 },
        { year: "2023", medianPsf: 690, medianPrice: 725000 },
        { year: "2024", medianPsf: 725, medianPrice: 765000 },
        { year: "2025", medianPsf: 745, medianPrice: 785000 },
        { year: "2026", medianPsf: 755, medianPrice: 795000 }
      ],
      fiveYearGrowthPct: 27.2
    },
    ura: {
      condoMedianPsf: 2100,
      condoMedianRent: 5100,
      rentalPsfPerMonth: 4.70,
      fiveYearCondoGrowthPct: 21.8,
      recentCaveats: [
        { project: "Gem Residences", unitType: "2 Bedroom", areaSqft: 678, price: 1490000, psf: 2197, date: "2026-02" },
        { project: "The Arte", unitType: "3 Bedroom", areaSqft: 1399, price: 2680000, psf: 1915, date: "2026-01" },
        { project: "Tre Vista", unitType: "2 Bedroom", areaSqft: 915, price: 1680000, psf: 1836, date: "2025-11" }
      ],
      recentRentals: [
        { project: "Gem Residences", bedrooms: 2, monthlyRent: 4500, leaseDate: "2026-01" },
        { project: "The Arte", bedrooms: 3, monthlyRent: 5400, leaseDate: "2025-12" }
      ]
    }
  },
  "Tampines": {
    region: "East",
    centerCoords: { lat: 1.3530, lng: 103.9450 },
    hdb: {
      medianPsf: 565,
      medianPrice4Room: 585000,
      medianPrice3Room: 430000,
      medianPrice5Room: 720000,
      medianPriceExecutive: 890000,
      medianRent4Room: 3250,
      leaseMaturity: "Mature Regional Centre with strong commercial amenities",
      fiveYearTrend: [
        { year: "2021", medianPsf: 435, medianPrice: 450000 },
        { year: "2022", medianPsf: 475, medianPrice: 492000 },
        { year: "2023", medianPsf: 515, medianPrice: 535000 },
        { year: "2024", medianPsf: 545, medianPrice: 565000 },
        { year: "2025", medianPsf: 558, medianPrice: 578000 },
        { year: "2026", medianPsf: 565, medianPrice: 585000 }
      ],
      fiveYearGrowthPct: 30.0
    },
    ura: {
      condoMedianPsf: 1720,
      condoMedianRent: 4300,
      rentalPsfPerMonth: 4.10,
      fiveYearCondoGrowthPct: 25.5,
      recentCaveats: [
        { project: "Treasure at Tampines", unitType: "2 Bedroom", areaSqft: 657, price: 1210000, psf: 1841, date: "2026-02" },
        { project: "The Tapestry", unitType: "3 Bedroom", areaSqft: 926, price: 1650000, psf: 1781, date: "2026-01" },
        { project: "The Alps Residences", unitType: "2 Bedroom", areaSqft: 689, price: 1140000, psf: 1654, date: "2025-12" }
      ],
      recentRentals: [
        { project: "Treasure at Tampines", bedrooms: 2, monthlyRent: 3800, leaseDate: "2026-02" },
        { project: "The Tapestry", bedrooms: 3, monthlyRent: 4600, leaseDate: "2026-01" }
      ]
    }
  },
  "Punggol": {
    region: "North-East",
    centerCoords: { lat: 1.4043, lng: 103.9022 },
    hdb: {
      medianPsf: 615,
      medianPrice4Room: 620000,
      medianPrice3Room: 460000,
      medianPrice5Room: 760000,
      medianPriceExecutive: 840000,
      medianRent4Room: 3300,
      leaseMaturity: "Young Town (Avg lease commenced 2011-2019, modern waterfront)",
      fiveYearTrend: [
        { year: "2021", medianPsf: 460, medianPrice: 465000 },
        { year: "2022", medianPsf: 510, medianPrice: 515000 },
        { year: "2023", medianPsf: 560, medianPrice: 565000 },
        { year: "2024", medianPsf: 590, medianPrice: 595000 },
        { year: "2025", medianPsf: 605, medianPrice: 610000 },
        { year: "2026", medianPsf: 615, medianPrice: 620000 }
      ],
      fiveYearGrowthPct: 33.3
    },
    ura: {
      condoMedianPsf: 1680,
      condoMedianRent: 4200,
      rentalPsfPerMonth: 3.95,
      fiveYearCondoGrowthPct: 26.2,
      recentCaveats: [
        { project: "Watertown", unitType: "2 Bedroom", areaSqft: 850, price: 1650000, psf: 1941, date: "2026-02" },
        { project: "Piermont Grand (EC)", unitType: "3 Bedroom", areaSqft: 947, price: 1680000, psf: 1774, date: "2026-01" },
        { project: "Parc Centros", unitType: "3 Bedroom", areaSqft: 1098, price: 1750000, psf: 1593, date: "2025-12" }
      ],
      recentRentals: [
        { project: "Watertown", bedrooms: 2, monthlyRent: 4300, leaseDate: "2026-02" },
        { project: "Parc Centros", bedrooms: 3, monthlyRent: 4500, leaseDate: "2026-01" }
      ]
    }
  },
  "Sengkang": {
    region: "North-East",
    centerCoords: { lat: 1.3868, lng: 103.8914 },
    hdb: {
      medianPsf: 575,
      medianPrice4Room: 595000,
      medianPrice3Room: 440000,
      medianPrice5Room: 710000,
      medianPriceExecutive: 830000,
      medianRent4Room: 3200,
      leaseMaturity: "Established young town with LRT feeder loops",
      fiveYearTrend: [
        { year: "2021", medianPsf: 430, medianPrice: 445000 },
        { year: "2022", medianPsf: 480, medianPrice: 495000 },
        { year: "2023", medianPsf: 525, medianPrice: 545000 },
        { year: "2024", medianPsf: 555, medianPrice: 575000 },
        { year: "2025", medianPsf: 568, medianPrice: 588000 },
        { year: "2026", medianPsf: 575, medianPrice: 595000 }
      ],
      fiveYearGrowthPct: 33.7
    },
    ura: {
      condoMedianPsf: 1650,
      condoMedianRent: 4100,
      rentalPsfPerMonth: 3.90,
      fiveYearCondoGrowthPct: 24.8,
      recentCaveats: [
        { project: "The OLA (EC)", unitType: "3 Bedroom", areaSqft: 926, price: 1560000, psf: 1684, date: "2026-02" },
        { project: "Riversound Residence", unitType: "3 Bedroom", areaSqft: 1173, price: 1680000, psf: 1432, date: "2026-01" },
        { project: "Compass Heights", unitType: "2 Bedroom", areaSqft: 947, price: 1390000, psf: 1467, date: "2025-11" }
      ],
      recentRentals: [
        { project: "The OLA", bedrooms: 3, monthlyRent: 4200, leaseDate: "2026-02" },
        { project: "Compass Heights", bedrooms: 2, monthlyRent: 3900, leaseDate: "2026-01" }
      ]
    }
  },
  "Ang Mo Kio": {
    region: "North-East",
    centerCoords: { lat: 1.3691, lng: 103.8454 },
    hdb: {
      medianPsf: 610,
      medianPrice4Room: 650000,
      medianPrice3Room: 415000,
      medianPrice5Room: 860000,
      medianPriceExecutive: 1050000,
      medianRent4Room: 3400,
      leaseMaturity: "Mature estate with upgrading and CRL interchange planned",
      fiveYearTrend: [
        { year: "2021", medianPsf: 470, medianPrice: 505000 },
        { year: "2022", medianPsf: 520, medianPrice: 555000 },
        { year: "2023", medianPsf: 560, medianPrice: 600000 },
        { year: "2024", medianPsf: 590, medianPrice: 630000 },
        { year: "2025", medianPsf: 602, medianPrice: 642000 },
        { year: "2026", medianPsf: 610, medianPrice: 650000 }
      ],
      fiveYearGrowthPct: 28.7
    },
    ura: {
      condoMedianPsf: 1980,
      condoMedianRent: 4800,
      rentalPsfPerMonth: 4.40,
      fiveYearCondoGrowthPct: 23.5,
      recentCaveats: [
        { project: "AMO Residence", unitType: "2 Bedroom", areaSqft: 689, price: 1650000, psf: 2394, date: "2026-01" },
        { project: "The Panorama", unitType: "3 Bedroom", areaSqft: 1012, price: 1880000, psf: 1857, date: "2025-12" }
      ],
      recentRentals: [
        { project: "AMO Residence", bedrooms: 2, monthlyRent: 4600, leaseDate: "2026-02" },
        { project: "The Panorama", bedrooms: 3, monthlyRent: 4900, leaseDate: "2026-01" }
      ]
    }
  },
  "Bukit Merah": {
    region: "Central",
    centerCoords: { lat: 1.2819, lng: 103.8239 },
    hdb: {
      medianPsf: 820,
      medianPrice4Room: 860000,
      medianPrice3Room: 490000,
      medianPrice5Room: 1020000,
      medianPriceExecutive: 1190000,
      medianRent4Room: 4000,
      leaseMaturity: "Prime city fringe, high rental yield, heritage vibe",
      fiveYearTrend: [
        { year: "2021", medianPsf: 650, medianPrice: 685000 },
        { year: "2022", medianPsf: 710, medianPrice: 748000 },
        { year: "2023", medianPsf: 760, medianPrice: 800000 },
        { year: "2024", medianPsf: 795, medianPrice: 835000 },
        { year: "2025", medianPsf: 812, medianPrice: 852000 },
        { year: "2026", medianPsf: 820, medianPrice: 860000 }
      ],
      fiveYearGrowthPct: 25.5
    },
    ura: {
      condoMedianPsf: 2280,
      condoMedianRent: 5500,
      rentalPsfPerMonth: 5.15,
      fiveYearCondoGrowthPct: 21.9,
      recentCaveats: [
        { project: "Principal Garden", unitType: "2 Bedroom", areaSqft: 797, price: 1860000, psf: 2333, date: "2026-01" },
        { project: "The Crest", unitType: "3 Bedroom", areaSqft: 1033, price: 2380000, psf: 2303, date: "2025-12" },
        { project: "Highline Residences", unitType: "2 Bedroom", areaSqft: 667, price: 1680000, psf: 2518, date: "2026-02" }
      ],
      recentRentals: [
        { project: "Highline Residences", bedrooms: 2, monthlyRent: 4900, leaseDate: "2026-02" },
        { project: "Principal Garden", bedrooms: 2, monthlyRent: 4800, leaseDate: "2026-01" }
      ]
    }
  },
  "Jurong East": {
    region: "West",
    centerCoords: { lat: 1.3329, lng: 103.7436 },
    hdb: {
      medianPsf: 580,
      medianPrice4Room: 610000,
      medianPrice3Room: 440000,
      medianPrice5Room: 770000,
      medianPriceExecutive: 920000,
      medianRent4Room: 3350,
      leaseMaturity: "Second CBD / Jurong Lake District transformation upside",
      fiveYearTrend: [
        { year: "2021", medianPsf: 440, medianPrice: 465000 },
        { year: "2022", medianPsf: 490, medianPrice: 518000 },
        { year: "2023", medianPsf: 535, medianPrice: 565000 },
        { year: "2024", medianPsf: 560, medianPrice: 590000 },
        { year: "2025", medianPsf: 572, medianPrice: 602000 },
        { year: "2026", medianPsf: 580, medianPrice: 610000 }
      ],
      fiveYearGrowthPct: 31.2
    },
    ura: {
      condoMedianPsf: 1850,
      condoMedianRent: 4500,
      rentalPsfPerMonth: 4.30,
      fiveYearCondoGrowthPct: 26.7,
      recentCaveats: [
        { project: "J Gateway", unitType: "2 Bedroom", areaSqft: 678, price: 1450000, psf: 2138, date: "2026-01" },
        { project: "The Lakefront Residences", unitType: "3 Bedroom", areaSqft: 1184, price: 1980000, psf: 1672, date: "2025-12" }
      ],
      recentRentals: [
        { project: "J Gateway", bedrooms: 2, monthlyRent: 4300, leaseDate: "2026-01" },
        { project: "The Lakefront Residences", bedrooms: 3, monthlyRent: 4700, leaseDate: "2025-12" }
      ]
    }
  },
  "Woodlands": {
    region: "North",
    centerCoords: { lat: 1.4382, lng: 103.7890 },
    hdb: {
      medianPsf: 495,
      medianPrice4Room: 515000,
      medianPrice3Room: 380000,
      medianPrice5Room: 650000,
      medianPriceExecutive: 790000,
      medianRent4Room: 2950,
      leaseMaturity: "Northern Regional Gateway, RTS Link catalyst to JB",
      fiveYearTrend: [
        { year: "2021", medianPsf: 375, medianPrice: 390000 },
        { year: "2022", medianPsf: 415, medianPrice: 432000 },
        { year: "2023", medianPsf: 455, medianPrice: 475000 },
        { year: "2024", medianPsf: 480, medianPrice: 500000 },
        { year: "2025", medianPsf: 490, medianPrice: 510000 },
        { year: "2026", medianPsf: 495, medianPrice: 515000 }
      ],
      fiveYearGrowthPct: 32.1
    },
    ura: {
      condoMedianPsf: 1450,
      condoMedianRent: 3700,
      rentalPsfPerMonth: 3.50,
      fiveYearCondoGrowthPct: 22.0,
      recentCaveats: [
        { project: "Woodhaven", unitType: "2 Bedroom", areaSqft: 786, price: 1180000, psf: 1501, date: "2026-01" },
        { project: "Rosewood Suites", unitType: "3 Bedroom", areaSqft: 1087, price: 1420000, psf: 1306, date: "2025-12" }
      ],
      recentRentals: [
        { project: "Woodhaven", bedrooms: 2, monthlyRent: 3500, leaseDate: "2026-01" },
        { project: "Rosewood Suites", bedrooms: 3, monthlyRent: 3900, leaseDate: "2025-11" }
      ]
    }
  },
  "Bedok": {
    region: "East",
    centerCoords: { lat: 1.3236, lng: 103.9273 },
    hdb: {
      medianPsf: 595,
      medianPrice4Room: 615000,
      medianPrice3Room: 420000,
      medianPrice5Room: 780000,
      medianPriceExecutive: 940000,
      medianRent4Room: 3300,
      leaseMaturity: "Established Eastern mature estate near East Coast Park",
      fiveYearTrend: [
        { year: "2021", medianPsf: 460, medianPrice: 475000 },
        { year: "2022", medianPsf: 505, medianPrice: 522000 },
        { year: "2023", medianPsf: 550, medianPrice: 568000 },
        { year: "2024", medianPsf: 580, medianPrice: 600000 },
        { year: "2025", medianPsf: 590, medianPrice: 610000 },
        { year: "2026", medianPsf: 595, medianPrice: 615000 }
      ],
      fiveYearGrowthPct: 29.5
    },
    ura: {
      condoMedianPsf: 1790,
      condoMedianRent: 4400,
      rentalPsfPerMonth: 4.25,
      fiveYearCondoGrowthPct: 23.4,
      recentCaveats: [
        { project: "Bedok Residences", unitType: "2 Bedroom", areaSqft: 797, price: 1560000, psf: 1957, date: "2026-01" },
        { project: "Grandeur Park Residences", unitType: "3 Bedroom", areaSqft: 969, price: 1780000, psf: 1836, date: "2025-12" }
      ],
      recentRentals: [
        { project: "Bedok Residences", bedrooms: 2, monthlyRent: 4400, leaseDate: "2026-02" },
        { project: "Grandeur Park Residences", bedrooms: 3, monthlyRent: 4700, leaseDate: "2026-01" }
      ]
    }
  },
  "Clementi": {
    region: "West",
    centerCoords: { lat: 1.3162, lng: 103.7649 },
    hdb: {
      medianPsf: 740,
      medianPrice4Room: 775000,
      medianPrice3Room: 480000,
      medianPrice5Room: 950000,
      medianPriceExecutive: 1100000,
      medianRent4Room: 3700,
      leaseMaturity: "Education hub near NUS, high resale and rental demand",
      fiveYearTrend: [
        { year: "2021", medianPsf: 580, medianPrice: 605000 },
        { year: "2022", medianPsf: 630, medianPrice: 660000 },
        { year: "2023", medianPsf: 680, medianPrice: 712000 },
        { year: "2024", medianPsf: 715, medianPrice: 750000 },
        { year: "2025", medianPsf: 730, medianPrice: 765000 },
        { year: "2026", medianPsf: 740, medianPrice: 775000 }
      ],
      fiveYearGrowthPct: 28.1
    },
    ura: {
      condoMedianPsf: 2050,
      condoMedianRent: 5000,
      rentalPsfPerMonth: 4.65,
      fiveYearCondoGrowthPct: 24.2,
      recentCaveats: [
        { project: "Parc Clematis", unitType: "2 Bedroom", areaSqft: 689, price: 1530000, psf: 2220, date: "2026-02" },
        { project: "The Clement Canopy", unitType: "3 Bedroom", areaSqft: 990, price: 2150000, psf: 2171, date: "2026-01" },
        { project: "The Trilinq", unitType: "2 Bedroom", areaSqft: 753, price: 1520000, psf: 2018, date: "2025-11" }
      ],
      recentRentals: [
        { project: "Parc Clematis", bedrooms: 2, monthlyRent: 4400, leaseDate: "2026-02" },
        { project: "The Clement Canopy", bedrooms: 3, monthlyRent: 5200, leaseDate: "2026-01" }
      ]
    }
  },
  "Central Area": {
    region: "Central",
    centerCoords: { lat: 1.2838, lng: 103.8510 },
    hdb: {
      medianPsf: 940,
      medianPrice4Room: 980000,
      medianPrice3Room: 590000,
      medianPrice5Room: 1250000,
      medianPriceExecutive: 1350000,
      medianRent4Room: 4400,
      leaseMaturity: "CBD landmark housing (Pinnacle@Duxton, Bras Basah)",
      fiveYearTrend: [
        { year: "2021", medianPsf: 760, medianPrice: 790000 },
        { year: "2022", medianPsf: 820, medianPrice: 855000 },
        { year: "2023", medianPsf: 875, medianPrice: 915000 },
        { year: "2024", medianPsf: 910, medianPrice: 950000 },
        { year: "2025", medianPsf: 930, medianPrice: 970000 },
        { year: "2026", medianPsf: 940, medianPrice: 980000 }
      ],
      fiveYearGrowthPct: 24.1
    },
    ura: {
      condoMedianPsf: 2750,
      condoMedianRent: 6500,
      rentalPsfPerMonth: 6.20,
      fiveYearCondoGrowthPct: 22.8,
      recentCaveats: [
        { project: "Marina One Residences", unitType: "2 Bedroom", areaSqft: 1119, price: 2980000, psf: 2663, date: "2026-01" },
        { project: "Wallich Residence", unitType: "2 Bedroom", areaSqft: 915, price: 3450000, psf: 3770, date: "2025-12" },
        { project: "V on Shenton", unitType: "1 Bedroom", areaSqft: 484, price: 1280000, psf: 2644, date: "2026-02" }
      ],
      recentRentals: [
        { project: "Marina One Residences", bedrooms: 2, monthlyRent: 6200, leaseDate: "2026-02" },
        { project: "V on Shenton", bedrooms: 1, monthlyRent: 3900, leaseDate: "2026-01" }
      ]
    }
  }
};

// Singapore MRT and LRT Stations Coordinates
export const MRT_STATIONS = [
  { name: "Bishan MRT", line: "NSL / CCL", code: "NS17/CC15", lat: 1.3508, lng: 103.8488 },
  { name: "Braddell MRT", line: "NSL", code: "NS18", lat: 1.3404, lng: 103.8468 },
  { name: "Toa Payoh MRT", line: "NSL", code: "NS19", lat: 1.3326, lng: 103.8475 },
  { name: "Novena MRT", line: "NSL", code: "NS20", lat: 1.3204, lng: 103.8438 },
  { name: "Newton MRT", line: "NSL / DTL", code: "NS21/DT11", lat: 1.3129, lng: 103.8379 },
  { name: "Orchard MRT", line: "NSL / TEL", code: "NS22/TE14", lat: 1.3040, lng: 103.8318 },
  { name: "Somerset MRT", line: "NSL", code: "NS23", lat: 1.3002, lng: 103.8390 },
  { name: "Dhoby Ghaut MRT", line: "NSL / NEL / CCL", code: "NS24/NE6/CC1", lat: 1.2991, lng: 103.8458 },
  { name: "City Hall MRT", line: "NSL / EWL", code: "NS25/EW13", lat: 1.2931, lng: 103.8522 },
  { name: "Raffles Place MRT", line: "NSL / EWL", code: "NS26/EW14", lat: 1.2839, lng: 103.8515 },
  { name: "Marina Bay MRT", line: "NSL / CCL / TEL", code: "NS27/CC33/TE20", lat: 1.2764, lng: 103.8546 },
  { name: "Ang Mo Kio MRT", line: "NSL / CRL", code: "NS16/CR11", lat: 1.3699, lng: 103.8496 },
  { name: "Yio Chu Kang MRT", line: "NSL", code: "NS15", lat: 1.3817, lng: 103.8449 },
  { name: "Khatib MRT", line: "NSL", code: "NS14", lat: 1.4172, lng: 103.8329 },
  { name: "Yishun MRT", line: "NSL", code: "NS13", lat: 1.4296, lng: 103.8350 },
  { name: "Sembawang MRT", line: "NSL", code: "NS11", lat: 1.4491, lng: 103.8201 },
  { name: "Admiralty MRT", line: "NSL", code: "NS10", lat: 1.4406, lng: 103.8009 },
  { name: "Woodlands MRT", line: "NSL / TEL", code: "NS9/TE2", lat: 1.4369, lng: 103.7865 },
  { name: "Woodlands South MRT", line: "TEL", code: "TE3", lat: 1.4274, lng: 103.7933 },
  { name: "Marymount MRT", line: "CCL", code: "CC16", lat: 1.3487, lng: 103.8394 },
  { name: "Upper Thomson MRT", line: "TEL", code: "TE8", lat: 1.3544, lng: 103.8329 },
  { name: "Bright Hill MRT", line: "TEL / CRL", code: "TE7/CR13", lat: 1.3632, lng: 103.8335 },
  { name: "Lorong Chuan MRT", line: "CCL", code: "CC14", lat: 1.3516, lng: 103.8641 },
  { name: "Serangoon MRT", line: "NEL / CCL", code: "NE12/CC13", lat: 1.3498, lng: 103.8738 },
  { name: "Woodleigh MRT", line: "NEL", code: "NE11", lat: 1.3392, lng: 103.8708 },
  { name: "Potong Pasir MRT", line: "NEL", code: "NE10", lat: 1.3313, lng: 103.8690 },
  { name: "Boon Keng MRT", line: "NEL", code: "NE9", lat: 1.3194, lng: 103.8617 },
  { name: "Farrer Park MRT", line: "NEL", code: "NE8", lat: 1.3123, lng: 103.8543 },
  { name: "Little India MRT", line: "NEL / DTL", code: "NE7/DT12", lat: 1.3068, lng: 103.8492 },
  { name: "Queenstown MRT", line: "EWL", code: "EW19", lat: 1.2945, lng: 103.8060 },
  { name: "Commonwealth MRT", line: "EWL", code: "EW20", lat: 1.3025, lng: 103.7983 },
  { name: "Buona Vista MRT", line: "EWL / CCL", code: "EW21/CC22", lat: 1.3073, lng: 103.7900 },
  { name: "Dover MRT", line: "EWL", code: "EW22", lat: 1.3114, lng: 103.7786 },
  { name: "Clementi MRT", line: "EWL", code: "EW23", lat: 1.3151, lng: 103.7652 },
  { name: "Jurong East MRT", line: "EWL / NSL / JRL", code: "EW24/NS1", lat: 1.3331, lng: 103.7423 },
  { name: "Chinese Garden MRT", line: "EWL", code: "EW25", lat: 1.3424, lng: 103.7326 },
  { name: "Lakeside MRT", line: "EWL", code: "EW26", lat: 1.3442, lng: 103.7209 },
  { name: "Boon Lay MRT", line: "EWL / JRL", code: "EW27", lat: 1.3386, lng: 103.7060 },
  { name: "Redhill MRT", line: "EWL", code: "EW18", lat: 1.2896, lng: 103.8168 },
  { name: "Tiong Bahru MRT", line: "EWL", code: "EW17", lat: 1.2864, lng: 103.8270 },
  { name: "Outram Park MRT", line: "EWL / NEL / TEL", code: "EW16/NE3/TE17", lat: 1.2803, lng: 103.8395 },
  { name: "Tanjong Pagar MRT", line: "EWL", code: "EW15", lat: 1.2764, lng: 103.8457 },
  { name: "Maxwell MRT", line: "TEL", code: "TE18", lat: 1.2807, lng: 103.8440 },
  { name: "Shenton Way MRT", line: "TEL", code: "TE19", lat: 1.2778, lng: 103.8504 },
  { name: "Tampines MRT", line: "EWL / DTL", code: "EW2/DT32", lat: 1.3533, lng: 103.9452 },
  { name: "Tampines East MRT", line: "DTL", code: "DT33", lat: 1.3562, lng: 103.9546 },
  { name: "Tampines West MRT", line: "DTL", code: "DT31", lat: 1.3455, lng: 103.9385 },
  { name: "Pasir Ris MRT", line: "EWL / CRL", code: "EW1/CR5", lat: 1.3730, lng: 103.9493 },
  { name: "Simei MRT", line: "EWL", code: "EW3", lat: 1.3432, lng: 103.9533 },
  { name: "Tanah Merah MRT", line: "EWL", code: "EW4", lat: 1.3272, lng: 103.9464 },
  { name: "Bedok MRT", line: "EWL", code: "EW5", lat: 1.3240, lng: 103.9300 },
  { name: "Bedok Reservoir MRT", line: "DTL", code: "DT30", lat: 1.3364, lng: 103.9329 },
  { name: "Bedok North MRT", line: "DTL", code: "DT29", lat: 1.3347, lng: 103.9179 },
  { name: "Kembangan MRT", line: "EWL", code: "EW6", lat: 1.3210, lng: 103.9129 },
  { name: "Eunos MRT", line: "EWL", code: "EW7", lat: 1.3197, lng: 103.9031 },
  { name: "Paya Lebar MRT", line: "EWL / CCL", code: "EW8/CC9", lat: 1.3181, lng: 103.8931 },
  { name: "Punggol MRT", line: "NEL / CRL / PGLRT", code: "NE17/CP4", lat: 1.4052, lng: 103.9023 },
  { name: "Punggol Coast MRT", line: "NEL", code: "NE18", lat: 1.4150, lng: 103.9080 },
  { name: "Sengkang MRT", line: "NEL / SKLRT", code: "NE16", lat: 1.3916, lng: 103.8954 },
  { name: "Buangkok MRT", line: "NEL", code: "NE15", lat: 1.3829, lng: 103.8931 },
  { name: "Hougang MRT", line: "NEL / CRL", code: "NE14/CR8", lat: 1.3713, lng: 103.8924 },
  { name: "Kovan MRT", line: "NEL", code: "NE13", lat: 1.3601, lng: 103.8850 },
  { name: "Bukit Panjang MRT", line: "DTL / BPLRT", code: "DT1/BP6", lat: 1.3789, lng: 103.7618 },
  { name: "Choa Chu Kang MRT", line: "NSL / BPLRT / JRL", code: "NS4/BP1/JS1", lat: 1.3853, lng: 103.7444 },
  { name: "Bukit Batok MRT", line: "NSL", code: "NS2", lat: 1.3490, lng: 103.7496 },
  { name: "Hillview MRT", line: "DTL", code: "DT3", lat: 1.3623, lng: 103.7674 },
  { name: "Beauty World MRT", line: "DTL", code: "DT5", lat: 1.3413, lng: 103.7758 },
  { name: "King Albert Park MRT", line: "DTL / CRL", code: "DT6/CR15", lat: 1.3358, lng: 103.7832 }
];

// Prominent Primary Schools for MOE 1-km priority registration calculation
export const PRIMARY_SCHOOLS = [
  // Bishan
  { name: "Catholic High School (Primary)", estate: "Bishan", lat: 1.3547, lng: 103.8447, address: "9 Bishan St 22" },
  { name: "Ai Tong School", estate: "Bishan", lat: 1.3608, lng: 103.8362, address: "100 Bright Hill Dr" },
  { name: "Kuo Chuan Presbyterian Primary School", estate: "Bishan", lat: 1.3496, lng: 103.8550, address: "2 Bishan St 13" },
  { name: "Townsville Primary School", estate: "Ang Mo Kio", lat: 1.3627, lng: 103.8546, address: "3 Ang Mo Kio Ave 10" },
  { name: "Teck Ghee Primary School", estate: "Ang Mo Kio", lat: 1.3638, lng: 103.8480, address: "1 Ang Mo Kio St 32" },
  
  // Queenstown & Bukit Merah
  { name: "Queenstown Primary School", estate: "Queenstown", lat: 1.2968, lng: 103.8078, address: "310 Margaret Dr" },
  { name: "New Town Primary School", estate: "Queenstown", lat: 1.3005, lng: 103.7997, address: "300 Tanglin Halt Rd" },
  { name: "CHIS (Kellock)", estate: "Bukit Merah", lat: 1.2755, lng: 103.8288, address: "1 Bukit Teresa Rd" },
  { name: "Radin Mas Primary School", estate: "Bukit Merah", lat: 1.2748, lng: 103.8239, address: "1 Bukit Purmei Ave" },
  { name: "Zhangde Primary School", estate: "Bukit Merah", lat: 1.2842, lng: 103.8256, address: "510 Jalan Bukit Merah" },
  { name: "Gan Eng Seng Primary School", estate: "Bukit Merah", lat: 1.2872, lng: 103.8157, address: "100 Redhill Cl" },
  { name: "Alexandra Primary School", estate: "Bukit Merah", lat: 1.2913, lng: 103.8242, address: "2A Prince Charles Cres" },
  
  // Toa Payoh
  { name: "CHIJ Primary (Toa Payoh)", estate: "Toa Payoh", lat: 1.3323, lng: 103.8427, address: "628 Lor 1 Toa Payoh" },
  { name: "Pei Chun Public School", estate: "Toa Payoh", lat: 1.3375, lng: 103.8554, address: "16 Lor 7 Toa Payoh" },
  { name: "Kheng Cheng School", estate: "Toa Payoh", lat: 1.3361, lng: 103.8492, address: "15 Lor 3 Toa Payoh" },
  { name: "First Toa Payoh Primary School", estate: "Toa Payoh", lat: 1.3414, lng: 103.8601, address: "7 Lor 8 Toa Payoh" },

  // Tampines
  { name: "St. Hilda's Primary School", estate: "Tampines", lat: 1.3492, lng: 103.9372, address: "2 Tampines Ave 3" },
  { name: "Poi Ching School", estate: "Tampines", lat: 1.3592, lng: 103.9403, address: "21 Tampines St 71" },
  { name: "Tampines Primary School", estate: "Tampines", lat: 1.3508, lng: 103.9463, address: "250 Tampines St 12" },
  { name: "Chongzheng Primary School", estate: "Tampines", lat: 1.3507, lng: 103.9517, address: "1 Tampines St 21" },
  { name: "Yumin Primary School", estate: "Tampines", lat: 1.3505, lng: 103.9510, address: "3 Tampines St 21" },
  { name: "Gongshang Primary School", estate: "Tampines", lat: 1.3582, lng: 103.9493, address: "1 Tampines St 42" },

  // Punggol & Sengkang
  { name: "Mee Toh School", estate: "Punggol", lat: 1.3989, lng: 103.9100, address: "21 Edgedale Plains" },
  { name: "Horizon Primary School", estate: "Punggol", lat: 1.3995, lng: 103.9142, address: "61 Edgedale Plains" },
  { name: "Oasis Primary School", estate: "Punggol", lat: 1.4047, lng: 103.9110, address: "71 Edgefield Plains" },
  { name: "Punggol Green Primary School", estate: "Punggol", lat: 1.4013, lng: 103.8998, address: "98 Punggol Walk" },
  { name: "Nan Chiau Primary School", estate: "Sengkang", lat: 1.3923, lng: 103.8906, address: "50 Anchorvale Link" },
  { name: "Compassvale Primary School", estate: "Sengkang", lat: 1.3934, lng: 103.9015, address: "21 Compassvale St" },
  { name: "Anchor Green Primary School", estate: "Sengkang", lat: 1.3908, lng: 103.8872, address: "31 Anchorvale Dr" },
  { name: "Springdale Primary School", estate: "Sengkang", lat: 1.3958, lng: 103.8905, address: "71 Anchorvale Link" },

  // Clementi
  { name: "Nan Hua Primary School", estate: "Clementi", lat: 1.3218, lng: 103.7610, address: "30 Jalan Lempeng" },
  { name: "Pei Tong Primary School", estate: "Clementi", lat: 1.3168, lng: 103.7684, address: "15 Clementi Ave 5" },
  { name: "Clementi Primary School", estate: "Clementi", lat: 1.3155, lng: 103.7607, address: "8 Clementi Ave 3" },
  { name: "Henry Park Primary School", estate: "Bukit Timah", lat: 1.3166, lng: 103.7842, address: "1 Holland Grove Rd" },

  // Jurong East & West
  { name: "Rulang Primary School", estate: "Jurong West", lat: 1.3468, lng: 103.7190, address: "6 Jurong West St 52" },
  { name: "Yuhua Primary School", estate: "Jurong East", lat: 1.3435, lng: 103.7410, address: "159 Jurong East St 24" },
  { name: "Fuhua Primary School", estate: "Jurong East", lat: 1.3462, lng: 103.7358, address: "65 Jurong East St 13" },
  { name: "Princess Elizabeth Primary School", estate: "Bukit Batok", lat: 1.3492, lng: 103.7410, address: "30 Bukit Batok West Ave 3" },

  // Bedok & Marine Parade
  { name: "Tao Nan School", estate: "Marine Parade", lat: 1.3057, lng: 103.9080, address: "49 Marine Cres" },
  { name: "CHIS (Katong) Primary", estate: "Marine Parade", lat: 1.3060, lng: 103.9042, address: "17 Martia Rd" },
  { name: "Red Swastika School", estate: "Bedok", lat: 1.3328, lng: 103.9315, address: "350 Bedok North Ave 3" },
  { name: "Yu Neng Primary School", estate: "Bedok", lat: 1.3340, lng: 103.9329, address: "56 Bedok North St 3" },
  { name: "Opera Estate Primary School", estate: "Bedok", lat: 1.3188, lng: 103.9248, address: "48 Fidelio St" },

  // Woodlands
  { name: "Innova Primary School", estate: "Woodlands", lat: 1.4290, lng: 103.7915, address: "80 Woodlands Dr 17" },
  { name: "Si Ling Primary School", estate: "Woodlands", lat: 1.4332, lng: 103.7876, address: "61 Woodlands Ave 1" },
  { name: "Woodlands Primary School", estate: "Woodlands", lat: 1.4372, lng: 103.7925, address: "10 Woodlands Dr 50" },
  { name: "Fuchun Primary School", estate: "Woodlands", lat: 1.4312, lng: 103.7780, address: "23 Woodlands Ave 1" }
];

// Everyday Singapore public amenities (Hawkers, Polyclinics, Major Supermarkets, Community Clubs)
export const PUBLIC_AMENITIES = [
  // Hawkers & Food Centres
  { name: "Bishan North Shopping Mall & Food Centre", category: "Hawker / Food Centre", lat: 1.3598, lng: 103.8475 },
  { name: "Kim San Leng Food Centre (Bishan Central)", category: "Hawker / Food Centre", lat: 1.3505, lng: 103.8492 },
  { name: "Toa Payoh West Market & Food Centre (Blk 127)", category: "Hawker / Food Centre", lat: 1.3345, lng: 103.8443 },
  { name: "Tiong Bahru Market & Hawker Centre", category: "Hawker / Food Centre", lat: 1.2868, lng: 103.8322 },
  { name: "Mei Ling Market & Food Centre", category: "Hawker / Food Centre", lat: 1.2942, lng: 103.8035 },
  { name: "Tampines Round Market & Food Centre (Blk 137)", category: "Hawker / Food Centre", lat: 1.3468, lng: 103.9442 },
  { name: "Our Tampines Hub Hawker Centre", category: "Hawker / Food Centre", lat: 1.3533, lng: 103.9405 },
  { name: "Punggol Coast Hawker Centre", category: "Hawker / Food Centre", lat: 1.4148, lng: 103.9082 },
  { name: "Clementi 448 Market & Food Centre", category: "Hawker / Food Centre", lat: 1.3142, lng: 103.7650 },
  { name: "Yuhua Village Market & Food Centre", category: "Hawker / Food Centre", lat: 1.3438, lng: 103.7398 },
  { name: "Maxwell Food Centre", category: "Hawker / Food Centre", lat: 1.2804, lng: 103.8441 },
  { name: "Amoy Street Food Centre", category: "Hawker / Food Centre", lat: 1.2793, lng: 103.8467 },
  { name: "Old Airport Road Food Centre", category: "Hawker / Food Centre", lat: 1.3082, lng: 103.8858 },
  { name: "Bedok Interchange Hawker Centre", category: "Hawker / Food Centre", lat: 1.3245, lng: 103.9305 },

  // Polyclinics / Healthcare
  { name: "Bishan Polyclinic", category: "Polyclinic / Health", lat: 1.3524, lng: 103.8471 },
  { name: "Toa Payoh Polyclinic", category: "Polyclinic / Health", lat: 1.3340, lng: 103.8505 },
  { name: "Queenstown Polyclinic", category: "Polyclinic / Health", lat: 1.2982, lng: 103.8015 },
  { name: "Bukit Merah Polyclinic", category: "Polyclinic / Health", lat: 1.2825, lng: 103.8210 },
  { name: "Tampines Polyclinic", category: "Polyclinic / Health", lat: 1.3545, lng: 103.9430 },
  { name: "Punggol Polyclinic (Oasis Terraces)", category: "Polyclinic / Health", lat: 1.4045, lng: 103.9125 },
  { name: "Sengkang Polyclinic", category: "Polyclinic / Health", lat: 1.3930, lng: 103.8942 },
  { name: "Clementi Polyclinic", category: "Polyclinic / Health", lat: 1.3135, lng: 103.7660 },
  { name: "Jurong Polyclinic", category: "Polyclinic / Health", lat: 1.3488, lng: 103.7380 },
  { name: "Bedok Polyclinic (Heartbeat@Bedok)", category: "Polyclinic / Health", lat: 1.3268, lng: 103.9318 },
  { name: "Woodlands Polyclinic", category: "Polyclinic / Health", lat: 1.4350, lng: 103.7885 },

  // Supermarkets & Shopping Hubs
  { name: "FairPrice Finest (Junction 8)", category: "Supermarket / Retail", lat: 1.3503, lng: 103.8485 },
  { name: "Sheng Siong Supermarket (Bishan Blk 512)", category: "Supermarket / Retail", lat: 1.3521, lng: 103.8480 },
  { name: "FairPrice Xtra (Ang Mo Kio Hub)", category: "Supermarket / Retail", lat: 1.3695, lng: 103.8488 },
  { name: "Cold Storage (Great World)", category: "Supermarket / Retail", lat: 1.2935, lng: 103.8320 },
  { name: "FairPrice (Tampines Mall)", category: "Supermarket / Retail", lat: 1.3530, lng: 103.9448 },
  { name: "Waterway Point Mall & FairPrice Finest", category: "Supermarket / Retail", lat: 1.4060, lng: 103.9020 },
  { name: "The Clementi Mall (FairPrice Finest)", category: "Supermarket / Retail", lat: 1.3150, lng: 103.7650 },
  { name: "Westgate & JEM Mega Hubs", category: "Supermarket / Retail", lat: 1.3335, lng: 103.7430 },
  { name: "Causeway Point & FairPrice Finest", category: "Supermarket / Retail", lat: 1.4360, lng: 103.7860 },

  // Parks & Community Hubs
  { name: "Bishan-Ang Mo Kio Park", category: "Nature & Park", lat: 1.3620, lng: 103.8465 },
  { name: "Bishan Community Club", category: "Community Centre", lat: 1.3528, lng: 103.8505 },
  { name: "Toa Payoh Town Park", category: "Nature & Park", lat: 1.3315, lng: 103.8485 },
  { name: "Punggol Waterway Park", category: "Nature & Park", lat: 1.4110, lng: 103.9050 },
  { name: "Jurong Lake Gardens", category: "Nature & Park", lat: 1.3395, lng: 103.7290 },
  { name: "East Coast Park (Park Connector)", category: "Nature & Park", lat: 1.3010, lng: 103.9120 }
];

/**
 * Calculates Great-circle distance between two points on Earth using Haversine formula
 * @param {number} lat1 
 * @param {number} lon1 
 * @param {number} lat2 
 * @param {number} lon2 
 * @returns {number} distance in kilometers
 */
export function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Maps postal code or estate search term to an estate and planning area
 * @param {string} input 
 * @returns {{ estate: string, planningArea: string, region: string, detectedFrom: string }}
 */
export function resolveEstate(input) {
  if (!input) {
    return { estate: "Bishan", planningArea: "Bishan", region: "Central", detectedFrom: "default" };
  }

  const clean = input.trim();

  // If 6-digit postal code (e.g. "560410", "120512")
  const postalMatch = clean.match(/^(\d{2})\d{4}$/);
  if (postalMatch) {
    const sector = postalMatch[1];
    if (POSTAL_SECTOR_MAP[sector]) {
      return {
        ...POSTAL_SECTOR_MAP[sector],
        detectedFrom: `postal_sector_${sector}`
      };
    }
  }

  // Check known estate keys (case-insensitive)
  const lower = clean.toLowerCase();
  for (const [key, profile] of Object.entries(ESTATE_PROFILES)) {
    if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
      return {
        estate: key,
        planningArea: key,
        region: profile.region,
        detectedFrom: "estate_name_match"
      };
    }
  }

  // Check aliases
  if (lower.includes("amk") || lower.includes("ang mo kio")) {
    return { estate: "Ang Mo Kio", planningArea: "Ang Mo Kio", region: "North-East", detectedFrom: "alias" };
  }
  if (lower.includes("tiong bahru") || lower.includes("telok blangah") || lower.includes("harbourfront") || lower.includes("bukit merah")) {
    return { estate: "Bukit Merah", planningArea: "Bukit Merah", region: "Central", detectedFrom: "alias" };
  }
  if (lower.includes("holland") || lower.includes("dawson") || lower.includes("queenstown")) {
    return { estate: "Queenstown", planningArea: "Queenstown", region: "Central", detectedFrom: "alias" };
  }
  if (lower.includes("cbd") || lower.includes("downtown") || lower.includes("marina") || lower.includes("raffles") || lower.includes("tanjong pagar")) {
    return { estate: "Central Area", planningArea: "Downtown Core", region: "Central", detectedFrom: "alias" };
  }

  // Default fallback
  return { estate: "Bishan", planningArea: "Bishan", region: "Central", detectedFrom: "fallback" };
}

/**
 * Filter amenities, schools, and MRTs within a radius (default 1 km)
 * @param {number} lat 
 * @param {number} lng 
 * @param {number} radiusKm 
 */
export function getNearbyWithinRadius(lat, lng, radiusKm = 1.0) {
  // Primary schools within radius (vital for MOE 1 km home-school distance registration)
  const schools = PRIMARY_SCHOOLS.map(sch => {
    const dist = haversineDistance(lat, lng, sch.lat, sch.lng);
    return { ...sch, distanceKm: parseFloat(dist.toFixed(2)), distanceMeters: Math.round(dist * 1000) };
  })
  .filter(sch => sch.distanceKm <= radiusKm)
  .sort((a, b) => a.distanceKm - b.distanceKm);

  // MRT Stations within radius
  const mrts = MRT_STATIONS.map(mrt => {
    const dist = haversineDistance(lat, lng, mrt.lat, mrt.lng);
    const walkMinutes = Math.max(1, Math.round((dist * 1000) / 80)); // 80m/min standard walking pace
    return {
      ...mrt,
      distanceKm: parseFloat(dist.toFixed(2)),
      distanceMeters: Math.round(dist * 1000),
      walkMinutes
    };
  })
  .filter(mrt => mrt.distanceKm <= radiusKm)
  .sort((a, b) => a.distanceKm - b.distanceKm);

  // Public amenities within radius
  const amenities = PUBLIC_AMENITIES.map(amenity => {
    const dist = haversineDistance(lat, lng, amenity.lat, amenity.lng);
    return {
      ...amenity,
      distanceKm: parseFloat(dist.toFixed(2)),
      distanceMeters: Math.round(dist * 1000)
    };
  })
  .filter(a => a.distanceKm <= radiusKm)
  .sort((a, b) => a.distanceKm - b.distanceKm);

  return {
    schools,
    mrts,
    amenities,
    counts: {
      primarySchoolsCount: schools.length,
      mrtStationsCount: mrts.length,
      amenitiesCount: amenities.length,
      hawkersCount: amenities.filter(a => a.category.includes("Hawker")).length,
      polyclinicsCount: amenities.filter(a => a.category.includes("Polyclinic")).length,
      supermarketsCount: amenities.filter(a => a.category.includes("Supermarket")).length
    }
  };
}
