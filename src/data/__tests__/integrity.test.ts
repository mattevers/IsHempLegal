import { describe, it, expect } from "vitest";
import { statesData, getAllStates } from "@/data/states";

const STATUSES = ["legal", "restricted", "gray", "banned", "medical_only", "unknown"];
const COMPOUNDS = ["delta8", "delta9Hemp", "cbd", "thca", "hhc", "delta10", "thco", "thcp"];
const FAB = [
  /Hemp Product Safety and Regulation Act/,
  /\bSF 2398\b/,
  /\bSB 352\b/,
  /\bHB 3208\b/,
  /HB 58\b/,
  /Act 164/,
  /SB 1564/,
  /SB 447/,
  /SB 1698/,
];

describe("dataset integrity", () => {
  it("has 50 states with valid enums", () => {
    const all = getAllStates();
    expect(all).toHaveLength(50);
    for (const st of all) {
      for (const c of COMPOUNDS) {
        expect(STATUSES).toContain(
          st.compounds[c as keyof typeof st.compounds].status
        );
      }
      expect(["high", "medium", "low"]).toContain(st.federalChangeImpact);
      expect(
        st.ageRestriction === null || typeof st.ageRestriction === "number"
      ).toBe(true);
    }
  });

  it("contains no fabricated/superseded citations", () => {
    const blob = JSON.stringify(statesData);
    for (const re of FAB) expect(blob).not.toMatch(re);
  });
});
