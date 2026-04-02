import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllStates } from "@/data/states";
import { StatusBadge } from "@/components/StatusBadge";
import {
  COMPOUND_SLUGS,
  COMPOUND_SLUG_LABELS,
  COMPOUND_LABELS,
  Compound,
} from "@/types/hemp";

const COMPOUND_DESCRIPTIONS: Record<string, { what: string; federal: string }> =
  {
    "delta-8": {
      what: "Delta-8 THC is a naturally occurring cannabinoid found in small amounts in hemp plants. It produces mild psychoactive effects — roughly half as potent as Delta-9 THC. Most commercial Delta-8 is synthesized from CBD through chemical conversion. It became widely popular after the 2018 Farm Bill created a legal gray area for hemp-derived cannabinoids.",
      federal:
        "Currently legal under the 2018 Farm Bill if derived from hemp. The 2026 federal law will reclassify Delta-8 as a controlled substance by including it in the total THC calculation.",
    },
    "delta-9": {
      what: "Delta-9 THC is the primary psychoactive compound in cannabis. Hemp-derived Delta-9 refers to products made from hemp that contain less than 0.3% Delta-9 THC by dry weight — which allows for significant amounts of THC per serving in edibles and beverages (a heavy gummy can contain 5-10mg while staying under 0.3% by total weight).",
      federal:
        "Hemp-derived Delta-9 at or below 0.3% by dry weight remains legal under both the 2018 Farm Bill and the 2026 update, as long as total THC (including other cannabinoids) stays under 0.3%.",
    },
    cbd: {
      what: "CBD (cannabidiol) is a non-psychoactive cannabinoid found abundantly in hemp. It's the largest segment of the hemp market, used in oils, gummies, topicals, and beverages. CBD does not produce a high and has been widely studied for potential wellness benefits.",
      federal:
        "CBD remains federally legal under both the 2018 Farm Bill and the 2026 law, provided the product contains less than 0.3% total THC. Pure CBD isolate and broad-spectrum products are unaffected by the new law.",
    },
    thca: {
      what: "THCA (tetrahydrocannabinolic acid) is the raw, non-psychoactive precursor to THC found in cannabis and hemp flower. When heated — by smoking, vaping, or cooking — THCA converts to Delta-9 THC. This 'THCA loophole' allowed retailers to sell what is essentially marijuana as hemp, since THCA was not counted in the 0.3% THC limit.",
      federal:
        "The 2026 federal law specifically closes the THCA loophole by including THCA in the total THC calculation. THCA-rich hemp flower and products will be classified as controlled substances.",
    },
    hhc: {
      what: "HHC (hexahydrocannabinol) is a hydrogenated form of THC. It's created by adding hydrogen molecules to THC through a chemical process. HHC produces psychoactive effects similar to Delta-9 THC but is slightly less potent. It gained popularity as an alternative in states that banned Delta-8.",
      federal:
        "HHC falls under the 2026 total THC calculation. As a THC isomer, it will be included in the controlled substance classification.",
    },
    "delta-10": {
      what: "Delta-10 THC is a minor cannabinoid that produces mild psychoactive effects, generally considered less potent than Delta-8. Like Delta-8, most commercial Delta-10 is synthesized from CBD. It's less common in retail but growing in popularity.",
      federal:
        "Delta-10 will be included in the total THC calculation under the 2026 law and classified as a controlled substance.",
    },
    "thc-o": {
      what: "THC-O (THC-O-acetate) is a synthetic cannabinoid created in a laboratory by acetylating THC. It does not occur naturally in the cannabis plant. THC-O is reportedly 2-3 times more potent than Delta-9 THC. The DEA issued a statement in February 2023 declaring THC-O a controlled substance because it is synthetically derived.",
      federal:
        "THC-O is already federally illegal as a synthetic controlled substance under DEA guidance. The 2026 law does not change its status — it was never legal.",
    },
    thcp: {
      what: "THCP (tetrahydrocannabiphorol) is a naturally occurring cannabinoid discovered in 2019. It has a longer alkyl side chain than THC, making it potentially 30 times more potent at binding to CB1 receptors. THCP is found in very small amounts in cannabis plants and most commercial THCP is synthesized.",
      federal:
        "THCP has no specific federal legislation yet. Under the 2026 law, it will be included in the total THC calculation and classified as a controlled substance.",
    },
  };

const VALID_COMPOUND_SLUGS = Object.keys(COMPOUND_SLUGS);

export async function generateStaticParams() {
  return VALID_COMPOUND_SLUGS.map((c) => ({ compound: c }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ compound: string }>;
}): Promise<Metadata> {
  const { compound: compoundSlug } = await params;
  const label = COMPOUND_SLUG_LABELS[compoundSlug];
  if (!label) return {};
  return {
    title: `Is ${label} Legal? State-by-State Guide (2026)`,
    description: `Check where ${label} is legal, restricted, or banned across all 50 US states. Updated for 2026 federal hemp law changes.`,
    alternates: {
      canonical: `https://ishemplegal.com/compounds/${compoundSlug}`,
    },
  };
}

export default async function CompoundPage({
  params,
}: {
  params: Promise<{ compound: string }>;
}) {
  const { compound: compoundSlug } = await params;
  const compoundKey = COMPOUND_SLUGS[compoundSlug];
  const label = COMPOUND_SLUG_LABELS[compoundSlug];
  if (!compoundKey || !label) notFound();

  const desc = COMPOUND_DESCRIPTIONS[compoundSlug];
  const states = getAllStates();

  const legal = states.filter(
    (s) => s.compounds[compoundKey].status === "legal"
  );
  const restricted = states.filter(
    (s) => s.compounds[compoundKey].status === "restricted"
  );
  const gray = states.filter(
    (s) => s.compounds[compoundKey].status === "gray"
  );
  const banned = states.filter(
    (s) => s.compounds[compoundKey].status === "banned"
  );
  const medicalOnly = states.filter(
    (s) => s.compounds[compoundKey].status === "medical_only"
  );

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-gray-500 text-sm mb-2">
        <a href="/" className="hover:text-gray-400">
          Home
        </a>{" "}
        &rarr; Compounds &rarr; {label}
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
        Is {label} Legal?
      </h1>
      <p className="text-gray-400 text-lg mb-8">
        State-by-state legal guide — updated for 2026 federal changes.
      </p>

      {/* What Is It */}
      {desc && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-3">
            What is {label}?
          </h2>
          <p className="text-gray-300 leading-relaxed">{desc.what}</p>
        </section>
      )}

      {/* Federal Status */}
      {desc && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-3">Federal Status</h2>
          <div className="rounded-2xl border border-brand-border bg-brand-card p-6">
            <p className="text-gray-300 leading-relaxed">{desc.federal}</p>
          </div>
        </section>
      )}

      {/* State Lists */}
      <section className="mb-10 space-y-6">
        <h2 className="text-xl font-bold text-white">
          {label} Laws by State
        </h2>

        {legal.length > 0 && (
          <div>
            <h3 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-3">
              Legal ({legal.length} states)
            </h3>
            <div className="flex flex-wrap gap-2">
              {legal.map((s) => (
                <a
                  key={s.slug}
                  href={`/states/${s.slug}?compound=${compoundKey}`}
                  className="rounded-lg border border-green-900/40 bg-green-900/10 px-3 py-1.5 text-green-300 hover:text-green-200 text-sm transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {restricted.length > 0 && (
          <div>
            <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-wide mb-3">
              Restricted ({restricted.length} states)
            </h3>
            <div className="flex flex-wrap gap-2">
              {restricted.map((s) => (
                <a
                  key={s.slug}
                  href={`/states/${s.slug}?compound=${compoundKey}`}
                  className="rounded-lg border border-yellow-900/40 bg-yellow-900/10 px-3 py-1.5 text-yellow-300 hover:text-yellow-200 text-sm transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {gray.length > 0 && (
          <div>
            <h3 className="text-orange-400 font-bold text-sm uppercase tracking-wide mb-3">
              Gray Area ({gray.length} states)
            </h3>
            <div className="flex flex-wrap gap-2">
              {gray.map((s) => (
                <a
                  key={s.slug}
                  href={`/states/${s.slug}?compound=${compoundKey}`}
                  className="rounded-lg border border-orange-900/40 bg-orange-900/10 px-3 py-1.5 text-orange-300 hover:text-orange-200 text-sm transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {banned.length > 0 && (
          <div>
            <h3 className="text-red-400 font-bold text-sm uppercase tracking-wide mb-3">
              Banned ({banned.length} states)
            </h3>
            <div className="flex flex-wrap gap-2">
              {banned.map((s) => (
                <a
                  key={s.slug}
                  href={`/states/${s.slug}?compound=${compoundKey}`}
                  className="rounded-lg border border-red-900/40 bg-red-900/10 px-3 py-1.5 text-red-300 hover:text-red-200 text-sm transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {medicalOnly.length > 0 && (
          <div>
            <h3 className="text-blue-400 font-bold text-sm uppercase tracking-wide mb-3">
              Medical Only ({medicalOnly.length} states)
            </h3>
            <div className="flex flex-wrap gap-2">
              {medicalOnly.map((s) => (
                <a
                  key={s.slug}
                  href={`/states/${s.slug}?compound=${compoundKey}`}
                  className="rounded-lg border border-blue-900/40 bg-blue-900/10 px-3 py-1.5 text-blue-300 hover:text-blue-200 text-sm transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-brand-border bg-brand-card p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">
          Check {label} in Your State
        </h2>
        <p className="text-gray-400 mb-4">
          Get the full legal breakdown including product types, shipping rules,
          and 2026 impact.
        </p>
        <a
          href="/"
          className="inline-block rounded-xl bg-brand-orange hover:bg-orange-500 text-white font-bold px-8 py-3 transition-colors"
        >
          Use the Tool &rarr;
        </a>
      </section>
    </main>
  );
}
