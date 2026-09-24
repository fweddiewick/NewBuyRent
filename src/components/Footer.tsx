import React from 'react';
import { Shield, ExternalLink, Database, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        {/* Open Data Sources & License Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div className="flex items-center gap-2 text-slate-800 font-semibold">
            <Database className="w-4 h-4 text-indigo-600" />
            <span>Singapore Open Data Powered Architecture</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href="https://data.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors flex items-center gap-1"
            >
              <span>data.gov.sg</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="https://www.ura.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors flex items-center gap-1"
            >
              <span>URA Space</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="https://www.onemap.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors flex items-center gap-1"
            >
              <span>SLA OneMap</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="https://ai.google.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors flex items-center gap-1"
            >
              <span>Google Gemini</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Primary Legal Statement */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-slate-600 leading-relaxed text-xs space-y-2">
          <p className="font-medium text-slate-700">
            Contains public sector information licensed under the Singapore Open Data Licence version 1.0. Property data compiled from HDB, URA, and OneMap. Powered by Google Gemini. This tool provides data-driven estimates for educational/informational purposes and does not constitute formal financial or legal advice.
          </p>

          <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-100">
            Data sources: Datasets (HDB resale transaction history), URA Space (private residential caveats and rental transactions), OneMap (nearby primary schools, MRT stations, and amenities), and Google Gemini (natural language report generation), accessed via data.gov.sg, SingStat, LTA DataMall, OneMap (&copy; Singapore Land Authority), URA and MAS, and made available under the Singapore Open Data Licence v1.0 and the respective providers' API terms of service.
          </p>
        </div>

        {/* Neutrality and Independent Notice */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-400 gap-2">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-slate-400" />
            <span>Independent Singapore Property Analytics Platform. Not affiliated with or endorsed by HDB, URA, or SLA.</span>
          </div>
          <div>
            <span>SG Property Intelligence &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
