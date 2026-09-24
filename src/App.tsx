/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { MetricsOverview } from './components/MetricsOverview';
import { MarketTrends } from './components/MarketTrends';
import { AmenitiesMapList } from './components/AmenitiesMapList';
import { GeminiReport } from './components/GeminiReport';
import { BuyVsRentCalculator } from './components/BuyVsRentCalculator';
import { Footer } from './components/Footer';
import { PropertyData, GeminiReportData } from './types/property';
import { Loader2, AlertCircle, Compass, Sparkles } from 'lucide-react';

export default function App() {
  const [query, setQuery] = useState<string>('560410');
  const [persona, setPersona] = useState<string>('Young Couple (First-Time Buyers)');
  const [horizon, setHorizon] = useState<string>('5 to 10 years');

  const [propertyData, setPropertyData] = useState<PropertyData | null>(null);
  const [isPropertyLoading, setIsPropertyLoading] = useState<boolean>(true);
  const [propertyError, setPropertyError] = useState<string | null>(null);

  const [report, setReport] = useState<GeminiReportData | null>(null);
  const [isReportLoading, setIsReportLoading] = useState<boolean>(false);
  const [reportError, setReportError] = useState<string | null>(null);

  // Fetch property intelligence data from /api/property
  const fetchPropertyData = useCallback(async (searchQuery: string, currentPersona: string, currentHorizon: string) => {
    setIsPropertyLoading(true);
    setPropertyError(null);
    setReport(null);
    setReportError(null);

    try {
      const res = await fetch(`/api/property?postalCode=${encodeURIComponent(searchQuery)}`);
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Failed to fetch property data (Status: ${res.status})`);
      }

      const data: PropertyData = await res.json();
      setPropertyData(data);
      setIsPropertyLoading(false);

      // Now trigger Gemini report generation
      fetchReport(data, currentPersona, currentHorizon);
    } catch (err: any) {
      console.error('Error fetching property data:', err);
      setPropertyError(err.message || 'Unable to fetch property data for this location.');
      setIsPropertyLoading(false);
    }
  }, []);

  // Fetch AI Report from /api/report
  const fetchReport = async (propData: PropertyData, currentPersona: string, currentHorizon: string) => {
    setIsReportLoading(true);
    setReportError(null);

    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          estate: propData.estate,
          planningArea: propData.planningArea,
          region: propData.region,
          addressDetails: propData.addressDetails,
          hdbMetrics: propData.hdbMetrics,
          uraMetrics: propData.uraMetrics,
          comparisons: propData.comparisons,
          amenitiesWithin1km: propData.amenitiesWithin1km,
          userPreferences: {
            persona: currentPersona,
            horizon: currentHorizon
          }
        })
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Failed to generate AI report (Status: ${res.status})`);
      }

      const resData = await res.json();
      if (resData.report) {
        setReport(resData.report);
      } else {
        throw new Error('No report content in response');
      }
    } catch (err: any) {
      console.error('Error fetching report:', err);
      setReportError(err.message || 'Unable to generate Gemini insights report.');
    } finally {
      setIsReportLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchPropertyData('560410', persona, horizon);
  }, []);

  const handleSearch = (newQuery: string, newPersona: string, newHorizon: string) => {
    setQuery(newQuery);
    setPersona(newPersona);
    setHorizon(newHorizon);
    fetchPropertyData(newQuery, newPersona, newHorizon);
  };

  const handleRegenerateReport = () => {
    if (propertyData) {
      fetchReport(propertyData, persona, horizon);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/60 font-sans text-slate-900 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Header with live metadata */}
      <Header
        currentEstate={propertyData?.estate}
        planningArea={propertyData?.planningArea}
        region={propertyData?.region}
        address={propertyData?.addressDetails?.address}
        coordinates={propertyData?.coordinates}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Search & Location Bar */}
        <SearchBar
          onSearch={handleSearch}
          isLoading={isPropertyLoading}
          activeQuery={query}
        />

        {/* Global Loading Indicator */}
        {isPropertyLoading && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-xs my-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto animate-spin">
              <Loader2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">
                Aggregating Singapore Property Intelligence...
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Connecting to SLA OneMap geocoding, HDB resale datasets, URA Space private caveats, and calculating 1km amenity densities...
              </p>
            </div>
          </div>
        )}

        {/* Property Error Message */}
        {propertyError && !isPropertyLoading && (
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 mb-8 text-rose-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-sm">Location Search Notice</h3>
              <p className="text-xs text-rose-700 mt-1">{propertyError}</p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={() => handleSearch('560410', persona, horizon)}
                  className="px-3 py-1.5 bg-rose-600 text-white rounded-lg text-xs font-semibold hover:bg-rose-700 transition-colors cursor-pointer"
                >
                  Reset to Ang Mo Kio (560410)
                </button>
                <button
                  onClick={() => handleSearch('Bishan', persona, horizon)}
                  className="px-3 py-1.5 bg-white border border-rose-300 text-rose-800 rounded-lg text-xs font-semibold hover:bg-rose-100 transition-colors cursor-pointer"
                >
                  Try Bishan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard Content */}
        {!isPropertyLoading && propertyData && (
          <div className="space-y-2">
            {/* Section 1: Financial Overview & National Benchmarks */}
            <MetricsOverview data={propertyData} />

            {/* Section 2: Gemini Co-Pilot Insights Report */}
            <GeminiReport
              report={report}
              propertyData={propertyData}
              isLoading={isReportLoading}
              onRegenerate={handleRegenerateReport}
              error={reportError}
            />

            {/* Section 3: Interactive Buy vs Rent Cashflow Simulator */}
            <BuyVsRentCalculator data={propertyData} />

            {/* Section 4: Fair Market Value & 5-Year Trends */}
            <MarketTrends data={propertyData} />

            {/* Section 5: Amenity & Primary School Density within 1km */}
            <AmenitiesMapList data={propertyData} />
          </div>
        )}
      </main>

      {/* Sourcing & Legal Attribution Footer */}
      <Footer />
    </div>
  );
}
