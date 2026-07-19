import { describe, it, expect } from "vitest";
import { BLOG_POSTS, getBlogPost } from "@/data/blog";

const all = BLOG_POSTS.map((p) => p.content).join("\n");

describe("blog federal accuracy", () => {
  it("no fabricated act name anywhere", () => {
    expect(all).not.toMatch(/Hemp Product Safety and Regulation Act/);
  });
  it("no fabricated August 2026 DEA rules claim", () => {
    expect(all).not.toMatch(/final enforcement rules.*August 2026/i);
    expect(all).not.toMatch(/DEA'?s final enforcement rules come out in August 2026/i);
  });
  it("delta-9 post no longer claims it survives 2026", () => {
    const p = getBlogPost("hemp-derived-delta-9")!;
    expect(p.title).not.toMatch(/Survives 2026/i);
    expect(p.content).toMatch(/0\.4\s*mg/);
  });
  it("cbd-vs-delta-8 no longer says CBD is untouched", () => {
    const p = getBlogPost("cbd-vs-delta-8")!;
    expect(p.content).not.toMatch(/nothing to worry about/i);
  });
  it("posts reference the real vehicle where they name the law", () => {
    expect(all).toMatch(/H\.R\.\s*5371|Continuing Appropriations/);
  });
});
