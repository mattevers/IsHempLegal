import { ExternalLink } from "lucide-react";
import type { AffiliateCTAData } from "@/data/affiliates";

export function AffiliateCTA({
  data,
  variant = "card",
}: {
  data: AffiliateCTAData;
  variant?: "inline" | "card";
}) {
  const accent =
    data.kind === "direct"
      ? "border-green-800/40 bg-green-900/20"
      : "border-brand-border bg-brand-card";
  const btn =
    "inline-flex items-center gap-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-5 py-2.5 transition-colors shrink-0";

  if (variant === "inline") {
    return (
      <div className={`rounded-xl border ${accent} p-4 flex items-center justify-between gap-4`}>
        <div>
          <p className="text-green-400 font-semibold text-sm">{data.headline}</p>
          <p className="text-gray-400 text-xs mt-0.5">{data.sub} · {data.disclosure}</p>
        </div>
        <a href={data.url} target="_blank" rel="sponsored nofollow noopener" className={btn}>
          {data.buttonText} <ExternalLink size={14} />
        </a>
      </div>
    );
  }
  return (
    <div className={`rounded-2xl border ${accent} p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
      <div>
        <p className="text-green-400 font-bold text-lg">{data.headline}</p>
        <p className="text-green-300/70 text-sm mt-1">{data.sub}</p>
        <p className="text-gray-600 text-xs mt-2">{data.disclosure}</p>
      </div>
      <a href={data.url} target="_blank" rel="sponsored nofollow noopener" className={btn}>
        {data.buttonText} <ExternalLink size={14} />
      </a>
    </div>
  );
}
