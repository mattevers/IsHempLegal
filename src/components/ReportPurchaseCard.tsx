"use client";

import { useState } from "react";

interface Props {
  states: { slug: string; name: string }[];
}

export function ReportPurchaseCard({ states }: Props) {
  const [selectedState, setSelectedState] = useState("");
  const [loading, setLoading] = useState(false);

  async function handlePurchase() {
    if (!selectedState) return;

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stateSlug: selectedState }),
      });
      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-brand-border bg-brand-card p-8">
      <div className="text-center mb-6">
        <p className="text-gray-400 text-sm mb-1">One-time purchase</p>
        <p className="text-5xl font-black text-white">
          $7<span className="text-2xl">.99</span>
        </p>
        <p className="text-gray-500 text-sm mt-2">Instant PDF download</p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="report-state"
            className="block text-gray-400 text-sm mb-1.5"
          >
            Select your state
          </label>
          <select
            id="report-state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full rounded-xl border border-brand-border bg-brand-dark px-4 py-3 text-white text-base focus:outline-none focus:ring-2 focus:ring-brand-green appearance-none cursor-pointer"
          >
            <option value="">Choose a state...</option>
            {states.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handlePurchase}
          disabled={!selectedState || loading}
          className="block w-full rounded-xl bg-brand-orange hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg py-4 text-center transition-colors cursor-pointer"
        >
          {loading ? "Redirecting to checkout..." : "Purchase Report \u2192"}
        </button>

        <p className="text-center text-gray-600 text-xs">
          Secure payment via Stripe. Report delivered instantly as PDF.
        </p>
      </div>
    </div>
  );
}
