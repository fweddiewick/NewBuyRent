import React from 'react';
import { Home, Sparkles, Building2, MapPin, Compass } from 'lucide-react';

interface HeaderProps {
  currentEstate?: string;
  planningArea?: string;
  region?: string;
  address?: string;
  coordinates?: { lat: number; lng: number };
}

export const Header: React.FC<HeaderProps> = ({
  currentEstate,
  planningArea,
  region,
  address,
  coordinates
}) => {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                Should I Buy or Rent Here?
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200/60">
                  <Sparkles className="w-3 h-3 text-indigo-500 animate-pulse" />
                  SG Intelligence
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Data-grounded housing analysis for Singapore young couples, homebuyers & renters
            </p>
          </div>
        </div>

        {currentEstate && (
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 transition-colors px-2.5 py-1 rounded-lg text-slate-700 font-medium border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{currentEstate}</span>
              {planningArea && planningArea !== currentEstate && (
                <span className="text-slate-400">({planningArea})</span>
              )}
            </div>

            {region && (
              <span className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-lg font-medium border border-indigo-100">
                {region} Region
              </span>
            )}

            {coordinates && (
              <span className="hidden lg:flex items-center gap-1 text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60 font-mono text-[11px]">
                <Compass className="w-3 h-3 text-slate-400" />
                {coordinates.lat.toFixed(4)}°N, {coordinates.lng.toFixed(4)}°E
              </span>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
