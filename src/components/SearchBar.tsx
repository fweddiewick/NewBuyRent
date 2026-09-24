import React, { useState } from 'react';
import { Search, MapPin, Users, Calendar, ArrowRight, Loader2, Sparkles } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, persona: string, horizon: string) => void;
  isLoading: boolean;
  activeQuery: string;
}

const SAMPLE_LOCATIONS = [
  { name: 'Bishan', code: '570110', tag: 'Central Mature' },
  { name: 'Queenstown', code: '140050', tag: 'City Fringe / Dawson' },
  { name: 'Tampines', code: '520201', tag: 'East Regional Hub' },
  { name: 'Punggol', code: '828761', tag: 'North-East Waterfront' },
  { name: 'Clementi', code: '120448', tag: 'West Education Hub' },
  { name: 'Woodlands', code: '730501', tag: 'North Gateway' },
  { name: 'Ang Mo Kio', code: '560410', tag: 'North-East Mature' },
  { name: 'Toa Payoh', code: '310150', tag: 'Central Established' }
];

const PERSONAS = [
  { id: 'Young Couple (First-Time Buyers)', label: 'Young Couple (First Home)', desc: 'Balancing CPF OA, downpayment & grants' },
  { id: 'Renting First while waiting for BTO', label: 'Renting First vs BTO', desc: 'Evaluating temporary lease vs long-term hold' },
  { id: 'Family with Young Children (School Priority)', label: 'Family Planning (MOE 1km)', desc: 'Focusing on primary school registration' },
  { id: 'Upgrader (HDB to Private Condo)', label: 'HDB Upgrader to Condo', desc: 'Assessing private capital appreciation & yield' }
];

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  isLoading,
  activeQuery
}) => {
  const [inputVal, setInputVal] = useState(activeQuery);
  const [selectedPersona, setSelectedPersona] = useState(PERSONAS[0].id);
  const [selectedHorizon, setSelectedHorizon] = useState('5 to 10 years');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onSearch(inputVal.trim(), selectedPersona, selectedHorizon);
    }
  };

  const handleChipClick = (code: string) => {
    setInputVal(code);
    onSearch(code, selectedPersona, selectedHorizon);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 mb-8 transition-all hover:shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5 text-indigo-500" />
            </div>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter 6-digit Postal Code (e.g. 560410) or Estate (e.g. Bishan, Queenstown, Tampines)..."
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-inner"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !inputVal.trim()}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-semibold rounded-xl text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Aggregating Data...</span>
              </>
            ) : (
              <>
                <span>Analyze Area</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Persona & Horizon Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs">
            <Users className="w-4 h-4 text-indigo-600 shrink-0" />
            <span className="font-semibold text-slate-600 shrink-0">Profile:</span>
            <select
              value={selectedPersona}
              onChange={(e) => setSelectedPersona(e.target.value)}
              className="bg-transparent text-slate-800 font-medium focus:outline-none w-full truncate cursor-pointer"
            >
              {PERSONAS.map(p => (
                <option key={p.id} value={p.id}>{p.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 text-xs">
            <Calendar className="w-4 h-4 text-indigo-600 shrink-0" />
            <span className="font-semibold text-slate-600 shrink-0">Horizon:</span>
            <select
              value={selectedHorizon}
              onChange={(e) => setSelectedHorizon(e.target.value)}
              className="bg-transparent text-slate-800 font-medium focus:outline-none w-full cursor-pointer"
            >
              <option value="3 to 5 years">Short-term (3 to 5 years)</option>
              <option value="5 to 10 years">Medium-term (5 to 10 years)</option>
              <option value="10+ years (Permanent Home)">Long-term (10+ years)</option>
            </select>
          </div>
        </div>

        {/* Popular Quick Suggestions */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <span className="font-semibold text-slate-400 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            Try popular:
          </span>
          {SAMPLE_LOCATIONS.map((loc) => (
            <button
              key={loc.code}
              type="button"
              onClick={() => handleChipClick(loc.code)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border transition-all text-xs cursor-pointer ${
                inputVal.toLowerCase().includes(loc.name.toLowerCase()) || inputVal === loc.code
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-700 font-semibold shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
              }`}
            >
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>{loc.name}</span>
              <span className="font-mono text-[10px] text-slate-400">({loc.code})</span>
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};
