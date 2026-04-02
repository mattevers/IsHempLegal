import { StateData, Compound, LegalStatus } from "@/types/hemp";
import { statesAG } from "./states-ag";
import { statesHM } from "./states-hm";
import { statesNO } from "./states-no";
import { statesPW } from "./states-pw";

export const statesData: Record<string, StateData> = {
  ...statesAG,
  ...statesHM,
  ...statesNO,
  ...statesPW,
};

export function getStateBySlug(slug: string): StateData | undefined {
  return statesData[slug];
}

export function getAllStates(): StateData[] {
  return Object.values(statesData).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

export function getStatesByCompoundStatus(
  compound: Compound,
  status: LegalStatus
): StateData[] {
  return getAllStates().filter((s) => s.compounds[compound]?.status === status);
}
