import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
const src = readFileSync("src/components/AffiliateCTA.tsx", "utf8");
describe("AffiliateCTA", () => {
  it("uses compliant rel and opens in a new tab", () => {
    expect(src).toMatch(/rel="sponsored nofollow noopener"/);
    expect(src).toMatch(/target="_blank"/);
  });
  it("renders the disclosure", () => {
    expect(src).toMatch(/data\.disclosure/);
  });
});
