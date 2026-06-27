import React from "react";
import { Calendar, Download } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-7">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">Overview</h1>
        <p className="text-sm text-slate-500 mt-1">
          Last 30 days · compared to previous period
        </p>
      </div>
      <div className="flex items-center">
        <button className="flex items-center text-xs font-mono text-slate-500 border border-slate-200 px-3 py-2 rounded-lg hover:bg-slate-50 mr-3">
          <Calendar className="w-3 h-3 mr-2" />
          Jun 1 – Jun 30
        </button>
        <button className="flex items-center text-xs font-mono text-slate-500 border border-slate-200 px-3 py-2 rounded-lg hover:bg-slate-50 mr-3">
          <Download className="w-3 h-3 mr-2" />
          Export
        </button>
        <div
          className="rounded-full bg-gradient-to-br from-indigo-500 to-indigo-300"
          style={{ width: 34, height: 34 }}
        />
      </div>
    </div>
  );
}