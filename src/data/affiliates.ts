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
