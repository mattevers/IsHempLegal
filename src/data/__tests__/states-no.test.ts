import { describe, it, expect } from "vitest";
import { statesData } from "@/data/states";

const s = (slug: string) => statesData[slug];

// Every state corrected in Task 7 of the 2026-07-18 audit.
// Montana physically lives in states-hm.ts but is corrected here (Task 6 left it
// out); it resolves through the aggregated statesData like the rest.
const CORRECTED = [
  "montana",
  "nebraska",
  "nevada",
  "new-hampshire",
  "new-jersey",
  "new-mexico",
  "new-york",
  "north-carolina",
  "north-dakota",
  "ohio",
  "oklahoma",
  "oregon",
];

describe("states-no corrections (audit 2026-07-18)", () => {
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

  // ---- MONTANA ----
  it("montana: artificial cannabinoids + THCA banned; inhalables/edibles banned; SB 546 fabricated cite removed; impact low", () => {
    const mt = s("montana");
    expect(mt.compounds.delta8.status).toBe("banned");
    expect(mt.compounds.hhc.status).toBe("banned");
    expect(mt.compounds.delta10.status).toBe("banned");
    expect(mt.compounds.thca.status).toBe("banned");
    expect(mt.compounds.thco.status).toBe("banned");
    expect(mt.compounds.thcp.status).toBe("banned"); // policy: artificially derived, same as THC-O
    expect(mt.productTypes.gummies).toBe("banned");
    expect(mt.productTypes.tinctures).toBe("banned");
    expect(mt.productTypes.beverages).toBe("banned");
    expect(mt.productTypes.vapes).toBe("banned"); // policy: intoxicating inhalable
    expect(mt.productTypes.flower).toBe("banned"); // policy: intoxicating inhalable
    expect(mt.productTypes.topicals).toBe("legal");
    expect(mt.federalChangeImpact).toBe("low");
    expect(JSON.stringify(mt)).not.toMatch(/SB 546/);
    expect(JSON.stringify(mt)).toMatch(/HB 948/);
    expect(JSON.stringify(mt)).toMatch(/SB 375/);
    expect(JSON.stringify(mt)).toMatch(/HB 49/);
    expect(JSON.stringify(mt)).toMatch(/0\.5 mg/); // HB 49 per-serving cap (verified)
    expect(JSON.stringify(mt)).toMatch(/2 mg/); // HB 49 per-package cap (verified)
  });

  // ---- NEBRASKA ----
  it("nebraska: intoxicating hemp -> gray/contested; no statutory age; LB 657 kept; EO 26-02 + Ag rule", () => {
    const ne = s("nebraska");
    expect(ne.compounds.delta8.status).toBe("gray");
    expect(ne.compounds.delta9Hemp.status).toBe("gray");
    expect(ne.compounds.thca.status).toBe("gray");
    expect(ne.compounds.delta10.status).toBe("gray"); // consistency: intoxicating isomer, same posture as delta-8
    expect(ne.productTypes.gummies).toBe("gray"); // policy: match contested compounds
    expect(ne.productTypes.beverages).toBe("gray");
    expect(ne.productTypes.topicals).toBe("legal");
    expect(ne.ageRestriction).toBe(null);
    expect(JSON.stringify(ne)).toMatch(/LB 657/);
    expect(JSON.stringify(ne)).toMatch(/EO 26-02/);
    expect(JSON.stringify(ne)).toMatch(/Hilgers/);
    expect(JSON.stringify(ne)).toMatch(/adulterant/i);
  });

  // ---- NEVADA ----
  it("nevada: statuses hold; fabricated AB 49 cite -> SB 49 (2021) + SB 356 (2025); courier/mail misdemeanor", () => {
    const nv = s("nevada");
    expect(nv.compounds.delta8.status).toBe("banned");
    expect(nv.compounds.delta9Hemp.status).toBe("restricted");
    expect(nv.compounds.thca.status).toBe("restricted");
    expect(JSON.stringify(nv)).not.toMatch(/AB 49/);
    expect(JSON.stringify(nv)).toMatch(/SB 49 \(2021\)/);
    expect(JSON.stringify(nv)).toMatch(/SB 356 \(2025\)/);
    expect(JSON.stringify(nv)).toMatch(/misdemeanor/);
  });

  // ---- NEW HAMPSHIRE ----
  it("new-hampshire: statuses legal with SB 624 sunset; no current statutory age; impact high", () => {
    const nh = s("new-hampshire");
    expect(nh.compounds.delta8.status).toBe("legal");
    expect(nh.compounds.delta9Hemp.status).toBe("legal");
    expect(nh.ageRestriction).toBe(null);
    expect(nh.federalChangeImpact).toBe("high");
    expect(JSON.stringify(nh)).toMatch(/SB 624/);
    expect(JSON.stringify(nh)).toMatch(/January 1, 2027|Jan\. 1, 2027/);
    expect(nh.notes).toMatch(/sunset|December 31, 2026|Dec\. 31, 2026/);
  });

  // ---- NEW JERSEY ----
  it("new-jersey: converted cannabinoids banned post-grace; beverages restricted; S4509 + Loki", () => {
    const nj = s("new-jersey");
    expect(nj.compounds.delta8.status).toBe("banned");
    expect(nj.compounds.thca.status).toBe("banned");
    expect(nj.compounds.hhc.status).toBe("banned");
    expect(nj.compounds.delta10.status).toBe("banned");
    expect(nj.compounds.thcp.status).toBe("banned"); // consistency: intoxicating homolog under the category ban
    expect(nj.productTypes.gummies).toBe("banned"); // policy: match compound bans
    expect(nj.productTypes.vapes).toBe("banned");
    expect(nj.productTypes.flower).toBe("banned");
    expect(nj.productTypes.tinctures).toBe("banned");
    expect(nj.productTypes.beverages).toBe("restricted"); // <=5 mg liquor-store lane until Nov 13 2026
    expect(nj.productTypes.topicals).toBe("legal");
    expect(JSON.stringify(nj)).toMatch(/S4509/);
    expect(JSON.stringify(nj)).toMatch(/Loki/);
    expect(JSON.stringify(nj)).toMatch(/April 13, 2026|Apr\. 13, 2026/);
    expect(JSON.stringify(nj)).toMatch(/November 13, 2026|Nov\. 13, 2026/);
  });

  // ---- NEW MEXICO ----
  it("new-mexico: converted cannabinoids banned; THCA gray; NMED (not CCD); Jan 28 2026 rule", () => {
    const nm = s("new-mexico");
    expect(nm.compounds.delta8.status).toBe("banned");
    expect(nm.compounds.hhc.status).toBe("banned");
    expect(nm.compounds.delta10.status).toBe("banned");
    expect(nm.compounds.thca.status).toBe("gray");
    expect(JSON.stringify(nm)).toMatch(/NMED/);
    expect(JSON.stringify(nm)).not.toMatch(/Cannabis Control Division/);
    expect(JSON.stringify(nm)).toMatch(/January 28, 2026|Jan\. 28, 2026/);
  });

  // ---- NEW YORK ----
  it("new-york: intoxicating banned, beverages restricted (CBD permitted); statutory spelling + cites", () => {
    const ny = s("new-york");
    expect(ny.compounds.delta8.status).toBe("banned");
    expect(ny.compounds.delta10.status).toBe("banned");
    expect(ny.compounds.thcp.status).toBe("banned"); // consistency: category ban on intoxicating hemp cannabinoids
    expect(ny.productTypes.beverages).toBe("restricted");
    expect(ny.productTypes.topicals).toBe("legal");
    expect(JSON.stringify(ny)).toMatch(/Marihuana/); // NY statutory spelling
    expect(JSON.stringify(ny)).not.toMatch(/Marijuana Regulation and Taxation Act/);
    expect(JSON.stringify(ny)).toMatch(/9 NYCRR Part 114/);
    expect(JSON.stringify(ny)).toMatch(/Cannabis Law/);
  });

  // ---- NORTH CAROLINA ----
  it("north-carolina: statuses stay legal (HB 328 pending); SB 352 cite fixed; no age; impact high", () => {
    const nc = s("north-carolina");
    expect(nc.compounds.delta8.status).toBe("legal");
    expect(nc.compounds.delta9Hemp.status).toBe("legal");
    expect(nc.ageRestriction).toBe(null);
    expect(nc.federalChangeImpact).toBe("high");
    expect(JSON.stringify(nc)).not.toMatch(/SB 352/);
    expect(JSON.stringify(nc)).toMatch(/SB 455/);
    expect(JSON.stringify(nc)).toMatch(/S\.L\. 2022-32/);
    expect(JSON.stringify(nc)).toMatch(/HB 328/);
    expect(nc.notes).toMatch(/pending|conference|House/);
    expect(nc.notes).toMatch(/July 27, 2026|week of July 27|Senate/);
  });

  // ---- NORTH DAKOTA ----
  it("north-dakota: accurate bans hold; THCP banned; citations added; no statutory age", () => {
    const nd = s("north-dakota");
    expect(nd.compounds.delta8.status).toBe("banned");
    expect(nd.compounds.thcp.status).toBe("banned");
    expect(nd.ageRestriction).toBe(null);
    expect(JSON.stringify(nd)).toMatch(/HB 1045/);
    expect(JSON.stringify(nd)).toMatch(/SB 2096/);
  });

  // ---- OHIO ----
  it("ohio: SB 56 dispensary-only ban; all intoxicating + product forms + shipping banned; SB 57 cite removed", () => {
    const oh = s("ohio");
    expect(oh.compounds.delta8.status).toBe("banned");
    expect(oh.compounds.delta9Hemp.status).toBe("banned");
    expect(oh.compounds.thca.status).toBe("banned");
    expect(oh.compounds.hhc.status).toBe("banned");
    expect(oh.compounds.delta10.status).toBe("banned");
    expect(oh.compounds.thcp.status).toBe("banned"); // consistency: >0.4mg total THC/container = marijuana
    expect(oh.productTypes.gummies).toBe("banned");
    expect(oh.productTypes.vapes).toBe("banned");
    expect(oh.productTypes.flower).toBe("banned");
    expect(oh.productTypes.tinctures).toBe("banned");
    expect(oh.productTypes.beverages).toBe("banned");
    expect(oh.productTypes.topicals).toBe("legal");
    expect(oh.shippingIn).toBe("banned");
    expect(oh.shippingOut).toBe("banned");
    expect(oh.federalChangeImpact).toBe("medium");
    expect(JSON.stringify(oh)).not.toMatch(/SB 57\b/);
    expect(JSON.stringify(oh)).toMatch(/SB 56/);
    expect(JSON.stringify(oh)).toMatch(/136th/);
    expect(JSON.stringify(oh)).toMatch(/March 20, 2026|Mar\. 20, 2026/);
  });

  // ---- OKLAHOMA ----
  it("oklahoma: statuses stay legal; fabricated HB 3208 cite replaced; no statutory age; Stitt letter", () => {
    const ok = s("oklahoma");
    expect(ok.compounds.delta8.status).toBe("legal");
    expect(ok.ageRestriction).toBe(null);
    expect(JSON.stringify(ok)).not.toMatch(/HB 3208/);
    expect(JSON.stringify(ok)).toMatch(/HB 2913/);
    expect(JSON.stringify(ok)).toMatch(/3-401/);
    expect(JSON.stringify(ok)).toMatch(/SB 1033/);
    expect(ok.notes).toMatch(/Stitt/);
  });

  // ---- OREGON ----
  it("oregon: artificially derived banned (d8/hhc/d10/THCP); natural THCA/D9 restricted; SB 1564 cite fixed", () => {
    const or = s("oregon");
    expect(or.compounds.delta8.status).toBe("banned");
    expect(or.compounds.hhc.status).toBe("banned");
    expect(or.compounds.delta10.status).toBe("banned");
    expect(or.compounds.thcp.status).toBe("banned"); // explicitly listed / artificially derived
    expect(or.compounds.thco.status).toBe("banned");
    expect(or.compounds.thca.status).toBe("restricted");
    expect(or.compounds.delta9Hemp.status).toBe("restricted");
    expect(JSON.stringify(or)).not.toMatch(/SB 1564/);
    expect(JSON.stringify(or)).toMatch(/HB 3000/);
    expect(JSON.stringify(or)).toMatch(/ORS 475C/);
  });
});
