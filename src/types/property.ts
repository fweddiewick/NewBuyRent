export interface NationalBaselines {
  hdbMedianPsf: number;
  hdbMedianPrice4Room: number;
  hdbMedianRent4Room: number;
  condoMedianPsf: number;
  condoMedianRent: number;
  fiveYearHdbGrowthPct: number;
  fiveYearCondoGrowthPct: number;
  benchmarkYear: number;
}

export interface ComparisonMetric {
  diffPct: number;
  isHigher: boolean;
  label: string;
  areaValue: number;
  nationalBaseline: number;
  unit: string;
}

export interface YearTrend {
  year: string;
  medianPsf: number;
  medianPrice: number;
}

export interface RecentTransaction {
  town: string;
  flatType: string;
  block: string;
  streetName: string;
  floorAreaSqm: number;
  floorAreaSqft: number;
  resalePrice: number;
  psf: number;
  leaseCommenceDate: string;
  month: string;
}

export interface RecentCaveat {
  project: string;
  unitType: string;
  areaSqft: number;
  price: number;
  psf: number;
  date: string;
}

export interface RecentRental {
  project: string;
  bedrooms: number;
  monthlyRent: number;
  leaseDate: string;
}

export interface SchoolAmenity {
  name: string;
  estate: string;
  lat: number;
  lng: number;
  address: string;
  distanceKm: number;
  distanceMeters: number;
}

export interface MrtAmenity {
  name: string;
  line: string;
  code: string;
  lat: number;
  lng: number;
  distanceKm: number;
  distanceMeters: number;
  walkMinutes: number;
}

export interface PublicAmenity {
  name: string;
  category: string;
  lat: number;
  lng: number;
  distanceKm: number;
  distanceMeters: number;
}

export interface AmenitiesWithin1km {
  schools: SchoolAmenity[];
  mrts: MrtAmenity[];
  amenities: PublicAmenity[];
  counts: {
    primarySchoolsCount: number;
    mrtStationsCount: number;
    amenitiesCount: number;
    hawkersCount: number;
    polyclinicsCount: number;
    supermarketsCount: number;
  };
}

export interface PropertyData {
  query: string;
  estate: string;
  planningArea: string;
  region: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  addressDetails: {
    query: string;
    building?: string | null;
    address: string;
    postalCode?: string | null;
    roadName?: string | null;
    blockNo?: string | null;
    source: string;
  };
  hdbMetrics: {
    medianPsf: number;
    medianPrice4Room: number;
    medianPrice3Room: number;
    medianPrice5Room: number;
    medianPriceExecutive: number;
    medianRent4Room: number;
    leaseMaturity: string;
    fiveYearTrend: YearTrend[];
    fiveYearGrowthPct: number;
    estimatedRentalYieldPct: number;
    recentTransactions: RecentTransaction[];
  };
  uraMetrics: {
    condoMedianPsf: number;
    condoMedianRent: number;
    rentalPsfPerMonth: number;
    fiveYearCondoGrowthPct: number;
    recentCaveats: RecentCaveat[];
    recentRentals: RecentRental[];
    source: string;
    liveKeyPresent: boolean;
  };
  comparisons: {
    hdbPsfVsNational: ComparisonMetric;
    hdbRentVsNational: ComparisonMetric;
    condoPsfVsNational: ComparisonMetric;
    condoRentVsNational: ComparisonMetric;
    nationalBaselines: NationalBaselines;
  };
  amenitiesWithin1km: AmenitiesWithin1km;
  metadata: {
    generatedAt: string;
    cacheTtlSeconds: number;
  };
}

export interface MonthlyCashflowEstimate {
  estimatedMonthlyMortgage: string;
  estimatedMonthlyRent: string;
  cashflowVerdict: string;
}

export interface GeminiReportData {
  verdict: "Buy" | "Rent" | "Rent First, Buy Later" | "Lean Buy" | "Lean Rent";
  verdictScore: number;
  headline: string;
  executiveSummary: string;
  affordabilityAssessment: string;
  buyPros: string[];
  buyCons: string[];
  rentPros: string[];
  rentCons: string[];
  schoolAndFamilyAnalysis: string;
  recommendation: string;
  monthlyCashflowEstimate?: MonthlyCashflowEstimate;
}
