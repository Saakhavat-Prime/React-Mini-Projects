import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import StatsSection from "./components/dashboard/StatsSection";
import RevenueChart from "./components/dashboard/RevenueChart";
import TopAccounts from "./components/dashboard/TopAccounts";

export default function PulseDashboard() {
  return (
    <div
      className="flex w-full bg-white font-sans overflow-hidden rounded-xl border border-slate-200"
      style={{ height: 800 }}
    >
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Layout Area */}
      <main className="flex-1 p-7 min-w-0 overflow-y-auto">
        {/* Top Header Controls */}
        <Header />

        {/* High-Level Overview Cards */}
        <StatsSection />

        {/* Data Analytics Grid */}
        <div className="flex" style={{ gap: 18 }}>
          <RevenueChart />
          <TopAccounts />
        </div>
      </main>
    </div>
  );
}