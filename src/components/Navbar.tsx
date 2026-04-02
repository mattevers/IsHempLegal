"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "/states", label: "All States" },
  { href: "/compounds/delta-8", label: "Delta-8" },
  {
    href: "/2026-federal-ban",
    label: "2026 Ban",
    className: "text-orange-500 hover:text-orange-400 font-medium",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-border bg-brand-dark/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.className ?? "hover:text-white transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-report"
            className="rounded-lg bg-brand-orange hover:bg-orange-500 text-white font-semibold px-4 py-1.5 transition-colors"
          >
            Get Report
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-brand-border bg-brand-dark px-4 pb-4 pt-2 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm ${
                link.className ?? "text-gray-400 hover:text-white"
              } transition-colors`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-report"
            onClick={() => setOpen(false)}
            className="block mt-2 rounded-lg bg-brand-orange hover:bg-orange-500 text-white font-semibold px-4 py-2.5 text-sm text-center transition-colors"
          >
            Get Report
          </Link>
        </div>
      )}
    </nav>
  );
}
