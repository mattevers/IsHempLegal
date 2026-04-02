"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-border bg-brand-dark/98 backdrop-blur-sm px-4 py-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-gray-400 text-sm flex-1">
          We use cookies for analytics to improve your experience. No personal
          data is sold.{" "}
          <Link
            href="/privacy"
            className="text-green-400 hover:text-green-300 underline"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="rounded-lg border border-brand-border px-4 py-2 text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-brand-green hover:bg-green-500 text-white font-semibold px-4 py-2 text-sm transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
