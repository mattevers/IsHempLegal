import type { MetadataRoute } from "next";
import { getAllStates } from "@/data/states";
import { COMPOUND_SLUGS } from "@/types/hemp";

export default function sitemap(): MetadataRoute.Sitemap {
  const states = getAllStates();
  const compoundSlugs = Object.keys(COMPOUND_SLUGS);

  const stateUrls = states.map((s) => ({
    url: `https://www.ishemplegal.com/states/${s.slug}`,
    lastModified: new Date(s.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const comparePairs: MetadataRoute.Sitemap = [];
  for (let i = 0; i < states.length; i++) {
    for (let j = i + 1; j < states.length; j++) {
      comparePairs.push({
        url: `https://www.ishemplegal.com/compare/${states[i].slug}-vs-${states[j].slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      });
    }
  }

  const compoundUrls = compoundSlugs.map((c) => ({
    url: `https://www.ishemplegal.com/compounds/${c}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.ishemplegal.com",
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: "https://www.ishemplegal.com/states",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.ishemplegal.com/2026-federal-ban",
      lastModified: new Date(),
      priority: 0.95,
    },
    ...stateUrls,
    ...compoundUrls,
    ...comparePairs,
  ];
}
