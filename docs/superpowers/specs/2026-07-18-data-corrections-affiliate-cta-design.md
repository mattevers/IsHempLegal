# Design: Legal Data Corrections + Status-Aware Affiliate CTA System

**Date:** 2026-07-18
**Status:** Approved by Matt
**Inputs:** `LEGAL-AUDIT-2026-07-18.md` (repo root) — full findings with sources.

## Goals

1. Correct all legal inaccuracies found in the July 18, 2026 audit (federal pages, blog, all 50 state entries, compound pages).
2. Increase affiliate revenue by adding more affiliate placements designed for CTR, without promoting products into states where they are banned.
3. Measure CTR per placement via Awin clickrefs (no new analytics scripts).

## Part 1 — Data corrections

Scope and order (details, statuses, citations, and sources are in the audit report):

1. **Federal-ban page (`src/app/2026-federal-ban/page.tsx`) + blog (`src/data/blog.ts`)**
   - Replace fabricated "Hemp Product Safety and Regulation Act" with the real vehicle: Section 781, Division B of H.R. 5371, Continuing Appropriations and Extensions Act, 2026 (Pub. L. 119-37), signed Nov 12, 2025, effective Nov 12, 2026. Verify P.L. number on congress.gov during implementation.
   - Replace the fabricated Jan/Apr/Aug 2026 timeline with the real one (FDA missed Feb 10, 2026 cannabinoid-list deadline; no rulemaking; pending congressional bills; House-passed 2026 Farm Bill keeps the ban; Texas litigation).
   - Add the law's two omitted mechanisms everywhere relevant: the 0.4 mg total-THC-per-container cap and the synthesized-cannabinoid exclusion.
   - Correct the two wrong consumer theses: full-spectrum CBD is largely NOT compliant (cap); hemp delta-9 edibles do NOT survive 2026. The "hemp-derived-delta-9" blog post gets rewritten around the correct conclusion; "cbd-vs-delta-8" and "2026-hemp-ban-consumers" corrected.
   - Fix compound-page ban-mechanism descriptions (delta-8/HHC/delta-10/THCP banned via synthesis exclusion, not total-THC math; HHC is not a THC isomer).
   - Fix garbled homepage line ("redefined hemp to include..." → "excludes ... from the definition of hemp").
2. **21 WRONG states** — full entry rewrites per audit (AZ, AR, CA, FL, GA, HI, IA, KS, ME, MI, MN, MS, MT, OH, SD, TN, UT, VT, VA, WV, WY). High-traffic first: TX-group states already OUTDATED are in step 3; priority within this step: CA, FL, GA, OH, TN, VA.
3. **14 OUTDATED states** — add 2025–26 laws, sunset dates, litigation (AL, CT, IL, KY, LA, MD, MA, MO, NE, NH, NJ, NM, RI, TX).
4. **10 MINOR + 5 ACCURATE states** — citation fixes, age-field corrections, small gaps.
5. **All 50 `federalChangeNote` fields** rewritten as enacted law with date; `federalChangeImpact` re-scored (e.g., IA/MN/AL → high; WY/MT → low).
6. **Age fields**: where no statutory minimum exists (IN, KS, MS, NE, NC, OK, WI, WY, ND, ID, and PA/SC pending verification), represent as no statutory limit. If the `ageRestriction: number` type can't express this cleanly, extend the type (e.g., `number | null`) and update the UI rendering — smallest change that renders honestly.
7. **`lastUpdated`** set to the real verification date (2026-07-18) only on entries actually corrected/verified.
8. **Low-confidence items** (audit Part 5) re-verified via web search before their specific edits; anything unresolvable gets conservative wording ("contested," "pending") rather than a firm status.

Constraint: keep the existing `StateData` shape except the age-field change above; pages derive everything from data, so no other structural edits.

## Part 2 — Affiliate CTA system

### Data layer (`src/data/affiliates.ts`)

- Keep `AFFILIATES` array (supports future networks).
- Add `getAffiliateCTA(opts: { compound?: Compound; status?: LegalStatus; stateName?: string; placement: string })` returning `{ url, headline, sub, buttonText } | null`:
  - Direct CTA only when `status === 'legal'` AND the state's `shippingIn` is not banned (DTC delivery is what the affiliate sells): headline like "Shop lab-tested {compound} — ships to {state}"; button "Shop {compound}".
  - Everything else — restricted/banned/gray/medical_only/unknown, shipping-banned states, or no compound context → fallback CTA: headline "Find hemp products that ARE legal in {state}", sub referencing federally compliant CBD; button "See legal products". Links to the same Diamond CBD affiliate URL.
  - URL = base tidd.ly link + Awin clickref query param identifying the placement (verify exact param name — `clickref` — against Awin/tidd.ly docs during implementation; if shortlinks don't carry params reliably, fall back to distinct deeplinks or test-click verification).
- Clickref scheme: `state-{slug}-{compound}`, `blog-{postslug}-{mid|end}`, `home-lookup`, `federal-ban`, `compound-{slug}`.

### Component (`src/components/AffiliateCTA.tsx`)

One component, two variants:
- `variant="inline"` — compact horizontal strip (icon/headline/button) for blog mid-article and lookup results.
- `variant="card"` — bordered card with headline, trust line ("Third-party lab tested · 20% off first order" — only claims verifiable on the affiliate landing page), and one high-contrast button, for state/compound/federal pages.
- All links `rel="sponsored nofollow noopener"` + `target="_blank"`. Visible "Affiliate link" disclosure text on/near each unit (FTC compliance; terms page already discloses).

### Placements

1. **ResultCard** — replace existing hardcoded shop block with `AffiliateCTA`, now status-aware (direct vs fallback).
2. **Blog posts** — renderer splits post HTML at paragraph boundaries; insert one `inline` CTA after ~40% of paragraphs and one `card` CTA at the end. Compound match: map each post slug → compound (cbd-vs-delta-8 → cbd, etc.); default to fallback CTA.
3. **Homepage LookupTool** — after a state result renders, show `inline` CTA using that state's delta-8 (or overall) status.
4. **Federal-ban page** — `card` CTA: "CBD products that stay federally legal after Nov 12" (isolate/zero-THC framing consistent with corrected content).

### Explicitly out of scope

Sticky bars, popups/exit-intent, GA4/Plausible, additional affiliate networks, paid placement experiments.

## Sequencing & verification

1. Commit data corrections (federal/blog first, then states in audit priority order — several commits fine).
2. Commit affiliate layer.
3. `npx tsc --noEmit` + `next build`; then spot-check in the browser: one banned state (e.g. Wyoming), one legal state (e.g. Oklahoma), one restricted state (e.g. Kentucky), a blog post, the federal-ban page, homepage lookup — verify correct statuses render and each placement shows the right CTA variant with the right clickref in the URL.
4. Verify one real click reaches Diamond CBD with clickref intact.

## Error handling

- `getAffiliateCTA` returns `null` when no affiliate matches → components render nothing (never an empty shell).
- Blog CTA insertion must not split inside HTML tags — split on `</p>` boundaries only; if a post has < 5 paragraphs, skip the mid CTA.

## Success criteria

- Site contains no claims contradicted by the audit's verified findings; all fabricated citations gone.
- Affiliate CTA appears on every state page, compound page, blog post, federal-ban page, and homepage lookup result — with banned-state pages showing only the fallback CTA.
- Awin dashboard shows clicks segmented by clickref.
