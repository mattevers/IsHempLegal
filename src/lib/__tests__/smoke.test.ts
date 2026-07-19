import { describe, it, expect } from "vitest";
import { getAllStates } from "@/data/states";

describe("harness", () => {
  it("loads all 50 states via @ alias", () => {
    expect(getAllStates()).toHaveLength(50);
  });
});
