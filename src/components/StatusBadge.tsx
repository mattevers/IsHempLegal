import { LegalStatus, STATUS_CONFIG } from "@/types/hemp";
import clsx from "clsx";

interface Props {
  status: LegalStatus;
  size?: "sm" | "md" | "lg";
}

export function StatusBadge({ status, size = "md" }: Props) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full font-semibold",
        config.bg,
        config.color,
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        size === "lg" && "px-4 py-2 text-base"
      )}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
}
