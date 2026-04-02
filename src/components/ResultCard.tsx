import { CompoundStatus, STATUS_CONFIG } from "@/types/hemp";
import { StatusBadge } from "./StatusBadge";
import { AlertTriangle } from "lucide-react";

interface Props {
  compoundLabel: string;
  stateName: string;
  compoundStatus: CompoundStatus;
  federalChangeNote: string;
  federalChangeImpact: "high" | "medium" | "low";
}

export function ResultCard({
  compoundLabel,
  stateName,
  compoundStatus,
  federalChangeNote,
  federalChangeImpact,
}: Props) {
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
      <div className="rounded-xl bg-green-900/20 border border-green-800/40 p-4">
        <p className="text-green-400 font-semibold text-sm">
          {compoundStatus.status === "legal" ||
          compoundStatus.status === "restricted"
            ? `Shop verified ${compoundLabel} brands`
            : `Learn more about hemp laws in ${stateName}`}
        </p>
        <p className="text-green-300/70 text-sm mt-1">
          {compoundStatus.status === "banned"
            ? "This compound is not currently legal in your state."
            : "We only link to verified, third-party tested brands."}
        </p>
      </div>
    </div>
  );
}
