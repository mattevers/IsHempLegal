import type { Metadata } from "next";
import { LookupTool } from "@/components/LookupTool";
import { LogoIcon } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Is Hemp Legal In My State? Delta-8, CBD & THCA Laws by State",
  description:
    "Instantly check if Delta-8, CBD, THCA, HHC, and other hemp products are legal in your state. Free, accurate, updated for 2026 federal changes.",
  openGraph: {
    title: "Is Hemp Legal In My State?",
    description:
      "Free tool to check hemp and Delta-8 legality in all 50 states.",
    url: "https://www.ishemplegal.com",
  },
  alternates: { canonical: "https://www.ishemplegal.com" },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-900/30 border border-orange-800/40 px-4 py-1.5 text-orange-400 text-sm font-medium mb-6">
          Federal hemp laws changing November 12, 2026
        </div>
        <LogoIcon size="lg" className="mx-auto mb-6" />
        <h1 className="font-logo text-5xl md:text-7xl tracking-wide text-white mb-4 uppercase">
          Is Hemp{" "}
          <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 bg-clip-text text-transparent">
            Legal
          </span>
          <br />
          in Your State?
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Check Delta-8, CBD, THCA, HHC, and more across all 50 states. Free.
          Instant. Updated for 2026.
        </p>
        <LookupTool />
      </section>

      {/* Federal Ban Banner */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="rounded-2xl bg-orange-900/20 border border-orange-700/40 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-orange-400 font-bold text-xl mb-2">
                Federal Hemp Law Changes November 12, 2026
              </h2>
              <p className="text-orange-300/80">
                Congress redefined hemp to include THCA and Delta-8 as
                controlled substances. Most intoxicating hemp products will be
                federally banned. Laws vary by state.
              </p>
            </div>
            <a
              href="/2026-federal-ban"
              className="shrink-0 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 text-center transition-colors"
            >
              What&apos;s Changing &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Select your state",
              desc: "Choose from all 50 US states.",
            },
            {
              step: "2",
              title: "Pick your compound",
              desc: "Delta-8, CBD, THCA, HHC, and more.",
            },
            {
              step: "3",
              title: "Get instant results",
              desc: "Clear legal status with source citations.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-brand-border bg-brand-card p-6 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-brand-green/20 text-green-400 font-black text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <p className="text-center text-gray-600 text-xs">
          This tool provides informational guidance only, not legal advice. Laws
          change frequently — always verify with local authorities. Not a
          substitute for an attorney.
        </p>
      </section>
    </main>
  );
}
