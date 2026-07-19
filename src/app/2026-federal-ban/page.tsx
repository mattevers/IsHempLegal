import type { Metadata } from "next";
import { getAllStates } from "@/data/states";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title:
    "2026 Federal Hemp Ban — What's Changing for Delta-8, THCA & Hemp Products",
  description:
    "The November 12, 2026 federal hemp law redefines Delta-8, THCA, and other hemp cannabinoids as controlled substances. Learn what's changing, which products are affected, and how your state is impacted.",
  alternates: { canonical: "https://www.ishemplegal.com/2026-federal-ban" },
  openGraph: {
    title: "2026 Federal Hemp Ban — Everything You Need to Know",
    description:
      "New federal law bans Delta-8, THCA, and most intoxicating hemp products starting November 12, 2026.",
    url: "https://www.ishemplegal.com/2026-federal-ban",
  },
};

const faqItems = [
  {
    question: "When does the federal hemp ban take effect?",
    answer:
      "The new federal hemp law was signed on November 12, 2025, with a one-year implementation period. The full ban on intoxicating hemp-derived cannabinoids takes effect November 12, 2026.",
  },
  {
    question: "What hemp products will be illegal after November 2026?",
    answer:
      "Products containing Delta-8 THC, THCA, Delta-10 THC, HHC, THCP, and other intoxicating hemp-derived cannabinoids will be federally classified as controlled substances — as will finished hemp Delta-9 edibles and beverages that exceed the new 0.4 mg total-THC-per-container cap. Only THC-free products, such as CBD isolate and verified zero-THC items, clearly remain legal.",
  },
  {
    question: "Is Delta-8 THC being banned federally?",
    answer:
      "Yes. Most commercial Delta-8 is synthesized from CBD, and Section 781 excludes cannabinoids synthesized or manufactured outside the plant from the definition of hemp. That makes Delta-8 a federally controlled substance starting November 12, 2026.",
  },
  {
    question: "Will CBD still be legal after the 2026 ban?",
    answer:
      "Only partly. THC-free CBD — isolate and verified zero-THC products — stays legal, along with topicals and non-cannabinoid hemp under the cap. But the new 0.4 mg total-THC-per-container limit makes most full-spectrum, and many broad-spectrum, CBD products non-compliant, because they carry detectable THC well above that cap.",
  },
  {
    question: "Can states still allow Delta-8 after the federal ban?",
    answer:
      "In practice, sometimes. Once these products are federally controlled, no state can make them federally legal — but state-legal markets may persist under state law, especially where hemp cannabinoids are folded into a regulated cannabis program. Businesses and consumers there still face federal enforcement risk.",
  },
  {
    question: "What about hemp products I already own?",
    answer:
      "The law does not include a possession grace period for consumers. After November 12, 2026, possession of products containing newly-banned cannabinoids could be a federal offense, though enforcement priorities are unclear.",
  },
  {
    question: "How does this affect hemp businesses?",
    answer:
      "Hemp businesses selling Delta-8, THCA, HHC, and similar products will need to reformulate, pivot to compliant CBD products, or transition to state-licensed cannabis markets where available. The one-year implementation period is intended to give businesses time to adjust.",
  },
  {
    question: "What is THCA and why is it being banned?",
    answer:
      "THCA (tetrahydrocannabinolic acid) is the raw, non-psychoactive precursor to Delta-9 THC found in cannabis and hemp flower. When heated (smoked, vaped, or cooked), THCA converts to THC. The new law closes the 'THCA loophole' by including THCA in the total THC calculation for hemp classification.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FederalBanPage() {
  const states = getAllStates();
  const highImpact = states.filter((s) => s.federalChangeImpact === "high");
  const mediumImpact = states.filter(
    (s) => s.federalChangeImpact === "medium"
  );
  const lowImpact = states.filter((s) => s.federalChangeImpact === "low");

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-900/30 border border-orange-800/40 px-4 py-1.5 text-orange-400 text-sm font-medium mb-4">
          Effective November 12, 2026
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
          The 2026 Federal Hemp Ban
        </h1>
        <p className="text-gray-400 text-lg">
          Everything you need to know about the new federal law that redefines
          hemp and bans Delta-8, THCA, and most intoxicating hemp products.
        </p>
      </div>

      {/* What Changed */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          What the Law Says
        </h2>
        <div className="rounded-2xl border border-brand-border bg-brand-card p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            On November 12, 2025, Congress enacted{" "}
            <strong className="text-white">
              Section 781 of the Continuing Appropriations and Extensions Act,
              2026 (H.R. 5371, Pub. L. 119-37)
            </strong>
            , which rewrites the federal definition of &ldquo;hemp&rdquo; first
            set by the 2018 Farm Bill. The changes take effect one year later,
            on <strong className="text-white">November 12, 2026</strong>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Under the previous 2018 Farm Bill, hemp was any cannabis plant with
            less than 0.3% Delta-9 THC by dry weight. This created a loophole
            that allowed Delta-8, THCA, HHC, and other intoxicating cannabinoids
            to be sold legally because they weren&apos;t specifically Delta-9
            THC. Section 781 closes that loophole through{" "}
            <strong className="text-white">three separate mechanisms</strong>:
          </p>
          <ul className="space-y-3 text-gray-300 leading-relaxed list-none pl-0">
            <li>
              <strong className="text-white">
                1. A total-THC definition.
              </strong>{" "}
              Hemp is now measured on{" "}
              <strong className="text-white">
                total THC — including THCA
              </strong>{" "}
              — capped at 0.3% by dry weight, rather than Delta-9 THC alone.
              High-THCA hemp flower no longer qualifies as legal hemp.
            </li>
            <li>
              <strong className="text-white">
                2. A 0.4 mg total-THC-per-container cap.
              </strong>{" "}
              Finished consumer products — edibles, beverages, tinctures, vapes
              — may contain no more than{" "}
              <strong className="text-white">
                0.4 mg of total THC per container
              </strong>
              . A typical hemp Delta-9 gummy or drink (5&ndash;15 mg) exceeds
              this cap by roughly 12&ndash;37 times.
            </li>
            <li>
              <strong className="text-white">
                3. Exclusion of synthesized cannabinoids.
              </strong>{" "}
              Cannabinoids that are{" "}
              <strong className="text-white">
                synthesized or manufactured outside the plant
              </strong>{" "}
              — the CBD-to-Delta-8 and CBD-to-Delta-10 conversions behind most
              intoxicating hemp products — are excluded from the definition of
              hemp entirely, regardless of the THC math.
            </li>
          </ul>
        </div>
      </section>

      {/* Products Affected */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          Which Products Are Affected?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-red-900/40 bg-red-900/10 p-6">
            <h3 className="text-red-400 font-bold mb-3">
              Will Be Federally Banned
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Delta-8 and Delta-10 THC gummies, vapes, tinctures</li>
              <li>THCA flower and pre-rolls</li>
              <li>HHC, THC-O, and THCP products</li>
              <li>Hemp Delta-9 edibles &amp; beverages (5&ndash;15 mg per serving)</li>
              <li>
                Full-spectrum (and most broad-spectrum) CBD over 0.4 mg total
                THC per container
              </li>
              <li>Any product with synthesized or converted cannabinoids</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-green-900/40 bg-green-900/10 p-6">
            <h3 className="text-green-400 font-bold mb-3">
              Remains Federally Legal
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>THC-free CBD isolate products</li>
              <li>Broad-spectrum CBD verified at 0.0% THC</li>
              <li>
                Any finished product at or under 0.4 mg total THC per container
              </li>
              <li>Hemp seed oil and food products</li>
              <li>Hemp fiber and industrial products</li>
              <li>Topical CBD creams and balms under the cap</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Timeline</h2>
        <div className="space-y-4">
          {[
            {
              date: "November 12, 2025",
              event:
                "Section 781 signed into law as part of H.R. 5371 (Pub. L. 119-37), starting a one-year clock",
              done: true,
            },
            {
              date: "February 10, 2026",
              event:
                "FDA's 90-day statutory deadline to publish its lists of permitted and prohibited cannabinoids passed — the lists were never published",
              done: true,
            },
            {
              date: "As of July 2026",
              event:
                "No DEA or USDA rulemaking, enforcement guidance, or formal opportunity for public comment has been issued",
              done: true,
            },
            {
              date: "2026",
              event:
                "The House passed its version of the 2026 Farm Bill without delaying the ban, leaving the effective date intact",
              done: true,
            },
            {
              date: "Pending",
              event:
                "Bills to delay or replace the ban have been introduced but not enacted — the Hemp Planting Predictability Act (H.R. 7024) would push the effective date to November 12, 2028, and the Wyden–Merkley Cannabinoid Safety and Regulation Act would build a permanent framework",
              done: false,
            },
            {
              date: "November 12, 2026",
              event:
                "Effective date — non-compliant hemp products become federally controlled substances",
              done: false,
            },
          ].map((item) => (
            <div
              key={item.date}
              className={`flex gap-4 items-start rounded-xl border p-4 ${
                item.done
                  ? "border-green-800/40 bg-green-900/10"
                  : "border-brand-border bg-brand-card"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${
                  item.done ? "bg-green-400" : "bg-gray-600"
                }`}
              />
              <div>
                <p
                  className={`font-bold text-sm ${
                    item.done ? "text-green-400" : "text-white"
                  }`}
                >
                  {item.date}
                </p>
                <p className="text-gray-400 text-sm">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* State Impact Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          State-by-State Impact
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          States that already regulate hemp-derived THC through their cannabis
          programs will see less disruption. States with open hemp markets face
          the biggest impact.
        </p>

        {highImpact.length > 0 && (
          <div className="mb-6">
            <h3 className="text-red-400 font-bold text-sm uppercase tracking-wide mb-3">
              High Impact ({highImpact.length} states)
            </h3>
            <div className="flex flex-wrap gap-2">
              {highImpact.map((s) => (
                <a
                  key={s.slug}
                  href={`/states/${s.slug}`}
                  className="rounded-lg border border-red-900/40 bg-red-900/10 px-3 py-1.5 text-red-300 hover:text-red-200 text-sm transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {mediumImpact.length > 0 && (
          <div className="mb-6">
            <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-wide mb-3">
              Medium Impact ({mediumImpact.length} states)
            </h3>
            <div className="flex flex-wrap gap-2">
              {mediumImpact.map((s) => (
                <a
                  key={s.slug}
                  href={`/states/${s.slug}`}
                  className="rounded-lg border border-yellow-900/40 bg-yellow-900/10 px-3 py-1.5 text-yellow-300 hover:text-yellow-200 text-sm transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {lowImpact.length > 0 && (
          <div className="mb-6">
            <h3 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-3">
              Low Impact ({lowImpact.length} states)
            </h3>
            <div className="flex flex-wrap gap-2">
              {lowImpact.map((s) => (
                <a
                  key={s.slug}
                  href={`/states/${s.slug}`}
                  className="rounded-lg border border-green-900/40 bg-green-900/10 px-3 py-1.5 text-green-300 hover:text-green-200 text-sm transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-brand-border bg-brand-card group"
            >
              <summary className="px-6 py-4 cursor-pointer text-white font-semibold list-none flex items-center justify-between">
                {item.question}
                <span className="text-gray-500 group-open:rotate-180 transition-transform">
                  &#9660;
                </span>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-brand-border bg-brand-card p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">
          Check Your State&apos;s Hemp Laws
        </h2>
        <p className="text-gray-400 mb-4">
          See exactly how the 2026 federal changes affect hemp products in your
          state.
        </p>
        <a
          href="/"
          className="inline-block rounded-xl bg-brand-orange hover:bg-orange-500 text-white font-bold px-8 py-3 transition-colors"
        >
          Check My State &rarr;
        </a>
      </section>
    </main>
  );
}
