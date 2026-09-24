import React, { useState } from 'react';
import { Calculator, DollarSign, Wallet, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PropertyData } from '../types/property';

interface BuyVsRentCalculatorProps {
  data: PropertyData;
}

export const BuyVsRentCalculator: React.FC<BuyVsRentCalculatorProps> = ({ data }) => {
  const { hdbMetrics, estate } = data;

  const [purchasePrice, setPurchasePrice] = useState<number>(hdbMetrics.medianPrice4Room);
  const [downpaymentPct, setDownpaymentPct] = useState<number>(25); // 25% standard downpayment
  const [interestRate, setInterestRate] = useState<number>(2.6); // 2.6% HDB concessionary rate
  const [loanTenureYears, setLoanTenureYears] = useState<number>(25);
  const [monthlyCpfOa, setMonthlyCpfOa] = useState<number>(1800); // Typical combined CPF OA for young couple
  const monthlyRent = hdbMetrics.medianRent4Room;

  // Monthly mortgage calculation: M = P * [ r(1+r)^n ] / [ (1+r)^n - 1 ]
  const loanAmount = purchasePrice * (1 - downpaymentPct / 100);
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTenureYears * 12;

  const monthlyMortgage = Math.round(
    loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
  );

  const outOfPocketMortgageCash = Math.max(0, monthlyMortgage - monthlyCpfOa);
  const downpaymentAmount = Math.round(purchasePrice * (downpaymentPct / 100));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Calculator className="w-5 h-5 text-indigo-600" />
            Interactive Buy vs. Rent Cashflow Simulator
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Simulate your monthly cash outlay in {estate} accounting for CPF Ordinary Account (OA) servicing
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5">
        {/* Sliders Column */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>Target Purchase Price</span>
              <span className="font-mono text-indigo-700 font-bold">${purchasePrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="300000"
              max="1300000"
              step="10000"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-0.5">
              <span>$300k (3-Room)</span>
              <span>${(hdbMetrics.medianPrice4Room / 1000).toFixed(0)}k (4-Rm Median)</span>
              <span>$1.3M (Prime/Exec)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Downpayment %</span>
                <span className="font-mono text-indigo-700 font-bold">{downpaymentPct}% (${downpaymentAmount.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min="20"
                max="35"
                step="5"
                value={downpaymentPct}
                onChange={(e) => setDownpaymentPct(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="text-[10px] text-slate-400 mt-0.5">20% HDB loan / 25% Bank loan</div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Mortgage Rate</span>
                <span className="font-mono text-indigo-700 font-bold">{interestRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="2.0"
                max="4.5"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="text-[10px] text-slate-400 mt-0.5">2.6% HDB peg / ~2.8-3.2% Bank</div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>Combined Couple Monthly CPF OA Contribution</span>
              <span className="font-mono text-indigo-700 font-bold">${monthlyCpfOa.toLocaleString()} / mo</span>
            </div>
            <input
              type="range"
              min="0"
              max="4000"
              step="100"
              value={monthlyCpfOa}
              onChange={(e) => setMonthlyCpfOa(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <div className="text-[10px] text-slate-400 mt-0.5">
              Singapore working couples contribute 23% of gross wages (up to ceiling) into CPF Ordinary Account
            </div>
          </div>
        </div>

        {/* Comparison Result Box */}
        <div className="lg:col-span-5 bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col justify-between">
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Monthly Out-of-Pocket Cash Comparison
            </h3>

            {/* Buying Option */}
            <div className="p-3 bg-white rounded-xl border border-indigo-200/80 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-900">Buying Option:</span>
                <span className="text-[11px] font-mono text-slate-400">Total: ${monthlyMortgage.toLocaleString()}/mo</span>
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-indigo-600 font-mono">
                  ${outOfPocketMortgageCash.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ mo actual cash out-of-pocket</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                ${Math.min(monthlyMortgage, monthlyCpfOa).toLocaleString()}/mo paid directly by CPF OA savings
              </p>
            </div>

            {/* Renting Option */}
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">Renting Option:</span>
                <span className="text-[11px] font-mono text-slate-400">{estate} Median</span>
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-rose-600 font-mono">
                  ${monthlyRent.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ mo 100% cash out-of-pocket</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                CPF OA cannot be used to pay private or open-market rental leases
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
            <span className="font-semibold text-emerald-700">
              Cashflow Difference:
            </span>
            <span className="font-bold font-mono text-emerald-700">
              Save ${(monthlyRent - outOfPocketMortgageCash).toLocaleString()} cash/mo by buying
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
