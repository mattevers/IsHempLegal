# Data Corrections + Affiliate CTA System — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Correct every legal inaccuracy found in the July 18, 2026 audit across all 50 states + federal/blog/compound content, and add a status-aware affiliate CTA system (more placements, higher CTR, per-placement Awin clickref tracking).

**Architecture:** Two phases. Phase A corrects data (plain TS data files + a few JSX content constants), guarded by a Vitest suite that encodes the audit's objective findings (statuses, citations, ages, impact) as executable assertions — red, then edit data to green. Phase B adds a single presentational `AffiliateCTA` server component fed by a pure `getAffiliateCTA()` selector, wired into five surfaces. The selector is status-aware: a direct "shop" CTA only where the compound is legal and shipping in isn't banned; otherwise a "find what's legal in your state" fallback. Every affiliate URL carries a per-placement `clickref`.

**Tech Stack:** Next.js 16.2.2 (App Router, RSC), React 19.2.4, TypeScript 5, Tailwind CSS 4, Vitest (added for pure-logic TDD), Awin/tidd.ly affiliate links.

## Global Constraints

- **Next.js is non-standard here.** Per `AGENTS.md`: before writing any component/page code, read the relevant guide under `node_modules/next/dist/docs/` (e.g. `01-app`). Heed deprecation notices. `searchParams`/`params` are `Promise`s in this version (see existing pages).
- **Data shape:** keep the `StateData`/`CompoundStatus` shape unchanged **except** `ageRestriction: number` → `ageRestriction: number | null` (null = no statutory minimum). All 50 states remain present; `getAllStates`/slugs unchanged.
- **Status enum:** only values from `LegalStatus` = `'legal' | 'restricted' | 'gray' | 'banned' | 'medical_only' | 'unknown'`. `federalChangeImpact` only `'high' | 'medium' | 'low'`.
- **Federal law facts (use verbatim):** the change is **Section 781 of Division B of H.R. 5371, the Continuing Appropriations and Extensions Act, 2026 (Pub. L. 119-37)**, signed **November 12, 2025**, effective **November 12, 2026**. Mechanisms: (1) hemp redefined on **total THC (incl. THCA) < 0.3%**; (2) **0.4 mg total THC per container** cap on finished products; (3) exclusion of cannabinoids **synthesized/manufactured outside the plant**. Never use the fabricated name "Hemp Product Safety and Regulation Act." Confirm the Pub. L. number on congress.gov during Task 3.
- **Affiliate links:** every outbound affiliate `<a>` uses `target="_blank"` and `rel="sponsored nofollow noopener"`, carries a `clickref`, and sits near visible affiliate-disclosure text. Only make trust claims verifiable on the affiliate's landing page ("third-party lab tested").
- **Source of truth for corrections:** `LEGAL-AUDIT-2026-07-18.md` (repo root) — objective fields are tabulated in this plan; prose (`detail`/`notes`/`federalChangeNote`) must be rewritten to state the operative law + current status per the audit. Re-verify every audit item flagged "low confidence" with a web search before writing its value; if still unresolved, use the conservative status (`gray`) and say "contested"/"pending" in prose.
- **DTC reality:** the affiliate (Diamond CBD) ships nationally; a "direct shop this compound" CTA is shown only when that compound is `legal` in-state AND `shippingIn !== 'banned'`. Otherwise the fallback CTA (compliant CBD, legal everywhere) is shown.
- Commit after every task. Run `npx tsc --noEmit` before every commit in a task that touches `.ts`/`.tsx`.

---

## File Structure

- `vitest.config.ts` (create) — test runner, `@` alias → `src`, node environment.
- `src/types/hemp.ts` (modify) — `ageRestriction` type; add `formatAgeRestriction()`.
- `src/lib/compareNarrative.ts` (modify) — null-safe age sentence.
- `src/app/states/[slug]/page.tsx` (modify) — null-safe age render; swap "Where to Buy" to `AffiliateCTA`.
- `src/app/2026-federal-ban/page.tsx` (modify) — law name, mechanisms, timeline, CTA.
- `src/app/compounds/[compound]/page.tsx` (modify) — `COMPOUND_DESCRIPTIONS` federal text; status-aware CTA.
- `src/app/blog/[slug]/page.tsx` (modify) — mid/end CTA insertion.
- `src/data/blog.ts` (modify) — correct 5 posts.
- `src/data/states-ag.ts` / `states-hm.ts` / `states-no.ts` / `states-pw.ts` (modify) — corrections.
- `src/data/affiliates.ts` (modify) — add `getAffiliateCTA`, `buildAffiliateUrl`, clickref scheme.
- `src/components/AffiliateCTA.tsx` (create) — presentational CTA (inline + card variants).
- `src/components/ResultCard.tsx` (modify) — use `AffiliateCTA`.
- `src/lib/blogCta.ts` (create) — slug→compound map + HTML paragraph-split helper.
- Test files: `src/**/__tests__/*.test.ts` co-located per task.

---

## PHASE A — Data corrections

### Task 1: Add Vitest harness

**Files:**
- Create: `vitest.config.ts`
- Modify: `package.json` (scripts + devDeps)
- Test: `src/lib/__tests__/smoke.test.ts`

**Interfaces:**
- Produces: `npm test` (→ `vitest run`) and `npm run test:watch`; `@/…` import alias resolves in tests.

- [ ] **Step 1: Install Vitest**

Run: `npm install -D vitest@^2 vite-tsconfig-paths@^5`
Expected: added to devDependencies, no peer-dep errors that block install.

- [ ] **Step 2: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
```

- [ ] **Step 3: Add scripts to `package.json`**

Add to `"scripts"`: `"test": "vitest run"`, `"test:watch": "vitest"`.

- [ ] **Step 4: Write smoke test**

```ts
// src/lib/__tests__/smoke.test.ts
import { describe, it, expect } from "vitest";
import { getAllStates } from "@/data/states";

describe("harness", () => {
  it("loads all 50 states via @ alias", () => {
    expect(getAllStates()).toHaveLength(50);
  });
});
```

- [ ] **Step 5: Run**

Run: `npm test`
Expected: 1 passed. If the `@` alias fails, confirm `tsconfig.json` has `"paths": { "@/*": ["./src/*"] }` and that `vite-tsconfig-paths` is in `plugins`.

- [ ] **Step 6: Commit**

```bash
git add vitest.config.ts package.json package-lock.json src/lib/__tests__/smoke.test.ts
git commit -m "test: add Vitest harness for pure-logic and data tests"
```

---

### Task 2: `ageRestriction` nullable + null-safe rendering

**Files:**
- Modify: `src/types/hemp.ts` (line 21; add helper)
- Modify: `src/app/states/[slug]/page.tsx` (lines 77, 247)
- Modify: `src/lib/compareNarrative.ts` (lines 128-130)
- Test: `src/types/__tests__/age.test.ts`

**Interfaces:**
- Produces: `ageRestriction: number | null`; `formatAgeRestriction(age: number | null): string`.

- [ ] **Step 1: Write failing test**

```ts
// src/types/__tests__/age.test.ts
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
```

- [ ] **Step 2: Run → fail**

Run: `npm test -- age`
Expected: FAIL (`formatAgeRestriction` not exported).

- [ ] **Step 3: Edit `src/types/hemp.ts`**

Change `ageRestriction: number;` → `ageRestriction: number | null;`. Append:

```ts
export function formatAgeRestriction(age: number | null): string {
  return age === null ? "No statutory limit" : `${age}+`;
}
```

- [ ] **Step 4: Null-safe state page**

In `src/app/states/[slug]/page.tsx`:
- Import `formatAgeRestriction` from `@/types/hemp`.
- Line ~77 (FAQ answer) → 
```tsx
text:
  state.ageRestriction === null
    ? `${state.name} has no statutory minimum age specific to hemp products; retailers commonly require 21+.`
    : `The minimum age to purchase hemp products in ${state.name} is ${state.ageRestriction}.`,
```
- Line ~247 (stat tile) → replace `{state.ageRestriction}+` with `{formatAgeRestriction(state.ageRestriction)}`.

- [ ] **Step 5: Null-safe compare narrative**

In `src/lib/compareNarrative.ts` replace the age block (lines 128-132) with (accumulator is `parts`):

```ts
if (s1.ageRestriction !== s2.ageRestriction) {
  const a = (s: typeof s1) =>
    s.ageRestriction === null ? "no statutory age minimum" : `${s.ageRestriction}+`;
  parts.push(
    `Age requirements differ: ${s1.name} has ${a(s1)} while ${s2.name} has ${a(s2)}.`
  );
}
```

- [ ] **Step 6: Run test + typecheck**

Run: `npm test -- age && npx tsc --noEmit`
Expected: age test PASS; tsc exit 0 (existing numeric ages still satisfy `number | null`).

- [ ] **Step 7: Commit**

```bash
git add src/types/hemp.ts src/app/states/[slug]/page.tsx src/lib/compareNarrative.ts src/types/__tests__/age.test.ts
git commit -m "feat: make ageRestriction nullable with null-safe rendering"
```

---

### Task 3: Federal ban page + compound federal text + homepage line

**Files:**
- Modify: `src/app/2026-federal-ban/page.tsx`
- Modify: `src/app/compounds/[compound]/page.tsx` (COMPOUND_DESCRIPTIONS, lines 14-56)
- Modify: `src/app/page.tsx` (garbled redefinition line)
- Test: `src/app/__tests__/federal-content.test.ts`

**Interfaces:**
- Consumes: Global Constraints "Federal law facts".
- Produces: corrected federal content; `COMPOUND_DESCRIPTIONS` federal strings importable-by-fs for assertions.

- [ ] **Step 1: Confirm the Pub. L. number**

Web search / congress.gov: confirm "H.R. 5371", "Pub. L. 119-37", "Section 781". Note the confirmed identifiers before editing.

- [ ] **Step 2: Write failing fs-substring test**

```ts
// src/app/__tests__/federal-content.test.ts
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
```

- [ ] **Step 3: Run → fail**

Run: `npm test -- federal-content`
Expected: multiple FAIL.

- [ ] **Step 4: Rewrite the federal ban page** (`2026-federal-ban/page.tsx`)

Content edits (keep the page's component structure/JSX classes):
- "What the Law Says": replace the fabricated act name with "Section 781 of the Continuing Appropriations and Extensions Act, 2026 (H.R. 5371, Pub. L. 119-37), signed November 12, 2025". Keep total-THC redefinition; **add** the 0.4 mg total-THC-per-container cap and the synthesized/converted-cannabinoid exclusion as the operative bans.
- FAQ + "Remains Federally Legal" box: correct the CBD claim — full-spectrum/broad-spectrum products with detectable THC over 0.4 mg/container are **not** compliant; only THC-free isolate / true-zero-THC products, topicals under the cap, and non-cannabinoid hemp are safe. Fix the FAQ answers that name only "<0.3% total THC" as the test.
- Timeline: replace the three fabricated items with the real sequence — Nov 12, 2025 signed; **Feb 10, 2026 FDA statutory deadline to publish cannabinoid lists — missed, still unpublished**; no DEA/USDA rulemaking or comment period; pending delay/replace bills (H.R. 7024 delay to 2028; Wyden/Merkley CSRA; S.4315); 2026 Farm Bill passed House keeping the ban; **Nov 12, 2026 effective**.
- "Can states still allow…": keep, but soften preemption to note state-legal markets may persist under state law with federal enforcement risk.

- [ ] **Step 5: Fix `COMPOUND_DESCRIPTIONS`** (`compounds/[compound]/page.tsx`)

Rewrite each `federal` string per audit §1.6:
- `delta-8` / `delta-10`: banned primarily via the **synthesized-cannabinoid exclusion** (most are CBD-converted), effective Nov 12, 2026 — not "included in total THC".
- `delta-9`: **remove** the "remains legal … 2026 update" claim; state that finished hemp delta-9 edibles/beverages exceed the **0.4 mg/container** cap and become controlled substances Nov 12, 2026.
- `cbd`: **remove** "Pure CBD isolate and broad-spectrum products are unaffected"; state that the 0.4 mg/container cap makes most full-spectrum (and many broad-spectrum) products non-compliant; only THC-free isolate/zero-THC remain clearly legal.
- `hhc`: HHC is hydrogenated THC (not an isomer); banned via the synthesized/similar-effects prongs.
- `thcp`: mostly synthesized → synthesis exclusion; keep "potent" chemistry.
- `thc-o` / `thca`: already accurate — leave.
Also fix the two FAQ answers at lines ~126-130 (cbd "remain legal" and delta9Hemp "may still qualify") to match the above.

- [ ] **Step 6: Fix homepage line** (`page.tsx`)

Reword the garbled sentence to: hemp was **redefined to exclude** THCA, Delta-8, and other intoxicating cannabinoids, which makes them federally controlled substances as of November 12, 2026. Keep the Nov 12, 2026 banner.

- [ ] **Step 7: Run test + typecheck + build**

Run: `npm test -- federal-content && npx tsc --noEmit && npm run build`
Expected: PASS; tsc 0; build succeeds.

- [ ] **Step 8: Commit**

```bash
git add src/app/2026-federal-ban/page.tsx "src/app/compounds/[compound]/page.tsx" src/app/page.tsx src/app/__tests__/federal-content.test.ts
git commit -m "fix: correct federal hemp law name, mechanisms, timeline, and CBD/delta-9 claims"
```

---

### Task 4: Blog corrections (5 posts)

**Files:**
- Modify: `src/data/blog.ts`
- Test: `src/data/__tests__/blog.test.ts`

**Interfaces:**
- Consumes: Global Constraints federal facts.

- [ ] **Step 1: Write failing test**

```ts
// src/data/__tests__/blog.test.ts
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
```

- [ ] **Step 2: Run → fail**

Run: `npm test -- blog`
Expected: FAIL.

- [ ] **Step 3: Edit `blog.ts`** (per audit §D)

- `is-delta-8-legal`: replace the "Hemp Product Safety and Regulation Act" paragraph with the real vehicle + add the 0.4 mg/container cap and synthesis-exclusion as why delta-8 is banned. Keep chemistry/state-patchwork content.
- `thca-loophole-explained`: fix law name; add container cap; soften preemption line.
- `cbd-vs-delta-8`: rewrite the "CBD is safe/reinforced/nothing to worry about" section — most full-spectrum CBD is threatened by the 0.4 mg/container cap; only isolate/zero-THC is clearly safe.
- `hemp-derived-delta-9`: retitle (drop "The Legal THC Loophole That Survives 2026" → e.g. "Hemp-Derived Delta-9 THC: What the 2026 Federal Cap Means"); rewrite thesis — 5-15 mg gummies exceed the 0.4 mg/container cap 12-37× and become controlled substances Nov 12, 2026. Update `description`, `updatedAt: "2026-07-18"`.
- `2026-hemp-ban-consumers`: fix the "full-spectrum CBD stays legal", "hemp delta-9 may still qualify", "$5B CBD fully compliant", and "DEA final rules August 2026" claims; keep possession/grace-period guidance.
- Set `updatedAt: "2026-07-18"` on every edited post.

- [ ] **Step 4: Run test + typecheck**

Run: `npm test -- blog && npx tsc --noEmit`
Expected: PASS; tsc 0.

- [ ] **Step 5: Commit**

```bash
git add src/data/blog.ts src/data/__tests__/blog.test.ts
git commit -m "fix: correct federal-law claims across blog posts"
```

---

### Tasks 5-8: State data corrections (one task per file)

Each task follows the **same 5 steps**; only the state set and value table differ. The assertion pattern (shown once, in Task 5) is reused verbatim with the task's own table. Every task: (1) write assertions from the table → red; (2) rewrite objective fields to match + rewrite `detail`/`notes`/`federalChangeNote` prose per audit + set `lastUpdated: "2026-07-18"` on corrected states; (3) `npm test` green; (4) `npx tsc --noEmit`; (5) commit. Re-verify any audit "low confidence" item with a web search before writing it; if unresolved use `gray` + "contested"/"pending" prose.

**Prose rules for every corrected state:**
- `detail` must name the **operative statute** and the **current** status (not a superseded one).
- `federalChangeNote` must be rewritten from hypothetical to enacted: reference Section 781 / H.R. 5371, effective Nov 12, 2026, and the 0.4 mg/container cap; phrase impact consistently with the re-scored `federalChangeImpact`.
- Remove every fabricated/superseded statute citation (table "citation" column).

Legend for tables: compound keys `d8=delta8, d9=delta9Hemp, cbd, thca, hhc, d10=delta10, thco, thcp`. Product keys `gum, vape, flow, tinc, top, bev`. "→" = set to. Only listed fields change; unlisted fields stay.

---

### Task 5: `states-ag.ts` (AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA)

**Files:**
- Modify: `src/data/states-ag.ts`
- Test: `src/data/__tests__/states-ag.test.ts`

- [ ] **Step 1: Write failing assertions** (pattern — apply to every row in the table below)

```ts
// src/data/__tests__/states-ag.test.ts
import { describe, it, expect } from "vitest";
import { statesData } from "@/data/states";

const s = (slug: string) => statesData[slug];

describe("states-ag corrections", () => {
  it("arizona: intoxicating cannabinoids no longer 'legal'", () => {
    expect(s("arizona").compounds.delta8.status).toBe("restricted");
    expect(s("arizona").compounds.thca.status).toBe("restricted");
    expect(s("arizona").shippingIn).toBe("restricted");
  });
  it("arkansas: delta-8 banned; citation corrected", () => {
    expect(s("arkansas").compounds.delta8.status).toBe("banned");
    expect(s("arkansas").compounds.thca.status).toBe("banned");
    expect(s("arkansas").compounds.delta8.statute).toMatch(/2023|Act 934/);
    expect(s("arkansas").compounds.delta8.statute).not.toMatch(/2019/);
  });
  it("california: intoxicating hemp banned from retail (AB 8)", () => {
    expect(s("california").compounds.delta8.status).toBe("banned");
    expect(s("california").productTypes.flower).toBe("banned");
  });
  it("florida: SB 1698 (vetoed) removed; THCA restricted", () => {
    const fl = s("florida");
    expect(fl.compounds.thca.status).toBe("restricted");
    expect(JSON.stringify(fl)).not.toMatch(/SB 1698/);
  });
  it("georgia: SB 494 — THCA banned, flower banned", () => {
    expect(s("georgia").compounds.thca.status).toBe("banned");
    expect(s("georgia").productTypes.flower).toBe("banned");
  });
  it("colorado: low-dose channel — edibles restricted not banned", () => {
    expect(s("colorado").productTypes.gummies).toBe("restricted");
  });
  it("every corrected AG state is re-dated and has no hypothetical fed note", () => {
    for (const slug of ["alabama","arizona","arkansas","california","colorado","connecticut","delaware","florida","georgia"]) {
      expect(s(slug).lastUpdated).toBe("2026-07-18");
      expect(s(slug).federalChangeNote).not.toMatch(/would\b/i);
    }
  });
});
```
Add assertions covering each objective change in the table below (statuses, productTypes, shipping, statute substrings, ageRestriction, federalChangeImpact).

**Change table:**

| State | Objective changes |
|---|---|
| alabama | productTypes: vape→banned, gum→restricted, bev→restricted, tinc→restricted; shippingIn→banned; federalChangeImpact→high; detail: add HB 445 Phase 2 (Jan 1 2026) 10mg/serving+ABC licensing |
| alaska | (accurate) federalChangeNote add May 29 2025 ruling; thcp→banned; lastUpdated only |
| arizona | d8/d9/thca/hhc/d10→restricted; gum/vape/flow/tinc/bev→restricted; shippingIn/shippingOut→restricted; notes: AG I24-005, enforcement Apr 24 2025, HITA injunction denied Jun 25 2025, SB 1702 died |
| arkansas | d8→banned, thca→banned, d9→gray*, hhc→banned, d10→banned; gum/vape/flow/tinc→banned; shippingIn/Out→banned; statute→"Ark. Act 629 (2023, SB 358); Act 934 (2025)" (remove 2019); cbd stays legal |
| california | d8/d9/thca/hhc/d10→banned; flow→banned, gum/vape/tinc/bev→banned (top legal); shippingIn/Out→banned; statute add "AB 8 (2025); CDPH emergency regs"; remove "AB 2223" |
| colorado | gum/bev/tinc→restricted; statute→add "SB 23-271; C.R.S. §25-5-427; 6 CCR 1010-24"; detail: legal ≤1.75mg/serving low-dose channel |
| connecticut | statute→add "PA 23-56; PA 24-76; PA 25-101"; cbd statute "§21a-92p"→"CGS §§22-61l, 22-61m"; notes: moderate-THC (0.5-5mg) vendor channel + package-store beverages |
| delaware | citation "§4914A"→"16 Del. C. §4714"; **re-verify HB 373**: if signed by 2026-07-18 set bev→restricted else keep banned + note "pending governor signature" |
| florida | thca→restricted; statute "SB 1698"→"FSA §581.217; SB 1676 (2023); FDACS Rule 5K-4.034"; notes: 2024 veto, total-d9 formula enforced Jun 16 2025, SB 438/SB 1270 failed; d8 stays legal |
| georgia | thca→banned; flow→banned; d8→restricted (licensed, 21+, 10mg/serving, 300mg/container); hhc→gray* (SB 33 phase-out); bev→restricted; statute→add "SB 494 (2024); SB 33 (2026)"; shippingIn/Out→restricted |

\* low-confidence — re-verify (AR sub-0.3% delta-9 edibles; GA SB 33 scope) before setting.

- [ ] **Step 2: Run → fail.** `npm test -- states-ag` → FAIL.
- [ ] **Step 3: Edit `states-ag.ts`** per table + prose rules.
- [ ] **Step 4: Verify.** `npm test -- states-ag && npx tsc --noEmit` → PASS / 0.
- [ ] **Step 5: Commit.** `git add src/data/states-ag.ts src/data/__tests__/states-ag.test.ts && git commit -m "fix: correct AL-GA hemp law data (audit 2026-07-18)"`

---

### Task 6: `states-hm.ts` (HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO)

**Files:** Modify `src/data/states-hm.ts`; Test `src/data/__tests__/states-hm.test.ts`. Same 5 steps + assertion pattern as Task 5.

**Change table:**

| State | Objective changes |
|---|---|
| hawaii | d8→banned, d10→banned, hhc→banned, d9→restricted (1mg/serving,5mg/container); vape→banned, flow→banned, gum→restricted, bev→restricted; statute "328D"→"HRS ch. 328G; HAR 11-37"; shippingIn→restricted (registration Jan 2026) |
| idaho | (accurate) statute add "HB 879 (2026); Idaho Code §22-1701 et seq."; ageRestriction→null |
| illinois | d8/d9/thca/hhc/d10→legal (unregulated until Nov 12 2026); statute add "SB 3222 (2026)"; notes: reclassified as cannabis Nov 12 2026, Chicago ban vetoed Feb 2026; ageRestriction 21 (SB 3222); impact→high |
| indiana | flow→banned (IC 35-48-4-10.1 smokable ban); vape→gray; ageRestriction→null; detail d8: SEA 516 doesn't "explicitly permit"; add AG Opinion 2023-1; notes: SB 478/SB 250 failed |
| iowa | d8→restricted, d9→restricted; gum→restricted, bev→restricted (vape/flow stay banned via §204.14A); statute "SF 2398"→"HF 2605 (2024); Iowa Code ch. 204"; impact→high; detail: 4mg/serving,10mg/container caps |
| kansas | d8→gray, thca→gray; flow→banned, vape→banned (K.S.A. 2-3901(b)(5)); ageRestriction→null; notes: AG Opinion 2021-14 |
| kentucky | bev→restricted; statute add "SB 202 (2025); HB 775 (2025)"; detail: 5mg/12oz, ABC oversight, alcohol-licensed only since Jun 1 2025; d8 stays legal 21+ |
| louisiana | flow→banned, vape→banned; thca→banned, hhc→gray; shippingIn→restricted; statute "HB 640"→"Act 336 (2021); Act 498 (2022); Act 752 (2024)"; detail d8/d9: 5mg/serving cap; notes: gas-station ban, HB 12/HB 36 (2025) |
| maine | d8/d9/hhc/d10→legal (general retail 21+); gum→legal, bev→legal; statute "Title 28-B"→"7 M.R.S. §2231 et seq.; PL 2025 c. 416"; notes rewrite |
| maryland | d8→banned, d10→banned; notes: Moore v. Md. Hemp Coalition (Sep 9 2025); general retail only ≤0.5mg/serving,2.5mg/pkg |
| massachusetts | d8/d9/thca/hhc/d10→banned; statute "c. 94G"→"M.G.L. c. 128 §§116-123"; notes: May 2024 DPH/MDAR/ABCC guidance (regulator MDAR), H.5350 (Apr 19 2026) study; cbd detail caveat (food/bev barred) |
| michigan | d8/d9/thca/hhc/d10→restricted; gum/vape/flow/tinc/bev→restricted; shippingIn/Out→restricted; statute add "PA 87 & PA 56 (2021)"; impact→medium; notes rewrite |
| minnesota | d8→legal, d9→legal (LPHE caps), hhc→banned; gum→legal, bev→legal; statute "HF 100"→"Minn. Stat. ch. 342"; impact→high; detail: 5mg/serving,50mg/pkg,10mg/container bev, OCM license from Apr 1 2026 |
| mississippi | d8→gray, d10→gray, thca→gray, d9→gray; gum/vape/flow/tinc/bev→gray; shippingIn/Out→gray; ageRestriction→null; notes: Aug 2025 AG opinion (presumptively illegal), HB 1502 died |
| missouri | statuses stay legal; statute add "HB 2641 (2026)"; notes+federalChangeNote: HB 2641 signed Apr 23 2026, eff Nov 12 2026 sunset, Parson EO 24-10 history, Jul 16 2026 suit; impact→high |

- [ ] Steps 1-5 as in Task 5. Commit msg: `"fix: correct HI-MO hemp law data (audit 2026-07-18)"`.

---

### Task 7: `states-no.ts` (MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR)

**Files:** Modify `src/data/states-no.ts`; Test `src/data/__tests__/states-no.test.ts`. Same 5 steps + pattern.

**Change table:**

| State | Objective changes |
|---|---|
| montana | statute "SB 546"→"HB 948 (2023); SB 375 (2025); HB 49 (2025)"; d8→banned, hhc→banned, d10→banned, thca→banned; tinc→banned, gum→banned, bev→banned; impact→low; notes rewrite (verify HB 49 caps*) |
| nebraska | d8→gray, thca→gray, d9→gray; ageRestriction→null; notes: AG Hilgers suits, Pillen EO 26-02 (Jan 26 2026), Dept Ag adulterant rule (Jun 18 2026 pending), LB 316 died; LB 657 cite stays |
| nevada | statute "AB 49"→"SB 49 (2021)"; add "SB 356 (2025)"; notes: dispensary-only, courier/mail into NV misdemeanor (statuses stay restricted) |
| new-hampshire | ageRestriction→null; statute add "SB 624 (2026)"; notes+federalChangeNote: SB 624 signed ~Jul 9 2026, eff Jan 1 2027 (0.4mg cap, 21+); statuses stay legal (sunset noted); impact→high |
| new-jersey | d8→banned, thca→banned, hhc→banned, d10→banned; bev→restricted (until Nov 13 2026); statute add "S4509 (2026)"; notes: Loki injunction gutted c.73, grace ended Apr 13 2026 |
| new-mexico | d8→banned, hhc→banned, d10→banned, thca→gray; statute add "NMED Hemp Final Rule (Jan 28 2026)"; notes: regulator is NMED not CCD, converted-cannabinoid ban |
| new-york | bev→restricted (CBD bev permitted; intoxicating banned); statute add "9 NYCRR Part 114; Cannabis Law"; fix "Marihuana" spelling; d8/d10 stay banned |
| north-carolina | statute "SB 352"→"SB 455 / S.L. 2022-32 (G.S. 90-94)"; ageRestriction→null; notes: HB 328 conference passed Senate Jul 2 2026, House vote ~week of Jul 27 2026 (0.4mg/container, 21+); statuses stay legal; impact→high |
| north-dakota | (accurate) statute add "HB 1045 (2021); SB 2096 (2023)"; thcp→banned; ageRestriction→null |
| ohio | d8/d9/thca/hhc/d10→banned; gum/vape/flow/tinc/bev→banned; shippingIn/Out→banned; statute "SB 57"→"SB 56 (2025, 136th GA)"; impact→medium; notes: eff Mar 20 2026, >0.4mg/container=marijuana, dispensary-only |
| oklahoma | statute "HB 3208"→"HB 2913 (2018); 2 O.S. §3-401; SB 1033 (2021)"; ageRestriction→null; notes: Stitt Apr 2025 enforcement letter; nothing passed |
| oregon | statute "SB 1564"→"HB 3000 (2021); ORS 475C; OLCC rules"; d8→banned, hhc→banned, d10→banned, thcp→banned (artificially derived); thca/d9 stay restricted |

\* verify HB 49 (MT) mg caps before writing prose.

- [ ] Steps 1-5 as Task 5. Commit: `"fix: correct MT-OR hemp law data (audit 2026-07-18)"`.

---

### Task 8: `states-pw.ts` (PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY)

**Files:** Modify `src/data/states-pw.ts`; Test `src/data/__tests__/states-pw.test.ts`. Same 5 steps + pattern.

**Change table:**

| State | Objective changes |
|---|---|
| pennsylvania | (accurate) ageRestriction→null (verify); notes: SB 49 failed Jun 2026; Act 92 of 2016 stays |
| rhode-island | d9→restricted, bev→restricted, gum→restricted; notes: licensed hemp-retailer channel (Aug 2024, ≤5mg/serving bev), CCC took over Jun 29 2025; d8/thca stay banned |
| south-carolina | d8→gray; ageRestriction→null (verify); notes: AG 2021 opinion + Operation Ganjapreneur (Dec 2025); thca detail add enforcement risk |
| south-dakota | d8→banned, hhc→banned, d10→banned, thcp→banned; statute add "HB 1125 (2024)"; notes: enforcement Jul 14 2025; d9 keep w/ naturally-derived caveat |
| tennessee | thca→banned, thcp→banned, d8→restricted* (TABC, in-person, 15mg/serving); flow→restricted; shippingIn/Out→banned; statute "HB 1927"→"Public Chapter 526 / HB 1376 (2025)"; notes: TABC, THCA sales ban Jul 1 2026 |
| texas | d8→banned, d10→banned, thcp→banned, hhc→gray*, thca→banned; flow→banned; statute add "25 TAC §300.101; GA-56; DSHS Schedule I reinstatement"; notes: SB 3 veto, Sky Marketing (May 1 2026), DSHS Jul 10 2026 (Sched I eff Jul 31 2026); d9/cbd stay legal; keep vape ban; age 21 stays |
| utah | d8→banned, hhc→banned, d10→banned, thca→banned, thcp→banned; d9→restricted (≤5mg/serving,150mg/pkg); statute "HB 58"→"Utah Code tit. 4 ch. 41/41a; HB 54 (2025)"; notes: HB 509 licensing Jan 1 2026 |
| vermont | statute "Act 164"→"Vermont Hemp Rules (2020); Act 158 (2022)"; notes: S.278 signed Jun 18 2026 (CCB oversight); statuses stay banned |
| virginia | d8→banned, hhc→banned, d10→banned, thca→banned, d9→restricted; statute stays "SB 903 (2023)" but detail reframed as restriction (2mg/pkg cap, synthetic-THC ban); notes: 4th Cir. upheld Jan 7 2025, 25:1 loophole ends Aug 15 2026, VDACS→CCA Jul 1 2026; age 21 stays |
| washington | (accurate) thcp→banned; cbd detail: zero-detectable-THC caveat; SB 5367 stays |
| west-virginia | d8→restricted, d9→restricted, hhc→restricted, d10→restricted, thcp→restricted; shippingIn/Out→restricted; statute "SB 447"→"SB 220 (2023) §19-12E-12; SB 546 (2023)"; notes: permits + 11% tax, ABCA rule May 15 2025; thca stays gray |
| wisconsin | d8→legal, d9→legal (unregulated); thco→gray; ageRestriction→null; statute add "2017 Act 100; 2019 Act 68 (Wis. Stat. §94.55)"; notes: SB 644/SB 682 died Mar 23 2026, local ordinances |
| wyoming | d8→banned, hhc→banned, d10→banned, thca→banned, d9→restricted; gum/vape/flow/tinc/bev→banned (top legal); shippingIn/Out→banned; statute add "SF 32 / SEA 24 (2024)"; ageRestriction→null; impact→low; notes: 10th Cir. upheld Oct 27 2025 |

\* low-confidence — re-verify TN delta-8 (restricted vs banned) and TX HHC before writing.

- [ ] Steps 1-5 as Task 5. Commit: `"fix: correct PA-WY hemp law data (audit 2026-07-18)"`.

---

### Task 9: Data-integrity guard (whole dataset)

**Files:** Test `src/data/__tests__/integrity.test.ts` (create).

**Interfaces:** Consumes `statesData`, `LegalStatus`, `formatAgeRestriction`.

- [ ] **Step 1: Write test (must pass after Tasks 5-8)**

```ts
// src/data/__tests__/integrity.test.ts
import { describe, it, expect } from "vitest";
import { statesData, getAllStates } from "@/data/states";

const STATUSES = ["legal","restricted","gray","banned","medical_only","unknown"];
const COMPOUNDS = ["delta8","delta9Hemp","cbd","thca","hhc","delta10","thco","thcp"];
const FAB = [/Hemp Product Safety and Regulation Act/, /\bSF 2398\b/, /\bSB 352\b/, /\bHB 3208\b/, /HB 58\b/, /Act 164/, /SB 1564/, /SB 447/, /SB 1698/];

describe("dataset integrity", () => {
  it("has 50 states with valid enums", () => {
    const all = getAllStates();
    expect(all).toHaveLength(50);
    for (const st of all) {
      for (const c of COMPOUNDS) expect(STATUSES).toContain(st.compounds[c as keyof typeof st.compounds].status);
      expect(["high","medium","low"]).toContain(st.federalChangeImpact);
      expect(st.ageRestriction === null || typeof st.ageRestriction === "number").toBe(true);
    }
  });
  it("contains no fabricated/superseded citations", () => {
    const blob = JSON.stringify(statesData);
    for (const re of FAB) expect(blob).not.toMatch(re);
  });
});
```

- [ ] **Step 2: Run.** `npm test -- integrity` → PASS (if any FAB citation remains, fix the owning state file). 
- [ ] **Step 3: Commit.** `git add src/data/__tests__/integrity.test.ts && git commit -m "test: dataset integrity guard (enums, no fabricated citations)"`

---

## PHASE B — Affiliate CTA system

### Task 10: `getAffiliateCTA` selector + clickref (pure logic, TDD)

**Files:**
- Modify: `src/data/affiliates.ts`
- Test: `src/data/__tests__/affiliates.test.ts`

**Interfaces:**
- Produces:
```ts
type CtaPlacement = string; // e.g. "state-wyoming-delta8", "blog-cbd-vs-delta-8-mid", "home-lookup", "federal-ban", "compound-cbd"
interface AffiliateCTAData { url: string; headline: string; sub: string; buttonText: string; kind: "direct" | "fallback"; disclosure: string; }
function buildAffiliateUrl(base: string, clickref: string): string;
function getAffiliateCTA(opts: { compoundKey?: string; compoundLabel?: string; status?: string; shippingIn?: string; stateName?: string; placement: CtaPlacement; }): AffiliateCTAData | null;
```

- [ ] **Step 1: Write failing tests**

```ts
// src/data/__tests__/affiliates.test.ts
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
});
```

- [ ] **Step 2: Run → fail.** `npm test -- affiliates` → FAIL.

- [ ] **Step 3: Implement in `affiliates.ts`** (append; keep existing exports)

```ts
export type CtaPlacement = string;
export interface AffiliateCTAData {
  url: string; headline: string; sub: string; buttonText: string;
  kind: "direct" | "fallback"; disclosure: string;
}
const DISCLOSURE = "Affiliate link — we may earn a commission at no extra cost to you.";

export function buildAffiliateUrl(base: string, clickref: string): string {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}clickref=${encodeURIComponent(clickref)}`;
}

export function getAffiliateCTA(opts: {
  compoundKey?: string; compoundLabel?: string; status?: string;
  shippingIn?: string; stateName?: string; placement: CtaPlacement;
}): AffiliateCTAData | null {
  const { compoundKey, compoundLabel, status, shippingIn, stateName, placement } = opts;
  const affiliate =
    (compoundKey ? getAffiliatesForCompound(compoundKey)[0] : undefined) ?? AFFILIATES[0];
  if (!affiliate) return null;
  const url = buildAffiliateUrl(affiliate.url, placement);
  const label = compoundLabel ?? "hemp products";
  const where = stateName ? ` in ${stateName}` : "";

  const directOk = status === "legal" && shippingIn !== "banned";
  const noStateContext = !status && !stateName;

  if (directOk || noStateContext) {
    return {
      url, kind: "direct", disclosure: DISCLOSURE,
      headline: `Shop lab-tested ${label}${where}`,
      sub: "Third-party lab tested. Ships fast.",
      buttonText: `Shop ${label}`,
    };
  }
  return {
    url, kind: "fallback", disclosure: DISCLOSURE,
    headline: `Find hemp products that are legal${where}`,
    sub: "Federally compliant CBD you can buy today.",
    buttonText: "See legal products",
  };
}
```

- [ ] **Step 4: Run → pass.** `npm test -- affiliates && npx tsc --noEmit`.

- [ ] **Step 5: Verify clickref passthrough (real link).** Open `https://tidd.ly/41c9UUh?clickref=test-verify` in the in-app browser; confirm it redirects to Diamond CBD (Awin tracking). If tidd.ly strips the param, switch `AFFILIATES[0].url` to the full Awin deep link (`https://www.awin1.com/cread.php?...`) so `clickref` is honored, and re-run. Record the outcome.

- [ ] **Step 6: Commit.**
```bash
git add src/data/affiliates.ts src/data/__tests__/affiliates.test.ts
git commit -m "feat: status-aware getAffiliateCTA with per-placement clickref"
```

---

### Task 11: `AffiliateCTA` component

**Files:**
- Create: `src/components/AffiliateCTA.tsx`
- Test: `src/components/__tests__/affiliateCta.render.test.ts` (structural fs check — no DOM)

**Interfaces:**
- Consumes: `AffiliateCTAData`.
- Produces: `<AffiliateCTA data={AffiliateCTAData} variant="inline" | "card" />` (default `card`). Server component (no hooks, no `"use client"`).

- [ ] **Step 1: Read Next docs.** Skim `node_modules/next/dist/docs/01-app` for RSC + linking guidance (confirm a plain `<a target="_blank">` is correct for external links; `next/link` is for internal routes).

- [ ] **Step 2: Implement**

```tsx
// src/components/AffiliateCTA.tsx
import { ExternalLink } from "lucide-react";
import type { AffiliateCTAData } from "@/data/affiliates";

export function AffiliateCTA({
  data,
  variant = "card",
}: {
  data: AffiliateCTAData;
  variant?: "inline" | "card";
}) {
  const accent =
    data.kind === "direct"
      ? "border-green-800/40 bg-green-900/20"
      : "border-brand-border bg-brand-card";
  const btn =
    "inline-flex items-center gap-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-5 py-2.5 transition-colors shrink-0";

  if (variant === "inline") {
    return (
      <div className={`rounded-xl border ${accent} p-4 flex items-center justify-between gap-4`}>
        <div>
          <p className="text-green-400 font-semibold text-sm">{data.headline}</p>
          <p className="text-gray-400 text-xs mt-0.5">{data.sub} · {data.disclosure}</p>
        </div>
        <a href={data.url} target="_blank" rel="sponsored nofollow noopener" className={btn}>
          {data.buttonText} <ExternalLink size={14} />
        </a>
      </div>
    );
  }
  return (
    <div className={`rounded-2xl border ${accent} p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
      <div>
        <p className="text-green-400 font-bold text-lg">{data.headline}</p>
        <p className="text-green-300/70 text-sm mt-1">{data.sub}</p>
        <p className="text-gray-600 text-xs mt-2">{data.disclosure}</p>
      </div>
      <a href={data.url} target="_blank" rel="sponsored nofollow noopener" className={btn}>
        {data.buttonText} <ExternalLink size={14} />
      </a>
    </div>
  );
}
```

- [ ] **Step 3: Structural test**

```ts
// src/components/__tests__/affiliateCta.render.test.ts
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
```

- [ ] **Step 4: Verify.** `npm test -- affiliateCta && npx tsc --noEmit`.
- [ ] **Step 5: Commit.** `git add src/components/AffiliateCTA.tsx src/components/__tests__/affiliateCta.render.test.ts && git commit -m "feat: AffiliateCTA presentational component (inline + card)"`

---

### Task 12: Wire ResultCard + state page "Where to Buy"

**Files:**
- Modify: `src/components/ResultCard.tsx`
- Modify: `src/app/states/[slug]/page.tsx`

**Interfaces:** Consumes `getAffiliateCTA`, `AffiliateCTA`. ResultCard already receives `compoundKey`, `stateName`, `compoundStatus`; add nothing to its Props except it needs `shippingIn` — pass `state.shippingIn` from the page.

- [ ] **Step 1:** Add `shippingIn: LegalStatus` to `ResultCard` `Props` (extend the existing `import { CompoundStatus } from "@/types/hemp"` to `import { CompoundStatus, LegalStatus } from "@/types/hemp"`) and thread it from the state page's `<ResultCard … shippingIn={state.shippingIn} />`.
- [ ] **Step 2:** In `ResultCard`, replace the entire affiliate block (current lines ~77-109) with:
```tsx
{(() => {
  const cta = getAffiliateCTA({
    compoundKey, compoundLabel, status: compoundStatus.status,
    shippingIn, stateName,
    placement: `state-${stateName.toLowerCase().replace(/\s+/g, "-")}-${compoundKey}`,
  });
  return cta ? <AffiliateCTA data={cta} variant="inline" /> : null;
})()}
```
Remove the now-unused `getAffiliatesForCompound` import and `affiliates`/`showShop` locals; import `getAffiliateCTA` and `AffiliateCTA`.
- [ ] **Step 3:** In the state page "Where to Buy" section (lines ~205-238), replace the `AFFILIATES.map(...)` block with a single `card` CTA driven by overall state legality — use the state's delta8 status as the intoxicating-market proxy:
```tsx
{(() => {
  const cta = getAffiliateCTA({
    compoundKey: "delta8", compoundLabel: "hemp products",
    status: state.compounds.delta8.status, shippingIn: state.shippingIn,
    stateName: state.name, placement: `state-${state.slug}-wheretobuy`,
  });
  return cta ? (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">Where to Buy Hemp Products in {state.name}</h2>
      <AffiliateCTA data={cta} variant="card" />
    </section>
  ) : null;
})()}
```
Remove the now-unused `AFFILIATES`/`ExternalLink` imports if nothing else uses them (check first).
- [ ] **Step 4: Verify.** `npx tsc --noEmit && npm run build`. Then in the in-app browser check `/states/wyoming` (fallback CTA) and `/states/oklahoma?compound=delta8` (ResultCard direct CTA).
- [ ] **Step 5: Commit.** `git commit -am "feat: status-aware affiliate CTAs on state pages and ResultCard"`

---

### Task 13: Blog mid/end CTAs

**Files:**
- Create: `src/lib/blogCta.ts`
- Modify: `src/app/blog/[slug]/page.tsx`
- Test: `src/lib/__tests__/blogCta.test.ts`

**Interfaces:**
- Produces: `blogCompound(slug: string): { key: string; label: string } | null`; `splitHtmlForCta(html: string): { before: string; after: string } | null` (splits at the paragraph boundary nearest the midpoint; returns `null` if fewer than 5 `</p>`).

- [ ] **Step 1: Failing tests**

```ts
// src/lib/__tests__/blogCta.test.ts
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
```

- [ ] **Step 2: Run → fail.**

- [ ] **Step 3: Implement `src/lib/blogCta.ts`**

```ts
const MAP: Record<string, { key: string; label: string }> = {
  "is-delta-8-legal": { key: "delta8", label: "Delta-8 THC" },
  "thca-loophole-explained": { key: "thca", label: "THCA" },
  "cbd-vs-delta-8": { key: "cbd", label: "CBD" },
  "hemp-derived-delta-9": { key: "delta9Hemp", label: "Delta-9 THC" },
  "2026-hemp-ban-consumers": { key: "cbd", label: "CBD" },
};
export function blogCompound(slug: string) {
  return MAP[slug] ?? null;
}
export function splitHtmlForCta(html: string): { before: string; after: string } | null {
  const idxs: number[] = [];
  const re = /<\/p>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) idxs.push(m.index + m[0].length);
  if (idxs.length < 5) return null;
  const target = html.length / 2;
  const cut = idxs.reduce((a, b) => (Math.abs(b - target) < Math.abs(a - target) ? b : a));
  return { before: html.slice(0, cut), after: html.slice(cut) };
}
```

- [ ] **Step 4: Run → pass.** `npm test -- blogCta`.

- [ ] **Step 5: Wire into `blog/[slug]/page.tsx`**

Import `getAffiliateCTA` (`@/data/affiliates`), `AffiliateCTA` (`@/components/AffiliateCTA`), `blogCompound`/`splitHtmlForCta` (`@/lib/blogCta`). Replace the single content `<article … dangerouslySetInnerHTML>` with:
```tsx
{(() => {
  const c = blogCompound(post.slug);
  const split = splitHtmlForCta(post.content);
  const midCta = c && getAffiliateCTA({ compoundKey: c.key, compoundLabel: c.label, placement: `blog-${post.slug}-mid` });
  const endCta = c && getAffiliateCTA({ compoundKey: c.key, compoundLabel: c.label, placement: `blog-${post.slug}-end` });
  const cls = "prose-custom text-gray-300 leading-relaxed space-y-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mb-4 [&_a]:text-green-400 [&_a]:underline hover:[&_a]:text-green-300 [&_strong]:text-white";
  return (
    <>
      {split && midCta ? (
        <>
          <article className={cls} dangerouslySetInnerHTML={{ __html: split.before }} />
          <div className="my-8"><AffiliateCTA data={midCta} variant="inline" /></div>
          <article className={cls} dangerouslySetInnerHTML={{ __html: split.after }} />
        </>
      ) : (
        <article className={cls} dangerouslySetInnerHTML={{ __html: post.content }} />
      )}
      {endCta && <div className="mt-8"><AffiliateCTA data={endCta} variant="card" /></div>}
    </>
  );
})()}
```
(Preserve the exact `[&_table]`/`[&_th]`/`[&_td]` classes from the original `cls` string — copy them from the current file.)

- [ ] **Step 6: Verify.** `npx tsc --noEmit && npm run build`; browser-check `/blog/cbd-vs-delta-8` (mid + end CTA present, article renders intact).
- [ ] **Step 7: Commit.** `git add src/lib/blogCta.ts src/app/blog/[slug]/page.tsx src/lib/__tests__/blogCta.test.ts && git commit -m "feat: mid- and end-article affiliate CTAs on blog posts"`

---

### Task 14: Compound page + federal-ban page CTAs

**Files:**
- Modify: `src/app/compounds/[compound]/page.tsx`
- Modify: `src/app/2026-federal-ban/page.tsx`

- [ ] **Step 1: Compound page** — replace the "Shop CTA" section (lines ~199-230) with:
```tsx
{(() => {
  const cta = getAffiliateCTA({ compoundKey, compoundLabel: label, placement: `compound-${compoundSlug}` });
  return cta ? <section className="mb-10"><AffiliateCTA data={cta} variant="card" /></section> : null;
})()}
```
Import `getAffiliateCTA` + `AffiliateCTA`; drop the now-unused `getAffiliatesForCompound`/`ExternalLink` if unused elsewhere in the file (check).
- [ ] **Step 2: Federal-ban page** — add, after the "Which Products Are Affected?" section, a `card` CTA framed for compliant products:
```tsx
<section className="mb-12">
  <AffiliateCTA
    data={getAffiliateCTA({ compoundKey: "cbd", compoundLabel: "CBD that stays legal after Nov 12", placement: "federal-ban" })!}
    variant="card"
  />
</section>
```
(Import the two symbols. `getAffiliateCTA` with a compound + no state → `direct`, non-null, so the `!` is safe; still guard with `&&` if preferred.)
- [ ] **Step 3: Verify.** `npx tsc --noEmit && npm run build`; browser-check `/compounds/cbd` and `/2026-federal-ban`.
- [ ] **Step 4: Commit.** `git commit -am "feat: affiliate CTAs on compound and federal-ban pages"`

---

### Task 15: Full verification pass

- [ ] **Step 1: Test + typecheck + build.** `npm test && npx tsc --noEmit && npm run build` → all green.
- [ ] **Step 2: Browser spot-check matrix** (in-app browser): 
  - `/states/wyoming` — WY banned; ResultCard/Where-to-Buy show **fallback** CTA; age shows "No statutory limit".
  - `/states/oklahoma?compound=delta8` — direct CTA "Shop … in Oklahoma"; clickref `state-oklahoma-delta8` in link URL.
  - `/states/kentucky?compound=delta9Hemp` — restricted; fallback CTA.
  - `/2026-federal-ban` — no fabricated act name; 0.4 mg cap present; real timeline; CTA present.
  - `/blog/hemp-derived-delta-9` — corrected title/thesis; mid + end CTA.
  - `/compounds/cbd` — corrected federal text; card CTA.
- [ ] **Step 3: Confirm clickref** — click one affiliate CTA; confirm the outbound URL carries its `clickref` (and, per Task 10 Step 5, that it reaches Diamond CBD).
- [ ] **Step 4: Update memory** — mark the audit fixes applied in `~/.claude/projects/-Users-matthewevers-IsHempLegal/memory/audit-2026-07.md`.
- [ ] **Step 5: Final commit** (if any spot-check fixes): `git commit -am "fix: verification-pass adjustments"`.

---

## Self-Review

**Spec coverage:** Part 1 data corrections → Tasks 3-9 (federal/blog/compound/homepage + all 50 states + integrity). Age-field honesty → Task 2 + per-file nulls. All 50 `federalChangeNote` rewrites + impact re-score → Tasks 5-8 (asserted in Task 5 "no `would`" + per-table impact). Affiliate: `getAffiliateCTA` → Task 10; component → 11; ResultCard + state page → 12; blog → 13; compound + federal → 14; clickref tracking → Tasks 10/15. Status-aware direct-vs-fallback + shipping gate → Task 10. Out-of-scope (sticky bars, GA4/Plausible, new networks) → not present. ✓

**Placeholder scan:** state prose points to the committed audit report with explicit prose rules and exact objective-value tables (not "TBD"); low-confidence items have an explicit re-verify instruction. No "add error handling"-style gaps. ✓

**Type consistency:** `getAffiliateCTA`/`buildAffiliateUrl`/`AffiliateCTAData` names match across Tasks 10-14; `formatAgeRestriction` consistent Task 2↔consumers; `ageRestriction: number | null` used consistently. ✓

**Scope:** single coherent plan; two phases sequenced (data must precede affiliate logic that reads statuses). ✓
