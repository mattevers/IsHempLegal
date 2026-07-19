import { StateData } from '@/types/hemp';

export const statesNO: Record<string, StateData> = {
  nebraska: {
    name: 'Nebraska',
    abbreviation: 'NE',
    slug: 'nebraska',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'gray',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC sits in a contested gray area in Nebraska. No statute bans it — LB 316 (which would have restricted it) died when it was pulled May 30, 2025 — but Attorney General Mike Hilgers has filed 15+ lawsuits and issued 200+ cease-and-desist letters against retailers, and Governor Pillen\'s EO 26-02 (Jan 26, 2026) directs agencies to treat intoxicating synthetic cannabinoids as illegal. Products remain on shelves but face active enforcement.',
        statute: 'LB 657 — Nebraska Hemp Farming Act',
      },
      delta9Hemp: {
        status: 'gray',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is in a gray area in Nebraska. It is nominally permitted under LB 657 at up to 0.3% on a dry-weight basis, but the Department of Agriculture\'s proposed "adulterant" rule (published June 18, 2026, still pending) would classify any food or beverage containing detectable THC as adulterated, and the AG is pursuing enforcement.',
        statute: 'LB 657',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD derived from hemp is legal in Nebraska. The state permits the sale and possession of non-intoxicating CBD products that comply with the 0.3% THC threshold under LB 657.',
        statute: 'LB 657',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is in a contested gray area in Nebraska. No statute specifically addresses it, but because it converts to Delta-9 THC when heated it is a primary target of AG Hilgers\' enforcement actions and the Department of Agriculture\'s pending any-THC adulterant rule.',
        statute: 'LB 657',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC occupies a gray area in Nebraska. It is a chemically modified cannabinoid with no specific legislative guidance, and it is swept up in the enforcement posture set by EO 26-02 (Jan 26, 2026) against intoxicating synthetic cannabinoids.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is in a gray area in Nebraska. Like Delta-8, it is a chemically converted cannabinoid with no explicit statutory ban, but it is contested under the AG\'s lawsuits and EO 26-02 (Jan 26, 2026).',
        statute: 'LB 657',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O (THC-O-acetate) is considered a synthetic cannabinoid and is not protected under the federal Farm Bill. The DEA has indicated THC-O does not occur naturally in hemp, making it a controlled substance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Nebraska. Its legal status is uncertain, and as a potent intoxicating cannabinoid it is exposed to the same contested enforcement environment as the other THC isomers.',
      },
    },
    productTypes: {
      gummies: 'gray',
      vapes: 'gray',
      flower: 'gray',
      tinctures: 'gray',
      topicals: 'legal',
      beverages: 'gray',
    },
    ageRestriction: null,
    shippingIn: 'gray',
    shippingOut: 'gray',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Nebraska has no enacted hemp cannabinoid ban, but Governor Pillen\'s EO 26-02 (Jan 26, 2026) and the pending Department of Agriculture adulterant rule are explicitly aimed at aligning the state with the incoming federal standard. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that will formalize the restrictions Nebraska regulators are already advancing.',
    notes:
      'Nebraska has no statute banning intoxicating hemp products — LB 316 died when it was pulled May 30, 2025 — but the market is heavily contested. AG Mike Hilgers has brought 15+ lawsuits and 200+ cease-and-desist letters (expanded to roughly 104 Omaha stores in March 2025), Governor Pillen signed EO 26-02 (Jan 26, 2026) targeting intoxicating synthetic cannabinoids, and the Department of Agriculture\'s proposed any-THC adulterant rule (June 18, 2026) remains pending. Nebraska has no statutory hemp age minimum. Non-intoxicating CBD remains clearly legal.',
  },

  nevada: {
    name: 'Nevada',
    abbreviation: 'NV',
    slug: 'nevada',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Nevada channels Delta-8 THC into the state\'s licensed cannabis dispensary system under SB 49 (2021). Only products sold through licensed cannabis retailers are permitted; Delta-8 sold at general retail is prohibited.',
        statute: 'SB 49 (2021)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are restricted in Nevada. Consumable hemp other than CBD/CBG must be sold through licensed cannabis establishments under SB 49 (2021) and SB 356 (2025).',
        statute: 'SB 49 (2021); SB 356 (2025)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp are legal in Nevada and widely available in retail stores, provided they contain no more than 0.3% Delta-9 THC.',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA is restricted in Nevada. Because THCA converts to THC when heated, the state treats high-THCA hemp products as intoxicating consumable hemp that must go through the licensed cannabis system under SB 49 (2021) and SB 356 (2025).',
        statute: 'SB 49 (2021); SB 356 (2025)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned for retail sale outside the licensed cannabis system in Nevada. SB 49 (2021) and SB 356 (2025) confine intoxicating hemp-derived cannabinoids to licensed cannabis establishments.',
        statute: 'SB 49 (2021); SB 356 (2025)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned for sale outside the licensed cannabis dispensary system under Nevada\'s SB 49 (2021) and SB 356 (2025), which restrict intoxicating hemp-derived cannabinoids to licensed establishments.',
        statute: 'SB 49 (2021); SB 356 (2025)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Nevada both under SB 49 (2021) / SB 356 (2025) and because it is considered a synthetic cannabinoid not protected by the federal Farm Bill.',
        statute: 'SB 49 (2021); SB 356 (2025)',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Nevada. However, given the state\'s confinement of intoxicating consumable hemp to licensed cannabis establishments under SB 49 (2021) and SB 356 (2025), it is likely treated as restricted or banned at general retail.',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'restricted',
      flower: 'restricted',
      tinctures: 'restricted',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'low',
    federalChangeNote:
      'Nevada already has a mature licensed cannabis market and confines intoxicating consumable hemp to that system. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap, but its impact on Nevada is low because the state already channels these products through licensed dispensaries.',
    notes:
      'Nevada\'s SB 49 (2021) and SB 356 (2025) funnel non-CBD/CBG intoxicating consumable hemp into the regulated cannabis market, and using a courier or the mail to bring such products into the state is a misdemeanor. Non-intoxicating CBD products remain widely available outside dispensaries.',
  },

  'new-hampshire': {
    name: 'New Hampshire',
    abbreviation: 'NH',
    slug: 'new-hampshire',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal and widely sold in New Hampshire through December 31, 2026. SB 624 (2026) imposes a 0.4 mg total-THC-per-container cap (counting THCA and other isomers) effective January 1, 2027, which will end retail sales of typical Delta-8 products.',
        statute: 'SB 624 (2026)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal in New Hampshire when they contain no more than 0.3% Delta-9 THC on a dry-weight basis. This remains true only through December 31, 2026: SB 624 (2026) adopts a total-THC standard with a 0.4 mg-per-container cap effective January 1, 2027.',
        statute: 'SB 624 (2026)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in New Hampshire and is one of the most commonly sold hemp-derived products in the state. Non-intoxicating CBD is unaffected by the SB 624 (2026) total-THC cap.',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is legal in New Hampshire through December 31, 2026. SB 624 (2026) counts THCA toward total THC, so high-THCA products will exceed the 0.4 mg-per-container cap once it takes effect January 1, 2027.',
        statute: 'SB 624 (2026)',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal in New Hampshire through December 31, 2026. SB 624 (2026)\'s 0.4 mg total-THC cap effective January 1, 2027 will restrict intoxicating HHC products.',
        statute: 'SB 624 (2026)',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in New Hampshire through December 31, 2026. Like other THC isomers, it becomes subject to SB 624 (2026)\'s 0.4 mg total-THC-per-container cap on January 1, 2027.',
        statute: 'SB 624 (2026)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid by the DEA and is not protected under the Farm Bill. It is effectively banned as a controlled substance analog regardless of New Hampshire\'s otherwise permissive hemp stance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in New Hampshire. It is currently sold in a gray area, but SB 624 (2026)\'s total-THC standard will capture intoxicating THCP products once the 0.4 mg cap takes effect January 1, 2027.',
      },
    },
    productTypes: {
      gummies: 'legal',
      vapes: 'legal',
      flower: 'legal',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'legal',
    },
    ageRestriction: null,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'New Hampshire has no recreational cannabis program and its permissive hemp market relies on the current federal hemp definition. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that directly targets this currently-legal retail market — and the state\'s own SB 624 (2026) reinforces it with an identical cap from January 1, 2027 — so the impact on New Hampshire is high.',
    notes:
      'New Hampshire remains one of the more permissive states for hemp-derived cannabinoids, but that changes soon. SB 624 (2026), signed in early July 2026, adopts a total-THC standard (including THCA) with a 0.4 mg-per-container cap and a 21+ purchase age effective January 1, 2027; the current "legal" statuses are valid only through December 31, 2026 (a sunset). New Hampshire has no statutory hemp age minimum until the SB 624 21+ rule takes effect. Delta-8 and other hemp products are, for now, widely sold with minimal oversight.',
  },

  'new-jersey': {
    name: 'New Jersey',
    abbreviation: 'NJ',
    slug: 'new-jersey',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned outside the licensed cannabis system in New Jersey. S4509 (2026) adopts a total-THC definition with a 0.4 mg-per-container cap; after the grace period ended April 13, 2026, intoxicating hemp products like Delta-8 may only be sold through licensed cannabis retailers.',
        statute: 'S4509 (2026)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is restricted in New Jersey. Under S4509 (2026), products above 0.4 mg total THC per container are confined to licensed cannabis retailers, while hemp beverages of 5 mg or less per serving may be sold through liquor stores and dispensaries until November 13, 2026.',
        statute: 'S4509 (2026)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp are legal and widely available in New Jersey. Non-intoxicating CBD products are not subject to the intoxicating-hemp restrictions of S4509 (2026).',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA products are banned outside the licensed cannabis system in New Jersey. S4509 (2026) uses a total-THC standard that counts THCA, so high-THCA hemp flower and products are treated as cannabis and confined to licensed retailers.',
        statute: 'S4509 (2026)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned outside the licensed cannabis system in New Jersey under S4509 (2026), which restricts intoxicating hemp-derived cannabinoids to licensed cannabis retailers.',
        statute: 'S4509 (2026)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned outside the licensed cannabis system in New Jersey under S4509 (2026) alongside other intoxicating hemp-derived cannabinoids.',
        statute: 'S4509 (2026)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in New Jersey as a synthetic cannabinoid. It is not protected under the Farm Bill and is prohibited outside the licensed cannabis system under S4509 (2026).',
        statute: 'S4509 (2026)',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned outside the licensed cannabis system in New Jersey. As an intoxicating THC homolog it is captured by S4509 (2026)\'s total-THC definition and 0.4 mg-per-container cap.',
        statute: 'S4509 (2026)',
      },
    },
    productTypes: {
      gummies: 'banned',
      vapes: 'banned',
      flower: 'banned',
      tinctures: 'banned',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'low',
    federalChangeNote:
      'New Jersey already restricts intoxicating hemp to its licensed cannabis system under S4509 (2026), which uses a 0.4 mg-per-container total-THC cap. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes the same 0.4 mg total-THC-per-container cap nationally, so its impact on New Jersey is low because the state has already adopted an equivalent standard.',
    notes:
      'New Jersey\'s 2024 hemp law (c.73) was largely enjoined in Loki Brands LLC v. Platkin (Oct 10, 2024) except its under-21 ban. The operative law is now S4509 (signed Jan 12, 2026): a total-THC definition with a 0.4 mg-per-container cap. After the grace period ended April 13, 2026, Delta-8/THCA/HHC/Delta-10 are banned outside licensed cannabis; hemp beverages of 5 mg or less per serving remain available in liquor stores and dispensaries until November 13, 2026. Non-intoxicating CBD remains freely available.',
  },

  'new-mexico': {
    name: 'New Mexico',
    abbreviation: 'NM',
    slug: 'new-mexico',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in New Mexico. The New Mexico Environment Department (NMED) Hemp Final Rule (effective January 28, 2026) prohibits chemically converted cannabinoids — including Delta-8 — from being manufactured or sold by licensed hemp facilities.',
        statute: 'NMED Hemp Final Rule (Jan 28, 2026)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is restricted in New Mexico. The NMED Hemp Final Rule applies a 0.3% total-THC standard (counting THCA), and intoxicating hemp products fall under NMED oversight rather than being freely sold at general retail.',
        statute: 'NMED Hemp Final Rule (Jan 28, 2026)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in New Mexico and widely available. Non-intoxicating hemp-derived CBD products are not prohibited by the NMED converted-cannabinoid rule.',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA sits in a gray area in New Mexico. The NMED Hemp Final Rule measures total THC (including THCA) against a 0.3% threshold, so high-THCA hemp products are effectively unlawful, though enforcement against naturally occurring THCA at retail is still developing.',
        statute: 'NMED Hemp Final Rule (Jan 28, 2026)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in New Mexico as a chemically converted (semi-synthetic) cannabinoid prohibited by the NMED Hemp Final Rule (effective January 28, 2026).',
        statute: 'NMED Hemp Final Rule (Jan 28, 2026)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in New Mexico as a chemically converted cannabinoid prohibited by the NMED Hemp Final Rule (effective January 28, 2026).',
        statute: 'NMED Hemp Final Rule (Jan 28, 2026)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in New Mexico. It is a chemically converted cannabinoid prohibited by the NMED Hemp Final Rule and is not naturally occurring in hemp or protected under the federal Farm Bill.',
        statute: 'NMED Hemp Final Rule (Jan 28, 2026)',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific mention in New Mexico\'s rule. Because commercial THCP is typically produced by chemical conversion, it likely falls under the NMED prohibition on semi-synthetic cannabinoids, but it has not been explicitly named.',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'restricted',
      flower: 'restricted',
      tinctures: 'restricted',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'low',
    federalChangeNote:
      'New Mexico already bans chemically converted hemp cannabinoids and applies a 0.3% total-THC standard through the NMED Hemp Final Rule. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, adds a 0.4 mg total-THC-per-container cap, but its impact on New Mexico is low because the state has already restricted converted cannabinoids.',
    notes:
      'Hemp in New Mexico is regulated by the New Mexico Environment Department (NMED) — not the state\'s separate adult-use marijuana regulator, a common misconception this entry previously repeated. Following an emergency rule in September 2025, the NMED Hemp Final Rule took effect January 28, 2026, banning chemically converted cannabinoids (Delta-8, Delta-10, THC-O, HHC) and applying a 0.3% total-THC standard that counts THCA. CBD and non-intoxicating hemp products remain freely available.',
  },

  'new-york': {
    name: 'New York',
    abbreviation: 'NY',
    slug: 'new-york',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'New York bans the sale of Delta-8 THC products outside the licensed cannabis system. The Marihuana Regulation and Taxation Act (MRTA), Cannabis Law, and Office of Cannabis Management (OCM) regulations at 9 NYCRR Part 114 prohibit hemp-derived intoxicating cannabinoids from being sold in unlicensed retail settings.',
        statute: 'Cannabis Law (MRTA); 9 NYCRR Part 114',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are banned outside the licensed cannabis dispensary system in New York. The OCM enforces this under Cannabis Law and 9 NYCRR Part 114 against retailers selling these products without a cannabis license.',
        statute: 'Cannabis Law (MRTA); 9 NYCRR Part 114',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD derived from hemp is legal in New York and widely available in retail stores, health food shops, and online. Non-intoxicating CBD products, including CBD hemp beverages, are permitted under the state\'s cannabinoid hemp program.',
        statute: 'Cannabis Law; 9 NYCRR Part 114',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA products are banned for retail sale outside the licensed cannabis system in New York. The OCM considers high-THCA hemp flower to be functionally equivalent to cannabis under Cannabis Law and 9 NYCRR Part 114.',
        statute: 'Cannabis Law (MRTA); 9 NYCRR Part 114',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned for retail sale outside the licensed cannabis system in New York under Cannabis Law and the 9 NYCRR Part 114 regulations targeting intoxicating hemp-derived cannabinoids.',
        statute: 'Cannabis Law (MRTA); 9 NYCRR Part 114',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned for sale outside the licensed cannabis system in New York. The OCM\'s regulations at 9 NYCRR Part 114 encompass all intoxicating hemp-derived cannabinoids.',
        statute: 'Cannabis Law (MRTA); 9 NYCRR Part 114',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in New York both under Cannabis Law / 9 NYCRR Part 114 and as a synthetic cannabinoid not protected by the federal Farm Bill.',
        statute: 'Cannabis Law (MRTA); 9 NYCRR Part 114',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned outside the licensed cannabis system in New York. As an intoxicating hemp-derived cannabinoid it is captured by the OCM\'s broad prohibition under Cannabis Law and 9 NYCRR Part 114.',
        statute: 'Cannabis Law (MRTA); 9 NYCRR Part 114',
      },
    },
    productTypes: {
      gummies: 'banned',
      vapes: 'banned',
      flower: 'banned',
      tinctures: 'banned',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'banned',
    shippingOut: 'banned',
    federalChangeImpact: 'low',
    federalChangeNote:
      'New York has already banned hemp-derived intoxicating cannabinoids outside its licensed cannabis system under Cannabis Law and 9 NYCRR Part 114. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap, but its impact on New York is low because the state already prohibits these products at general retail.',
    notes:
      'New York\'s Office of Cannabis Management aggressively enforces bans on hemp-derived intoxicating cannabinoids sold outside licensed dispensaries, under the Cannabis Law (the Marihuana Regulation and Taxation Act) and 9 NYCRR Part 114. Non-intoxicating CBD products and CBD hemp beverages remain permitted, so beverages are restricted rather than fully banned.',
  },

  'north-carolina': {
    name: 'North Carolina',
    abbreviation: 'NC',
    slug: 'north-carolina',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal and widely sold in North Carolina. SB 455 / S.L. 2022-32 aligned the state hemp definition with the federal Farm Bill (G.S. 90-94) and does not specifically restrict Delta-8 from compliant hemp. A pending bill, HB 328, could sharply limit it (see notes).',
        statute: 'SB 455 / S.L. 2022-32 (G.S. 90-94)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal in North Carolina when they contain no more than 0.3% Delta-9 THC on a dry-weight basis. SB 455 / S.L. 2022-32 (G.S. 90-94) aligns state law with the federal Farm Bill.',
        statute: 'SB 455 / S.L. 2022-32 (G.S. 90-94)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is fully legal in North Carolina. The state was among the early adopters of hemp-friendly legislation and CBD products are widely available.',
        statute: 'SB 455 / S.L. 2022-32 (G.S. 90-94)',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is legal in North Carolina. The state has not enacted restrictions targeting THCA specifically, and it is sold alongside other hemp-derived cannabinoids under SB 455 / S.L. 2022-32.',
        statute: 'SB 455 / S.L. 2022-32 (G.S. 90-94)',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal in North Carolina. The state\'s hemp program under SB 455 / S.L. 2022-32 does not restrict hemp-derived cannabinoids beyond the 0.3% Delta-9 THC threshold.',
        statute: 'SB 455 / S.L. 2022-32 (G.S. 90-94)',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in North Carolina and available at hemp retailers across the state. SB 455 / S.L. 2022-32 does not specifically restrict this cannabinoid.',
        statute: 'SB 455 / S.L. 2022-32 (G.S. 90-94)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid by the DEA and is not protected under the Farm Bill. Despite North Carolina\'s permissive hemp market, THC-O is effectively banned as a controlled substance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in North Carolina. While the state is generally permissive toward hemp-derived cannabinoids, THCP remains unaddressed in current law.',
      },
    },
    productTypes: {
      gummies: 'legal',
      vapes: 'legal',
      flower: 'legal',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'legal',
    },
    ageRestriction: null,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'North Carolina has a thriving hemp-derived cannabinoid market with minimal state-level restrictions. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that directly hits this currently-legal market, so the impact on North Carolina is high.',
    notes:
      'North Carolina is one of the most active hemp markets in the United States; SB 455 / S.L. 2022-32 (G.S. 90-94) created its hemp program, and Delta-8 products are widely sold at gas stations, smoke shops, and specialty retailers. This is contested: the HB 328 conference report passed the state Senate 37-6 on July 2, 2026, but the House had not voted before its recess and is expected to take it up the week of July 27, 2026. HB 328 is pending — not yet enacted — and would impose a 0.4 mg-per-container total-THC standard and a 21+ purchase age. North Carolina currently has no statutory hemp age minimum.',
  },

  'north-dakota': {
    name: 'North Dakota',
    abbreviation: 'ND',
    slug: 'north-dakota',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'North Dakota has banned Delta-8 THC and other intoxicating hemp-derived cannabinoids. HB 1045 (2021) and SB 2096 (2023) added them to the state\'s controlled-substance framework, making sale, possession, and distribution illegal.',
        statute: 'HB 1045 (2021); SB 2096 (2023)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are heavily restricted in North Dakota. While hemp itself is legal under the state\'s agricultural program, intoxicating hemp-derived products face strict regulatory barriers under HB 1045 (2021) and SB 2096 (2023).',
        statute: 'HB 1045 (2021); SB 2096 (2023)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD derived from hemp is legal in North Dakota, provided the product contains no more than 0.3% Delta-9 THC. Non-intoxicating CBD products are widely available.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is effectively banned in North Dakota under the state\'s broad prohibition on intoxicating hemp-derived cannabinoids. High-THCA products are treated as marijuana equivalents under HB 1045 (2021) and SB 2096 (2023).',
        statute: 'HB 1045 (2021); SB 2096 (2023)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in North Dakota as part of the state\'s comprehensive restriction on intoxicating hemp-derived cannabinoids under SB 2096 (2023).',
        statute: 'HB 1045 (2021); SB 2096 (2023)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in North Dakota. The state\'s restrictions on hemp-derived intoxicating cannabinoids encompass Delta-10 along with other THC isomers.',
        statute: 'HB 1045 (2021); SB 2096 (2023)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in North Dakota both under the state\'s ban on intoxicating hemp-derived cannabinoids and as a synthetic cannabinoid not protected by the Farm Bill.',
        statute: 'HB 1045 (2021); SB 2096 (2023)',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned in North Dakota. It is explicitly named among the intoxicating hemp-derived cannabinoids barred under SB 2096 (2023).',
        statute: 'HB 1045 (2021); SB 2096 (2023)',
      },
    },
    productTypes: {
      gummies: 'banned',
      vapes: 'banned',
      flower: 'banned',
      tinctures: 'banned',
      topicals: 'legal',
      beverages: 'banned',
    },
    ageRestriction: null,
    shippingIn: 'banned',
    shippingOut: 'banned',
    federalChangeImpact: 'low',
    federalChangeNote:
      'North Dakota has already banned most intoxicating hemp-derived cannabinoids under HB 1045 (2021) and SB 2096 (2023). Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, adds a 0.4 mg total-THC-per-container cap nationally, but its impact on North Dakota is low because the state is already more restrictive.',
    notes:
      'North Dakota is one of the most restrictive states for hemp-derived cannabinoids, banning Delta-8, Delta-10, HHC, THC-O, and THCP under HB 1045 (2021) and SB 2096 (2023). Only non-intoxicating CBD products are readily available. North Dakota has no statutory hemp age minimum.',
  },

  ohio: {
    name: 'Ohio',
    abbreviation: 'OH',
    slug: 'ohio',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned outside licensed dispensaries in Ohio. SB 56 (2025, 136th GA), effective March 20, 2026, classifies any product with more than 0.4 mg total THC per container as marijuana, sellable only through cannabis dispensaries licensed by the Division of Cannabis Control.',
        statute: 'SB 56 (2025, 136th GA)',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are banned outside licensed dispensaries in Ohio. Under SB 56 (2025, 136th GA), effective March 20, 2026, any product exceeding 0.4 mg total THC per container is marijuana and confined to the licensed dispensary system.',
        statute: 'SB 56 (2025, 136th GA)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is legal in Ohio and widely available. Non-intoxicating hemp-derived CBD within the 0.4 mg total-THC-per-container limit is unaffected by SB 56\'s dispensary-only requirement for intoxicating products.',
        statute: 'SB 56 (2025, 136th GA)',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned outside licensed dispensaries in Ohio. SB 56 (2025, 136th GA) measures total THC, so high-THCA hemp products exceed the 0.4 mg-per-container threshold and are treated as marijuana.',
        statute: 'SB 56 (2025, 136th GA)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned outside licensed dispensaries in Ohio under SB 56 (2025, 136th GA), which confines intoxicating hemp products to the licensed cannabis system.',
        statute: 'SB 56 (2025, 136th GA)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned outside licensed dispensaries in Ohio under SB 56 (2025, 136th GA), effective March 20, 2026.',
        statute: 'SB 56 (2025, 136th GA)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Ohio as a synthetic cannabinoid not protected under the Farm Bill, and it is prohibited outside licensed dispensaries under SB 56 (2025, 136th GA).',
        statute: 'SB 56 (2025, 136th GA)',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned outside licensed dispensaries in Ohio. As an intoxicating THC homolog it exceeds SB 56 (2025, 136th GA)\'s 0.4 mg total-THC-per-container threshold and is treated as marijuana.',
        statute: 'SB 56 (2025, 136th GA)',
      },
    },
    productTypes: {
      gummies: 'banned',
      vapes: 'banned',
      flower: 'banned',
      tinctures: 'banned',
      topicals: 'legal',
      beverages: 'banned',
    },
    ageRestriction: 21,
    shippingIn: 'banned',
    shippingOut: 'banned',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Ohio already restricts intoxicating hemp to its licensed dispensary system under SB 56 (2025, 136th GA), which uses a 0.4 mg total-THC-per-container threshold. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, adopts the same 0.4 mg per-container cap nationally, reinforcing Ohio\'s standard for a moderate overall impact.',
    notes:
      'Ohio sharply reversed course from its former open hemp market. After Governor DeWine\'s October 8, 2025 emergency order, SB 56 (2025, 136th GA) took effect March 20, 2026: any product exceeding 0.4 mg total THC per container is marijuana, sellable only through licensed dispensaries to buyers 21+. Enforcement (stop-sale orders, seizures) began the same day, and a legal challenge (Happy Harvest, heard May 7, 2026) left the ban in effect.',
  },

  oklahoma: {
    name: 'Oklahoma',
    abbreviation: 'OK',
    slug: 'oklahoma',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Oklahoma. The state\'s hemp framework — HB 2913 (2018), 2 O.S. §3-401, and SB 1033 (2021) — permits hemp-derived cannabinoids, including Delta-8, that comply with the 0.3% Delta-9 THC limit; no bill restricting it has passed.',
        statute: 'HB 2913 (2018); 2 O.S. §3-401; SB 1033 (2021)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal in Oklahoma when they contain no more than 0.3% Delta-9 THC on a dry-weight basis, under HB 2913 (2018) and 2 O.S. §3-401.',
        statute: 'HB 2913 (2018); 2 O.S. §3-401; SB 1033 (2021)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Oklahoma and is one of the most widely sold hemp products in the state. Oklahoma has a strong hemp and CBD retail market.',
        statute: 'HB 2913 (2018); 2 O.S. §3-401',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is legal in Oklahoma. State law does not specifically restrict THCA, and it is available at hemp retailers alongside other cannabinoid products.',
        statute: 'HB 2913 (2018); 2 O.S. §3-401; SB 1033 (2021)',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal in Oklahoma. The state\'s hemp framework does not restrict HHC or other non-Delta-9 cannabinoids derived from compliant hemp.',
        statute: 'HB 2913 (2018); 2 O.S. §3-401; SB 1033 (2021)',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Oklahoma under HB 2913 (2018) and SB 1033 (2021). The state permits hemp-derived cannabinoids that meet the federal 0.3% Delta-9 THC threshold.',
        statute: 'HB 2913 (2018); 2 O.S. §3-401; SB 1033 (2021)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned as a synthetic cannabinoid not naturally found in hemp. Despite Oklahoma\'s permissive hemp market, THC-O is not protected under the Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Oklahoma. While the state is generally permissive toward hemp-derived cannabinoids, THCP has not been explicitly addressed.',
      },
    },
    productTypes: {
      gummies: 'legal',
      vapes: 'legal',
      flower: 'legal',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'legal',
    },
    ageRestriction: null,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Oklahoma has one of the strongest hemp and CBD markets in the country and remains largely unregulated at the state level. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that lands hard on the state\'s many hemp retailers and manufacturers, so the impact on Oklahoma is high.',
    notes:
      'Oklahoma has a robust, business-friendly hemp market built on HB 2913 (2018), 2 O.S. §3-401, and SB 1033 (2021); nothing further passed in 2025–26. Governor Stitt issued an enforcement letter in April 2025, but no new restrictions were enacted. Oklahoma has no statutory hemp age minimum. The state also has one of the largest medical cannabis programs in the country.',
  },

  oregon: {
    name: 'Oregon',
    abbreviation: 'OR',
    slug: 'oregon',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned from sale in Oregon. HB 3000 (2021), ORS 475C, and OLCC rules prohibit artificially (chemically) derived cannabinoids, and Delta-8 made by converting CBD is not permitted at retail.',
        statute: 'HB 3000 (2021); ORS 475C; OLCC rules',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Naturally derived hemp Delta-9 THC is restricted in Oregon and regulated alongside cannabis products under HB 3000 (2021) / ORS 475C. Products must comply with OLCC standards for testing, labeling, and retail licensing.',
        statute: 'HB 3000 (2021); ORS 475C; OLCC rules',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Oregon and widely available. Non-intoxicating CBD products are not subject to the OLCC cannabis licensing requirements.',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA is restricted in Oregon under HB 3000 (2021) / ORS 475C. Naturally occurring high-THCA hemp products are regulated through the OLCC alongside other intoxicating cannabis products.',
        statute: 'HB 3000 (2021); ORS 475C; OLCC rules',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned from sale in Oregon as an artificially derived cannabinoid prohibited under HB 3000 (2021), ORS 475C, and OLCC rules.',
        statute: 'HB 3000 (2021); ORS 475C; OLCC rules',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned from sale in Oregon as an artificially derived cannabinoid prohibited under HB 3000 (2021), ORS 475C, and OLCC rules.',
        statute: 'HB 3000 (2021); ORS 475C; OLCC rules',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Oregon both as an artificially derived cannabinoid prohibited under HB 3000 (2021) / ORS 475C and as a synthetic cannabinoid not protected by the federal Farm Bill.',
        statute: 'HB 3000 (2021); ORS 475C; OLCC rules',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned from sale in Oregon. It is explicitly treated as an artificially derived cannabinoid prohibited under HB 3000 (2021), ORS 475C, and OLCC rules.',
        statute: 'HB 3000 (2021); ORS 475C; OLCC rules',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'restricted',
      flower: 'restricted',
      tinctures: 'restricted',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'low',
    federalChangeNote:
      'Oregon already bans artificially derived cannabinoids and regulates naturally derived hemp THC through its mature OLCC cannabis system under HB 3000 (2021) / ORS 475C. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, adds a 0.4 mg total-THC-per-container cap, but its impact on Oregon is low because the state already restricts these products.',
    notes:
      'Oregon was an early legal cannabis state and regulates hemp-derived intoxicating cannabinoids through HB 3000 (2021), ORS 475C, and OLCC rules; an earlier county-moratorium bill was cited in error here. Artificially derived cannabinoids (Delta-8, Delta-10, HHC, THC-O, THCP) are banned from retail sale, while naturally derived Delta-9 and THCA products are restricted to the OLCC-licensed market. Non-intoxicating CBD remains freely available.',
  },
};
