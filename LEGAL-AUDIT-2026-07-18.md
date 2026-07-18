# IsHempLegal.com — Legal Accuracy Audit

**Date:** July 18, 2026
**Scope:** All 50 state entries (`src/data/states-*.ts`), the 2026 federal ban page, all blog posts, compound pages, homepage, and compare narratives.
**Method:** 9 parallel research agents read the site's actual data and verified every claim against primary sources (state legislatures, agency pages, court opinions, CRS reports) and law-firm/industry analyses current through July 18, 2026.
**No files were changed.** This is a report only.

---

## Executive summary

The site is **substantially out of date and contains material errors**, despite every entry claiming `lastUpdated: 2026-04-01`.

| Verdict | Count | States |
|---|---|---|
| ACCURATE (at most trivial gaps) | 5 | AK, ID, ND, WA, PA |
| MINOR ISSUES | 10 | CO, DE, IN, NV, NY, NC, OK, OR, SC, WI |
| OUTDATED (missed major 2025–26 changes) | 14 | AL, CT, IL, KY, LA, MD, MA, MO, NE, NH, NJ, NM, RI, TX |
| WRONG (core statuses incorrect) | 21 | AZ, AR, CA, FL, GA, HI, IA, KS, ME, MI, MN, MS, MT, OH, SD, TN, UT, VT*, VA, WV, WY |

\* VT is minor-to-outdated in substance but its statute citation is wrong.

Beyond the states, the **federal ban page contains a fabricated law name and a fabricated timeline**, and the site's two most important consumer takeaways — "full-spectrum CBD stays legal" and "hemp delta-9 edibles survive 2026" — are **both wrong** because the site never mentions the law's 0.4 mg-per-container THC cap.

At least **8 statute citations across the site are fabricated or refer to unrelated bills** (details below).

---

## Part 1 — Federal content (highest priority)

### 1.1 The law's name is fabricated
Site claims a **"Hemp Product Safety and Regulation Act"** signed Nov 12, 2025. No such law exists. The real vehicle: **Section 781 of Division B (Agriculture–FDA) of H.R. 5371, the Continuing Appropriations and Extensions Act, 2026 (Pub. L. 119-37)** — the shutdown-ending spending package signed Nov 12, 2025, amending 7 U.S.C. § 1639o. ("Congress signed into law" is also wrong — Congress passes, the President signs.) Verify the P.L. number on congress.gov before publishing.
- Sources: Akerman LLP (Nov 2025), Frier Levitt (2026), CRS IN12620, Troutman Pepper (Dec 2025).
- Watch for confusion with two *pending* bills with similar names: Wyden/Merkley "Cannabinoid Safety and Regulation Act" and Paul/Klobuchar "Hemp Safety Enforcement Act" (S.4315).

### 1.2 The site omits two of the law's three mechanisms
The site only describes the plant-level total-THC (incl. THCA) ≤0.3% redefinition. It omits:
1. **The 0.4 mg total-THC-per-container cap** on finished hemp-derived cannabinoid products — the single most consequential provision for consumers.
2. **The synthesized-cannabinoid exclusion** — any cannabinoid synthesized outside the plant, at any concentration, is excluded from "hemp" (plus an HHS/FDA "similar effects" catch-all). This — not the total-THC math — is why delta-8, delta-10, and HHC are banned. (HHC is hydrogenated THC, not a THC isomer; the site's compound-page mechanism descriptions are wrong on this.)

### 1.3 Two central consumer claims are wrong
- **"Full-spectrum CBD with <0.3% total THC remains legal" — WRONG.** The 0.4 mg/container cap makes an estimated **90%+ of full-spectrum (and many broad-spectrum) CBD products non-compliant** (a 30 mL tincture at 0.1% THC ≈ 30 mg ≈ 75× the cap). Only THC-free isolate/true-zero-THC products are safely compliant. This error appears on the federal ban page's green "Remains Federally Legal" box, two FAQs, the CBD compound page, and two blog posts ("nothing to worry about", "$5B market fully compliant").
- **"Hemp-derived Delta-9: The Legal THC Loophole That Survives 2026" — WRONG (entire blog post thesis).** 5–15 mg hemp delta-9 gummies exceed the cap 12–37×; they become Schedule I marijuana Nov 12, 2026. The delta-9 compound page repeats the error.

### 1.4 The timeline is fabricated
The page's timeline items — "Jan 2026: DEA begins drafting enforcement guidance (done)", "Apr 2026: public comment period (done)", "Aug 2026: final enforcement rules" — **never happened and are not scheduled**. The real timeline: FDA had a statutory 90-day deadline (**Feb 10, 2026**) to publish three cannabinoid lists; **it missed the deadline and the lists remain unpublished** (CRS, May 2026). No DEA/USDA/FDA rulemaking or comment period has occurred. The blog's "DEA final rules come out in August 2026" claim is likewise fabricated.

### 1.5 What's actually happening (for a corrected status section)
- Law in force; effective date **Nov 12, 2026** (some sources say Nov 13 — consider "November 2026"); no delay enacted.
- Pending congressional efforts (none passed as of July 18, 2026): H.R. 6209 (Mace); Wyden/Merkley CSRA (would replace ban with FDA regulation, 5 mg/serving); H.R. 7024 (delay to Nov 2028); S.4315 (Paul/Klobuchar). The **2026 Farm Bill (H.R. 7567) passed the House 224-200 in late April 2026 keeping the ban intact**; Senate pending.
- No federal lawsuit against §781 identified. Key litigation is state-level (Texas, below).
- Accurate items to keep: signature/effective dates, Schedule I framing, no-possession-grace-period FAQ.
- Preemption FAQ: technically right but overstated in blog posts — state-legal markets can persist under state law (as marijuana markets have); reframe "federal law overrides everything."

### 1.6 Other content pages
- Compound pages: **THC-O and THCA pages accurate** (the Feb 13, 2023 DEA letter on THC-O is real). Delta-9 and CBD pages wrong (above). Delta-8/HHC/delta-10/THCP pages: right outcome, wrong mechanism.
- Homepage: "Congress redefined hemp to **include** THCA and Delta-8 as controlled substances" is garbled — the redefinition *excludes* them from hemp, which makes them controlled substances.
- compareNarrative.ts: accurate.

---

## Part 2 — State-by-state findings

Statuses below are corrections **as of July 18, 2026**. "Impact" = suggested `federalChangeImpact`. Every state's `federalChangeNote` is written as a hypothetical ("a federal ban would…") and must be rewritten around the enacted rider — this applies to **all 50 entries**.

### WRONG entries (21)

**Arizona** — Site: delta-8/D9/THCA/HHC/D10 all "legal," shipping legal. Reality: AG Opinion I24-005 (Mayes) declares hemp-synthesized intoxicants Schedule I; enforcement letter extended to hemp D9 edibles Mar 24, 2025; enforcement began Apr 24, 2025; HITA preliminary injunction denied June 25, 2025 (appeal pending); fix bill SB 1702 died. Products still on shelves but "legal" is indefensible — use restricted/contested with dispensary-only AG position.

**Arkansas** — Site: delta-8 "legal" citing "Act 629 (2019)." Act 629 is **2023** (SB 358) and is the statute that **bans** delta-8/delta-10/THCA. *Bio Gen v. Sanders* (8th Cir., June 24, 2025) vacated the injunction; ban enforceable; Act 934 (Apr 2025) added total-THC basis; 6,000+ seizures since July 2025. delta8/THCA → banned; HHC/D10 → banned; shipping → banned (transit-through only). CBD correct.

**California** — Site: "restricted — licensed cannabis retailers" under AB 45. Reality: Sept 2024 CDPH emergency regs banned any detectable THC in hemp foods/beverages; **AB 8 (signed Oct 2, 2025, eff. Jan 1, 2026)** made it permanent — >99% pure THC-free isolate only, all hemp flower/prerolls/inhalables banned from retail; licensed-cannabis-market integration doesn't arrive until ~Jan 1, 2028. So: banned, no current retail channel. "AB 2223" citation dubious (never became law). Full-spectrum CBD ingestibles with detectable THC = banned.

**Florida** — Site cites "SB 1698" as the regulatory framework — **SB 1698 was vetoed June 7, 2024 and never became law**. Real framework: FSA §581.217 as amended by SB 1676 (2023) + FDACS rules 5K-4. THCA claim ("no total THC testing at retail") is false — Rule 5K-4.034 uses total delta-9 = D9 + 0.877×THCA, strictly enforced since June 16, 2025 → THCA restricted. Delta-8 legal ✓ (2025 SB 438 died in House; 2026 SB 1270 died in committee).

**Georgia** — Entry predates **SB 494 (2024, eff. Oct 1, 2024)**: total-THC standard (kills THCA flower), retail hemp flower/prerolls **banned** (OCGA §2-23-4), licensed retailers only, 21+, 10 mg/serving & 300 mg/container caps, most hemp-infused foods banned (gummies excepted), beverages ≤10 mg/12oz. Also missing **SB 33 (2026, signed ~May 11, 2026)** — targets non-natural cannabinoids (HHC) with phase-out; read enrolled text before editing (medium confidence on specifics). SB 254 did not pass.

**Hawaii** — Site: delta-8 "legal," vapes/flower "legal." Reality: DOH prohibits **all artificially derived cannabinoids** (delta-8, delta-10, THC-O, THCP, HHC explicitly); inhalables and smokable flower banned; edibles capped at 1 mg THC/serving, 5 mg/container; beverages 0.5 mg. Statute is **HRS ch. 328G + HAR 11-37**, not "328D." Retailer/distributor registration required since Jan 2026.

**Iowa** — Site: delta-8/D9/gummies/beverages "banned" citing "SF 2398" (a dead 2018 bill — bogus citation). Reality: **HF 2605 (2024)** *caps* rather than bans: 4 mg total THC/serving, 10 mg/container, 21+ → low-dose products and THC beverages are legal and on shelves. Vapes/flower ban is real but via §204.14A. federalChangeImpact should be **high**, not low (Iowa's legal 4 mg products are 10× the federal cap).

**Kansas** — Site: delta-8/THCA/flower/vapes "legal," age 21. Reality: AG Opinion 2021-14 makes delta-8 Schedule I unless ≤0.3% *total* THC (most products fail); K.S.A. 2-3901(b)(5) bans hemp cigarettes/vape substances outright; THCA gray/banned; **no state age law** (SB 292 still in committee).

**Maine** — Site: "restricted to the cannabis program" (Title 28-B). Backwards — hemp THC is **legal at general retail to 21+** under **PL 2025, c. 416** (emergency, eff. June 25, 2025): "potentially intoxicating hemp product" category, CR packaging. Correct statute: 7 M.R.S. §2231 et seq. Grocery/liquor stores sell hemp THC drinks.

**Michigan** — Site: everything "gray," "widely sold in gas stations." Wrong since **2021**: PA 87/PA 56 put all hemp-derived THC (incl. THCA) under CRA jurisdiction — licensed marijuana businesses only. All gray fields → restricted. Oct 2025 bill package (HB 5040 etc.) not enacted.

**Minnesota** — Site: "all THC products must be sold through the licensed cannabis system." False — Minnesota's **LPHE market** (5 mg/serving, 50 mg/pkg edibles; ≤10 mg/container beverages; delta-8 and delta-9 expressly allowed) is legal at general retail/liquor stores/bars with an **OCM license** (MDH-era registration sunset Mar 31, 2026). HHC → banned in consumables. Cite Minn. Stat. ch. 342. Impact medium → **high** (~$200M market vs 0.4 mg cap).

**Mississippi** — Site: everything "legal," shipping legal, age 21. Reality: **Aug 2025 AG opinion (Fitch)** — CBD-converted cannabinoids (delta-8, delta-10, THC-O) are controlled substances; consumable hemp without FDA approval "presumptively illegal" outside medical dispensaries; seizures underway. HB 1502 died in conference Apr 3, 2025; nothing passed 2026. **No statutory age limit.** delta8 → banned/gray; D9 → gray.

**Montana** — Statute "SB 546" is fabricated (a tabled 2023 marijuana-repeal bill). Real: **HB 948 (2023)** bans synthetic/converted cannabinoids (delta-8, D10, HHC, THC-O) even in the licensed market; **SB 375 (2025)** bans detectable hemp D9 at retail outside dispensaries; **HB 49 (2025)** caps (~0.5 mg/serving, 2 mg/pkg — verify enrolled text). restricted → banned across the board; tinctures "legal" → banned. Impact → low.

**Ohio** — Site: everything "legal" under SB 57. Reality: DeWine emergency order Oct 8, 2025; **SB 56 signed Dec 19, 2025** (not SB 86 — that stalled), THC-beverage carve-out line-item vetoed; **effective Mar 20, 2026**: >0.4 mg total THC/container = marijuana, licensed dispensaries only (21+). Referendum failed to qualify; Happy Harvest suit heard May 7, 2026, ban in effect. All compounds → banned outside dispensaries.

**South Dakota** — Site: delta-8/HHC/D10 "legal." **HB 1125 (eff. July 1, 2024)** bans chemically modified/converted cannabinoids — all → banned; THCP → banned. Enforcement sweeps since July 14, 2025. D9Hemp needs "naturally derived only" caveat.

**Tennessee** — Site describes the old HB 1927 regime. **Public Chapter 526** (HB 1376, signed May 21, 2025, eff. Jan 1, 2026) moved everything to the **Alcoholic Beverage Commission**: THCA → banned (total-THC standard; sales ban final July 1, 2026); delta-8 → restricted at minimum (TABC license, in-person only, 15 mg/serving) and possibly banned as a CBD-converted synthetic (sources split — low confidence); THCP → banned; **online/DTC shipping → banned**; flower restricted (≤0.3% total THC, ≤½ oz).

**Utah** — Statute "HB 58" is a building-inspector bill. Real: Utah Code tit. 4 ch. 41/41a; HB 227 (2023), HB 52 (2024), **HB 54 (2025, eff. May 7, 2025)** — synthetic/converted cannabinoids banned, THCA/smokable flower banned, UDAF sweeps. delta8/HHC/D10/THCA "restricted" → **banned** outside medical program; THCP → banned. D9Hemp: UDAF-registered ≤5 mg/serving, ≤150 mg/pkg only. HB 509 (2025): retailer licensing + 5.3% tax from Jan 1, 2026.

**Virginia** — Site says delta-8 "legal under SB 903" — **inverted**. SB 903 (2023) imposes 0.3% total THC AND **2 mg total THC/package** cap (unless ≥25:1 CBD:THC) + synthetic-THC ban → delta-8/HHC/D10 effectively banned; THCA effectively illegal at retail. **4th Circuit upheld it** (*N. Va. Hemp v. Virginia*, Jan 7, 2025). The **25:1 loophole is eliminated Aug 15, 2026**; hemp enforcement moves VDACS → Cannabis Control Authority July 1, 2026; adult-use retail launches July 1, 2027 (June 2026 budget deal after Spanberger's May 19, 2026 veto).

**Vermont** — Right outcome, wrong citation: the delta-8 ban is from the **Vermont Hemp Rules (2020)** (synthetic-cannabinoid prohibition), not "Act 164" (the cannabis tax-and-regulate act). Missing: **S.278 (signed June 18, 2026)** — hemp oversight moves to the Cannabis Control Board; products ≥0.4 mg THC will require CCB licensing.

**West Virginia** — Statute "SB 447" is a 2002 research-cultivation bill. Real framework: **SB 220 (2023)** = W. Va. Code §19-12E-12 (permits delta-8/D10/HHC/THCP/THCV/hemp-D9 under Ag Dept permits, 11% excise tax, testing, age 21) + **SB 546 (2023)** (unpermitted products = Schedule I). "Legal" → **regulated/restricted**; shipping "legal" → restricted (out-of-state sellers need WV registration). SB 679 (2024) added ABCA retail enforcement; ABCA rule eff. May 15, 2025 (per-location permits, behind-the-counter).

**Wyoming** — Site: delta-8/HHC/D10 "legal." **SF 32 (2024, eff. July 1, 2024)** banned synthetic/psychoactive cannabinoids and moved to total THC — **upheld by the Tenth Circuit Oct 27, 2025** (*Green Room v. Wyoming*). All → banned; high-THCA flower banned; product types and shipping wrong; 2025 beverage carve-out bill failed introduction. Age 21 unsupported. Impact high → **low**.

### OUTDATED entries (14)

**Alabama** — Direction right, but: vapes "restricted" → **banned** (HB 445 bans vapes; entry's own notes contradict its data); shippingIn → banned (Jan 1, 2026 online-sales/DTC ban); gummies/tinctures/beverages → restricted (10 mg/serving, 40 mg/pkg, ABC licensing, hemp-dispensary-only; grocery = beverages only). *Mellow Fellow v. Ivey* TRO denied June 30, 2025; raids ongoing. Impact medium → high.

**Connecticut** — Add PA 23-56 (2023), **PA 24-76 (2024)** (moderate-THC products 0.5–5 mg/container via DCP-registered non-cannabis vendors since Jan 1, 2025; THC beverages via package stores), PA 25-101 (2025). "Licensed cannabis retailers only" is incomplete. CBD citation "CGS §21a-92p" appears **nonexistent** → use CGS §§22-61l/22-61m.

**Illinois** — Site described a dispensary-only regime that didn't exist. Reality: unregulated until **SB 3222 (signed June 12, 2026)** — immediate 21+ rule; intoxicating hemp reclassified as cannabis **effective Nov 12, 2026** (only <0.4 mg CBD products outside dispensaries after that). Chicago's ban was vetoed by Mayor Johnson (Feb 2026).

**Kentucky** — Delta-8 legal 21+ under HB 544 ✓. Missing: **SB 202 (2025)** — hemp beverages ≤5 mg/12 oz serving, ABC oversight, **alcohol-licensed retailers only since June 1, 2025**; **HB 775 (2025)** — spirits-level excise taxes + licensing. beverages "legal" → restricted.

**Louisiana** — HB 640/Act 336 (2021) superseded by Act 498 (2022) and **Act 752 (2024, eff. Jan 1, 2025)**: 5 mg total THC/serving, 40 mg/pkg, one-serving beverages, gas stations barred. Flower/vapes "legal" → **banned** (inhalables barred since 2021); THCA "legal" → wrong (no retail path); HHC likely wrong. HB 12/HB 36 (2025): under-21 criminal penalties.

**Maryland** — Add *Moore v. Maryland Hemp Coalition* (Md. App. Ct., **Sept 9, 2025**): injunction reversed; delta-8/D10 illegal outside licensed dispensaries (general retail only ≤0.5 mg/serving, ≤2.5 mg/pkg). delta8/delta10 "restricted" → banned outside dispensaries.

**Massachusetts** — Regulator is **MDAR, not the CCC**; May 2024 DPH/MDAR + ABCC guidance bans hemp THC/CBD consumables from retail (no licensed hemp-THC channel exists). **H.5350 (signed Apr 19, 2026)** did NOT create a hemp beverage market — it ordered a CCC study (report due Dec 15, 2026). Hemp statute is M.G.L. c.128 §§116–123, not 94G.

**Missouri** — **HB 2641 "Intoxicating Cannabinoid Control Act" (signed Apr 23, 2026, eff. Nov 12, 2026)**: >0.4 mg total THC/container = marijuana, licensed channels only. Federal suit filed July 16, 2026 (W.D. Mo.) — no ruling. Statuses technically "legal" until Nov 12, 2026 but misleading without the sunset. Add Parson EO 24-10 history. Impact → high.

**Nebraska** — LB 316 died (pulled May 30, 2025), so "legal" is technically right, but the entry ignores: AG Hilgers' 15+ lawsuits and 200+ cease-and-desists (expanded to ~104 Omaha stores Mar 2025); **Pillen EO 26-02 (Jan 26, 2026)**; Dept. of Agriculture's proposed any-THC "adulterant" rule (June 18, 2026, pending). Statuses → gray/contested. **No state age law** (site says 21).

**New Hampshire** — **SB 624 (signed ~July 9, 2026, eff. Jan 1, 2027)**: total-THC standard incl. THCA, 0.4 mg/container cap, 21+. Current "legal" statuses valid only through Dec 31, 2026 — entry needs the sunset. Age 18 → 21 as of Jan 1, 2027.

**New Jersey** — The 2024 law (c.73) was enjoined (*Loki Brands v. Platkin*, Oct 10, 2024) except the under-21 ban. Operative law now: **S4509 (signed Jan 12, 2026)** — total-THC definition, 0.4 mg/container; grace period ended **Apr 13, 2026** → delta-8/THCA/HHC/D10 **banned outside licensed cannabis**. Hemp beverages: liquor stores/dispensaries ≤5 mg/serving until **Nov 13, 2026**.

**New Mexico** — Regulator is **NMED, not CCD**. NMED emergency rule (Sept 2025) + **Hemp Final Rule (eff. Jan 28, 2026)**: chemically converted cannabinoids (delta-8, D10, THC-O, HHC) banned; total-THC 0.3% incl. THCA. restricted → banned for converted cannabinoids.

**Rhode Island** — Entry is too restrictive: since Aug 2024, ~120 DBR/CCC-licensed **hemp retailers** (vape shops, liquor stores) sell low-dose hemp D9 (beverages ≤5 mg/serving; other consumables 1 mg/serving, 5 mg/pkg). delta9Hemp "banned" → restricted; beverages/gummies "banned" → restricted. Delta-8/THCA "banned" ✓. CCC took over June 29, 2025; new-license pause July 2025.

**Texas** — Fast-moving; entry stale. Timeline: SB 3 total-THC ban **vetoed June 22, 2025**; two special sessions failed; **EO GA-56 (Sept 10, 2025)** + TABC/DSHS emergency rules = age 21 (site's age ✓, context missing); SB 2024 vape ban (eff. Sept 1, 2025) ✓ site has it; **25 TAC §300.101 total-THC rule (eff. Mar 31, 2026)** — TRO'd/enjoined, then **reinstated June 5, 2026** (15th Court of Appeals) → THCA flower banned (trial July 27, 2026); **Texas Supreme Court, *Sky Marketing v. DSHS* (May 1, 2026)**: DSHS may schedule delta-8; **DSHS reinstated Schedule I listing July 10, 2026 — delta-8, delta-10, delta-6, THCP become controlled substances July 31, 2026** (13 days away). delta8/delta10 "legal" → banned eff. July 31, 2026; THCA "gray" → banned; HHC → gray/likely banned; flower "legal" → wrong. D9Hemp/CBD "legal" ✓ (with 21+).

### MINOR-ISSUE entries (10)

- **Colorado** — Operative statute is SB 23-271 / C.R.S. §25-5-427 / 6 CCR 1010-24, not just SB 22-205; gummies/beverages/tinctures "banned" → **restricted** (legal ≤1.75 mg/serving low-dose channel; hemp beverages in liquor stores). SB 26-164 (10 mg beverages) pulled Apr 2026.
- **Delaware** — Statuses correct. **HB 373 passed both chambers early July 2026, awaiting Gov. Meyer's signature** (THC beverages ≤10 mg/container via package stores, 21+) — beverages may flip to restricted imminently. "§4914A" citation likely wrong → 16 Del. C. §4714.
- **Indiana** — flower "legal" → **banned** (smokable hemp ban since 2019, IC 35-48-4-10.1; covers THCA flower; vapes doubtful); age "21" → **no state age law**; AG Opinion 2023-1 (delta-8 = Schedule I, non-binding) unmentioned; SB 478 (2025) and SB 250 (2026) both failed.
- **Nevada** — "AB 49" → **SB 49 (2021)**; add **SB 356 (2025)**: non-CBD/CBG consumable hemp = licensed cannabis establishments only; courier/mail into NV = misdemeanor. Otherwise most accurate of its group.
- **New York** — Accurate. Cite 9 NYCRR Part 114 + Cannabis Law ("Marihuana" spelling); beverages "banned" overbroad (CBD hemp beverages permitted).
- **North Carolina** — Statuses correct today, but: "SB 352" is a Fayetteville park bill → **SB 455 / SL 2022-32**; age "18" → **no age law**; **HB 328 conference report passed the Senate 37-6 on July 2, 2026 — House vote expected week of July 27, 2026** (age 21 + 0.4 mg/container). Entry will collapse if it passes.
- **Oklahoma** — Statuses correct (still legal/unregulated; nothing passed 2025–26; Stitt enforcement letter Apr 2025). "HB 3208" is a medical-marijuana moratorium bill → cite HB 2913 (2018), 2 O.S. §3-401, SB 1033 (2021). Age "18" unsupported — no statutory limit.
- **Oregon** — Statuses directionally right but "SB 1564" is the wrong bill (county moratorium bill) → **HB 3000 (2021)/ORS 475C + OLCC rules**; delta-8/HHC/D10 "restricted" → banned (sale) for artificially derived; THCP "gray" → banned (explicitly listed).
- **South Carolina** — delta-8 "legal" → gray/contested: AG opinion (2021) + **Operation Ganjapreneur (Dec 2025)** — 15 tons seized, 12 indicted, AG position "if it gets you high, it's illegal." Age 21 not statutory. Pending bills not enacted.
- **Wisconsin** — Age "21" → **no state age law** (SB 644 and SB 682/AB 747 died at Mar 23, 2026 adjournment; only Milwaukee/Madison local ordinances). Cite 2017 Act 100 + 2019 Act 68. "Gray" for delta-8/D9 → better: "legal (unregulated)." THC-O "banned" → gray (no state ban; federal position contested).

### ACCURATE entries (5)
- **Alaska** ✓ — optionally add the May 29, 2025 federal ruling upholding the regs; THCP arguably banned rather than gray.
- **Idaho** ✓ — add HB 879 (2026, eff. July 1, 2026); age-21 field unsupported.
- **North Dakota** ✓ — add citations (HB 1045 *2021*, SB 2096 2023); THCP → banned (explicitly named); age 21 unsupported.
- **Pennsylvania** ✓ — still unregulated (Act 92 of 2016 ✓); age-21 likely not statutory; note SB 49's failure (June 2026).
- **Washington** ✓ — SB 5367 correct; add caveat that general-retail CBD must have **zero detectable THC**; THCP → banned outside licensed system.

---

## Part 3 — Cross-cutting problems

1. **All 50 `federalChangeNote` fields** are hypothetical; the rider is enacted (signed Nov 12, 2025; effective Nov 12, 2026). Impact ratings need re-scoring (e.g., IA/MN/AL → high; WY/MT → low).
2. **Fabricated/wrong statute citations (fix all):** FL "SB 1698" (vetoed), NC "SB 352" (park bill), OK "HB 3208" (marijuana moratorium), MT "SB 546" (never passed), UT "HB 58" (building inspectors), IA "SF 2398" (dead 2018 bill), WV "SB 447" (2002 research bill), OR "SB 1564" (wrong bill), NV "AB 49" (→SB 49), AR "Act 629 (2019)" (→2023, and it's a ban), HI "HRS 328D" (→328G), CT "§21a-92p" (likely nonexistent), VT "Act 164" (wrong law), MA "c. 94G" (wrong chapter for hemp), DE "§4914A" (dubious).
3. **Age restrictions overstated:** IN, KS, MS, NE, NC, OK, PA(?), SC(?), WI, WY, ND, ID have **no statutory hemp age minimum** — the site shows 18 or 21 as if law.
4. **`lastUpdated: 2026-04-01` on every entry is not credible** — several entries miss changes from 2024. Dates should reflect real review dates per state.
5. **Blog posts dated 2026-04-10** repeat the fabricated law name and the two wrong consumer theses.

## Part 4 — Time-sensitive items (next 30–120 days)

| Date | Event |
|---|---|
| **July 27, 2026 (week of)** | NC HB 328 House vote; TX DSHS-rule trial on the merits (Travis Cty) |
| **July 31, 2026** | TX delta-8/delta-10/THCP become Schedule I (DSHS reinstatement) |
| **Aug 15, 2026** | VA 25:1 CBD:THC exception eliminated (hard 2 mg cap) |
| **Any day** | DE HB 373 (THC beverages) signature; NE adulterant rulemaking |
| **Nov 12–13, 2026** | Federal ban effective; IL SB 3222 & MO HB 2641 effective; NJ beverage carve-out ends |
| **Jan 1, 2027** | NH SB 624 effective |

## Part 5 — Low-confidence items to re-verify before editing

- Federal: exact P.L. number (confirm on congress.gov); effective date Nov 12 vs 13.
- AR: treatment of compliant sub-0.3% hemp-D9 edibles under Act 934.
- TN: conversion-derived delta-8 — restricted vs banned (sources split).
- GA: SB 33 enrolled-text specifics; SB 254's precise fate.
- MT: HB 49 exact mg caps. NV: SB 356 exact caps. NH: SB 624 signing date/chapter. NJ: S4509 chapter number; post-Nov-13 beverage treatment.
- HHC coverage in TX's July 31 scheduling. CO: §25-5-426 vs -427. AK: exact 3 AAC 306.990 pin cite.
- Age-law absences (PA, SC, MO pre-2026) — verify before flipping fields.
- CT SB 970 final disposition; MI Oct 2025 bill package status; ME LD 1983 fate; NE 2026 end-of-session.

## Part 6 — Suggested fix priority

1. **Federal ban page + blog**: remove fabricated law name and timeline; add the 0.4 mg/container cap and synthesized-cannabinoid exclusion; correct the CBD and hemp-delta-9 claims (these two errors actively misinform purchase decisions).
2. **WRONG-verdict states** (21) — full rewrites, starting with high-traffic ones (TX, CA, FL, GA, OH, TN, VA).
3. **OUTDATED states** (14) — add the 2025–26 laws and sunset dates.
4. **Citation cleanup + age-field corrections** across all states.
5. **Rewrite all 50 federalChangeNote fields** and re-score impact.
6. Consider a visible "last verified" system with real dates, and a standing monthly re-verification process — this space changed too fast for a static April snapshot.
