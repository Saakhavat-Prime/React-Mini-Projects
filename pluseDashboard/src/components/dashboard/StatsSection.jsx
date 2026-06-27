import React from "react";
import KpiCard from "./KpiCard";
import { kpis } from "../../data/dashboardData";

export default function StatsSection() {
  return (
    <div className="flex mb-5">
      {/* MRR Unique Styled Card */}
      <div className="bg-slate-950 text-white rounded-xl p-4 flex-1 min-w-0 mr-4">
        <div className="text-xs text-slate-400 mb-3">Monthly recurring revenue</div>
        <div className="text-2xl font-bold tracking-tight mb-2">$84,210</div>
        <svg viewBox="0 0 64 24" className="mb-3" style={{ width: 64, height: 24 }}>
          <polyline
            points="0,20 10,16 20,17 30,10 40,12 50,6 64,3"
            fill="none"
            stroke="#7B85E8"
            strokeWidth="2"
          />
        </svg>
        <p className="text-slate-300 leading-snug" style={{ fontSize: 11.5 }}>
          Up from $76,940 last month, mostly new annual plans.
        </p>
      </div>

      {/* Reusable KPI components */}
      {kpis.map((kpi, i) => (
        <div
          key={kpi.label}
          className={i !== kpis.length - 1 ? "flex-1 mr-4 min-w-0" : "flex-1 min-w-0"}
        >
          <KpiCard {...kpi} />
        </div>
      ))}
    </div>
  );
}