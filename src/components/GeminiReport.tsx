import React from 'react';
import { Sparkles, ThumbsUp, ThumbsDown, CheckCircle, AlertCircle, RefreshCw, Compass, ArrowRight, Shield, Award, Wallet } from 'lucide-react';
import { GeminiReportData, PropertyData } from '../types/property';

interface GeminiReportProps {
  report: GeminiReportData | null;
  propertyData: PropertyData;
  isLoading: boolean;
  onRegenerate: () => void;
  error?: string | null;
}

export const GeminiReport: React.FC<GeminiReportProps> = ({
  report,
  propertyData,
  isLoading,
  onRegenerate,
  error
}) => {
  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-8 mb-8 shadow-md">
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 animate-spin">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Synthesizing Singapore Property Intelligence...</h3>
            <p className="text-xs text-indigo-200 mt-1 max-w-md">
              Google Gemini is crunching HDB resale transactions, URA private caveats, CPF OA mortgage models, and OneMap 1km school densities for {propertyData.estate}...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 mb-8 text-rose-900">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-bold text-sm">Report Generation Notice</h3>
            <p className="text-xs text-rose-700 mt-1">{error}</p>
            <button
              onClick={onRegenerate}
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 text-white rounded-lg text-xs font-semibold hover:bg-rose-700 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Analysis</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!report) return null;

  const isBuyVerdict = report.verdict === 'Buy' || report.verdict === 'Lean Buy';

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white rounded-2xl shadow-lg border border-indigo-900/60 p-5 sm:p-8 mb-8 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white tracking-tight">
                Gemini Co-Pilot Insights Report
              </h2>
              <span className="text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 px-2 py-0.5 rounded-full">
                Empathetic Housing Intelligence
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Target Area: {propertyData.estate} • Geocoded Postal Analysis
            </p>
          </div>
        </div>

        <button
          onClick={onRegenerate}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 active:scale-95 border border-white/15 rounded-xl text-xs font-semibold text-white transition-all cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Regenerate Insights</span>
        </button>
      </div>

      {/* Main Verdict Card */}
      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                AI Recommendation Verdict
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-300 font-mono">Confidence: {report.verdictScore}/100</span>
            </div>

            <div className="flex items-baseline gap-3">
              <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isBuyVerdict ? 'text-emerald-400' : 'text-amber-400'
              }`}>
                Verdict: {report.verdict}
              </h3>
            </div>

            <p className="text-sm sm:text-base font-medium text-slate-200 pt-1 leading-snug">
              {report.headline}
            </p>
          </div>

          {/* Verdict Score Ring / Bar */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-3 rounded-xl shrink-0">
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-300 uppercase">Buy vs Rent Score</div>
              <div className="text-[11px] text-slate-400">
                {report.verdictScore >= 70 ? 'Favorable to Buy' : report.verdictScore >= 50 ? 'Balanced' : 'Favorable to Rent'}
              </div>
            </div>
            <div className="w-14 h-14 rounded-full border-4 border-indigo-500/30 flex items-center justify-center font-mono font-bold text-lg text-white relative">
              <div
                className={`absolute inset-0 rounded-full border-4 ${
                  isBuyVerdict ? 'border-emerald-400' : 'border-amber-400'
                }`}
                style={{ clipPath: `polygon(0 0, 100% 0, 100% ${report.verdictScore}%, 0 100%)` }}
              />
              {report.verdictScore}
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="mb-6 space-y-3 relative z-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-indigo-400" />
          Executive Plain-English Summary
        </h4>
        <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2.5">
          {report.executiveSummary.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Affordability & Cash Flow Assessment */}
      <div className="mb-6 relative z-10">
        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5 mb-2.5">
          <Wallet className="w-4 h-4 text-indigo-400" />
          Affordability & CPF Ordinary Account Servicing
        </h4>
        <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-800/40 text-xs sm:text-sm text-slate-300">
          <p>{report.affordabilityAssessment}</p>

          {report.monthlyCashflowEstimate && (
            <div className="mt-3 pt-3 border-t border-indigo-800/40 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                <span className="text-[11px] text-indigo-300 font-semibold uppercase">Estimated Monthly Mortgage</span>
                <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">
                  {report.monthlyCashflowEstimate.estimatedMonthlyMortgage}
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                <span className="text-[11px] text-indigo-300 font-semibold uppercase">Estimated Open Market Rent</span>
                <div className="text-sm font-bold text-amber-400 font-mono mt-0.5">
                  {report.monthlyCashflowEstimate.estimatedMonthlyRent}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pros & Cons Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 relative z-10">
        {/* Buy Side */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <ThumbsUp className="w-4 h-4" />
            <span>Why Buy in {propertyData.estate}?</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {report.buyPros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-white/10">
            <div className="text-amber-300 text-xs font-semibold mb-2">Drawbacks & Risks to Watch:</div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {report.buyCons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rent Side */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-violet-400 font-bold text-sm">
            <ThumbsDown className="w-4 h-4" />
            <span>Why Rent in {propertyData.estate}?</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {report.rentPros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-white/10">
            <div className="text-rose-300 text-xs font-semibold mb-2">Rental Pitfalls:</div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {report.rentCons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* School & Family Planning Insights */}
      {report.schoolAndFamilyAnalysis && (
        <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 relative z-10 text-xs text-slate-300">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1.5 flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-indigo-400" />
            Primary School Registration (MOE Phase 2C) & Family Outlook
          </h4>
          <p>{report.schoolAndFamilyAnalysis}</p>
        </div>
      )}

      {/* Final Recommendation Box */}
      <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-indigo-600/30 to-violet-600/30 border border-indigo-400/40 relative z-10">
        <div className="flex items-start gap-3">
          <Compass className="w-5 h-5 text-indigo-300 mt-0.5 shrink-0" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-200">
              Co-Pilot Strategic Takeaway
            </h4>
            <p className="text-xs sm:text-sm font-medium text-white leading-relaxed">
              {report.recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
