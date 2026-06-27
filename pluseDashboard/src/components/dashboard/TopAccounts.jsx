import React from "react";
import { topAccounts } from "../../data/dashboardData";

export default function TopAccounts() {
  return (
    <div className="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-xl p-5">
      <h2
        className="text-sm font-semibold text-slate-900"
        style={{ marginBottom: 18 }}
      >
        Top accounts
      </h2>
      <div>
        {topAccounts.map((acc, i) => (
          <div
            key={acc.name}
            className={`flex items-center justify-between py-3 ${
              i !== topAccounts.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <div className="flex items-center">
              <div
                className={`rounded-lg flex-shrink-0 mr-3 ${acc.color}`}
                style={{ width: 30, height: 30 }}
              />
              <div>
                <div className="text-sm font-medium text-slate-900">{acc.name}</div>
                <div className="text-slate-500" style={{ fontSize: 11.5 }}>
                  {acc.plan}
                </div>
              </div>
            </div>
            <div className="text-sm font-semibold font-mono text-slate-900">
              {acc.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}