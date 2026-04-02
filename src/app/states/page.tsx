import type { Metadata } from "next";
import { getAllStates } from "@/data/states";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Hemp Laws by State — Delta-8, CBD & THCA Legal Status All 50 States",
  description:
    "See the legal status of Delta-8, CBD, THCA, and other hemp compounds in all 50 US states. Updated for the 2026 federal hemp law changes.",
  alternates: { canonical: "https://ishemplegal.com/states" },
};

export default function AllStatesPage() {
  const states = getAllStates();

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
        Hemp Laws by State
      </h1>
      <p className="text-gray-400 mb-8">
        Legal status of Delta-8, CBD, and hemp compounds across all 50 states.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {states.map((state) => (
          <a
            key={state.slug}
            href={`/states/${state.slug}`}
            className="rounded-2xl border border-brand-border bg-brand-card p-5 hover:border-brand-green/50 transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white font-bold group-hover:text-green-400 transition-colors">
                {state.name}
              </h2>
              <span className="text-gray-500 text-sm">
                {state.abbreviation}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">Delta-8</span>
                <StatusBadge status={state.compounds.delta8.status} size="sm" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">CBD</span>
                <StatusBadge status={state.compounds.cbd.status} size="sm" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">THCA</span>
                <StatusBadge status={state.compounds.thca.status} size="sm" />
              </div>
            </div>
            {state.federalChangeImpact === "high" && (
              <div className="mt-3 text-orange-400 text-xs font-medium">
                High 2026 federal impact
              </div>
            )}
          </a>
        ))}
      </div>
    </main>
  );
}
