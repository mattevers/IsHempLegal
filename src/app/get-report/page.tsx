import type { Metadata } from "next";
import { getAllStates } from "@/data/states";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Hemp Compliance Report — Full State Legal Analysis",
  description:
    "Get a comprehensive hemp compliance report for any state. Covers all 8 compounds, product types, shipping rules, and 2026 federal impact. PDF download for $7.99.",
  alternates: { canonical: "https://ishemplegal.com/get-report" },
};

const features = [
  "Legal status for all 8 hemp compounds (Delta-8, CBD, THCA, HHC, Delta-9, Delta-10, THC-O, THCP)",
  "Product-by-product breakdown (gummies, vapes, flower, tinctures, topicals, beverages)",
  "Shipping rules — interstate shipping in and out of your state",
  "Age restriction requirements",
  "2026 federal law impact assessment specific to your state",
  "Travel rules to 3 neighboring states",
  "Statute citations and legal references",
  "Printable PDF format — share with staff or customers",
];

export default function GetReportPage() {
  const states = getAllStates();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
          Hemp Compliance Report
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get a comprehensive, printable legal report for any state. Perfect for
          hemp retailers, dispensaries, and businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Features */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            What&apos;s Included
          </h2>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <CheckCircle
                  className="text-green-400 mt-0.5 shrink-0"
                  size={18}
                />
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Purchase Card */}
        <div className="rounded-2xl border border-brand-border bg-brand-card p-8">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-1">One-time purchase</p>
            <p className="text-5xl font-black text-white">
              $7<span className="text-2xl">.99</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Instant PDF download
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="report-state"
                className="block text-gray-400 text-sm mb-1.5"
              >
                Select your state
              </label>
              <select
                id="report-state"
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

            {/* Stripe payment button — replace href with actual Stripe link */}
            <a
              href="#"
              className="block w-full rounded-xl bg-brand-orange hover:bg-orange-500 text-white font-bold text-lg py-4 text-center transition-colors"
            >
              Purchase Report &rarr;
            </a>

            <p className="text-center text-gray-600 text-xs">
              Secure payment via Stripe. Report delivered instantly as PDF.
            </p>
          </form>
        </div>
      </div>

      {/* Who It's For */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Who Is This For?
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Hemp Retailers",
              desc: "Share with staff so they know exactly what they can and can't sell in your state.",
            },
            {
              title: "Online Sellers",
              desc: "Understand shipping rules before you sell across state lines.",
            },
            {
              title: "Consumers",
              desc: "Know your rights and what's legal before you buy or travel with hemp products.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-brand-border bg-brand-card p-6"
            >
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <p className="text-center text-gray-600 text-xs">
        Reports are generated from our database as of the most recent update.
        This is informational guidance, not legal advice. Laws change frequently.
      </p>
    </main>
  );
}
