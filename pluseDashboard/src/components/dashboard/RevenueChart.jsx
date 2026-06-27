import React from "react";
import { revenueByMonth } from "../../data/dashboardData";

export default function RevenueChart() {
  const maxBarHeight = 140;
  const maxValue = 130;

  return (
    <div
      className="min-w-0 bg-slate-50 border border-slate-200 rounded-xl p-5"
      style={{ flex: "1.65 1 0%" }}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: 18 }}>
        <h2 className="text-sm font-semibold text-slate-900">Revenue by plan</h2>
        <div className="flex" style={{ gap: 14 }}>
          <span className="flex items-center text-slate-500" style={{ fontSize: 11.5 }}>
            <span
              className="rounded-full bg-indigo-500 inline-block mr-2"
              style={{ width: 6, height: 6 }}
            />
            Annual
          </span>
          <span className="flex items-center text-slate-500" style={{ fontSize: 11.5 }}>
            <span
              className="rounded-full bg-indigo-200 inline-block mr-2"
              style={{ width: 6, height: 6 }}
            />
            Monthly
          </span>
        </div>
      </div>

      <div
        className="flex items-end justify-between px-2"
        style={{ height: 170, gap: 14 }}
      >
        {revenueByMonth.map((row) => (
          <div key={row.month} className="flex flex-col items-center flex-1">
            <div
              className="flex items-end mb-2"
              style={{ height: maxBarHeight, gap: 4 }}
            >
              <div
                className="rounded-t bg-indigo-200"
                style={{ width: 10, height: (row.monthly / maxValue) * maxBarHeight }}
              />
              <div
                className="rounded-t bg-indigo-600"
                style={{ width: 10, height: (row.annual / maxValue) * maxBarHeight }}
              />
            </div>
            <span className="font-mono text-slate-500" style={{ fontSize: 10.5 }}>
              {row.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}