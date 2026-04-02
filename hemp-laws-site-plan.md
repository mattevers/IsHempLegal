# Hemp Laws Site — Full Build Plan

## The Opportunity

Hemp and cannabis laws are changing faster than any other legal category in America right now. A new federal law signed November 12, 2025 redefines hemp to include THCA and Delta-8 as controlled substances, with the full ban taking effect **November 12, 2026**. Every consumer, retailer, and hemp business in America needs to understand what this means for their state. No clean, authoritative tool exists. You build this now, during peak confusion, and you own the space.

---

## Domain Name Recommendations

Check availability in this order — all mirror the ismymodlegal.com pattern:

1. **IsHempLegal.com** ← Best match to your brand pattern
2. **HempLawCheck.com**
3. **HempLegalStatus.com**
4. **Delta8Status.com** (keyword-rich but narrower)
5. **HempLawMap.com**
6. **LegalHempCheck.com**

Check on Namecheap. Expect most short ones to be taken — go with whatever IsHempLegal variant is available.

---

## What Makes This Different From Competitors

Existing sites that cover this space:
- **CBD Oracle** — good data, terrible UX, no tool
- **World Population Review** — static tables, no interactive tool
- **RESTART CBD** — retailer blog, conflict of interest
- **DISA** — focuses only on marijuana, not hemp-derived
- **Baker Institute** — academic, not consumer-friendly

**Your advantage:** Clean tool UX (same pattern as ismymodlegal.com) + the only site covering BOTH current state laws AND the incoming November 2026 federal changes side by side.

---

## Data Structure — What to Track Per State

Every state gets a data record with these fields:

```json
{
  "state": "Texas",
  "abbreviation": "TX",
  "lastUpdated": "2026-04-01",
  "compounds": {
    "delta8": {
      "status": "restricted",
      "label": "Restricted",
      "detail": "Vapes and e-cigarettes banned as of September 2025. Gummies and tinctures remain legal.",
      "statute": "Texas Health & Safety Code §443"
    },
    "delta9Hemp": {
      "status": "legal",
      "label": "Legal",
      "detail": "Legal up to 0.3% delta-9 THC by dry weight.",
      "statute": "Texas Agriculture Code §121"
    },
    "cbd": {
      "status": "legal",
      "label": "Legal",
      "detail": "CBD products legal statewide with <0.3% THC.",
      "statute": ""
    },
    "thca": {
      "status": "gray",
      "label": "Gray Area",
      "detail": "Legal under current state law but will be affected by federal changes in November 2026.",
      "statute": ""
    },
    "hhc": {
      "status": "legal",
      "label": "Legal",
      "detail": "No specific state restrictions currently.",
      "statute": ""
    },
    "delta10": {
      "status": "legal",
      "label": "Legal",
      "detail": "No specific state restrictions currently.",
      "statute": ""
    }
  },
  "productTypes": {
    "gummies": "legal",
    "vapes": "banned",
    "flower": "legal",
    "tinctures": "legal",
    "topicals": "legal"
  },
  "ageRestriction": 21,
  "shippingIn": "legal",
  "shippingOut": "legal",
  "federalChangeImpact": "High — most current Delta-8 products will be federally illegal after November 12, 2026.",
  "notes": "Texas law on hemp is actively evolving. Verify before purchasing."
}
```

### Status Values (5 levels, color-coded)
- `legal` → Green ✅
- `restricted` → Yellow ⚠️
- `gray` → Orange 🔶 (ambiguous, varies by product type)
- `banned` → Red ❌
- `medical_only` → Blue 💊

---

## Compounds to Cover (8 total)

1. **Delta-8 THC** — highest search volume, most states have specific rules
2. **Delta-9 THC (hemp-derived)** — distinct from marijuana delta-9; legal federally under 0.3%
3. **CBD** — largest consumer market, most questions about travel
4. **THCA** — exploding in popularity, directly affected by federal 2026 ban
5. **HHC** (Hexahydrocannabinol) — newer compound, few states have addressed it
6. **Delta-10 THC** — less common but growing
7. **THC-O** — synthetic, already federally illegal but state laws lag
8. **THCP** — newest compound on market, virtually no state laws yet

---

## Site Architecture

```
/ (Home)
  └── Tool: Select State + Compound → Instant Result

/states/
  └── Overview of all 50 states (table/map view)

/states/[state-slug]/
  └── Full state page (e.g., /states/texas)
      ├── All 8 compounds with status
      ├── Product type breakdown
      ├── Shipping rules
      ├── Age restrictions
      ├── 2026 federal impact section
      └── Source citations

/compare/
  └── /compare/[state1]-vs-[state2]
      └── Side-by-side comparison (great for SEO)

/compounds/
  └── Hub pages for each compound
      ├── /compounds/delta-8
      ├── /compounds/delta-9
      ├── /compounds/cbd
      ├── /compounds/thca
      └── /compounds/hhc

/2026-federal-ban/
  └── Dedicated explainer: what's changing, when, state-by-state impact
      (This page alone will get massive traffic — build it first)

/travel/
  └── "Can I travel with hemp products?" guide by state pair

/shipping/
  └── "Can I mail hemp products?" interstate shipping guide

/blog/
  └── News and law updates (same approach as ismymodlegal blog)
```

### SEO Page Count Estimate
- 50 state pages
- ~1,200 state comparison pages (50×49/2) — generate programmatically
- 8 compound hub pages
- 1 federal ban explainer
- 1 travel guide
- 1 shipping guide
- Blog posts

**Total: 1,300+ indexable pages from the start**

---

## Key Pages to Build First (Priority Order)

### 1. Home — Tool (Week 1)
Same UX as ismymodlegal.com:
```
Select your state...     [dropdown]
Select compound...       [dropdown: Delta-8, CBD, THCA, etc.]
Select product type...   [dropdown: Gummies, Vapes, Flower, etc.]
[Check Legality]         [orange CTA button]
```
Result card shows: Status badge + plain-English explanation + statute citation + "What changes in November 2026" callout.

### 2. The 2026 Federal Ban Page (Week 1 — build this IMMEDIATELY)
This is your highest-urgency traffic magnet. Target keywords:
- "delta-8 federal ban 2026"
- "hemp THC ban November 2026"
- "what hemp products will be illegal in 2026"
- "THCA federal ban 2026"

Content: What changed, when it takes effect, what it means per state, FAQ section (triggers featured snippets).

### 3. All 50 State Pages (Week 2)
Generate programmatically from your data file. Each page:
- Status summary table for all 8 compounds
- Product type grid
- Shipping in/out status
- 2026 federal impact callout
- FAQ: 3-5 common questions for that state (great for featured snippets)
- Sources/citations with links to state statutes

### 4. Comparison Pages (Week 3 — generate programmatically)
URL pattern: `/compare/california-vs-texas`
These pages rank extremely well because they match exact search queries. People moving between states, planning travel, or running businesses that operate in multiple states search these constantly.

### 5. Compound Hub Pages (Week 3)
One page per compound covering: federal status, which states ban it, which allow it, what changes in 2026. These become link targets for all your blog content.

---

## Tech Stack

Same as ismymodlegal.com (Next.js + Supabase + Vercel):

```
Frontend:     Next.js (App Router) — SSG for state/compound pages
Database:     JSON flat files OR Supabase table for state data
Hosting:      Vercel (free tier handles this traffic easily)
CMS:          None needed for v1 — edit JSON data files directly
Blog:         MDX files in /content/blog/ OR Contentlayer
Search:       No search needed — dropdowns handle discovery
Analytics:    Google Analytics 4 + Search Console
```

### Data Update Strategy
Laws change — here's how to manage it without burning your life:

1. Store all state data in a single `data/states.json` file
2. When a law changes, edit one JSON record and redeploy (2-minute job)
3. Add `lastUpdated` field to every state record so users see freshness
4. Set up a **Google Alert** for: "hemp law," "delta-8 legislation," "THCA ban," "hemp bill signed" — alerts go to your email, you update the JSON when something relevant hits
5. Add a "Report a law change" button on every state page — crowd-source updates from the community

---

## Monetization Stack

### 1. Affiliate Links (Primary Revenue — $0 upfront)
Every result page and compound page links to vetted retailers. Position as "Where to buy legally in [state]."

**Best programs to apply to:**
| Program | Commission | Cookie |
|---|---|---|
| Diamond CBD | 35% | 30 days |
| CBD Essence | 25-40% | 30 days |
| Binoid | 25% | 7 days |
| Direct CBD | 30% | 30 days |
| Joy Organics | 25% | 30 days |
| 3Chi | 12% | 30 days |

**Placement strategy:**
- Result page: "Legal in your state — shop trusted brands" → affiliate grid
- State pages: "Where to buy [compound] in [State]" section
- Blog posts: natural product mentions
- Don't be spammy — 2-3 affiliate placements per page max

**Estimated revenue per 1,000 monthly visitors:** $50-150 (cannabis/hemp affiliate converts extremely well — buyers are motivated)

### 2. Paid Compliance Report (Same as ismymodlegal.com "Get Report")
**Price: $7.99**
Report includes:
- Full state compliance summary for all 8 compounds
- Product-by-product breakdown
- Travel rules to 3 neighboring states
- 2026 federal change impact assessment
- PDF download, printable

**Target:** Hemp retailers, dispensaries, and businesses — they'll pay for this to share with staff and customers.

### 3. Business/Retailer Tier ($19-29/month)
For hemp shops and online retailers:
- Embeddable "Is This Legal In Your State?" widget for their product pages
- API access to your data
- Automatic email alerts when laws change in states they operate in
- White-label compliance reports

This is the real B2B opportunity. A hemp retailer operating in 10 states would pay $29/month easily to have automatic law change alerts.

### 4. Display Advertising (Month 3+)
Once you hit 10,000 monthly visitors:
- **Ezoic** — accepts cannabis-adjacent content (legal hemp, not marijuana)
- **Mediavine** — requires 50k sessions/month, cannabis-friendly for hemp
- **Carbon Ads** — tech-focused but works for informational tools
- Standard display earns $8-20 RPM; cannabis-adjacent content can hit $25-40 RPM

---

## SEO Strategy

### Core Keyword Clusters

**Informational (top of funnel):**
- "is delta-8 legal in [state]" — 50 state variants
- "is THCA legal in [state]" — 50 state variants
- "hemp laws by state"
- "can I travel with delta-8"
- "delta-8 federal ban 2026"

**Commercial (bottom of funnel — highest affiliate conversion):**
- "where to buy delta-8 legally in [state]"
- "is delta-8 legal to order online"
- "can hemp gummies be mailed to [state]"

**Comparison (programmatic pages):**
- "[state] vs [state] hemp laws"
- "delta-8 legal states map"
- "states where THCA is legal"

### Content Calendar (AI-Assisted, 2 posts/week)

Week 1-4 (Foundation):
- "Delta-8 THC: Complete State-by-State Legal Guide (Updated 2026)"
- "The November 2026 Hemp Ban: Everything You Need to Know"
- "Is THCA Legal? A State-by-State Guide"
- "Can You Travel With Delta-8? Every State Rule Explained"
- "What Is Hemp-Derived Delta-9? Is It Different From Marijuana?"
- "States That Banned Delta-8 THC (And Why)"
- "Delta-8 vs Delta-9: Legal Differences by State"
- "CBD Laws by State: The Complete 2026 Guide"

Ongoing (1-2x/week):
- Cover every law change within 48 hours of it passing — Google rewards freshness on legal topics
- "Breaking: [State] Signs Hemp Bill Into Law — What It Means"
- Seasonal: "Holiday Travel With Hemp Products: State-by-State Guide"

---

## Marketing Strategy

### Reddit (Day 1, Free)
Target subreddits where people ask this exact question daily:
- r/delta8 (600k members)
- r/hempflowers (200k members)
- r/CBD (500k members)
- r/trees (adjacent, large audience)
- r/weed (adjacent)

When someone asks "Is delta-8 legal in Florida?" — answer helpfully, link to your Florida state page. One good comment in a popular thread = thousands of visitors.

### The 2026 Ban = Your Launch Hook
Post in every hemp/CBD community: "I built a free tool to track the 2026 federal hemp ban impact by state." This story writes itself — the industry is alarmed, people are confused, and you're the authoritative resource. Post on launch day in:
- r/delta8
- r/hempflowers
- Reddit hemp retailer communities
- Hemp/CBD Facebook Groups
- LinkedIn (hemp business audience is professional)

### Hemp Business Outreach
Email 50-100 hemp retailers and online CBD shops:
> "I built a free tool your customers are looking for — a state-by-state hemp law checker. Would you be interested in embedding it on your product pages, or linking to it as a compliance resource?"

Many will link to it voluntarily because it answers their customers' #1 question. These backlinks from hemp retailers are highly relevant and will boost your rankings significantly.

### YouTube/TikTok
Short-form content performs extremely well in the hemp space:
- "I checked delta-8 laws in all 50 states — here's the map"
- "The hemp ban coming in November 2026, explained in 60 seconds"
- "Legal in your state? Check before you buy"

---

## Launch Timeline

| Week | Milestone |
|---|---|
| 1 | Domain + hosting setup, data JSON built for all 50 states |
| 1 | Home page tool live, 2026 federal ban page live |
| 2 | All 50 state pages live |
| 2 | Submit sitemap, set up Search Console |
| 3 | Comparison pages generated (programmatic) |
| 3 | Compound hub pages live |
| 3 | Apply to 3-5 affiliate programs |
| 4 | Blog section live, first 4 posts published |
| 4 | Reddit launch posts, hemp community outreach |
| Month 2 | Business widget/embed feature |
| Month 2 | Paid compliance report feature |
| Month 3 | Display advertising setup |

---

## Maintenance Reality Check

**Time commitment after launch: ~30 min/week**

- Google Alerts notify you of law changes → update one JSON record → redeploy (5 min per change)
- Most states have stable laws — you won't be updating all 50 weekly
- The 2026 federal deadline is fixed — that page never needs updating until it passes
- Community "report a change" button offloads discovery to users

**The biggest maintenance risk:** The November 2026 federal law creates a hard deadline. After that date, the entire site needs a data audit to reflect the new federal baseline. Plan for a 2-3 hour update session in November 2026. This is also a marketing moment — "Updated for the 2026 Hemp Ban" announcement drives massive traffic.

---

## Competitive Moat

Once you have:
- 1,300+ indexed pages
- Backlinks from hemp retailers who embed your tool
- Established domain authority on hemp legal keywords
- A reputation as the first to update when laws change

...it becomes very hard for a competitor to displace you even with a better tool. Domain authority and content age compound over time. Build it right, build it fast, and the moat builds itself.

---

## Revenue Projection

| Month | Visitors | Affiliate | Reports | Total |
|---|---|---|---|---|
| 1 | 2,000 | $100 | $0 | $100 |
| 2 | 5,000 | $350 | $50 | $400 |
| 3 | 12,000 | $900 | $150 | $1,050 |
| 6 | 35,000 | $2,800 | $400 | $3,200 |
| 12 | 80,000 | $6,500 | $800 | $7,300 |

*Assumptions: 1.5% affiliate CTR, 4% affiliate conversion, 5% report conversion on paid prompts*

The 2026 federal law deadline (November) will create a massive traffic spike in months 7-10 as consumers and businesses scramble for information. That spike is your best opportunity to convert casual visitors into recurring report buyers and business subscribers.
