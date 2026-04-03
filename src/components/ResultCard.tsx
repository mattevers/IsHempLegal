import { CompoundStatus } from "@/types/hemp";
import { StatusBadge } from "./StatusBadge";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { getAffiliatesForCompound } from "@/data/affiliates";

interface Props {
  compoundLabel: string;
  compoundKey: string;
  stateName: string;
  compoundStatus: CompoundStatus;
  federalChangeNote: string;
  federalChangeImpact: "high" | "medium" | "low";
}

export function ResultCard({
  compoundLabel,
  compoundKey,
  stateName,
  compoundStatus,
  federalChangeNote,
  federalChangeImpact,
}: Props) {
  const affiliates = getAffiliatesForCompound(compoundKey);
  const showShop =
    compoundStatus.status === "legal" ||
    compoundStatus.status === "restricted" ||
    compoundStatus.status === "gray";

  return (
    <div className="rounded-2xl border border-brand-border bg-brand-card p-6 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">
            {compoundLabel} in {stateName}
          </h2>
          <p className="text-gray-400 text-sm mt-1">Current legal status</p>
        </div>
        <StatusBadge status={compoundStatus.status} size="lg" />
      </div>

      {/* Detail */}
      <p className="text-gray-300 leading-relaxed">{compoundStatus.detail}</p>

      {/* Statute */}
      {compoundStatus.statute && (
        <p className="text-gray-500 text-sm">
          <span className="font-medium">Statute:</span>{" "}
          {compoundStatus.statute}
        </p>
      )}

      {/* 2026 Federal Warning */}
      {federalChangeImpact === "high" && (
        <div className="rounded-xl bg-orange-900/20 border border-orange-800/40 p-4 flex gap-3">
          <AlertTriangle
            className="text-orange-400 mt-0.5 shrink-0"
            size={18}
          />
          <div>
            <p className="text-orange-400 font-semibold text-sm">
              Federal Law Change — November 12, 2026
            </p>
            <p className="text-orange-300/80 text-sm mt-1">
              {federalChangeNote}
            </p>
            <a
              href="/2026-federal-ban"
              className="text-orange-400 hover:text-orange-300 text-sm font-medium mt-2 inline-block underline"
            >
              Learn what&apos;s changing &rarr;
            </a>
          </div>
        </div>
      )}

      {/* Affiliate CTA */}
      {showShop && affiliates.length > 0 ? (
        <div className="rounded-xl bg-green-900/20 border border-green-800/40 p-4 space-y-3">
          <p className="text-green-400 font-semibold text-sm">
            Shop verified {compoundLabel} brands
          </p>
          <p className="text-green-300/70 text-sm">
            We only link to verified, third-party tested brands.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {affiliates.map((a) => (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-4 py-2 transition-colors"
              >
                {a.name}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-xl bg-green-900/20 border border-green-800/40 p-4">
          <p className="text-green-400 font-semibold text-sm">
            {compoundStatus.status === "banned"
              ? `This compound is not currently legal in ${stateName}.`
              : `Learn more about hemp laws in ${stateName}`}
          </p>
        </div>
      )}
    </div>
  );
}
