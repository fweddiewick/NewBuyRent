import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Home, Building, Percent, BarChart3, Info } from 'lucide-react';
import { PropertyData } from '../types/property';

interface MetricsOverviewProps {
  data: PropertyData;
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ data }) => {
  const { hdbMetrics, uraMetrics, comparisons, estate } = data;
  const hdbPsfComp = comparisons.hdbPsfVsNational;
  const hdbRentComp = comparisons.hdbRentVsNational;
  const condoPsfComp = comparisons.condoPsfVsNational;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            Key Financial Baselines & National Benchmarks
          </h2>
          <p className="text-xs text-slate-500">
            Comparing {estate} against Singapore National Medians (HDB Resale ~$585 PSF, Rent ~$3,200/mo, Condo ~$1,880 PSF)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: HDB Resale PSF */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-start justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">HDB Median Resale PSF</span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Home className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
              ${hdbMetrics.medianPsf.toLocaleString()}
            </span>
            <span className="text-xs text-slate-500 font-medium">/ sqft</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
            <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
              hdbPsfComp.isHigher
                ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
            }`}>
              {hdbPsfComp.isHigher ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              <span>{hdbPsfComp.label}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">Base: $585</span>
          </div>
        </div>

        {/* Card 2: HDB 4-Room Median Price */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-start justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">4-Room Resale Median</span>
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
              ${hdbMetrics.medianPrice4Room.toLocaleString()}
            </span>
            <span className="text-xs text-slate-500 font-medium">approx ~93 sqm</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 font-medium">3-Rm: ${hdbMetrics.medianPrice3Room.toLocaleString()}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-medium">5-Rm: ${hdbMetrics.medianPrice5Room.toLocaleString()}</span>
          </div>
        </div>

        {/* Card 3: 4-Room Monthly Rent */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-start justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">HDB Median Rent (4-Rm)</span>
            <div className="w-7 h-7 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
              ${hdbMetrics.medianRent4Room.toLocaleString()}
            </span>
            <span className="text-xs text-slate-500 font-medium">/ month</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
            <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
              hdbRentComp.isHigher
                ? 'bg-rose-50 text-rose-700 border border-rose-200/60'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
            }`}>
              {hdbRentComp.isHigher ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              <span>{hdbRentComp.label}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">Base: $3,200</span>
          </div>
        </div>

        {/* Card 4: 5-Year Capital Growth */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-start justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">5-Year Resale Growth</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-emerald-600 font-mono tracking-tight">
              +{hdbMetrics.fiveYearGrowthPct}%
            </span>
            <span className="text-xs text-slate-500 font-medium">since 2021</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="text-slate-600 font-medium">National Trend: +{comparisons.nationalBaselines.fiveYearHdbGrowthPct}%</span>
            <span className="font-semibold text-emerald-700">Solid Equity</span>
          </div>
        </div>

        {/* Card 5: Private Condo Median PSF (URA Space) */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-start justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Private Condo Median PSF</span>
            <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <Building className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
              ${uraMetrics.condoMedianPsf.toLocaleString()}
            </span>
            <span className="text-xs text-slate-500 font-medium">/ sqft</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
            <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
              condoPsfComp.isHigher
                ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
            }`}>
              <span>{condoPsfComp.label}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">Base: $1,880</span>
          </div>
        </div>

        {/* Card 6: Estimated Rental Yield & Spread */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-start justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gross Rental Yield</span>
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Percent className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-amber-600 font-mono tracking-tight">
              {hdbMetrics.estimatedRentalYieldPct}%
            </span>
            <span className="text-xs text-slate-500 font-medium">HDB / ~3.2% Condo</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="text-slate-500">Condo Rent: ${uraMetrics.condoMedianRent.toLocaleString()}/mo</span>
            <span className="text-slate-400 font-medium">{uraMetrics.source.includes("Live") ? "URA Live" : "URA Open Data"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
