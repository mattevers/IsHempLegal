import { describe, it, expect } from "vitest";
import { buildAffiliateUrl, getAffiliateCTA } from "@/data/affiliates";

describe("buildAffiliateUrl", () => {
  it("appends clickref when no query exists", () => {
    expect(buildAffiliateUrl("https://tidd.ly/abc", "state-oklahoma-delta8"))
      .toBe("https://tidd.ly/abc?clickref=state-oklahoma-delta8");
  });
  it("uses & when a query already exists", () => {
    expect(buildAffiliateUrl("https://x.tld/p?u=1", "home-lookup"))
      .toBe("https://x.tld/p?u=1&clickref=home-lookup");
  });
});

describe("getAffiliateCTA", () => {
  it("returns a DIRECT cta when legal and shipping not banned", () => {
    const cta = getAffiliateCTA({ compoundKey: "delta8", compoundLabel: "Delta-8 THC", status: "legal", shippingIn: "legal", stateName: "Oklahoma", placement: "state-oklahoma-delta8" })!;
    expect(cta.kind).toBe("direct");
    expect(cta.url).toContain("clickref=state-oklahoma-delta8");
    expect(cta.headline).toMatch(/Oklahoma/);
  });
  it("returns FALLBACK when banned", () => {
    const cta = getAffiliateCTA({ compoundKey: "delta8", compoundLabel: "Delta-8 THC", status: "banned", shippingIn: "banned", stateName: "Wyoming", placement: "state-wyoming-delta8" })!;
    expect(cta.kind).toBe("fallback");
    expect(cta.headline).toMatch(/legal in Wyoming/i);
  });
  it("returns FALLBACK when legal but shipping banned", () => {
    const cta = getAffiliateCTA({ compoundKey: "thca", status: "legal", shippingIn: "banned", stateName: "X", placement: "p" })!;
    expect(cta.kind).toBe("fallback");
  });
  it("returns a compound-level DIRECT cta when no state context", () => {
    const cta = getAffiliateCTA({ compoundKey: "cbd", compoundLabel: "CBD", placement: "compound-cbd" })!;
    expect(cta.kind).toBe("direct");
    expect(cta.disclosure).toMatch(/affiliate/i);
  });
  it("returns null when there is no affiliate for the compound", () => {
    expect(getAffiliateCTA({ compoundKey: "nonexistent", placement: "p" })).toBeNull();
  });
  it("returns a fallback cta for a valid compound the affiliate doesn't directly sell (thco)", () => {
    const cta = getAffiliateCTA({ compoundKey: "thco", compoundLabel: "THC-O", status: "banned", shippingIn: "banned", stateName: "Texas", placement: "state-texas-thco" })!;
    expect(cta).not.toBeNull();
    expect(cta.kind).toBe("fallback");
  });
  it("returns a fallback (not direct) cta for a valid unsold compound with NO state context (compound page path)", () => {
    const cta = getAffiliateCTA({ compoundKey: "thco", compoundLabel: "THC-O", placement: "compound-thc-o" })!;
    expect(cta).not.toBeNull();
    expect(cta.kind).toBe("fallback");
  });
});
