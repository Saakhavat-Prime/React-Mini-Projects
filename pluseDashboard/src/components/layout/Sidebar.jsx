import React from "react";
import { navItems, configItems } from "../../data/dashboardData";

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

export default function Sidebar() {
  return (
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
  );
}