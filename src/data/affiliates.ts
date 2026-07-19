import { COMPOUND_LABELS } from "@/types/hemp";

export interface AffiliateLink {
  name: string;
  url: string;
  description: string;
  compounds: string[]; // compound keys this retailer sells
}

export const AFFILIATES: AffiliateLink[] = [
  {
    name: "Diamond CBD",
    url: "https://tidd.ly/41c9UUh",
    description: "Premium Delta-8, CBD, HHC, and THCA products. Third-party lab tested.",
    compounds: ["delta8", "delta9Hemp", "cbd", "thca", "hhc", "delta10", "thcp"],
  },
];

/** Get affiliates that sell a given compound */
export function getAffiliatesForCompound(compound: string): AffiliateLink[] {
  return AFFILIATES.filter((a) => a.compounds.includes(compound));
}

export type CtaPlacement = string;
export interface AffiliateCTAData {
  url: string; headline: string; sub: string; buttonText: string;
  kind: "direct" | "fallback"; disclosure: string;
}
const DISCLOSURE = "Affiliate link — we may earn a commission at no extra cost to you.";

export function buildAffiliateUrl(base: string, clickref: string): string {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}clickref=${encodeURIComponent(clickref)}`;
}

export function getAffiliateCTA(opts: {
  compoundKey?: string; compoundLabel?: string; status?: string;
  shippingIn?: string; stateName?: string; placement: CtaPlacement;
}): AffiliateCTAData | null {
  const { compoundKey, compoundLabel, status, shippingIn, stateName, placement } = opts;
  if (compoundKey && !(compoundKey in COMPOUND_LABELS)) return null; // invalid/unknown key → no CTA
  const affiliate =
    (compoundKey ? getAffiliatesForCompound(compoundKey)[0] : undefined) ?? AFFILIATES[0];
  if (!affiliate) return null;
  const url = buildAffiliateUrl(affiliate.url, placement);
  const label = compoundLabel ?? "hemp products";
  const where = stateName ? ` in ${stateName}` : "";

  const directOk = status === "legal" && shippingIn !== "banned";
  const noStateContext = !status && !stateName;
  const sells = compoundKey ? getAffiliatesForCompound(compoundKey).length > 0 : true;

  if (sells && (directOk || noStateContext)) {
    return {
      url, kind: "direct", disclosure: DISCLOSURE,
      headline: `Shop lab-tested ${label}${where}`,
      sub: "Third-party lab tested. Ships fast.",
      buttonText: `Shop ${label}`,
    };
  }
  return {
    url, kind: "fallback", disclosure: DISCLOSURE,
    headline: `Find hemp products that are legal${where}`,
    sub: "Federally compliant CBD you can buy today.",
    buttonText: "See legal products",
  };
}
