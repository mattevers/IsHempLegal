import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getStateBySlug, getAllStates } from "@/data/states";
import { StatusBadge } from "@/components/StatusBadge";
import { COMPOUND_LABELS, Compound } from "@/types/hemp";
import { generateCompareNarrative } from "@/lib/compareNarrative";

export async function generateStaticParams() {
  const states = getAllStates();
  const pairs: { pair: string }[] = [];
  for (let i = 0; i < states.length; i++) {
    for (let j = i + 1; j < states.length; j++) {
      pairs.push({ pair: `${states[i].slug}-vs-${states[j].slug}` });
    }
  }
  return pairs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pair: string }>;
}): Promise<Metadata> {
  const { pair } = await params;
  const [slug1, slug2] = pair.split("-vs-");
  const s1 = getStateBySlug(slug1);
  const s2 = getStateBySlug(slug2);
  if (!s1 || !s2) return {};
  return {
    title: `Hemp Laws: ${s1.name} vs ${s2.name} — Delta-8, CBD & THCA Comparison`,
    description: `Compare hemp and Delta-8 laws between ${s1.name} and ${s2.name}. See side-by-side legal status for all compounds.`,
    alternates: {
      canonical: `https://www.ishemplegal.com/compare/${pair}`,
    },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ pair: string }>;
}) {
  const { pair } = await params;
  const [slug1, slug2] = pair.split("-vs-");
  const s1 = getStateBySlug(slug1);
  const s2 = getStateBySlug(slug2);
  if (!s1 || !s2) notFound();

  const compounds = Object.keys(COMPOUND_LABELS) as Compound[];
  const narrative = generateCompareNarrative(s1, s2);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-gray-500 text-sm mb-2">
        <a href="/states" className="hover:text-gray-400">
          All States
        </a>{" "}
        &rarr; Compare
      </div>
      <h1 className="text-3xl font-black text-white mb-2">
        Hemp Laws: {s1.name} vs {s2.name}
      </h1>
      <p className="text-gray-400 mb-4">
        Side-by-side comparison of hemp compound laws
      </p>

      {/* Narrative Summary */}
      <div className="rounded-2xl border border-brand-border bg-brand-card p-6 mb-8">
        <p className="text-gray-300 leading-relaxed">{narrative}</p>
      </div>

      <div className="rounded-2xl border border-brand-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-brand-card border-b border-brand-border">
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">
                Compound
              </th>
              <th className="text-center text-white text-sm font-bold px-4 py-3">
                {s1.name}
              </th>
              <th className="text-center text-white text-sm font-bold px-4 py-3">
                {s2.name}
              </th>
            </tr>
          </thead>
          <tbody>
            {compounds.map((compound, i) => (
              <tr
                key={compound}
                className={`border-b border-brand-border/50 ${
                  i % 2 === 0 ? "bg-brand-dark" : "bg-brand-card/30"
                }`}
              >
                <td className="px-4 py-3 text-gray-300 text-sm">
                  {COMPOUND_LABELS[compound]}
                </td>
                <td className="px-4 py-3 text-center">
                  <StatusBadge
                    status={s1.compounds[compound].status}
                    size="sm"
                  />
                </td>
                <td className="px-4 py-3 text-center">
                  <StatusBadge
                    status={s2.compounds[compound].status}
                    size="sm"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Links back to individual state pages */}
      <div className="mt-8 flex gap-4">
        <a
          href={`/states/${s1.slug}`}
          className="flex-1 rounded-xl border border-brand-border bg-brand-card p-4 text-center hover:border-green-700 transition-colors"
        >
          <p className="text-white font-bold">{s1.name} Full Guide &rarr;</p>
        </a>
        <a
          href={`/states/${s2.slug}`}
          className="flex-1 rounded-xl border border-brand-border bg-brand-card p-4 text-center hover:border-green-700 transition-colors"
        >
          <p className="text-white font-bold">{s2.name} Full Guide &rarr;</p>
        </a>
      </div>

      {/* Related Compound Pages */}
      <section className="mt-10">
        <h2 className="text-lg font-bold text-white mb-3">
          Learn About These Compounds
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: "delta-8", label: "Delta-8 THC" },
            { slug: "cbd", label: "CBD" },
            { slug: "thca", label: "THCA" },
            { slug: "hhc", label: "HHC" },
          ].map((c) => (
            <a
              key={c.slug}
              href={`/compounds/${c.slug}`}
              className="rounded-lg border border-brand-border bg-brand-card px-3 py-1.5 text-gray-300 hover:text-white text-sm transition-colors"
            >
              {c.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
