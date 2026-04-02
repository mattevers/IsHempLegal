import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getStateBySlug, getAllStates } from "@/data/states";
import { StatusBadge } from "@/components/StatusBadge";
import { ResultCard } from "@/components/ResultCard";
import {
  COMPOUND_LABELS,
  PRODUCT_LABELS,
  Compound,
  ProductType,
} from "@/types/hemp";

export async function generateStaticParams() {
  return getAllStates().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};
  return {
    title: `Hemp Laws in ${state.name} — Delta-8, CBD & THCA Legal Status 2026`,
    description: `Is Delta-8 legal in ${state.name}? Check the current legal status of CBD, THCA, HHC, and all hemp compounds. Updated for 2026 federal changes.`,
    alternates: {
      canonical: `https://ishemplegal.com/states/${state.slug}`,
    },
  };
}

export default async function StatePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ compound?: string; product?: string }>;
}) {
  const { slug } = await params;
  const { compound: highlightedCompound } = await searchParams;

  const state = getStateBySlug(slug);
  if (!state) notFound();

  const compounds = Object.keys(COMPOUND_LABELS) as Compound[];

  // FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is Delta-8 legal in ${state.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: state.compounds.delta8.detail,
        },
      },
      {
        "@type": "Question",
        name: `Can I buy CBD in ${state.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: state.compounds.cbd.detail,
        },
      },
      {
        "@type": "Question",
        name: `What is the age limit for hemp products in ${state.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The minimum age to purchase hemp products in ${state.name} is ${state.ageRestriction}.`,
        },
      },
      {
        "@type": "Question",
        name: `Will hemp products be legal in ${state.name} after November 2026?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: state.federalChangeNote,
        },
      },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="text-gray-500 text-sm mb-2">
          <a href="/states" className="hover:text-gray-400">
            All States
          </a>{" "}
          &rarr; {state.name}
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white">
          Hemp Laws in {state.name}
        </h1>
        <p className="text-gray-400 mt-2">
          Last updated:{" "}
          {new Date(state.lastUpdated).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Highlighted result from tool (if compound selected) */}
      {highlightedCompound &&
        state.compounds[highlightedCompound as Compound] && (
          <div className="mb-10">
            <ResultCard
              compoundLabel={
                COMPOUND_LABELS[highlightedCompound as Compound]
              }
              stateName={state.name}
              compoundStatus={
                state.compounds[highlightedCompound as Compound]
              }
              federalChangeNote={state.federalChangeNote}
              federalChangeImpact={state.federalChangeImpact}
            />
          </div>
        )}

      {/* All Compounds Table */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">
          All Compounds in {state.name}
        </h2>
        <div className="rounded-2xl border border-brand-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-brand-card border-b border-brand-border">
                <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">
                  Compound
                </th>
                <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">
                  Status
                </th>
                <th className="text-left text-gray-400 text-sm font-medium px-4 py-3 hidden md:table-cell">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {compounds.map((compound, i) => {
                const cs = state.compounds[compound];
                return (
                  <tr
                    key={compound}
                    className={`border-b border-brand-border/50 ${
                      i % 2 === 0 ? "bg-brand-dark" : "bg-brand-card/30"
                    }`}
                  >
                    <td className="px-4 py-3 text-white font-medium text-sm">
                      {COMPOUND_LABELS[compound]}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={cs.status} size="sm" />
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-sm hidden md:table-cell">
                      {cs.detail}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Types Grid */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">By Product Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {(Object.keys(PRODUCT_LABELS) as ProductType[]).map((pt) => (
            <div
              key={pt}
              className="rounded-xl border border-brand-border bg-brand-card p-4 flex items-center justify-between"
            >
              <span className="text-gray-300 text-sm">
                {PRODUCT_LABELS[pt]}
              </span>
              <StatusBadge status={state.productTypes[pt]} size="sm" />
            </div>
          ))}
        </div>
      </section>

      {/* Shipping & Age */}
      <section className="mb-10 grid md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-brand-border bg-brand-card p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">
            Age Requirement
          </p>
          <p className="text-white font-bold text-2xl">
            {state.ageRestriction}+
          </p>
        </div>
        <div className="rounded-xl border border-brand-border bg-brand-card p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">
            Shipping Into {state.abbreviation}
          </p>
          <StatusBadge status={state.shippingIn} />
        </div>
        <div className="rounded-xl border border-brand-border bg-brand-card p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">
            Shipping Out of {state.abbreviation}
          </p>
          <StatusBadge status={state.shippingOut} />
        </div>
      </section>

      {/* 2026 Federal Impact */}
      {state.federalChangeImpact !== "low" && (
        <section className="mb-10">
          <div className="rounded-2xl bg-orange-900/20 border border-orange-700/40 p-6">
            <h2 className="text-orange-400 font-bold text-lg mb-2">
              2026 Federal Law Impact on {state.name}
            </h2>
            <p className="text-orange-300/80">{state.federalChangeNote}</p>
            <a
              href="/2026-federal-ban"
              className="mt-3 inline-block text-orange-400 hover:text-orange-300 font-medium underline text-sm"
            >
              Full federal ban details &rarr;
            </a>
          </div>
        </section>
      )}

      {/* Notes */}
      {state.notes && (
        <div className="rounded-xl bg-blue-900/20 border border-blue-800/40 p-4 mb-10">
          <p className="text-blue-300 text-sm">
            <strong>Note:</strong> {state.notes}
          </p>
        </div>
      )}

      {/* Compare Links */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">
          Compare {state.name} With Other States
        </h2>
        <div className="flex flex-wrap gap-2">
          {getAllStates()
            .filter((s) => s.slug !== state.slug)
            .slice(0, 10)
            .map((other) => (
              <a
                key={other.slug}
                href={`/compare/${state.slug}-vs-${other.slug}`}
                className="rounded-lg border border-brand-border bg-brand-card px-3 py-1.5 text-gray-300 hover:text-white text-sm transition-colors"
              >
                vs {other.name}
              </a>
            ))}
        </div>
      </section>
    </main>
  );
}
