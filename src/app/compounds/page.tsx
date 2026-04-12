import type { Metadata } from "next";
import { getAllStates } from "@/data/states";
import { StatusBadge } from "@/components/StatusBadge";
import {
  COMPOUND_SLUGS,
  COMPOUND_SLUG_LABELS,
  Compound,
} from "@/types/hemp";

export const metadata: Metadata = {
  title: "Hemp Compounds Guide — Delta-8, CBD, THCA, HHC & More",
  description:
    "Learn about every hemp-derived compound: Delta-8, CBD, THCA, HHC, Delta-9, Delta-10, THC-O, and THCP. Legal status, effects, and 2026 federal ban impact.",
  alternates: { canonical: "https://www.ishemplegal.com/compounds" },
};

export default function CompoundsIndexPage() {
  const states = getAllStates();
  const compoundSlugs = Object.keys(COMPOUND_SLUGS);

  const compoundStats = compoundSlugs.map((slug) => {
    const key = COMPOUND_SLUGS[slug] as Compound;
    const label = COMPOUND_SLUG_LABELS[slug];
    const legal = states.filter((s) => s.compounds[key].status === "legal").length;
    const restricted = states.filter((s) => s.compounds[key].status === "restricted").length;
    const banned = states.filter((s) => s.compounds[key].status === "banned").length;
    const gray = states.filter((s) => s.compounds[key].status === "gray").length;

    return { slug, key, label, legal, restricted, banned, gray };
  });

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
        Hemp Compounds Guide
      </h1>
      <p className="text-gray-400 mb-10">
        Legal status overview for all hemp-derived compounds across 50 states.
        Updated for the 2026 federal changes.
      </p>

      <div className="grid gap-4">
        {compoundStats.map((c) => (
          <a
            key={c.slug}
            href={`/compounds/${c.slug}`}
            className="rounded-2xl border border-brand-border bg-brand-card p-6 hover:border-brand-green/50 transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                {c.label}
              </h2>
              <span className="text-gray-500 text-sm">View details &rarr;</span>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="text-green-400">
                {c.legal} legal
              </span>
              <span className="text-yellow-400">
                {c.restricted} restricted
              </span>
              <span className="text-orange-400">
                {c.gray} gray area
              </span>
              <span className="text-red-400">
                {c.banned} banned
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Link to 2026 ban */}
      <section className="mt-10 rounded-2xl bg-orange-900/20 border border-orange-700/40 p-6">
        <h2 className="text-orange-400 font-bold text-lg mb-2">
          2026 Federal Ban Impact
        </h2>
        <p className="text-orange-300/80 text-sm mb-3">
          Most intoxicating hemp compounds will be federally reclassified as
          controlled substances starting November 12, 2026. CBD remains legal.
        </p>
        <a
          href="/2026-federal-ban"
          className="text-orange-400 hover:text-orange-300 font-medium underline text-sm"
        >
          Read the full breakdown &rarr;
        </a>
      </section>
    </main>
  );
}
