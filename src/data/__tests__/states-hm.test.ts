import { describe, it, expect } from "vitest";
import { statesData } from "@/data/states";

const s = (slug: string) => statesData[slug];

// Every HM-file state corrected in the 2026-07-18 audit.
const CORRECTED = [
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
];

describe("states-hm corrections (audit 2026-07-18)", () => {
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

  // ---- HAWAII ----
  it("hawaii: artificial cannabinoids banned; D9 capped/restricted; inhalables banned; 328D->328G", () => {
    const hi = s("hawaii");
    expect(hi.compounds.delta8.status).toBe("banned");
    expect(hi.compounds.delta10.status).toBe("banned");
    expect(hi.compounds.hhc.status).toBe("banned");
    expect(hi.compounds.delta9Hemp.status).toBe("restricted");
    expect(hi.compounds.delta9Hemp.detail).toMatch(/1 mg total THC per serving/);
    expect(hi.compounds.delta9Hemp.detail).toMatch(/5 mg per container/);
    expect(hi.productTypes.vapes).toBe("banned");
    expect(hi.productTypes.flower).toBe("banned");
    expect(hi.productTypes.gummies).toBe("restricted");
    expect(hi.productTypes.beverages).toBe("restricted");
    expect(hi.productTypes.tinctures).toBe("restricted"); // policy: ingestible tracks capped market
    expect(hi.shippingIn).toBe("restricted");
    expect(hi.compounds.cbd.statute).toMatch(/328G/);
    expect(hi.compounds.cbd.statute).toMatch(/HAR 11-37/);
    expect(JSON.stringify(hi)).not.toMatch(/328D/);
  });

  // ---- IDAHO ----
  it("idaho: HB 879 + hemp code added; no statutory age", () => {
    const id = s("idaho");
    expect(id.ageRestriction).toBe(null);
    expect(JSON.stringify(id)).toMatch(/HB 879/);
    expect(JSON.stringify(id)).toMatch(/22-1701/);
  });

  // ---- ILLINOIS ----
  it("illinois: intoxicating hemp legal/unregulated pre-SB 3222; forms legal; impact high", () => {
    const il = s("illinois");
    expect(il.compounds.delta8.status).toBe("legal");
    expect(il.compounds.delta9Hemp.status).toBe("legal");
    expect(il.compounds.thca.status).toBe("legal");
    expect(il.compounds.hhc.status).toBe("legal");
    expect(il.compounds.delta10.status).toBe("legal");
    expect(il.productTypes.gummies).toBe("legal"); // policy: match legal compounds
    expect(il.productTypes.vapes).toBe("legal");
    expect(il.productTypes.flower).toBe("legal");
    expect(il.productTypes.beverages).toBe("legal");
    expect(il.ageRestriction).toBe(21);
    expect(il.federalChangeImpact).toBe("high");
    expect(JSON.stringify(il)).toMatch(/SB 3222/);
    expect(JSON.stringify(il)).toMatch(/Chicago/);
  });

  // ---- INDIANA ----
  it("indiana: smokable flower banned; vapes gray; d8 contested; no statutory age", () => {
    const inn = s("indiana");
    expect(inn.productTypes.flower).toBe("banned");
    expect(inn.productTypes.vapes).toBe("gray");
    expect(inn.ageRestriction).toBe(null);
    expect(inn.compounds.delta8.detail).toMatch(/SEA 516/);
    expect(inn.compounds.delta8.detail).toMatch(/AG Opinion 2023-1/);
    expect(inn.compounds.delta8.detail).not.toMatch(/explicitly permit/);
    expect(JSON.stringify(inn)).toMatch(/35-48-4-10\.1/);
    expect(inn.notes).toMatch(/SB 478/);
    expect(inn.notes).toMatch(/SB 250/);
  });

  // ---- IOWA ----
  it("iowa: HF 2605 caps (not bans) d8/d9; SF 2398 removed; impact high", () => {
    const ia = s("iowa");
    expect(ia.compounds.delta8.status).toBe("restricted");
    expect(ia.compounds.delta9Hemp.status).toBe("restricted");
    expect(ia.productTypes.gummies).toBe("restricted");
    expect(ia.productTypes.beverages).toBe("restricted");
    expect(ia.productTypes.tinctures).toBe("restricted"); // policy: ingestible tracks capped market
    expect(ia.productTypes.vapes).toBe("banned");
    expect(ia.productTypes.flower).toBe("banned");
    expect(ia.federalChangeImpact).toBe("high");
    expect(JSON.stringify(ia)).not.toMatch(/SF 2398/);
    expect(JSON.stringify(ia)).toMatch(/HF 2605/);
    expect(JSON.stringify(ia)).toMatch(/204\.14A/);
    expect(ia.compounds.delta8.detail).toMatch(/4 mg total THC per serving/);
    expect(ia.compounds.delta8.detail).toMatch(/10 mg per container/);
  });

  // ---- KANSAS ----
  it("kansas: d8/THCA gray; flower/vapes banned; no statutory age; AG 2021-14", () => {
    const ks = s("kansas");
    expect(ks.compounds.delta8.status).toBe("gray");
    expect(ks.compounds.thca.status).toBe("gray");
    expect(ks.productTypes.flower).toBe("banned");
    expect(ks.productTypes.vapes).toBe("banned");
    expect(ks.ageRestriction).toBe(null);
    expect(JSON.stringify(ks)).toMatch(/2021-14/);
    expect(JSON.stringify(ks)).toMatch(/2-3901/);
  });

  // ---- KENTUCKY ----
  it("kentucky: beverages restricted (SB 202/HB 775); d8 stays legal", () => {
    const ky = s("kentucky");
    expect(ky.productTypes.beverages).toBe("restricted");
    expect(ky.compounds.delta8.status).toBe("legal");
    expect(JSON.stringify(ky)).toMatch(/SB 202/);
    expect(JSON.stringify(ky)).toMatch(/HB 775/);
    expect(JSON.stringify(ky)).toMatch(/5 mg THC per 12 oz serving/);
    expect(JSON.stringify(ky)).toMatch(/June 1, 2025/);
  });

  // ---- LOUISIANA ----
  it("louisiana: inhalables banned; THCA banned; HHC gray; HB 640 removed; Acts added", () => {
    const la = s("louisiana");
    expect(la.productTypes.flower).toBe("banned");
    expect(la.productTypes.vapes).toBe("banned");
    expect(la.compounds.thca.status).toBe("banned");
    expect(la.compounds.hhc.status).toBe("gray");
    expect(la.shippingIn).toBe("restricted");
    expect(JSON.stringify(la)).not.toMatch(/HB 640/);
    expect(JSON.stringify(la)).toMatch(/Act 336/);
    expect(JSON.stringify(la)).toMatch(/Act 498/);
    expect(JSON.stringify(la)).toMatch(/Act 752/);
    expect(la.compounds.delta8.detail).toMatch(/5 mg total THC per serving/);
    expect(la.notes).toMatch(/gas station/);
    expect(JSON.stringify(la)).toMatch(/HB 12/);
    expect(JSON.stringify(la)).toMatch(/HB 36/);
  });

  // ---- MAINE ----
  it("maine: hemp THC legal at general retail 21+; Title 28-B removed; 7 M.R.S. 2231 added", () => {
    const me = s("maine");
    expect(me.compounds.delta8.status).toBe("legal");
    expect(me.compounds.delta9Hemp.status).toBe("legal");
    expect(me.compounds.hhc.status).toBe("legal");
    expect(me.compounds.delta10.status).toBe("legal");
    expect(me.productTypes.gummies).toBe("legal");
    expect(me.productTypes.beverages).toBe("legal");
    expect(JSON.stringify(me)).not.toMatch(/28-B/);
    expect(JSON.stringify(me)).toMatch(/2231/);
    expect(JSON.stringify(me)).toMatch(/PL 2025/);
  });

  // ---- MARYLAND ----
  it("maryland: d8/d10 banned outside dispensaries; Moore ruling; low-dose retail caps", () => {
    const md = s("maryland");
    expect(md.compounds.delta8.status).toBe("banned");
    expect(md.compounds.delta10.status).toBe("banned");
    expect(md.productTypes.tinctures).toBe("restricted"); // policy: ingestible tracks restricted market
    expect(JSON.stringify(md)).toMatch(/Moore/);
    expect(JSON.stringify(md)).toMatch(/0\.5 mg THC per serving/);
    expect(JSON.stringify(md)).toMatch(/2\.5 mg per package/);
  });

  // ---- MASSACHUSETTS ----
  it("massachusetts: all intoxicating hemp banned; MDAR regulator; c.94G->c.128; H.5350 study", () => {
    const ma = s("massachusetts");
    expect(ma.compounds.delta8.status).toBe("banned");
    expect(ma.compounds.delta9Hemp.status).toBe("banned");
    expect(ma.compounds.thca.status).toBe("banned");
    expect(ma.compounds.hhc.status).toBe("banned");
    expect(ma.compounds.delta10.status).toBe("banned");
    expect(ma.productTypes.gummies).toBe("banned"); // policy: match compound bans
    expect(ma.productTypes.vapes).toBe("banned");
    expect(ma.productTypes.flower).toBe("banned");
    expect(ma.productTypes.beverages).toBe("banned");
    expect(ma.productTypes.tinctures).toBe("banned");
    expect(ma.productTypes.topicals).toBe("legal");
    expect(JSON.stringify(ma)).not.toMatch(/94G/);
    expect(JSON.stringify(ma)).toMatch(/c\. 128/);
    expect(JSON.stringify(ma)).toMatch(/116/);
    expect(JSON.stringify(ma)).toMatch(/MDAR/);
    expect(JSON.stringify(ma)).toMatch(/H\.5350/);
    expect(ma.compounds.cbd.detail).toMatch(/food/);
  });

  // ---- MICHIGAN ----
  it("michigan: all hemp THC restricted to licensed market (PA 87/PA 56); impact medium", () => {
    const mi = s("michigan");
    expect(mi.compounds.delta8.status).toBe("restricted");
    expect(mi.compounds.delta9Hemp.status).toBe("restricted");
    expect(mi.compounds.thca.status).toBe("restricted");
    expect(mi.compounds.hhc.status).toBe("restricted");
    expect(mi.compounds.delta10.status).toBe("restricted");
    expect(mi.productTypes.gummies).toBe("restricted");
    expect(mi.productTypes.vapes).toBe("restricted");
    expect(mi.productTypes.flower).toBe("restricted");
    expect(mi.productTypes.tinctures).toBe("restricted");
    expect(mi.productTypes.beverages).toBe("restricted");
    expect(mi.productTypes.topicals).toBe("legal");
    expect(mi.shippingIn).toBe("restricted");
    expect(mi.shippingOut).toBe("restricted");
    expect(mi.federalChangeImpact).toBe("medium");
    expect(JSON.stringify(mi)).toMatch(/PA 87/);
    expect(JSON.stringify(mi)).toMatch(/PA 56/);
  });

  // ---- MINNESOTA ----
  it("minnesota: LPHE d8/d9 legal, HHC banned; HF 100 removed; ch.342; impact high", () => {
    const mn = s("minnesota");
    expect(mn.compounds.delta8.status).toBe("legal");
    expect(mn.compounds.delta9Hemp.status).toBe("legal");
    expect(mn.compounds.hhc.status).toBe("banned");
    expect(mn.productTypes.gummies).toBe("legal");
    expect(mn.productTypes.beverages).toBe("legal");
    expect(mn.federalChangeImpact).toBe("high");
    expect(JSON.stringify(mn)).not.toMatch(/HF 100/);
    expect(JSON.stringify(mn)).toMatch(/ch\. 342/);
    expect(mn.compounds.delta8.detail).toMatch(/5 mg per serving/);
    expect(mn.compounds.delta8.detail).toMatch(/50 mg per package/);
    expect(mn.compounds.delta8.detail).toMatch(/10 mg per container/);
    expect(JSON.stringify(mn)).toMatch(/April 1, 2026/);
    expect(JSON.stringify(mn)).toMatch(/OCM/);
  });

  // ---- MISSISSIPPI ----
  it("mississippi: all intoxicating -> gray (Aug 2025 AG opinion); no statutory age", () => {
    const ms = s("mississippi");
    expect(ms.compounds.delta8.status).toBe("gray");
    expect(ms.compounds.delta10.status).toBe("gray");
    expect(ms.compounds.thca.status).toBe("gray");
    expect(ms.compounds.delta9Hemp.status).toBe("gray");
    expect(ms.productTypes.gummies).toBe("gray");
    expect(ms.productTypes.vapes).toBe("gray");
    expect(ms.productTypes.flower).toBe("gray");
    expect(ms.productTypes.tinctures).toBe("gray");
    expect(ms.productTypes.beverages).toBe("gray");
    expect(ms.productTypes.topicals).toBe("legal");
    expect(ms.shippingIn).toBe("gray");
    expect(ms.shippingOut).toBe("gray");
    expect(ms.ageRestriction).toBe(null);
    expect(JSON.stringify(ms)).toMatch(/presumptively illegal/);
    expect(JSON.stringify(ms)).toMatch(/HB 1502/);
  });

  // ---- MISSOURI ----
  it("missouri: statuses legal until Nov 12 2026 sunset; HB 2641 added; impact high", () => {
    const mo = s("missouri");
    expect(mo.compounds.delta8.status).toBe("legal");
    expect(mo.compounds.delta9Hemp.status).toBe("legal");
    expect(mo.federalChangeImpact).toBe("high");
    expect(JSON.stringify(mo)).toMatch(/HB 2641/);
    expect(JSON.stringify(mo)).toMatch(/Parson/);
    expect(JSON.stringify(mo)).toMatch(/July 16, 2026/);
    expect(mo.notes).toMatch(/November 12, 2026/);
  });
});
