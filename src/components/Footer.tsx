import Link from "next/link";
import { LogoIcon, LogoText } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-dark mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <LogoIcon size="sm" className="opacity-60" />
              <LogoText className="text-lg" />
            </Link>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Free hemp law checker for all 50 US states. Updated for the 2026
              federal changes.
            </p>
          </div>

          {/* Tool */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Tool</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Check Legality
                </Link>
              </li>
              <li>
                <Link
                  href="/states"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  All States
                </Link>
              </li>
            </ul>
          </div>

          {/* Compounds */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">
              Compounds
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/compounds/delta-8"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Delta-8 THC
                </Link>
              </li>
              <li>
                <Link
                  href="/compounds/cbd"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CBD
                </Link>
              </li>
              <li>
                <Link
                  href="/compounds/thca"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  THCA
                </Link>
              </li>
              <li>
                <Link
                  href="/compounds/hhc"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  HHC
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/2026-federal-ban"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  2026 Federal Ban
                </Link>
              </li>
              <li>
                <Link
                  href="/compounds/delta-9"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Delta-9 (Hemp)
                </Link>
              </li>
              <li>
                <Link
                  href="/compounds/thc-o"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  THC-O
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} IsHempLegal.com. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-gray-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-600 text-xs text-center md:text-right max-w-lg">
            Not legal advice. Laws change frequently — verify with local
            authorities.
          </p>
        </div>
      </div>
    </footer>
  );
}
