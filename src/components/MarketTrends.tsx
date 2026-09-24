import React, { useState } from 'react';
import { TrendingUp, Layers, Building2, History, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PropertyData } from '../types/property';

interface MarketTrendsProps {
  data: PropertyData;
}

export const MarketTrends: React.FC<MarketTrendsProps> = ({ data }) => {
  const { hdbMetrics, uraMetrics, estate } = data;
  const [activeTab, setActiveTab] = useState<'hdb' | 'condo' | 'transactions'>('hdb');

  const maxTrendPsf = Math.max(...hdbMetrics.fiveYearTrend.map(t => t.medianPsf), 800);
  const minTrendPsf = Math.min(...hdbMetrics.fiveYearTrend.map(t => t.medianPsf), 400);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600" />
              Fair Market Value & 5-Year Trends
            </h2>
            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-medium">
              {estate}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Compiled from HDB Resale transactions & URA Space private residential caveats
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('hdb')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'hdb'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            HDB Flats
          </button>
          <button
            onClick={() => setActiveTab('condo')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'condo'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            URA Private Condos
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'transactions'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Recent Caveats
          </button>
        </div>
      </div>

      {activeTab === 'hdb' && (
        <div className="pt-6 space-y-6">
          {/* 5-Year Visual Trend Bar Chart */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                5-Year Resale Price Trajectory (2021 – 2026)
              </span>
              <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                +{hdbMetrics.fiveYearGrowthPct}% overall growth
              </span>
            </div>

            <div className="grid grid-cols-6 gap-2 sm:gap-4 pt-2">
              {hdbMetrics.fiveYearTrend.map((t, idx) => {
                const heightPct = Math.max(25, Math.round(((t.medianPsf - minTrendPsf) / (maxTrendPsf - minTrendPsf)) * 100));
                const isLatest = idx === hdbMetrics.fiveYearTrend.length - 1;

                return (
                  <div key={t.year} className="flex flex-col items-center">
                    <span className="text-[11px] font-mono font-bold text-slate-700 mb-1.5">
                      ${t.medianPsf}
                    </span>
                    <div className="w-full bg-slate-100 rounded-t-lg h-28 flex items-end p-1">
                      <div
                        style={{ height: `${heightPct}%` }}
                        className={`w-full rounded-t-md transition-all duration-500 ${
                          isLatest
                            ? 'bg-gradient-to-t from-indigo-600 to-violet-500 shadow-xs shadow-indigo-200'
                            : 'bg-indigo-300 hover:bg-indigo-400'
                        }`}
                      />
                    </div>
                    <span className={`mt-2 text-xs font-medium ${isLatest ? 'font-bold text-indigo-700' : 'text-slate-500'}`}>
                      {t.year}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      ${(t.medianPrice / 1000).toFixed(0)}k
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Breakdown by Flat Type Table */}
          <div className="pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
              Median Resale Price by Flat Type ({estate})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="text-xs text-slate-500 font-medium">3-Room</span>
                <div className="text-lg font-bold font-mono text-slate-900 mt-1">
                  ${hdbMetrics.medianPrice3Room.toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400">Avg ~65-68 sqm</span>
              </div>

              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-indigo-700 font-semibold">4-Room (Benchmark)</span>
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                </div>
                <div className="text-lg font-bold font-mono text-indigo-900 mt-1">
                  ${hdbMetrics.medianPrice4Room.toLocaleString()}
                </div>
                <span className="text-[11px] text-indigo-600/80">Avg ~90-95 sqm</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="text-xs text-slate-500 font-medium">5-Room</span>
                <div className="text-lg font-bold font-mono text-slate-900 mt-1">
                  ${hdbMetrics.medianPrice5Room.toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400">Avg ~110-115 sqm</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="text-xs text-slate-500 font-medium">Executive Flat</span>
                <div className="text-lg font-bold font-mono text-slate-900 mt-1">
                  ${hdbMetrics.medianPriceExecutive.toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400">Avg ~140-150 sqm</span>
              </div>
            </div>
          </div>

          {/* Lease Maturity Notice */}
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-slate-800">Lease Profile & Maturity: </span>
              <span>{hdbMetrics.leaseMaturity}. </span>
              <span className="text-slate-500">
                For young couples planning long-term CPF OA financing, ensure the youngest buyer's age + remaining lease ≥ 95 years to qualify for the full maximum loan amount.
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'condo' && (
        <div className="pt-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-200">
              <span className="text-xs font-semibold text-sky-800">Private Condo Median PSF</span>
              <div className="text-2xl font-bold font-mono text-sky-950 mt-1">
                ${uraMetrics.condoMedianPsf.toLocaleString()}
              </div>
              <span className="text-xs text-sky-700">~2.5x to 3x HDB PSF spread</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-semibold text-slate-600">Median Monthly Condo Rent</span>
              <div className="text-2xl font-bold font-mono text-slate-900 mt-1">
                ${uraMetrics.condoMedianRent.toLocaleString()}
              </div>
              <span className="text-xs text-slate-500">~${uraMetrics.rentalPsfPerMonth} / sqft / month</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-semibold text-slate-600">5-Yr Private Growth</span>
              <div className="text-2xl font-bold font-mono text-emerald-600 mt-1">
                +{uraMetrics.fiveYearCondoGrowthPct}%
              </div>
              <span className="text-xs text-slate-500">Capital appreciation pace</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center justify-between">
              <span>Representative Private Condominium Projects ({estate})</span>
              <span className="text-[11px] text-slate-400 font-normal">Source: URA Real Estate Information System</span>
            </h3>

            <div className="space-y-2">
              {uraMetrics.recentCaveats.map((c, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border border-slate-200/80 hover:bg-slate-50/80 transition-colors text-xs gap-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900">{c.project}</span>
                      <span className="text-slate-400 ml-2">({c.unitType} • {c.areaSqft} sqft)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:justify-end">
                    <span className="font-mono font-bold text-slate-900">${(c.price / 1000000).toFixed(2)}M</span>
                    <span className="font-mono text-slate-500">${c.psf} PSF</span>
                    <span className="text-slate-400 text-[11px]">{c.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'transactions' && (
        <div className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Recent HDB Resale Records ({estate})
            </span>
            <span className="text-[11px] text-slate-400">Live feed from data.gov.sg</span>
          </div>

          {hdbMetrics.recentTransactions && hdbMetrics.recentTransactions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-medium">
                    <th className="pb-2">Location / Block</th>
                    <th className="pb-2">Flat Type</th>
                    <th className="pb-2">Floor Area</th>
                    <th className="pb-2">Resale Price</th>
                    <th className="pb-2">PSF</th>
                    <th className="pb-2">Lease Start</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {hdbMetrics.recentTransactions.map((tx, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 font-sans font-medium text-slate-800">
                        Blk {tx.block} {tx.streetName}
                      </td>
                      <td className="py-2.5 text-slate-600 font-sans">{tx.flatType}</td>
                      <td className="py-2.5 text-slate-600">
                        {tx.floorAreaSqm} sqm <span className="text-slate-400 text-[10px]">({tx.floorAreaSqft} sqft)</span>
                      </td>
                      <td className="py-2.5 font-bold text-slate-900">${tx.resalePrice.toLocaleString()}</td>
                      <td className="py-2.5 text-indigo-700 font-bold">${tx.psf}</td>
                      <td className="py-2.5 text-slate-400 font-sans">{tx.leaseCommenceDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 bg-slate-50 rounded-xl text-center text-xs text-slate-500">
              Aggregated historical transaction records active for {estate}.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
