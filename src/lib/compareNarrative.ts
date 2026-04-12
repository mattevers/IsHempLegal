import { StateData, Compound, COMPOUND_LABELS, LegalStatus } from "@/types/hemp";

const STATUS_RANK: Record<LegalStatus, number> = {
  legal: 5,
  restricted: 4,
  gray: 3,
  medical_only: 2,
  banned: 1,
  unknown: 0,
};

const STATUS_ADJECTIVE: Record<LegalStatus, string> = {
  legal: "fully legal",
  restricted: "legal with restrictions",
  gray: "in a legal gray area",
  banned: "banned",
  medical_only: "only legal for medical use",
  unknown: "unclear",
};

function permissivenessScore(state: StateData): number {
  const compounds = Object.keys(COMPOUND_LABELS) as Compound[];
  return compounds.reduce(
    (sum, c) => sum + STATUS_RANK[state.compounds[c].status],
    0
  );
}

export function generateCompareNarrative(s1: StateData, s2: StateData): string {
  const compounds = Object.keys(COMPOUND_LABELS) as Compound[];

  // Find differences
  const diffs: {
    compound: Compound;
    label: string;
    s1Status: LegalStatus;
    s2Status: LegalStatus;
  }[] = [];
  const sameStatus: { compound: Compound; status: LegalStatus }[] = [];

  for (const c of compounds) {
    if (s1.compounds[c].status !== s2.compounds[c].status) {
      diffs.push({
        compound: c,
        label: COMPOUND_LABELS[c],
        s1Status: s1.compounds[c].status,
        s2Status: s2.compounds[c].status,
      });
    } else {
      sameStatus.push({ compound: c, status: s1.compounds[c].status });
    }
  }

  const parts: string[] = [];

  // Overview sentence
  const score1 = permissivenessScore(s1);
  const score2 = permissivenessScore(s2);

  if (diffs.length === 0) {
    parts.push(
      `${s1.name} and ${s2.name} have identical hemp compound laws across all ${compounds.length} compounds tracked.`
    );
  } else if (diffs.length <= 2) {
    parts.push(
      `${s1.name} and ${s2.name} have similar hemp laws, differing on just ${diffs.length} of ${compounds.length} compounds.`
    );
  } else {
    parts.push(
      `${s1.name} and ${s2.name} differ on ${diffs.length} of ${compounds.length} hemp compounds.`
    );
    if (score1 > score2) {
      parts.push(
        `Overall, ${s1.name} has more permissive hemp laws than ${s2.name}.`
      );
    } else if (score2 > score1) {
      parts.push(
        `Overall, ${s2.name} has more permissive hemp laws than ${s1.name}.`
      );
    }
  }

  // Key differences
  if (diffs.length > 0) {
    const keyDiffs = diffs.slice(0, 4);
    const diffSentences = keyDiffs.map(
      (d) =>
        `${d.label} is ${STATUS_ADJECTIVE[d.s1Status]} in ${s1.name} but ${STATUS_ADJECTIVE[d.s2Status]} in ${s2.name}`
    );
    parts.push(
      `Key differences: ${diffSentences.join(". ")}.`
    );
  }

  // Delta-8 specific callout (high search volume compound)
  const d8s1 = s1.compounds.delta8.status;
  const d8s2 = s2.compounds.delta8.status;
  if (d8s1 === d8s2) {
    parts.push(
      `Both states have the same Delta-8 THC status: ${STATUS_ADJECTIVE[d8s1]}.`
    );
  }

  // Federal impact comparison
  if (s1.federalChangeImpact !== s2.federalChangeImpact) {
    const impactLabel = (i: string) =>
      i === "high" ? "high" : i === "medium" ? "moderate" : "low";
    parts.push(
      `The 2026 federal hemp ban will have ${impactLabel(s1.federalChangeImpact)} impact on ${s1.name} and ${impactLabel(s2.federalChangeImpact)} impact on ${s2.name}.`
    );
  } else {
    parts.push(
      `Both states face ${s1.federalChangeImpact} impact from the 2026 federal hemp ban.`
    );
  }

  // Shipping comparison
  if (
    s1.shippingIn !== s2.shippingIn ||
    s1.shippingOut !== s2.shippingOut
  ) {
    parts.push(
      `Shipping rules differ: inbound hemp shipping is ${STATUS_ADJECTIVE[s1.shippingIn]} in ${s1.name} vs. ${STATUS_ADJECTIVE[s2.shippingIn]} in ${s2.name}.`
    );
  }

  // Age comparison
  if (s1.ageRestriction !== s2.ageRestriction) {
    parts.push(
      `Age requirements differ: ${s1.name} requires ${s1.ageRestriction}+ while ${s2.name} requires ${s2.ageRestriction}+.`
    );
  }

  return parts.join(" ");
}
