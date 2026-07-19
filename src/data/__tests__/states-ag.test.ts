import { describe, it, expect } from "vitest";
import { statesData } from "@/data/states";

const s = (slug: string) => statesData[slug];

// Every AG-file state corrected in the 2026-07-18 audit (Alaska included).
const CORRECTED = [
  "alabama",
  "alaska",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "florida",
  "georgia",
];

describe("states-ag corrections (audit 2026-07-18)", () => {
  it("every corrected AG state is re-dated and has no hypothetical fed note", () => {
    for (const slug of CORRECTED) {
      expect(s(slug).lastUpdated).toBe("2026-07-18");
      expect(s(slug).federalChangeNote).not.toMatch(/would\b/i);
    }
  });

  it("every corrected AG fed note cites the enacted vehicle and 0.4 mg cap", () => {
    for (const slug of CORRECTED) {
      const note = s(slug).federalChangeNote;
      expect(note).toMatch(/Section 781|H\.R\.\s*5371|119-37/);
      expect(note).toMatch(/0\.4\s*mg/);
    }
  });

  // ---- ALABAMA ----
  it("alabama: vapes banned; edibles/tinctures/beverages restricted; DTC ban; high impact", () => {
    const al = s("alabama");
    expect(al.productTypes.vapes).toBe("banned");
    expect(al.productTypes.gummies).toBe("restricted");
    expect(al.productTypes.tinctures).toBe("restricted");
    expect(al.productTypes.beverages).toBe("restricted");
    expect(al.shippingIn).toBe("banned");
    expect(al.federalChangeImpact).toBe("high");
    expect(JSON.stringify(al)).toMatch(/HB 445/);
    expect(al.notes).toMatch(/10\s*mg/);
    expect(al.notes).toMatch(/ABC/);
  });

  // ---- ALASKA ----
  it("alaska: THCP banned; fed note adds the May 29 2025 ruling", () => {
    const ak = s("alaska");
    expect(ak.compounds.thcp.status).toBe("banned");
    expect(ak.federalChangeNote).toMatch(/May 29, 2025/);
  });

  // ---- ARIZONA ----
  it("arizona: intoxicating cannabinoids restricted; products & shipping restricted", () => {
    const az = s("arizona");
    expect(az.compounds.delta8.status).toBe("restricted");
    expect(az.compounds.delta9Hemp.status).toBe("restricted");
    expect(az.compounds.thca.status).toBe("restricted");
    expect(az.compounds.hhc.status).toBe("restricted");
    expect(az.compounds.delta10.status).toBe("restricted");
    expect(az.productTypes.gummies).toBe("restricted");
    expect(az.productTypes.vapes).toBe("restricted");
    expect(az.productTypes.flower).toBe("restricted");
    expect(az.productTypes.tinctures).toBe("restricted");
    expect(az.productTypes.beverages).toBe("restricted");
    expect(az.shippingIn).toBe("restricted");
    expect(az.shippingOut).toBe("restricted");
    expect(JSON.stringify(az)).toMatch(/I24-005/);
  });

  // ---- ARKANSAS ----
  it("arkansas: d8/THCA/HHC/D10 banned; D9 gray-contested; citation fixed (no 2019)", () => {
    const ar = s("arkansas");
    expect(ar.compounds.delta8.status).toBe("banned");
    expect(ar.compounds.thca.status).toBe("banned");
    expect(ar.compounds.hhc.status).toBe("banned");
    expect(ar.compounds.delta10.status).toBe("banned");
    expect(ar.compounds.delta9Hemp.status).toBe("gray");
    expect(ar.compounds.cbd.status).toBe("legal");
    expect(ar.compounds.delta8.statute).toMatch(/2023|Act 934/);
    expect(ar.compounds.delta8.statute).not.toMatch(/2019/);
    expect(JSON.stringify(ar)).not.toMatch(/2019/);
    expect(ar.productTypes.gummies).toBe("banned");
    expect(ar.productTypes.vapes).toBe("banned");
    expect(ar.productTypes.flower).toBe("banned");
    expect(ar.productTypes.tinctures).toBe("banned");
    expect(ar.shippingIn).toBe("banned");
    expect(ar.shippingOut).toBe("banned");
  });

  // ---- CALIFORNIA ----
  it("california: intoxicating hemp banned (AB 8); AB 2223 removed; topicals stay legal", () => {
    const ca = s("california");
    expect(ca.compounds.delta8.status).toBe("banned");
    expect(ca.compounds.delta9Hemp.status).toBe("banned");
    expect(ca.compounds.thca.status).toBe("banned");
    expect(ca.compounds.hhc.status).toBe("banned");
    expect(ca.compounds.delta10.status).toBe("banned");
    expect(ca.productTypes.flower).toBe("banned");
    expect(ca.productTypes.gummies).toBe("banned");
    expect(ca.productTypes.vapes).toBe("banned");
    expect(ca.productTypes.tinctures).toBe("banned");
    expect(ca.productTypes.beverages).toBe("banned");
    expect(ca.productTypes.topicals).toBe("legal");
    expect(ca.shippingIn).toBe("banned");
    expect(ca.shippingOut).toBe("banned");
    expect(ca.compounds.delta8.statute).toMatch(/AB 8/);
    expect(JSON.stringify(ca)).not.toMatch(/AB 2223/);
  });

  // ---- COLORADO ----
  it("colorado: low-dose edibles/beverages/tinctures restricted; statutes added", () => {
    const co = s("colorado");
    expect(co.productTypes.gummies).toBe("restricted");
    expect(co.productTypes.beverages).toBe("restricted");
    expect(co.productTypes.tinctures).toBe("restricted");
    expect(co.compounds.delta9Hemp.statute).toMatch(/SB 23-271/);
    expect(co.compounds.delta9Hemp.statute).toMatch(/25-5-427/);
    expect(co.compounds.delta9Hemp.statute).toMatch(/1010-24/);
    expect(JSON.stringify(co)).toMatch(/1\.75\s*mg/);
  });

  // ---- CONNECTICUT ----
  it("connecticut: CBD citation fixed; PA acts added; moderate-THC channel noted", () => {
    const ct = s("connecticut");
    expect(ct.compounds.cbd.statute).toMatch(/22-61l/);
    expect(ct.compounds.cbd.statute).toMatch(/22-61m/);
    expect(JSON.stringify(ct)).not.toMatch(/21a-92p/);
    expect(ct.compounds.delta9Hemp.statute).toMatch(/PA 23-56/);
    expect(ct.compounds.delta9Hemp.statute).toMatch(/PA 24-76/);
    expect(ct.compounds.delta9Hemp.statute).toMatch(/PA 25-101/);
    expect(ct.notes).toMatch(/package/i);
  });

  // ---- DELAWARE ----
  it("delaware: citation fixed to 16 Del. C. 4714; beverages banned (HB 373 pending)", () => {
    const de = s("delaware");
    expect(de.compounds.delta9Hemp.statute).toMatch(/4714/);
    expect(JSON.stringify(de)).not.toMatch(/4914A/);
    expect(de.productTypes.beverages).toBe("banned");
    expect(de.notes).toMatch(/pending governor signature/i);
    expect(JSON.stringify(de)).toMatch(/HB 373/);
  });

  // ---- FLORIDA ----
  it("florida: THCA restricted; SB 1698 removed; real cites present; d8 stays legal", () => {
    const fl = s("florida");
    expect(fl.compounds.thca.status).toBe("restricted");
    expect(fl.compounds.delta8.status).toBe("legal");
    expect(JSON.stringify(fl)).not.toMatch(/SB 1698/);
    expect(fl.compounds.delta8.statute).toMatch(/581\.217/);
    expect(JSON.stringify(fl)).toMatch(/5K-4\.034/);
  });

  // ---- GEORGIA ----
  it("georgia: THCA & flower banned; d8 restricted; HHC gray (SB 33); shipping restricted", () => {
    const ga = s("georgia");
    expect(ga.compounds.thca.status).toBe("banned");
    expect(ga.compounds.delta8.status).toBe("restricted");
    expect(ga.compounds.hhc.status).toBe("gray");
    expect(ga.productTypes.flower).toBe("banned");
    expect(ga.productTypes.beverages).toBe("restricted");
    expect(ga.shippingIn).toBe("restricted");
    expect(ga.shippingOut).toBe("restricted");
    expect(ga.compounds.delta8.statute).toMatch(/SB 494/);
    expect(ga.compounds.delta8.statute).toMatch(/SB 33/);
    expect(ga.compounds.delta8.detail).toMatch(/10\s*mg/);
    expect(ga.compounds.delta8.detail).toMatch(/300\s*mg/);
  });
});
