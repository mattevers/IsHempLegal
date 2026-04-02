"use client";

import { useState, useCallback, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { statePaths, US_MAP_VIEWBOX } from "@/data/state-paths";

interface USMapProps {
  colorMap: Record<string, string>; // slug -> hex color
  defaultColor?: string;
}

// Map 2-letter state IDs to slugs
const ID_TO_SLUG: Record<string, string> = {
  al: "alabama", ak: "alaska", az: "arizona", ar: "arkansas",
  ca: "california", co: "colorado", ct: "connecticut", de: "delaware",
  fl: "florida", ga: "georgia", hi: "hawaii", id: "idaho",
  il: "illinois", in: "indiana", ia: "iowa", ks: "kansas",
  ky: "kentucky", la: "louisiana", me: "maine", md: "maryland",
  ma: "massachusetts", mi: "michigan", mn: "minnesota", ms: "mississippi",
  mo: "missouri", mt: "montana", ne: "nebraska", nv: "nevada",
  nh: "new-hampshire", nj: "new-jersey", nm: "new-mexico", ny: "new-york",
  nc: "north-carolina", nd: "north-dakota", oh: "ohio", ok: "oklahoma",
  or: "oregon", pa: "pennsylvania", ri: "rhode-island", sc: "south-carolina",
  sd: "south-dakota", tn: "tennessee", tx: "texas", ut: "utah",
  vt: "vermont", va: "virginia", wa: "washington", wv: "west-virginia",
  wi: "wisconsin", wy: "wyoming",
};

export default function USMap({ colorMap, defaultColor = "#1f2937" }: USMapProps) {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent, name: string) => {
    setTooltip({ name, x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  const handleClick = useCallback((slug: string) => {
    router.push(`/states/${slug}`);
  }, [router]);

  return (
    <div className="relative">
      <svg
        viewBox={US_MAP_VIEWBOX}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {statePaths.map((state) => {
          const slug = ID_TO_SLUG[state.id];
          if (!slug) return null; // skip DC or unknown
          const fill = colorMap[slug] ?? defaultColor;

          return (
            <path
              key={state.id}
              data-slug={slug}
              d={state.d}
              fill={fill}
              stroke="#0a0f1a"
              strokeWidth="1"
              className="cursor-pointer transition-opacity hover:opacity-80"
              onMouseMove={(e) => handleMouseMove(e, state.name)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(slug)}
            />
          );
        })}
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none rounded-lg bg-gray-900 border border-brand-border px-3 py-1.5 text-white text-sm font-medium shadow-lg"
          style={{
            left: tooltip.x + 12,
            top: tooltip.y - 32,
          }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}
