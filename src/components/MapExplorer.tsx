"use client";

import { useState } from "react";
import USMap from "./USMap";
import { getAllStates } from "@/data/states";
import {
  Compound,
  COMPOUND_LABELS,
  LegalStatus,
  STATUS_CONFIG,
} from "@/types/hemp";

const STATUS_COLORS: Record<LegalStatus, string> = {
  legal: "#16a34a",
  restricted: "#d97706",
  gray: "#f97316",
  banned: "#dc2626",
  medical_only: "#2563eb",
  unknown: "#4b5563",
};

const states = getAllStates();
const compounds = Object.keys(COMPOUND_LABELS) as Compound[];

export function MapExplorer() {
  const [selectedCompound, setSelectedCompound] = useState<Compound>("delta8");

  const colorMap: Record<string, string> = {};
  for (const state of states) {
    const status = state.compounds[selectedCompound]?.status ?? "unknown";
    colorMap[state.slug] = STATUS_COLORS[status];
  }

  return (
    <div>
      {/* Compound selector */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {compounds.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCompound(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
              selectedCompound === c
                ? "bg-brand-green text-white"
                : "border border-brand-border text-gray-400 hover:text-white hover:border-gray-500"
            }`}
          >
            {COMPOUND_LABELS[c]}
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="rounded-2xl border border-brand-border bg-brand-card p-4 md:p-6">
        <USMap colorMap={colorMap} defaultColor="#1f2937" />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {(Object.keys(STATUS_COLORS) as LegalStatus[])
          .filter((s) => s !== "unknown")
          .map((status) => (
            <div key={status} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: STATUS_COLORS[status] }}
              />
              <span className="text-gray-400 text-xs">
                {STATUS_CONFIG[status].label}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
