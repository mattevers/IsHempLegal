interface Props {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LogoIcon({ size = "md", className = "" }: Props) {
  const dims = size === "sm" ? "w-6 h-6" : size === "lg" ? "w-14 h-14" : "w-7 h-7";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dims} ${className}`}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="logo-grad-stroke" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {/* Hemp leaf shape */}
      <path
        d="M16 2C16 2 10 8 6 14C4 18 5 22 8 25C10 27 13 28 16 30C19 28 22 27 24 25C27 22 28 18 26 14C22 8 16 2 16 2Z"
        fill="url(#logo-grad)"
        stroke="url(#logo-grad-stroke)"
        strokeWidth="0.8"
      />
      {/* Center vein */}
      <path
        d="M16 7V26"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
      {/* Side veins */}
      <path
        d="M16 12L10 9M16 12L22 9M16 17L9 15M16 17L23 15M16 22L11 21M16 22L21 21"
        stroke="white"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeOpacity="0.3"
      />
      {/* Checkmark */}
      <polyline
        points="11,18 14.5,21.5 21,15"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-logo text-xl tracking-wide text-gray-100 uppercase ${className}`}
    >
      Is Hemp Legal?
    </span>
  );
}

export function Logo({ size = "md" }: Props) {
  return (
    <span className="inline-flex items-center gap-2.5 group">
      <span className="transition-transform group-hover:scale-105">
        <LogoIcon size={size} />
      </span>
      <LogoText />
    </span>
  );
}
