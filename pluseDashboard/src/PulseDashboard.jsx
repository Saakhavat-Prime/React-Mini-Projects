import { TrendingUp, TrendingDown, Download, Calendar } from "lucide-react";

const kpis = [
  { label: "Active users", value: "12,940", delta: "+4.2%", direction: "up" },
  { label: "Churn rate", value: "1.8%", delta: "+0.3%", direction: "down" },
  { label: "Avg. session", value: "6m 12s", delta: "+0.6%", direction: "up" },
];

const revenueByMonth = [
  { month: "Jan", annual: 84, monthly: 60 },
  { month: "Feb", annual: 92, monthly: 70 },
  { month: "Mar", annual: 78, monthly: 55 },
  { month: "Apr", annual: 104, monthly: 80 },
  { month: "May", annual: 96, monthly: 66 },
  { month: "Jun", annual: 130, monthly: 90 },
];

const topAccounts = [
  { name: "Marlow Studio", plan: "Annual plan", amount: "$4,200", color: "bg-orange-100" },
  { name: "Atlas Civic", plan: "Annual plan", amount: "$3,860", color: "bg-indigo-100" },
  { name: "Driftwood Co.", plan: "Monthly plan", amount: "$2,140", color: "bg-emerald-100" },
  { name: "Verge Labs", plan: "Annual plan", amount: "$1,975", color: "bg-pink-100" },
];

const navItems = [
  { label: "Overview", active: true },
  { label: "Audience", active: false },
  { label: "Revenue", active: false },
  { label: "Retention", active: false },
];

const configItems = [
  { label: "Data sources", active: false },
  { label: "Team", active: false },
];

function NavRow({ label, active }) {
  return (
    <div
      className={`flex items-center px-2 py-2 rounded-lg text-sm mb-1 ${
        active ? "bg-white bg-opacity-10 text-white font-medium" : "text-slate-400"
      }`}
    >
      <span
        className={`w-4 h-4 rounded mr-2 ${active ? "bg-indigo-500" : "bg-slate-600"}`}
      />
      {label}
    </div>
  );
}

function KpiCard({ label, value, delta, direction }) {
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

export default function PulseDashboard() {
  const maxBarHeight = 140;
  const maxValue = 130;

  return (
    <div
      className="flex w-full bg-white font-sans overflow-hidden rounded-xl border border-slate-200"
      style={{ height: 800 }}
    >
      {/* Sidebar */}
      <aside className="bg-slate-950 text-white p-6 flex-shrink-0" style={{ width: 220 }}>
        <div className="flex items-center font-bold text-lg mb-9">
          <span
            className="rounded-full bg-indigo-500 inline-block mr-2"
            style={{ width: 10, height: 10 }}
          />
          Pulse
        </div>

        <div className="font-mono uppercase text-slate-500 mb-3 mt-2" style={{ fontSize: 10.5, letterSpacing: "0.1em" }}>
          Workspace
        </div>
        {navItems.map((item) => (
          <NavRow key={item.label} {...item} />
        ))}

        <div className="font-mono uppercase text-slate-500 mb-3 mt-6" style={{ fontSize: 10.5, letterSpacing: "0.1em" }}>
          Configure
        </div>
        {configItems.map((item) => (
          <NavRow key={item.label} {...item} />
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-7 min-w-0 overflow-y-auto">
        {/* Topbar */}
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

        {/* KPI row */}
        <div className="flex mb-5">
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
          {kpis.map((kpi, i) => (
            <div
              key={kpi.label}
              className={i !== kpis.length - 1 ? "flex-1 mr-4 min-w-0" : "flex-1 min-w-0"}
            >
              <KpiCard {...kpi} />
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="flex" style={{ gap: 18 }}>
          {/* Revenue chart */}
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

          {/* Top accounts */}
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
        </div>
      </main>
    </div>
  );
}
