import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function KpiCard({ label, value, delta, direction }) {
  const isUp = direction === "up";
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex-1 min-w-0">
      <div className="text-xs text-slate-500 mb-3">{label}</div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold tracking-tight text-slate-900">{value}</span>
        <span
          className={`flex items-center text-xs font-medium font-mono px-2 py-1 rounded-md ${
            isUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"
          }`}
        >
          {isUp ? (
            <TrendingUp className="w-3 h-3 mr-1" />
          ) : (
            <TrendingDown className="w-3 h-3 mr-1" />
          )}
          {delta}
        </span>
      </div>
    </div>
  );
}