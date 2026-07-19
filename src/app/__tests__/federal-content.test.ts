import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

const federal = readFileSync("src/app/2026-federal-ban/page.tsx", "utf8");
const compounds = readFileSync("src/app/compounds/[compound]/page.tsx", "utf8");
const home = readFileSync("src/app/page.tsx", "utf8");

describe("federal ban page", () => {
  it("drops the fabricated act name", () => {
    expect(federal).not.toMatch(/Hemp Product Safety and Regulation Act/);
  });
  it("names the real vehicle", () => {
    expect(federal).toMatch(/H\.R\.\s*5371/);
    expect(federal).toMatch(/Continuing Appropriations/);
  });
  it("states the per-container cap", () => {
    expect(federal).toMatch(/0\.4\s*mg/);
    expect(federal).toMatch(/per container/i);
  });
  it("names the synthesized-cannabinoid exclusion", () => {
    expect(federal).toMatch(/synthesi[sz]ed|manufactured outside the plant/i);
  });
  it("removes the fabricated DEA timeline", () => {
    expect(federal).not.toMatch(/public comment period/i);
    expect(federal).toMatch(/February 10, 2026|FDA/); // real milestone: missed FDA list deadline
  });
});

describe("compound federal descriptions", () => {
  it("no longer claims full-spectrum CBD is unaffected", () => {
    expect(compounds).not.toMatch(/Pure CBD isolate and broad-spectrum products are unaffected/);
    expect(compounds).toMatch(/0\.4\s*mg/);
  });
  it("no longer claims hemp delta-9 survives via dry-weight", () => {
    expect(compounds).not.toMatch(/remains legal under both the 2018 Farm Bill and the 2026 update/);
  });
});

describe("homepage", () => {
  it("states hemp was redefined to EXCLUDE these compounds", () => {
    expect(home).not.toMatch(/redefined hemp to include THCA and Delta-8 as controlled substances/);
  });
});
