import { describe, it, expect } from "vitest";
import { formatAgeRestriction } from "@/types/hemp";

describe("formatAgeRestriction", () => {
  it("formats a numeric age", () => {
    expect(formatAgeRestriction(21)).toBe("21+");
  });
  it("renders null as no statutory limit", () => {
    expect(formatAgeRestriction(null)).toBe("No statutory limit");
  });
});
