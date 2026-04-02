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
  legal:       { label: 'Legal',        color: 'text-green-400',  bg: 'bg-green-900/30',  icon: '\u2705' },
  restricted:  { label: 'Restricted',   color: 'text-yellow-400', bg: 'bg-yellow-900/30', icon: '\u26A0\uFE0F' },
  gray:        { label: 'Gray Area',    color: 'text-orange-400', bg: 'bg-orange-900/30', icon: '\uD83D\uDD36' },
  banned:      { label: 'Banned',       color: 'text-red-400',    bg: 'bg-red-900/30',    icon: '\u274C' },
  medical_only:{ label: 'Medical Only', color: 'text-blue-400',   bg: 'bg-blue-900/30',   icon: '\uD83D\uDC8A' },
  unknown:     { label: 'Unknown',      color: 'text-gray-400',   bg: 'bg-gray-900/30',   icon: '\u2753' },
};

export const COMPOUND_SLUGS: Record<string, Compound> = {
  'delta-8': 'delta8',
  'delta-9': 'delta9Hemp',
  'cbd': 'cbd',
  'thca': 'thca',
  'hhc': 'hhc',
  'delta-10': 'delta10',
  'thc-o': 'thco',
  'thcp': 'thcp',
};

export const COMPOUND_SLUG_LABELS: Record<string, string> = {
  'delta-8': 'Delta-8 THC',
  'delta-9': 'Delta-9 THC (Hemp-Derived)',
  'cbd': 'CBD',
  'thca': 'THCA',
  'hhc': 'HHC',
  'delta-10': 'Delta-10 THC',
  'thc-o': 'THC-O',
  'thcp': 'THCP',
};
