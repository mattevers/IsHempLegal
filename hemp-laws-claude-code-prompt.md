# Claude Code Build Prompt — Hemp Laws Site

> **Usage:** Feed this file to Claude Code at the root of a new Next.js project. It will build the complete hemp laws site from scratch. Run through each phase in order. Do not skip phases.

---

## Project Overview

Build a Next.js website that lets users look up the legal status of hemp-derived cannabinoids (Delta-8, Delta-9, CBD, THCA, HHC, Delta-10, THC-O, THCP) by US state. The site targets consumers, travelers, and hemp businesses who need clear, accurate, up-to-date legal information.

**Reference site for UX pattern:** ismymodlegal.com — clean dark theme, simple dropdown tool, instant results, state landing pages, comparison pages.

**Stack:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Vercel deployment
- No database needed for v1 — all data stored in `/data/states.ts`

---

## Phase 1: Project Setup

### 1.1 Initialize the project

```bash
npx create-next-app@latest hemp-laws --typescript --tailwind --app --src-dir --import-alias "@/*"
cd hemp-laws
```

### 1.2 Install dependencies

```bash
npm install lucide-react clsx
npm install -D @types/node
```

### 1.3 Configure Tailwind

In `tailwind.config.ts`, ensure the content array includes all app paths. Add these custom colors to the theme:

```typescript
extend: {
  colors: {
    brand: {
      green:  '#16a34a',  // primary green
      orange: '#f97316',  // CTA orange (matches ismymodlegal)
      dark:   '#0a0f1a',  // page background
      card:   '#111827',  // card background
      border: '#1f2937',  // border color
    },
    status: {
      legal:    '#16a34a',
      restricted: '#d97706',
      gray:     '#f97316',
      banned:   '#dc2626',
      medical:  '#2563eb',
    }
  }
}
```

### 1.4 Global styles

In `src/app/globals.css`:
```css
body {
  background-color: #0a0f1a;
  color: #f9fafb;
  font-family: var(--font-sans);
}
```

---

## Phase 2: Data Layer

### 2.1 Create the compound types

Create `/src/types/hemp.ts`:

```typescript
export type LegalStatus = 'legal' | 'restricted' | 'gray' | 'banned' | 'medical_only' | 'unknown';

export type Compound = 'delta8' | 'delta9Hemp' | 'cbd' | 'thca' | 'hhc' | 'delta10' | 'thco' | 'thcp';

export type ProductType = 'gummies' | 'vapes' | 'flower' | 'tinctures' | 'topicals' | 'beverages';

export interface CompoundStatus {
  status: LegalStatus;
  label: string;
  detail: string;
  statute?: string;
}

export interface StateData {
  name: string;
  abbreviation: string;
  slug: string;
  lastUpdated: string;
  compounds: Record<Compound, CompoundStatus>;
  productTypes: Record<ProductType, LegalStatus>;
  ageRestriction: number;
  shippingIn: LegalStatus;
  shippingOut: LegalStatus;
  federalChangeImpact: 'high' | 'medium' | 'low';
  federalChangeNote: string;
  notes?: string;
}

export const COMPOUND_LABELS: Record<Compound, string> = {
  delta8:     'Delta-8 THC',
  delta9Hemp: 'Delta-9 THC (Hemp)',
  cbd:        'CBD',
  thca:       'THCA',
  hhc:        'HHC',
  delta10:    'Delta-10 THC',
  thco:       'THC-O',
  thcp:       'THCP',
};

export const PRODUCT_LABELS: Record<ProductType, string> = {
  gummies:   'Gummies / Edibles',
  vapes:     'Vapes / Cartridges',
  flower:    'Hemp Flower',
  tinctures: 'Tinctures / Oils',
  topicals:  'Topicals / Creams',
  beverages: 'Beverages / Drinks',
};

export const STATUS_CONFIG: Record<LegalStatus, { label: string; color: string; bg: string; icon: string }> = {
  legal:      { label: 'Legal',        color: 'text-green-400',  bg: 'bg-green-900/30',  icon: '✅' },
  restricted: { label: 'Restricted',   color: 'text-yellow-400', bg: 'bg-yellow-900/30', icon: '⚠️' },
  gray:       { label: 'Gray Area',    color: 'text-orange-400', bg: 'bg-orange-900/30', icon: '🔶' },
  banned:     { label: 'Banned',       color: 'text-red-400',    bg: 'bg-red-900/30',    icon: '❌' },
  medical_only: { label: 'Medical Only', color: 'text-blue-400', bg: 'bg-blue-900/30',   icon: '💊' },
  unknown:    { label: 'Unknown',      color: 'text-gray-400',   bg: 'bg-gray-900/30',   icon: '❓' },
};
```

### 2.2 Create the state data file

Create `/src/data/states.ts`. This is the most important file in the project. Build out all 50 states with accurate data. Below are examples — complete ALL 50 states before moving to Phase 3.

Research each state's laws using:
- State legislature websites (search "[state] hemp bill" or "[state] delta-8 law")
- DISA's cannabis map: https://disa.com/map-of-marijuana-legality-by-state
- CBD Oracle state guides
- ACS Laboratory state guide: https://www.acslab.com/cannabinoids/regulation-the-legality-of-thc-delta-8-a-state-by-state-guide
- Marijuana Policy Project delta-8 tracker: https://www.mpp.org/policy/federal/delta-8/

```typescript
import { StateData } from '@/types/hemp';

export const statesData: Record<string, StateData> = {
  alabama: {
    name: 'Alabama',
    abbreviation: 'AL',
    slug: 'alabama',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Restricted',
        detail: 'Delta-8 edibles and tinctures remain legal. Smokable hemp products including Delta-8 flower and pre-rolls were banned as of July 1, 2025 under HB 445.',
        statute: 'Alabama Code §20-2A',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Legal',
        detail: 'Hemp-derived Delta-9 THC is legal up to 0.3% by dry weight.',
        statute: 'Alabama Hemp Farming Act',
      },
      cbd: {
        status: 'legal',
        label: 'Legal',
        detail: 'CBD products are legal statewide with less than 0.3% THC.',
      },
      thca: {
        status: 'restricted',
        label: 'Restricted',
        detail: 'THCA flower is currently sold but legal status is uncertain under new hemp definitions taking effect November 2026.',
      },
      hhc: {
        status: 'legal',
        label: 'Legal',
        detail: 'No specific state restrictions on HHC currently.',
      },
      delta10: {
        status: 'legal',
        label: 'Legal',
        detail: 'No specific state restrictions on Delta-10 currently.',
      },
      thco: {
        status: 'banned',
        label: 'Banned',
        detail: 'THC-O is a synthetic cannabinoid and is federally illegal under DEA guidance.',
      },
      thcp: {
        status: 'gray',
        label: 'Gray Area',
        detail: 'THCP has no specific state legislation. Legal status is ambiguous.',
      },
    },
    productTypes: {
      gummies:   'legal',
      vapes:     'legal',
      flower:    'banned',
      tinctures: 'legal',
      topicals:  'legal',
      beverages: 'legal',
    },
    ageRestriction: 21,
    shippingIn:  'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote: 'Most Delta-8 and THCA products will be federally reclassified as controlled substances after November 12, 2026.',
    notes: 'Alabama actively updated hemp laws in 2025. Verify smokable hemp rules before purchasing.',
  },

  california: {
    name: 'California',
    abbreviation: 'CA',
    slug: 'california',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Restricted',
        detail: 'Delta-8 is only legal through licensed cannabis retailers under AB 45. Cannot be sold at convenience stores or smoke shops.',
        statute: 'California Health & Safety Code §26000',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Restricted',
        detail: 'Hemp-derived Delta-9 beverages and edibles allowed through licensed channels only.',
        statute: 'California AB 45',
      },
      cbd: {
        status: 'legal',
        label: 'Legal',
        detail: 'CBD topicals and non-ingestible products are broadly legal. Ingestible CBD requires licensed retailer.',
      },
      thca: {
        status: 'restricted',
        label: 'Restricted',
        detail: 'THCA products require licensed cannabis retailer under California law.',
      },
      hhc: {
        status: 'restricted',
        label: 'Restricted',
        detail: 'HHC falls under California hemp regulations and requires licensed retailer.',
      },
      delta10: {
        status: 'restricted',
        label: 'Restricted',
        detail: 'Delta-10 falls under California cannabis regulations. Licensed retailer required.',
      },
      thco: {
        status: 'banned',
        label: 'Banned',
        detail: 'THC-O is a synthetic cannabinoid, federally illegal and not sold in licensed California dispensaries.',
      },
      thcp: {
        status: 'gray',
        label: 'Gray Area',
        detail: 'No specific California legislation on THCP. Effectively falls under broader cannabis framework.',
      },
    },
    productTypes: {
      gummies:   'restricted',
      vapes:     'restricted',
      flower:    'restricted',
      tinctures: 'restricted',
      topicals:  'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn:  'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'low',
    federalChangeNote: 'California already regulates hemp-derived THC through its cannabis framework. The 2026 federal changes have minimal additional impact.',
    notes: 'California has some of the strictest hemp regulations in the country. Only purchase from licensed dispensaries.',
  },

  texas: {
    name: 'Texas',
    abbreviation: 'TX',
    slug: 'texas',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Restricted',
        detail: 'Delta-8 gummies and tinctures are legal. Delta-8 vapes and e-cigarettes containing any cannabinoids were banned effective September 2025.',
        statute: 'Texas Health & Safety Code §443',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Legal',
        detail: 'Hemp-derived Delta-9 THC is legal at the federal 0.3% threshold.',
        statute: 'Texas Agriculture Code §121',
      },
      cbd: {
        status: 'legal',
        label: 'Legal',
        detail: 'CBD is broadly legal in Texas. Low-THC hemp products widely available.',
      },
      thca: {
        status: 'gray',
        label: 'Gray Area',
        detail: 'THCA flower is sold across Texas but legal status is contested. THCA converts to Delta-9 when heated, creating enforcement uncertainty.',
      },
      hhc: {
        status: 'legal',
        label: 'Legal',
        detail: 'No specific Texas restrictions on HHC currently.',
      },
      delta10: {
        status: 'legal',
        label: 'Legal',
        detail: 'No specific Texas restrictions on Delta-10 currently.',
      },
      thco: {
        status: 'banned',
        label: 'Banned',
        detail: 'THC-O is federally illegal as a synthetic cannabinoid.',
      },
      thcp: {
        status: 'gray',
        label: 'Gray Area',
        detail: 'No specific Texas legislation. Ambiguous legal status.',
      },
    },
    productTypes: {
      gummies:   'legal',
      vapes:     'banned',
      flower:    'legal',
      tinctures: 'legal',
      topicals:  'legal',
      beverages: 'legal',
    },
    ageRestriction: 21,
    shippingIn:  'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote: 'Delta-8 and THCA products widely sold in Texas will be federally reclassified after November 12, 2026. Significant industry disruption expected.',
    notes: 'Texas has a large and active hemp market. Vape ban went into effect September 2025.',
  },

  // NOTE TO CLAUDE CODE: Complete all remaining 47 states following the same structure above.
  // States known to fully ban Delta-8 (as of 2026): Alaska, Colorado, Delaware, Idaho, Iowa,
  // Minnesota (restricted), Montana, New York, Nevada, North Dakota, Rhode Island, Vermont, Washington.
  // Use the research sources listed in Phase 2.2 to fill in accurate data for each state.
};

// Helper: get state by slug
export function getStateBySlug(slug: string): StateData | undefined {
  return statesData[slug];
}

// Helper: get all states as array
export function getAllStates(): StateData[] {
  return Object.values(statesData).sort((a, b) => a.name.localeCompare(b.name));
}

// Helper: get states where compound has a given status
export function getStatesByCompoundStatus(compound: Compound, status: LegalStatus): StateData[] {
  return getAllStates().filter(s => s.compounds[compound]?.status === status);
}
```

---

## Phase 3: Core Components

### 3.1 Status Badge Component

Create `/src/components/StatusBadge.tsx`:

```typescript
import { LegalStatus, STATUS_CONFIG } from '@/types/hemp';
import clsx from 'clsx';

interface Props {
  status: LegalStatus;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ status, size = 'md' }: Props) {
  const config = STATUS_CONFIG[status];
  return (
    <span className={clsx(
      'inline-flex items-center gap-1.5 rounded-full font-semibold',
      config.bg, config.color,
      size === 'sm' && 'px-2 py-0.5 text-xs',
      size === 'md' && 'px-3 py-1 text-sm',
      size === 'lg' && 'px-4 py-2 text-base',
    )}>
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
}
```

### 3.2 The Lookup Tool Component

Create `/src/components/LookupTool.tsx`. This is the homepage hero tool — the most important component.

```typescript
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Compound, ProductType, COMPOUND_LABELS, PRODUCT_LABELS } from '@/types/hemp';
import { getAllStates } from '@/data/states';

const states = getAllStates();

export function LookupTool() {
  const router = useRouter();
  const [stateSlug, setStateSlug]     = useState('');
  const [compound, setCompound]       = useState<Compound | ''>('');
  const [productType, setProductType] = useState<ProductType | ''>('');
  const [error, setError]             = useState('');

  function handleCheck() {
    if (!stateSlug || !compound) {
      setError('Please select a state and compound.');
      return;
    }
    setError('');
    const params = new URLSearchParams({ compound });
    if (productType) params.set('product', productType);
    router.push(`/states/${stateSlug}?${params.toString()}`);
  }

  const selectClass = `
    w-full rounded-xl border border-brand-border bg-brand-card
    px-4 py-3.5 text-white text-base
    focus:outline-none focus:ring-2 focus:ring-brand-green
    appearance-none cursor-pointer
  `;

  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      {/* State */}
      <select value={stateSlug} onChange={e => setStateSlug(e.target.value)} className={selectClass}>
        <option value="">Select your state...</option>
        {states.map(s => (
          <option key={s.slug} value={s.slug}>{s.name}</option>
        ))}
      </select>

      {/* Compound */}
      <select value={compound} onChange={e => setCompound(e.target.value as Compound)} className={selectClass}>
        <option value="">Select compound...</option>
        {(Object.keys(COMPOUND_LABELS) as Compound[]).map(c => (
          <option key={c} value={c}>{COMPOUND_LABELS[c]}</option>
        ))}
      </select>

      {/* Product Type (optional) */}
      <select value={productType} onChange={e => setProductType(e.target.value as ProductType)} className={selectClass}>
        <option value="">Select product type (optional)...</option>
        {(Object.keys(PRODUCT_LABELS) as ProductType[]).map(p => (
          <option key={p} value={p}>{PRODUCT_LABELS[p]}</option>
        ))}
      </select>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      {/* CTA Button */}
      <button
        onClick={handleCheck}
        className="w-full rounded-xl bg-brand-orange hover:bg-orange-500 active:bg-orange-600
                   text-white font-bold text-lg py-4 transition-colors duration-150"
      >
        Check Legality
      </button>

      <p className="text-center text-gray-500 text-sm">
        Free checks for all 50 states. No account needed.
      </p>
    </div>
  );
}
```

### 3.3 Result Card Component

Create `/src/components/ResultCard.tsx`:

```typescript
import { CompoundStatus, LegalStatus, STATUS_CONFIG } from '@/types/hemp';
import { StatusBadge } from './StatusBadge';
import { AlertTriangle } from 'lucide-react';

interface Props {
  compoundLabel: string;
  stateName: string;
  compoundStatus: CompoundStatus;
  federalChangeNote: string;
  federalChangeImpact: 'high' | 'medium' | 'low';
}

export function ResultCard({ compoundLabel, stateName, compoundStatus, federalChangeNote, federalChangeImpact }: Props) {
  return (
    <div className="rounded-2xl border border-brand-border bg-brand-card p-6 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">{compoundLabel} in {stateName}</h2>
          <p className="text-gray-400 text-sm mt-1">Current legal status</p>
        </div>
        <StatusBadge status={compoundStatus.status} size="lg" />
      </div>

      {/* Detail */}
      <p className="text-gray-300 leading-relaxed">{compoundStatus.detail}</p>

      {/* Statute */}
      {compoundStatus.statute && (
        <p className="text-gray-500 text-sm">
          📋 <span className="font-medium">Statute:</span> {compoundStatus.statute}
        </p>
      )}

      {/* 2026 Federal Warning */}
      {federalChangeImpact === 'high' && (
        <div className="rounded-xl bg-orange-900/20 border border-orange-800/40 p-4 flex gap-3">
          <AlertTriangle className="text-orange-400 mt-0.5 shrink-0" size={18} />
          <div>
            <p className="text-orange-400 font-semibold text-sm">Federal Law Change — November 12, 2026</p>
            <p className="text-orange-300/80 text-sm mt-1">{federalChangeNote}</p>
            <a href="/2026-federal-ban" className="text-orange-400 hover:text-orange-300 text-sm font-medium mt-2 inline-block underline">
              Learn what's changing →
            </a>
          </div>
        </div>
      )}

      {/* Affiliate CTA */}
      <div className="rounded-xl bg-green-900/20 border border-green-800/40 p-4">
        <p className="text-green-400 font-semibold text-sm">
          {compoundStatus.status === 'legal' || compoundStatus.status === 'restricted'
            ? `✅ Shop verified ${compoundLabel} brands`
            : `🔍 Learn more about hemp laws in ${stateName}`
          }
        </p>
        <p className="text-green-300/70 text-sm mt-1">
          {compoundStatus.status === 'banned'
            ? 'This compound is not currently legal in your state.'
            : 'We only link to verified, third-party tested brands.'
          }
        </p>
        {(compoundStatus.status === 'legal' || compoundStatus.status === 'restricted') && (
          <a
            href={`/shop/${compoundStatus.status === 'legal' ? 'recommended' : 'compliant'}`}
            className="mt-3 inline-block rounded-lg bg-green-700 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 transition-colors"
          >
            View Trusted Brands →
          </a>
        )}
      </div>
    </div>
  );
}
```

### 3.4 Navbar

Create `/src/components/Navbar.tsx`:

```typescript
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-brand-border bg-brand-dark/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg">
          Is Hemp Legal?
        </Link>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link href="/states" className="hover:text-white transition-colors">All States</Link>
          <Link href="/compounds/delta-8" className="hover:text-white transition-colors">Delta-8</Link>
          <Link href="/2026-federal-ban" className="hover:text-orange-400 transition-colors text-orange-500 font-medium">
            2026 Ban ⚠️
          </Link>
          <Link href="/get-report" className="rounded-lg bg-brand-orange hover:bg-orange-500 text-white font-semibold px-4 py-1.5 transition-colors">
            Get Report
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

---

## Phase 4: Pages

### 4.1 Homepage (`/src/app/page.tsx`)

```typescript
import type { Metadata } from 'next';
import { LookupTool } from '@/components/LookupTool';

export const metadata: Metadata = {
  title: 'Is Hemp Legal In My State? Delta-8, CBD & THCA Laws by State',
  description: 'Instantly check if Delta-8, CBD, THCA, HHC, and other hemp products are legal in your state. Free, accurate, updated for 2026 federal changes.',
  openGraph: {
    title: 'Is Hemp Legal In My State?',
    description: 'Free tool to check hemp and Delta-8 legality in all 50 states.',
    url: 'https://yourdomain.com',
  },
  alternates: { canonical: 'https://yourdomain.com' },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-900/30 border border-orange-800/40 px-4 py-1.5 text-orange-400 text-sm font-medium mb-6">
          ⚠️ Federal hemp laws changing November 12, 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
          Is Hemp Legal in<br />Your State?
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Check Delta-8, CBD, THCA, HHC, and more across all 50 states.
          Free. Instant. Updated for 2026.
        </p>
        <LookupTool />
      </section>

      {/* Federal Ban Banner */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="rounded-2xl bg-orange-900/20 border border-orange-700/40 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-orange-400 font-bold text-xl mb-2">
                ⚠️ Federal Hemp Law Changes November 12, 2026
              </h2>
              <p className="text-orange-300/80">
                Congress redefined hemp to include THCA and Delta-8 as controlled substances.
                Most intoxicating hemp products will be federally banned. Laws vary by state.
              </p>
            </div>
            <a
              href="/2026-federal-ban"
              className="shrink-0 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 text-center transition-colors"
            >
              What's Changing →
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Select your state', desc: 'Choose from all 50 US states.' },
            { step: '2', title: 'Pick your compound', desc: 'Delta-8, CBD, THCA, HHC, and more.' },
            { step: '3', title: 'Get instant results', desc: 'Clear legal status with source citations.' },
          ].map(item => (
            <div key={item.step} className="rounded-2xl border border-brand-border bg-brand-card p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-brand-green/20 text-green-400 font-black text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <p className="text-center text-gray-600 text-xs">
          This tool provides informational guidance only, not legal advice. Laws change frequently — always verify with local authorities. Not a substitute for an attorney.
        </p>
      </section>
    </main>
  );
}
```

### 4.2 State Page (`/src/app/states/[slug]/page.tsx`)

```typescript
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getStateBySlug, getAllStates } from '@/data/states';
import { StatusBadge } from '@/components/StatusBadge';
import { ResultCard } from '@/components/ResultCard';
import { COMPOUND_LABELS, PRODUCT_LABELS, Compound, ProductType } from '@/types/hemp';

// Generate all 50 state routes at build time
export async function generateStaticParams() {
  return getAllStates().map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const state = getStateBySlug(params.slug);
  if (!state) return {};
  return {
    title: `Hemp Laws in ${state.name} — Delta-8, CBD & THCA Legal Status 2026`,
    description: `Is Delta-8 legal in ${state.name}? Check the current legal status of CBD, THCA, HHC, and all hemp compounds. Updated for 2026 federal changes.`,
    alternates: { canonical: `https://yourdomain.com/states/${state.slug}` },
  };
}

export default function StatePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { compound?: string; product?: string };
}) {
  const state = getStateBySlug(params.slug);
  if (!state) notFound();

  const highlightedCompound = searchParams.compound as Compound | undefined;
  const compounds = Object.keys(COMPOUND_LABELS) as Compound[];

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="text-gray-500 text-sm mb-2">
          <a href="/states" className="hover:text-gray-400">All States</a> → {state.name}
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white">
          Hemp Laws in {state.name}
        </h1>
        <p className="text-gray-400 mt-2">
          Last updated: {new Date(state.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Highlighted result from tool (if compound selected) */}
      {highlightedCompound && state.compounds[highlightedCompound] && (
        <div className="mb-10">
          <ResultCard
            compoundLabel={COMPOUND_LABELS[highlightedCompound]}
            stateName={state.name}
            compoundStatus={state.compounds[highlightedCompound]}
            federalChangeNote={state.federalChangeNote}
            federalChangeImpact={state.federalChangeImpact}
          />
        </div>
      )}

      {/* All Compounds Table */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">All Compounds in {state.name}</h2>
        <div className="rounded-2xl border border-brand-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-brand-card border-b border-brand-border">
                <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Compound</th>
                <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Status</th>
                <th className="text-left text-gray-400 text-sm font-medium px-4 py-3 hidden md:table-cell">Details</th>
              </tr>
            </thead>
            <tbody>
              {compounds.map((compound, i) => {
                const cs = state.compounds[compound];
                return (
                  <tr key={compound} className={`border-b border-brand-border/50 ${i % 2 === 0 ? 'bg-brand-dark' : 'bg-brand-card/30'}`}>
                    <td className="px-4 py-3 text-white font-medium text-sm">{COMPOUND_LABELS[compound]}</td>
                    <td className="px-4 py-3"><StatusBadge status={cs.status} size="sm" /></td>
                    <td className="px-4 py-3 text-gray-400 text-sm hidden md:table-cell">{cs.detail}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Types Grid */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">By Product Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {(Object.keys(PRODUCT_LABELS) as ProductType[]).map(pt => (
            <div key={pt} className="rounded-xl border border-brand-border bg-brand-card p-4 flex items-center justify-between">
              <span className="text-gray-300 text-sm">{PRODUCT_LABELS[pt]}</span>
              <StatusBadge status={state.productTypes[pt]} size="sm" />
            </div>
          ))}
        </div>
      </section>

      {/* Shipping & Age */}
      <section className="mb-10 grid md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-brand-border bg-brand-card p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Age Requirement</p>
          <p className="text-white font-bold text-2xl">{state.ageRestriction}+</p>
        </div>
        <div className="rounded-xl border border-brand-border bg-brand-card p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Shipping Into {state.abbreviation}</p>
          <StatusBadge status={state.shippingIn} />
        </div>
        <div className="rounded-xl border border-brand-border bg-brand-card p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Shipping Out of {state.abbreviation}</p>
          <StatusBadge status={state.shippingOut} />
        </div>
      </section>

      {/* 2026 Federal Impact */}
      {state.federalChangeImpact !== 'low' && (
        <section className="mb-10">
          <div className="rounded-2xl bg-orange-900/20 border border-orange-700/40 p-6">
            <h2 className="text-orange-400 font-bold text-lg mb-2">
              ⚠️ 2026 Federal Law Impact on {state.name}
            </h2>
            <p className="text-orange-300/80">{state.federalChangeNote}</p>
            <a href="/2026-federal-ban" className="mt-3 inline-block text-orange-400 hover:text-orange-300 font-medium underline text-sm">
              Full federal ban details →
            </a>
          </div>
        </section>
      )}

      {/* Notes */}
      {state.notes && (
        <div className="rounded-xl bg-blue-900/20 border border-blue-800/40 p-4 mb-10">
          <p className="text-blue-300 text-sm">📌 <strong>Note:</strong> {state.notes}</p>
        </div>
      )}

      {/* Compare Links */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Compare {state.name} With Other States</h2>
        <div className="flex flex-wrap gap-2">
          {getAllStates()
            .filter(s => s.slug !== state.slug)
            .slice(0, 10)
            .map(other => (
              <a
                key={other.slug}
                href={`/compare/${state.slug}-vs-${other.slug}`}
                className="rounded-lg border border-brand-border bg-brand-card px-3 py-1.5 text-gray-300 hover:text-white text-sm transition-colors"
              >
                vs {other.name}
              </a>
            ))}
        </div>
      </section>
    </main>
  );
}
```

### 4.3 Compare Page (`/src/app/compare/[pair]/page.tsx`)

```typescript
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getStateBySlug, getAllStates } from '@/data/states';
import { StatusBadge } from '@/components/StatusBadge';
import { COMPOUND_LABELS, Compound } from '@/types/hemp';

// Generate top comparison pairs programmatically
export async function generateStaticParams() {
  const states = getAllStates();
  const pairs: { pair: string }[] = [];
  for (let i = 0; i < states.length; i++) {
    for (let j = i + 1; j < states.length; j++) {
      pairs.push({ pair: `${states[i].slug}-vs-${states[j].slug}` });
    }
  }
  return pairs;
}

export async function generateMetadata({ params }: { params: { pair: string } }): Promise<Metadata> {
  const [slug1, slug2] = params.pair.split('-vs-');
  const s1 = getStateBySlug(slug1);
  const s2 = getStateBySlug(slug2);
  if (!s1 || !s2) return {};
  return {
    title: `Hemp Laws: ${s1.name} vs ${s2.name} — Delta-8, CBD & THCA Comparison`,
    description: `Compare hemp and Delta-8 laws between ${s1.name} and ${s2.name}. See side-by-side legal status for all compounds.`,
    alternates: { canonical: `https://yourdomain.com/compare/${params.pair}` },
  };
}

export default function ComparePage({ params }: { params: { pair: string } }) {
  const [slug1, slug2] = params.pair.split('-vs-');
  const s1 = getStateBySlug(slug1);
  const s2 = getStateBySlug(slug2);
  if (!s1 || !s2) notFound();

  const compounds = Object.keys(COMPOUND_LABELS) as Compound[];

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black text-white mb-2">
        Hemp Laws: {s1.name} vs {s2.name}
      </h1>
      <p className="text-gray-400 mb-8">Side-by-side comparison of hemp compound laws</p>

      <div className="rounded-2xl border border-brand-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-brand-card border-b border-brand-border">
              <th className="text-left text-gray-400 text-sm font-medium px-4 py-3">Compound</th>
              <th className="text-center text-white text-sm font-bold px-4 py-3">{s1.name}</th>
              <th className="text-center text-white text-sm font-bold px-4 py-3">{s2.name}</th>
            </tr>
          </thead>
          <tbody>
            {compounds.map((compound, i) => (
              <tr key={compound} className={`border-b border-brand-border/50 ${i % 2 === 0 ? 'bg-brand-dark' : 'bg-brand-card/30'}`}>
                <td className="px-4 py-3 text-gray-300 text-sm">{COMPOUND_LABELS[compound]}</td>
                <td className="px-4 py-3 text-center">
                  <StatusBadge status={s1.compounds[compound].status} size="sm" />
                </td>
                <td className="px-4 py-3 text-center">
                  <StatusBadge status={s2.compounds[compound].status} size="sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Links back to individual state pages */}
      <div className="mt-8 flex gap-4">
        <a href={`/states/${s1.slug}`} className="flex-1 rounded-xl border border-brand-border bg-brand-card p-4 text-center hover:border-green-700 transition-colors">
          <p className="text-white font-bold">{s1.name} Full Guide →</p>
        </a>
        <a href={`/states/${s2.slug}`} className="flex-1 rounded-xl border border-brand-border bg-brand-card p-4 text-center hover:border-green-700 transition-colors">
          <p className="text-white font-bold">{s2.name} Full Guide →</p>
        </a>
      </div>
    </main>
  );
}
```

### 4.4 All States Page (`/src/app/states/page.tsx`)

Build a page showing all 50 states in a grid. Each card shows the state name, Delta-8 status badge, and CBD status badge. Link to the individual state page. Include metadata targeting "hemp laws by state" and "delta-8 legal states."

### 4.5 2026 Federal Ban Page (`/src/app/2026-federal-ban/page.tsx`)

This is the highest-priority SEO page. Build a comprehensive explainer:
- What the law says (plain English)
- Which products are affected
- The November 12, 2026 effective date
- State-by-state impact table (generate from `federalChangeImpact` field)
- FAQ section with schema markup (at least 8 questions)
- CTA to check your state

### 4.6 Compound Hub Pages (`/src/app/compounds/[compound]/page.tsx`)

Dynamic route. For each compound:
- What it is (plain English explanation)
- Federal legal status
- States where it's legal (green list)
- States where it's banned (red list)
- States where it's restricted/gray (yellow list)
- 2026 impact specific to this compound
- Link to use the main tool

---

## Phase 5: SEO & Metadata

### 5.1 Root Layout with JSON-LD

In `/src/app/layout.tsx`, add Organization schema:

```typescript
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Is Hemp Legal?',
  url: 'https://yourdomain.com',
  description: 'Hemp and Delta-8 legality checker for all 50 US states.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://yourdomain.com/states/{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};
```

### 5.2 FAQ Schema on State Pages

For each state page, add FAQPage schema targeting the most common questions:
- "Is [compound] legal in [state]?"
- "Can I buy [compound] online and ship to [state]?"
- "What is the age limit for hemp in [state]?"
- "Will [compound] be legal in [state] after November 2026?"

### 5.3 Sitemap

```typescript
// src/app/sitemap.ts
export default function sitemap() {
  const states = getAllStates();
  const compounds = ['delta-8', 'delta-9', 'cbd', 'thca', 'hhc', 'delta-10'];

  const stateUrls = states.map(s => ({
    url: `https://yourdomain.com/states/${s.slug}`,
    lastModified: new Date(s.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Generate all compare pairs
  const comparePairs = [];
  for (let i = 0; i < states.length; i++) {
    for (let j = i + 1; j < states.length; j++) {
      comparePairs.push({
        url: `https://yourdomain.com/compare/${states[i].slug}-vs-${states[j].slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      });
    }
  }

  return [
    { url: 'https://yourdomain.com', lastModified: new Date(), priority: 1.0 },
    { url: 'https://yourdomain.com/states', lastModified: new Date(), priority: 0.9 },
    { url: 'https://yourdomain.com/2026-federal-ban', lastModified: new Date(), priority: 0.95 },
    ...stateUrls,
    ...comparePairs,
  ];
}
```

---

## Phase 6: Paid Report Feature

### 6.1 Report Page (`/src/app/get-report/page.tsx`)

Build a simple landing page explaining the paid compliance report:
- What's included (all 8 compounds, product breakdown, travel rules, 2026 impact)
- Price: $7.99
- One-time purchase, PDF download
- Stripe payment link (user sets up Stripe, adds payment link)

### 6.2 Report Generation

When payment completes, generate a PDF report using the state data. You can use a simple server action + `@react-pdf/renderer` or redirect to a Stripe-hosted page and use a webhook to email the PDF.

---

## Phase 7: Quality Checks

Run these before deploying:

```bash
# TypeScript check
npx tsc --noEmit

# Lint
npx eslint src/

# Build (catches SSG errors)
npm run build

# Check all 50 states have data
node -e "
  const { statesData } = require('./src/data/states.ts');
  const count = Object.keys(statesData).length;
  console.log('States loaded:', count);
  if (count < 50) console.error('MISSING STATES — expected 50, got', count);
"

# Verify no missing compound data
# Every state should have all 8 compounds defined
```

After build, verify:
- [ ] All 50 state pages render without errors
- [ ] Homepage tool navigates correctly on selection
- [ ] 2026 federal ban page is live and readable
- [ ] Comparison pages generate for at least 10 state pairs
- [ ] Sitemap at /sitemap.xml lists all pages
- [ ] robots.txt exists and doesn't block any public pages
- [ ] Mobile layout works at 375px width
- [ ] All status badges display correct colors

---

## Notes

- Replace `https://yourdomain.com` with the actual domain throughout (e.g., `ishemplegal.com`)
- The `data/states.ts` file must be 100% complete with all 50 states before launch — do not launch with placeholder data
- Laws change frequently. Add `lastUpdated` to every state record and update it whenever data changes
- The affiliate links in `ResultCard.tsx` need real affiliate URLs once you're approved — use `/shop/placeholder` until then
- The 2026 federal ban page is the single most important SEO page — build it first, before any other content page
