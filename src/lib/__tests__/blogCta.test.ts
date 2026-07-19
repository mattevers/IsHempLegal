import { describe, it, expect } from "vitest";
import { blogCompound, splitHtmlForCta } from "@/lib/blogCta";

describe("blogCompound", () => {
  it("maps known slugs", () => {
    expect(blogCompound("cbd-vs-delta-8")).toEqual({ key: "cbd", label: "CBD" });
    expect(blogCompound("is-delta-8-legal")).toEqual({ key: "delta8", label: "Delta-8 THC" });
  });
  it("returns null for unknown", () => {
    expect(blogCompound("misc")).toBeNull();
  });
});

describe("splitHtmlForCta", () => {
  it("splits a long post at a </p> boundary", () => {
    const html = Array.from({ length: 8 }, (_, i) => `<p>para ${i}</p>`).join("");
    const r = splitHtmlForCta(html)!;
    expect(r.before.endsWith("</p>")).toBe(true);
    expect(r.before + r.after).toBe(html);
    expect(r.before).toContain("para 0");
    expect(r.after).toContain("para 7");
  });
  it("returns null for short posts", () => {
    expect(splitHtmlForCta("<p>a</p><p>b</p>")).toBeNull();
  });
});
