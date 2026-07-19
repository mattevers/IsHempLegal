import { describe, it, expect } from "vitest";
import { statesData } from "@/data/states";

const s = (slug: string) => statesData[slug];

// Every state corrected in Task 8 of the 2026-07-18 audit (the final state-data
// file). All PA–WY entries physically live in states-pw.ts and resolve through
// the aggregated statesData like the rest.
const CORRECTED = [
  "pennsylvania",
  "rhode-island",
  "south-carolina",
  "south-dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virginia",
  "washington",
  "west-virginia",
  "wisconsin",
  "wyoming",
];

describe("states-pw corrections (audit 2026-07-18)", () => {
  it("every corrected state is re-dated and has no hypothetical fed note", () => {
    for (const slug of CORRECTED) {
      expect(s(slug).lastUpdated).toBe("2026-07-18");
      expect(s(slug).federalChangeNote).not.toMatch(/would\b/i);
    }
  });

  it("every corrected fed note cites the enacted vehicle and the 0.4 mg cap", () => {
    for (const slug of CORRECTED) {
      const note = s(slug).federalChangeNote;
      expect(note).toMatch(/Section 781|H\.R\.\s*5371|119-37/);
      expect(note).toMatch(/0\.4\s*mg/);
    }
  });

  // ---- PENNSYLVANIA ----
  it("pennsylvania: statuses hold; no statutory age; SB 49 failure + Act 92 of 2016 noted", () => {
    const pa = s("pennsylvania");
    expect(pa.compounds.delta8.status).toBe("legal");
    expect(pa.compounds.cbd.status).toBe("legal");
    expect(pa.ageRestriction).toBe(null);
    expect(JSON.stringify(pa)).toMatch(/SB 49/);
    expect(JSON.stringify(pa)).toMatch(/Act 92 of 2016/);
  });

  // ---- RHODE ISLAND ----
  it("rhode-island: low-dose hemp D9 retail channel -> D9/gummies/beverages restricted; d8/THCA stay banned", () => {
    const ri = s("rhode-island");
    expect(ri.compounds.delta9Hemp.status).toBe("restricted");
    expect(ri.compounds.delta8.status).toBe("banned");
    expect(ri.compounds.thca.status).toBe("banned");
    expect(ri.productTypes.gummies).toBe("restricted");
    expect(ri.productTypes.beverages).toBe("restricted");
    expect(ri.productTypes.topicals).toBe("legal");
    expect(JSON.stringify(ri)).toMatch(/June 29, 2025|Jun\. 29, 2025/);
    expect(JSON.stringify(ri)).toMatch(/hemp retailer|licensed hemp/i);
  });

  // ---- SOUTH CAROLINA ----
  it("south-carolina: intoxicating cannabinoids contested -> gray; no statutory age; Ganjapreneur noted", () => {
    const sc = s("south-carolina");
    expect(sc.compounds.delta8.status).toBe("gray");
    expect(sc.compounds.hhc.status).toBe("gray"); // consistency: AG "if it gets you high, it's illegal"
    expect(sc.compounds.delta10.status).toBe("gray"); // consistency: same contested posture
    expect(sc.ageRestriction).toBe(null);
    expect(JSON.stringify(sc)).toMatch(/Ganjapreneur/);
  });

  // ---- SOUTH DAKOTA ----
  it("south-dakota: converted cannabinoids banned (HB 1125); naturally-derived D9/THCA survive", () => {
    const sd = s("south-dakota");
    expect(sd.compounds.delta8.status).toBe("banned");
    expect(sd.compounds.hhc.status).toBe("banned");
    expect(sd.compounds.delta10.status).toBe("banned");
    expect(sd.compounds.thcp.status).toBe("banned");
    expect(sd.compounds.thca.status).toBe("gray"); // naturally occurring, not chemically modified
    expect(sd.compounds.delta9Hemp.status).toBe("legal"); // naturally-derived caveat
    expect(JSON.stringify(sd)).toMatch(/HB 1125/);
  });

  // ---- TENNESSEE ----
  it("tennessee: TABC HDCP regime -> d8 restricted, THCA/THCP banned, DTC shipping banned; HB 1927 cite removed", () => {
    const tn = s("tennessee");
    expect(tn.compounds.delta8.status).toBe("restricted");
    expect(tn.compounds.thca.status).toBe("banned");
    expect(tn.compounds.thcp.status).toBe("banned");
    expect(tn.compounds.hhc.status).toBe("restricted"); // consistency: intoxicating HDCP under TABC caps
    expect(tn.compounds.delta10.status).toBe("restricted"); // consistency: same HDCP regime
    expect(tn.productTypes.flower).toBe("restricted");
    expect(tn.productTypes.gummies).toBe("restricted");
    expect(tn.productTypes.vapes).toBe("restricted");
    expect(tn.productTypes.topicals).toBe("legal");
    expect(tn.shippingIn).toBe("banned");
    expect(tn.shippingOut).toBe("banned");
    expect(JSON.stringify(tn)).not.toMatch(/HB 1927/);
    expect(JSON.stringify(tn)).toMatch(/Public Chapter 526|HB 1376/);
  });

  // ---- TEXAS ----
  it("texas: DSHS Schedule I (eff Jul 31 2026) -> d8/d10/THCP/THCA banned, flower banned, HHC gray; D9/CBD legal, vape ban + age 21 hold", () => {
    const tx = s("texas");
    expect(tx.compounds.delta8.status).toBe("banned");
    expect(tx.compounds.delta10.status).toBe("banned");
    expect(tx.compounds.thcp.status).toBe("banned");
    expect(tx.compounds.thca.status).toBe("banned");
    expect(tx.compounds.hhc.status).toBe("gray"); // not on DSHS THC-isomer list; contested
    expect(tx.compounds.delta9Hemp.status).toBe("legal");
    expect(tx.compounds.cbd.status).toBe("legal");
    expect(tx.productTypes.flower).toBe("banned");
    expect(tx.productTypes.vapes).toBe("banned");
    expect(tx.ageRestriction).toBe(21);
    expect(JSON.stringify(tx)).toMatch(/DSHS|300\.101|GA-56/);
    expect(JSON.stringify(tx)).toMatch(/July 31, 2026|Jul\. 31, 2026/);
  });

  // ---- UTAH ----
  it("utah: synthetic/converted + THCA + smokable flower banned; D9 registered-only; HB 58 fabricated cite removed", () => {
    const ut = s("utah");
    expect(ut.compounds.delta8.status).toBe("banned");
    expect(ut.compounds.hhc.status).toBe("banned");
    expect(ut.compounds.delta10.status).toBe("banned");
    expect(ut.compounds.thca.status).toBe("banned");
    expect(ut.compounds.thcp.status).toBe("banned");
    expect(ut.compounds.delta9Hemp.status).toBe("restricted");
    expect(ut.productTypes.flower).toBe("banned");
    expect(ut.productTypes.vapes).toBe("banned");
    expect(ut.productTypes.topicals).toBe("legal");
    expect(JSON.stringify(ut)).not.toMatch(/HB 58\b/);
    expect(JSON.stringify(ut)).toMatch(/HB 54|4 ch\. 41/);
    expect(JSON.stringify(ut)).toMatch(/HB 509/);
  });

  // ---- VERMONT ----
  it("vermont: bans hold; THCP banned; Act 164 cite corrected to Hemp Rules; S.278 noted", () => {
    const vt = s("vermont");
    expect(vt.compounds.delta8.status).toBe("banned");
    expect(vt.compounds.delta9Hemp.status).toBe("banned");
    expect(vt.compounds.thcp.status).toBe("banned"); // consistency: intoxicating hemp cannabinoid ban
    expect(JSON.stringify(vt)).not.toMatch(/Act 164/);
    expect(JSON.stringify(vt)).toMatch(/Vermont Hemp Rules|Act 158/);
    expect(JSON.stringify(vt)).toMatch(/S\.278/);
    expect(JSON.stringify(vt)).toMatch(/June 18, 2026|Jun\. 18, 2026/);
  });

  // ---- VIRGINIA ----
  it("virginia: SB 903 is a restriction not an authorization -> d8/HHC/D10/THCA banned, D9 restricted; 2 mg cap + 4th Cir", () => {
    const va = s("virginia");
    expect(va.compounds.delta8.status).toBe("banned");
    expect(va.compounds.hhc.status).toBe("banned");
    expect(va.compounds.delta10.status).toBe("banned");
    expect(va.compounds.thca.status).toBe("banned");
    expect(va.compounds.delta9Hemp.status).toBe("restricted");
    expect(va.compounds.thcp.status).toBe("banned"); // consistency: synthetic-THC ban + 2 mg cap
    expect(va.productTypes.flower).toBe("banned");
    expect(va.productTypes.gummies).toBe("restricted");
    expect(va.ageRestriction).toBe(21);
    expect(JSON.stringify(va)).toMatch(/2 mg|2mg/);
    expect(JSON.stringify(va)).toMatch(/August 15, 2026|Aug\. 15, 2026/);
    expect(JSON.stringify(va)).toMatch(/Fourth Circuit|4th Cir/);
  });

  // ---- WASHINGTON ----
  it("washington: accurate bans hold; THCP banned; retail CBD zero-detectable-THC caveat", () => {
    const wa = s("washington");
    expect(wa.compounds.delta8.status).toBe("banned");
    expect(wa.compounds.thcp.status).toBe("banned");
    expect(wa.compounds.cbd.detail).toMatch(/zero[- ]detectable/i);
    expect(JSON.stringify(wa)).toMatch(/SB 5367/);
  });

  // ---- WEST VIRGINIA ----
  it("west-virginia: permit regime -> d8/D9/HHC/D10/THCP restricted, shipping restricted; SB 447 fabricated cite removed", () => {
    const wv = s("west-virginia");
    expect(wv.compounds.delta8.status).toBe("restricted");
    expect(wv.compounds.delta9Hemp.status).toBe("restricted");
    expect(wv.compounds.hhc.status).toBe("restricted");
    expect(wv.compounds.delta10.status).toBe("restricted");
    expect(wv.compounds.thcp.status).toBe("restricted"); // SB 220 permits THCP
    expect(wv.compounds.thca.status).toBe("gray");
    expect(wv.shippingIn).toBe("restricted");
    expect(wv.shippingOut).toBe("restricted");
    expect(wv.productTypes.gummies).toBe("restricted");
    expect(wv.productTypes.topicals).toBe("legal");
    expect(JSON.stringify(wv)).not.toMatch(/SB 447/);
    expect(JSON.stringify(wv)).toMatch(/SB 220|19-12E-12/);
    expect(JSON.stringify(wv)).toMatch(/SB 546/);
  });

  // ---- WISCONSIN ----
  it("wisconsin: unregulated -> d8/D9 legal, THC-O gray; no statutory age; Act 100/68 cites", () => {
    const wi = s("wisconsin");
    expect(wi.compounds.delta8.status).toBe("legal");
    expect(wi.compounds.delta9Hemp.status).toBe("legal");
    expect(wi.compounds.thco.status).toBe("gray");
    expect(wi.ageRestriction).toBe(null);
    expect(JSON.stringify(wi)).toMatch(/Act 100|Act 68|94\.55/);
    expect(JSON.stringify(wi)).toMatch(/March 23, 2026|Mar\. 23, 2026/);
  });

  // ---- WYOMING ----
  it("wyoming: SEA 24 total-THC ban -> d8/HHC/D10/THCA/THCP banned, D9 restricted; all forms + shipping banned; no age; impact low", () => {
    const wy = s("wyoming");
    expect(wy.compounds.delta8.status).toBe("banned");
    expect(wy.compounds.hhc.status).toBe("banned");
    expect(wy.compounds.delta10.status).toBe("banned");
    expect(wy.compounds.thca.status).toBe("banned");
    expect(wy.compounds.thcp.status).toBe("banned"); // consistency: synthetic/psychoactive ban
    expect(wy.compounds.delta9Hemp.status).toBe("restricted");
    expect(wy.productTypes.gummies).toBe("banned");
    expect(wy.productTypes.vapes).toBe("banned");
    expect(wy.productTypes.flower).toBe("banned");
    expect(wy.productTypes.tinctures).toBe("banned");
    expect(wy.productTypes.beverages).toBe("banned");
    expect(wy.productTypes.topicals).toBe("legal");
    expect(wy.shippingIn).toBe("banned");
    expect(wy.shippingOut).toBe("banned");
    expect(wy.ageRestriction).toBe(null);
    expect(wy.federalChangeImpact).toBe("low");
    expect(JSON.stringify(wy)).toMatch(/SF 32|SEA 24/);
    expect(JSON.stringify(wy)).toMatch(/Tenth Circuit|10th Cir/);
  });
});
