import React, { useState } from 'react';
import { School, Train, Utensils, ShoppingCart, HeartPulse, Trees, MapPin, Footprints, Info, Sparkles } from 'lucide-react';
import { PropertyData } from '../types/property';

interface AmenitiesMapListProps {
  data: PropertyData;
}

export const AmenitiesMapList: React.FC<AmenitiesMapListProps> = ({ data }) => {
  const { amenitiesWithin1km, estate, coordinates, addressDetails } = data;
  const [activeCategory, setActiveCategory] = useState<'all' | 'schools' | 'mrts' | 'amenities'>('all');

  const { schools, mrts, amenities, counts } = amenitiesWithin1km;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <School className="w-5 h-5 text-indigo-600" />
              Amenity & Primary School Density
            </h2>
            <span className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full font-semibold border border-indigo-200/60">
              1 km Radius
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Geocoded via SLA OneMap at {addressDetails?.address || estate}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold self-start sm:self-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Density
          </button>
          <button
            onClick={() => setActiveCategory('schools')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeCategory === 'schools'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Schools ({schools.length})
          </button>
          <button
            onClick={() => setActiveCategory('mrts')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeCategory === 'mrts'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            MRT Stations ({mrts.length})
          </button>
          <button
            onClick={() => setActiveCategory('amenities')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeCategory === 'amenities'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Daily Services ({amenities.length})
          </button>
        </div>
      </div>

      {/* Density Summary Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 pb-6 border-b border-slate-100">
        <div className="p-3.5 bg-indigo-50/50 rounded-xl border border-indigo-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
            <School className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold font-mono text-slate-900">{counts.primarySchoolsCount}</div>
            <div className="text-xs text-slate-500 font-medium">Primary Schools (1km)</div>
          </div>
        </div>

        <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Train className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold font-mono text-slate-900">{counts.mrtStationsCount}</div>
            <div className="text-xs text-slate-500 font-medium">MRT Stations (1km)</div>
          </div>
        </div>

        <div className="p-3.5 bg-amber-50/50 rounded-xl border border-amber-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold font-mono text-slate-900">{counts.hawkersCount}</div>
            <div className="text-xs text-slate-500 font-medium">Hawkers / Food</div>
          </div>
        </div>

        <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold font-mono text-slate-900">{counts.supermarketsCount}</div>
            <div className="text-xs text-slate-500 font-medium">Supermarkets</div>
          </div>
        </div>
      </div>

      {/* MOE 1-KM Priority Registration Note */}
      <div className="mt-4 mb-5 p-3.5 bg-gradient-to-r from-amber-50/80 to-amber-100/40 rounded-xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
        <div>
          <span className="font-bold">MOE Primary One (P1) Priority Registration Radius: </span>
          <span>
            Under Singapore Ministry of Education rules, children residing within <strong>1 km</strong> of a primary school enjoy top tier priority in Phase 2C balloting. This boundary significantly protects resale property values and resale demand.
          </span>
        </div>
      </div>

      {/* Listings */}
      <div className="space-y-4">
        {/* Primary Schools */}
        {(activeCategory === 'all' || activeCategory === 'schools') && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5 flex items-center justify-between">
              <span>Primary Schools within 1 km (MOE Phase 2C Tier 1)</span>
              <span className="text-[11px] text-slate-400 font-normal">Calculated by straight-line distance</span>
            </h3>

            {schools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {schools.map((sch, i) => (
                  <div key={i} className="p-3 rounded-xl border border-indigo-100 bg-indigo-50/30 flex items-start justify-between text-xs gap-3">
                    <div className="flex items-start gap-2.5">
                      <School className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900">{sch.name}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{sch.address}</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-mono font-bold text-[11px]">
                        {sch.distanceMeters}m
                      </span>
                      <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Tier 1 (&lt;1km)</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-500">
                No primary schools located strictly within 1 km of this geocoded point. Neighboring schools available in the 1-2 km perimeter.
              </div>
            )}
          </div>
        )}

        {/* MRT Stations */}
        {(activeCategory === 'all' || activeCategory === 'mrts') && (
          <div className="pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
              Rapid Transit (MRT & LRT) Proximity
            </h3>

            {mrts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mrts.map((mrt, i) => (
                  <div key={i} className="p-3 rounded-xl border border-blue-100 bg-blue-50/30 flex items-start justify-between text-xs gap-3">
                    <div className="flex items-start gap-2.5">
                      <Train className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          {mrt.name}
                          <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.2 rounded font-mono font-semibold">
                            {mrt.code}
                          </span>
                        </div>
                        <div className="text-slate-500 text-[11px] mt-0.5">{mrt.line} Line</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1 font-mono font-bold text-slate-800 text-[11px]">
                        <Footprints className="w-3 h-3 text-slate-400" />
                        ~{mrt.walkMinutes} min walk
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{mrt.distanceMeters}m away</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-500">
                No direct MRT station within 1 km. Served by feeder buses and arterial roads.
              </div>
            )}
          </div>
        )}

        {/* Daily Services */}
        {(activeCategory === 'all' || activeCategory === 'amenities') && (
          <div className="pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
              Public Amenities, Food & Health
            </h3>

            {amenities.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {amenities.map((a, i) => (
                  <div key={i} className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start justify-between text-xs gap-2">
                    <div>
                      <div className="font-semibold text-slate-900">{a.name}</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">{a.category}</div>
                    </div>
                    <span className="font-mono text-slate-500 text-[11px] shrink-0">{a.distanceMeters}m</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-500">
                Essential neighborhood shops and coffee shops within estate perimeter.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
