import { StateData } from '@/types/hemp';

export const statesPW: Record<string, StateData> = {
  pennsylvania: {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    slug: 'pennsylvania',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal and unregulated in Pennsylvania. Hemp-derived cannabinoids are permitted under Act 92 of 2016 (the Pennsylvania Industrial Hemp Research Act), which established the state hemp program in alignment with the 2018 Farm Bill. SB 49, which would have created a dedicated regulatory framework, failed in June 2026, so no product-specific rules or purchase-age minimum apply.',
        statute: 'Act 92 of 2016 (Pennsylvania Industrial Hemp Research Act)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal when containing no more than 0.3% THC by dry weight, consistent with federal guidelines and Act 92 of 2016.',
        statute: 'Act 92 of 2016',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Pennsylvania. Hemp-derived CBD products are widely available in retail stores, pharmacies, and online.',
        statute: 'Act 92 of 2016',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is not specifically addressed in Pennsylvania law. Products are available but exist in a legal gray area since THCA converts to Delta-9 THC when heated.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is not specifically banned in Pennsylvania. Hemp-derived HHC products are sold alongside other cannabinoid products under the general hemp framework.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Pennsylvania under the state hemp program. Products are available in retail locations statewide.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is not protected under the Farm Bill. The DEA has indicated THC-O does not occur naturally in hemp, making it federally illegal.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Pennsylvania. Its legal status is unclear as it is not explicitly addressed in state or federal hemp laws.',
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
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Pennsylvania has a well-established, largely unregulated hemp market. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that will significantly reduce the availability of Delta-8 and similar intoxicating products, though non-intoxicating CBD is likely to remain largely unaffected.',
    notes:
      'Pennsylvania regulates hemp under Act 92 of 2016 and has no dedicated cannabinoid-product statute: SB 49, which sought to license and tax hemp products, failed in June 2026, so Act 92 of 2016 remains the operative framework. There is no statutory purchase-age minimum for hemp products. Hemp-derived products are widely available in gas stations, smoke shops, and specialty stores throughout the state, overseen by the PA Department of Agriculture.',
  },

  'rhode-island': {
    name: 'Rhode Island',
    abbreviation: 'RI',
    slug: 'rhode-island',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Rhode Island outside of the licensed adult-use cannabis program. The state has explicitly prohibited hemp-derived intoxicating cannabinoids from being sold outside of regulated dispensaries.',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Low-dose hemp-derived Delta-9 THC is restricted, not banned: since August 2024, DBR/CCC-licensed hemp retailers (including vape shops and liquor stores) may sell low-dose hemp products, with beverages capped at 5 mg of THC per serving and other consumables limited to roughly 1 mg per serving and 5 mg per package. Higher-potency Delta-9 products remain confined to the licensed adult-use cannabis system.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'Non-intoxicating CBD products derived from hemp remain legal in Rhode Island. CBD is widely available in retail stores and wellness shops.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned in Rhode Island outside the licensed cannabis system, as the state restricts intoxicating hemp-derived cannabinoids and products that convert to Delta-9 THC when heated.',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in Rhode Island as part of the state\'s prohibition on intoxicating hemp-derived cannabinoids outside the licensed cannabis program.',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in Rhode Island under the same framework that prohibits other intoxicating hemp-derived cannabinoids outside the regulated cannabis system.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned both as a synthetic cannabinoid under federal guidance and under Rhode Island\'s prohibition on intoxicating hemp-derived products.',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is treated as an intoxicating hemp-derived cannabinoid and is banned outside the licensed cannabis program, consistent with the state\'s restriction on such products in general retail.',
      },
    },
    productTypes: {
      gummies: 'restricted',
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
      'Rhode Island already channels intoxicating hemp-derived THC through its licensed cannabis program and permits only low-dose hemp products (beverages up to 5 mg per serving) through DBR/CCC-licensed hemp retailers. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that will tighten that low-dose retail lane, but the overall impact is low because the state already prohibits unregulated hemp intoxicants.',
    notes:
      'Rhode Island requires higher-potency intoxicating hemp-derived cannabinoids to be sold through the licensed cannabis program. Since August 2024 a separate channel of roughly 120 licensed hemp retailers may sell low-dose hemp Delta-9 products (beverages up to 5 mg per serving). The Cannabis Control Commission (CCC) took over hemp oversight on June 29, 2025 and paused new hemp-retailer licenses in July 2025. Non-intoxicating CBD topicals and wellness products remain available in general retail.',
  },

  'south-carolina': {
    name: 'South Carolina',
    abbreviation: 'SC',
    slug: 'south-carolina',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'gray',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is contested in South Carolina. A 2021 Attorney General opinion concluded that Delta-8 is a controlled substance, and the December 2025 enforcement sweep known as Operation Ganjapreneur (roughly 15 tons seized, 12 people indicted) advanced the AG position that "if it gets you high, it is illegal." Products are still widely sold, but the legal status is a genuine gray area pending legislation.',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is legal in South Carolina when products contain no more than 0.3% THC by dry weight, in accordance with the state hemp program.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in South Carolina. The SC Department of Agriculture oversees the hemp program, and CBD products are widely available across the state.',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is not specifically addressed in South Carolina statute, but it carries real enforcement risk. The Attorney General treats high-THCA flower and products that convert to Delta-9 THC when heated as controlled substances, and they were among the targets of the December 2025 Operation Ganjapreneur seizures.',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC is contested in South Carolina. Like Delta-8, it falls under the Attorney General position that intoxicating hemp-derived cannabinoids are controlled substances, placing it in a legal gray area despite continued retail availability.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is contested in South Carolina. As an intoxicating hemp-derived isomer it is subject to the same Attorney General enforcement position as Delta-8, so it sits in a gray area rather than being clearly legal.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is not protected under the Farm Bill. Federal DEA guidance classifies it as a controlled substance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in South Carolina. Its legal status remains unclear and, like other intoxicating cannabinoids, exposed to the Attorney General enforcement position.',
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
      'South Carolina has no recreational cannabis program, and its Attorney General already treats intoxicating hemp-derived cannabinoids as contested. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that will eliminate the primary source of legal intoxicating THC products for consumers in the state, so the impact is high.',
    notes:
      'The SC Department of Agriculture administers the state hemp program, but the Attorney General (2021 opinion) and December 2025 Operation Ganjapreneur enforcement treat intoxicating hemp-derived cannabinoids as illegal, putting Delta-8 and similar products in a contested gray area. There is no statutory purchase-age minimum for hemp products; pending regulatory bills have not been enacted. Hemp-derived products are still widely sold in gas stations, convenience stores, and specialty retailers. South Carolina does not have a recreational cannabis program.',
  },

  'south-dakota': {
    name: 'South Dakota',
    abbreviation: 'SD',
    slug: 'south-dakota',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in South Dakota. HB 1125 (effective July 1, 2024) prohibits chemically modified or converted hemp cannabinoids, which covers CBD-derived Delta-8.',
        statute: 'HB 1125 (2024)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Naturally derived hemp Delta-9 THC products are legal in South Dakota when containing no more than 0.3% THC by dry weight. Only naturally occurring Delta-9 is permitted; chemically converted THC is banned under HB 1125.',
        statute: 'HB 1125 (2024)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is legal in South Dakota. Naturally derived hemp CBD products are available in retail stores across the state.',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is not specifically addressed in South Dakota law and, as a naturally occurring compound rather than a chemically modified cannabinoid, is not clearly captured by HB 1125. Its status is uncertain because THCA converts to Delta-9 THC when heated.',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in South Dakota as a chemically modified/converted cannabinoid under HB 1125 (2024).',
        statute: 'HB 1125 (2024)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in South Dakota as a chemically modified/converted cannabinoid prohibited by HB 1125 (2024).',
        statute: 'HB 1125 (2024)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in South Dakota as a synthetic, chemically modified cannabinoid under HB 1125, and it is not protected under the Farm Bill.',
        statute: 'HB 1125 (2024)',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned in South Dakota when chemically converted; as an intoxicating manufactured cannabinoid it falls under the HB 1125 prohibition on modified cannabinoids.',
        statute: 'HB 1125 (2024)',
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
    ageRestriction: 21,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'South Dakota already bans chemically converted cannabinoids such as Delta-8 under HB 1125 but still permits naturally derived hemp Delta-9 products. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that will significantly restrict the remaining naturally derived hemp THC market, so the impact is high.',
    notes:
      'South Dakota banned chemically modified and converted hemp cannabinoids (Delta-8, HHC, Delta-10, THC-O) under HB 1125, effective July 1, 2024, with enforcement sweeps since July 14, 2025. Naturally derived hemp Delta-9 and CBD products remain available, and THCA is unsettled. The state was one of the later adopters of hemp and had a contentious relationship with cannabis legalization.',
  },

  tennessee: {
    name: 'Tennessee',
    abbreviation: 'TN',
    slug: 'tennessee',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is restricted in Tennessee, not freely sold. Public Chapter 526 / HB 1376 (2025) moved hemp-derived cannabinoid products to the Alcoholic Beverage Commission (TABC) effective January 1, 2026: sales are limited to TABC-licensed retailers, in person only, with per-serving THC caps and a 21+ age requirement, and a total-THC standard that pushes many higher-potency Delta-8 products off the shelf. Some sources characterize the total-THC standard as an effective ban.',
        statute: 'Public Chapter 526 / HB 1376 (2025)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Compliant low-dose hemp-derived Delta-9 THC remains legal in Tennessee when products contain no more than 0.3% THC by dry weight, but sales now run through TABC-licensed retailers under per-serving caps set by Public Chapter 526 / HB 1376 (2025).',
        statute: 'Public Chapter 526 / HB 1376 (2025)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Tennessee. The state has a robust hemp industry and CBD products are available in virtually every retail category.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned in Tennessee. Public Chapter 526 / HB 1376 adopts a total-THC standard, so products whose THCA would push total THC above 0.3% after heating are prohibited; the THCA sales ban became final July 1, 2026, ending the high-THCA flower market.',
        statute: 'Public Chapter 526 / HB 1376 (2025)',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is restricted in Tennessee. As an intoxicating hemp-derived cannabinoid product it is subject to the same TABC licensing, in-person-only sales, and per-serving caps as Delta-8 under Public Chapter 526 / HB 1376 (2025).',
        statute: 'Public Chapter 526 / HB 1376 (2025)',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is restricted in Tennessee under the same TABC hemp-derived cannabinoid framework as Delta-8, with licensed in-person sales and per-serving THC caps under Public Chapter 526 / HB 1376 (2025).',
        statute: 'Public Chapter 526 / HB 1376 (2025)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Tennessee as a synthetic cannabinoid excluded from the hemp-derived cannabinoid product definition. It is not protected under the Farm Bill.',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned in Tennessee. Public Chapter 526 / HB 1376 prohibits synthetic cannabinoids and THCP derivatives outside the regulated hemp-derived cannabinoid product framework.',
        statute: 'Public Chapter 526 / HB 1376 (2025)',
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
    shippingIn: 'banned',
    shippingOut: 'banned',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Tennessee is one of the largest hemp markets in the country and has just moved intoxicating hemp products into a licensed, capped TABC regime. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that will further curtail the state\'s remaining hemp-derived THC market, so the economic impact is high.',
    notes:
      'Public Chapter 526 / HB 1376 (2025) replaced Tennessee\'s earlier hemp-cannabinoid statute, moving hemp-derived cannabinoid products to the Alcoholic Beverage Commission (TABC) effective January 1, 2026. Sales are TABC-licensed, in person only, with a 21+ age requirement and per-serving THC caps; online and direct-to-consumer shipping into and out of the state is prohibited. The THCA sales ban became final July 1, 2026, and THC-O and THCP remain banned.',
  },

  texas: {
    name: 'Texas',
    abbreviation: 'TX',
    slug: 'texas',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is being scheduled as a controlled substance in Texas. After the Texas Supreme Court cleared DSHS to act in Sky Marketing Corp. v. DSHS (May 1, 2026) and denied rehearing, DSHS reinstated its Schedule I listing on July 10, 2026, making Delta-8 (and other non-Delta-9 THC isomers) controlled substances effective July 31, 2026. Retail sales are ending as that date takes effect.',
        statute: 'HB 1325; DSHS Schedule I reinstatement (eff. July 31, 2026)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products remain legal in Texas when containing no more than 0.3% THC by dry weight under HB 1325, subject to a 21+ purchase age. Edibles, tinctures, and beverages are the primary compliant formats.',
        statute: 'HB 1325; 25 TAC §300.101',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Texas under HB 1325. CBD products are widely available in stores, pharmacies, and online throughout the state.',
        statute: 'HB 1325',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is effectively banned in Texas. The DSHS total-THC rule at 25 TAC §300.101 (effective March 31, 2026) counts THCA toward the 0.3% limit; after a temporary restraining order it was reinstated June 5, 2026 by the Fifteenth Court of Appeals, so high-THCA flower is prohibited (trial set for July 27, 2026).',
        statute: '25 TAC §300.101',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC is in a contested gray area in Texas. It is not named on the DSHS Schedule I list of THC isomers taking effect July 31, 2026, but regulators may treat it as a controlled or non-compliant hemp product, so its status is uncertain and likely to be restricted.',
        statute: 'HB 1325',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is being scheduled as a controlled substance in Texas alongside Delta-8. The DSHS Schedule I reinstatement (July 10, 2026) lists non-Delta-9 THC isomers, making Delta-10 a controlled substance effective July 31, 2026.',
        statute: 'HB 1325; DSHS Schedule I reinstatement (eff. July 31, 2026)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is not protected under the Farm Bill or Texas HB 1325. It is treated as a controlled substance.',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned in Texas. It is captured by the DSHS Schedule I reinstatement of non-Delta-9 tetrahydrocannabinols taking effect July 31, 2026.',
        statute: 'DSHS Schedule I reinstatement (eff. July 31, 2026)',
      },
    },
    productTypes: {
      gummies: 'legal',
      vapes: 'banned',
      flower: 'banned',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'legal',
    },
    ageRestriction: 21,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Texas has one of the largest hemp-derived cannabinoid markets in the country and no recreational cannabis program. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that, together with the DSHS Schedule I listing effective July 31, 2026, eliminates most of the legal intoxicating THC market for millions of Texans, so the impact is high.',
    notes:
      'Texas legalized hemp under HB 1325 in 2019. After SB 3 (a total-THC ban) was vetoed June 22, 2025, Executive Order GA-56 and TABC/DSHS rules set a 21+ age and banned hemp-derived vapes (SB 2024, effective September 1, 2025). The DSHS total-THC rule at 25 TAC §300.101 (reinstated June 5, 2026) bans high-THCA flower, and the DSHS Schedule I reinstatement (July 10, 2026) makes Delta-8, Delta-10, and THCP controlled substances effective July 31, 2026. Compliant hemp Delta-9 edibles, tinctures, and beverages plus CBD remain legal. Texas does not have a recreational cannabis program.',
  },

  utah: {
    name: 'Utah',
    abbreviation: 'UT',
    slug: 'utah',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Utah outside the medical cannabis program. HB 54 (2025, effective May 7, 2025) prohibits synthetic and chemically converted cannabinoids, which covers CBD-derived Delta-8.',
        statute: 'Utah Code tit. 4 ch. 41/41a; HB 54 (2025)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is restricted in Utah. Only UDAF-registered products meeting strict caps of no more than 5 mg per serving and 150 mg per package may be sold; anything above those limits is confined to the medical cannabis program.',
        statute: 'Utah Code tit. 4 ch. 41/41a; HB 54 (2025)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is legal in Utah. Non-intoxicating hemp-derived CBD products are available in retail stores, though Utah maintains stricter registration and labeling rules than many states.',
        statute: 'Utah Code tit. 4 ch. 41/41a',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned in Utah. HB 54 (2025) applies a total-THC standard and prohibits smokable hemp flower, so high-THCA products are not permitted outside the medical program.',
        statute: 'Utah Code tit. 4 ch. 41/41a; HB 54 (2025)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in Utah as a synthetic or chemically converted cannabinoid prohibited under HB 54 (2025).',
        statute: 'Utah Code tit. 4 ch. 41/41a; HB 54 (2025)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in Utah as a synthetic or chemically converted cannabinoid under HB 54 (2025).',
        statute: 'Utah Code tit. 4 ch. 41/41a; HB 54 (2025)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Utah as a synthetic cannabinoid. It is a controlled substance not protected by the Farm Bill.',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned in Utah as a synthetic or manufactured intoxicating cannabinoid prohibited under HB 54 (2025).',
        statute: 'Utah Code tit. 4 ch. 41/41a; HB 54 (2025)',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'banned',
      flower: 'banned',
      tinctures: 'restricted',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'low',
    federalChangeNote:
      'Utah already bans synthetic and converted cannabinoids and confines low-dose hemp Delta-9 to UDAF-registered products. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that aligns closely with Utah\'s existing restrictions, so the additional impact is low.',
    notes:
      'Utah regulates hemp-derived cannabinoids under Utah Code title 4, chapters 41 and 41a. HB 54 (2025, effective May 7, 2025) bans synthetic and converted cannabinoids, THCA, and smokable flower, with UDAF enforcement sweeps; only UDAF-registered low-dose Delta-9 (no more than 5 mg per serving, 150 mg per package) is sold outside the medical program. HB 509 (2025) added retailer licensing and a 5.3% tax effective January 1, 2026. Non-intoxicating CBD topicals remain widely available.',
  },

  vermont: {
    name: 'Vermont',
    abbreviation: 'VT',
    slug: 'vermont',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Vermont outside the licensed cannabis system. The Vermont Hemp Rules (2020) prohibit synthetic cannabinoids, and intoxicating hemp-derived products must go through regulated cannabis retailers.',
        statute: 'Vermont Hemp Rules (2020); Act 158 (2022)',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are banned in Vermont outside the licensed cannabis program. Intoxicating THC products must be sold through the regulated adult-use system.',
        statute: 'Vermont Hemp Rules (2020); Act 158 (2022)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'Non-intoxicating CBD products are legal in Vermont. CBD is widely available in retail stores and wellness shops throughout the state.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned in Vermont outside the licensed cannabis system, as intoxicating hemp-derived cannabinoids and products that convert to Delta-9 THC are prohibited in unregulated retail.',
        statute: 'Vermont Hemp Rules (2020); Act 158 (2022)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in Vermont under the Vermont Hemp Rules prohibition on synthetic and intoxicating hemp-derived cannabinoids outside the licensed cannabis program.',
        statute: 'Vermont Hemp Rules (2020); Act 158 (2022)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in Vermont outside the licensed cannabis system under the Vermont Hemp Rules (2020).',
        statute: 'Vermont Hemp Rules (2020); Act 158 (2022)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Vermont both as a synthetic cannabinoid under federal guidance and under the Vermont Hemp Rules prohibition on intoxicating hemp-derived products.',
        statute: 'Vermont Hemp Rules (2020); Act 158 (2022)',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned in Vermont as an intoxicating hemp-derived cannabinoid captured by the Vermont Hemp Rules prohibition outside the licensed cannabis program.',
        statute: 'Vermont Hemp Rules (2020); Act 158 (2022)',
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
    federalChangeImpact: 'low',
    federalChangeNote:
      'Vermont already bans intoxicating hemp-derived cannabinoids outside the licensed cannabis system. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that aligns with the state\'s existing policy, so the impact is low.',
    notes:
      'Vermont bans intoxicating hemp-derived cannabinoids outside the licensed cannabis program under the Vermont Hemp Rules (2020) and Act 158 (2022); the ban stems from the Hemp Rules synthetic-cannabinoid prohibition, not the cannabis tax-and-regulate act. S.278, signed June 18, 2026, moves hemp oversight to the Cannabis Control Board and will require CCB licensing for products containing at least 0.4 mg THC. Consumers seeking THC products must purchase through licensed adult-use dispensaries; non-intoxicating CBD remains available in general retail.',
  },

  virginia: {
    name: 'Virginia',
    abbreviation: 'VA',
    slug: 'virginia',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is effectively banned in Virginia. SB 903 (2023) is a restriction, not an authorization: it imposes a 0.3% total-THC limit, a 2 mg total-THC-per-package cap, and a synthetic-THC ban, which together prohibit typical intoxicating Delta-8 products at retail. The Fourth Circuit upheld the law in Northern Virginia Hemp v. Virginia (January 7, 2025).',
        statute: 'SB 903 (Virginia Hemp Act, 2023)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is restricted in Virginia. Under SB 903, a consumable hemp product may contain no more than 2 mg of total THC per package (a 25:1 CBD:THC exception is eliminated August 15, 2026), so only very-low-dose products qualify.',
        statute: 'SB 903 (2023)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is legal in Virginia. Non-intoxicating hemp-derived CBD products are widely available in retail stores, wellness shops, and online, subject to the SB 903 labeling and testing rules.',
        statute: 'SB 903 (2023)',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is effectively illegal at retail in Virginia. Because SB 903 measures total THC (including THCA) against a 0.3% and 2 mg-per-package cap, high-THCA flower and products cannot be sold as hemp.',
        statute: 'SB 903 (2023)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is effectively banned in Virginia under the SB 903 synthetic-THC prohibition and the 2 mg total-THC-per-package cap.',
        statute: 'SB 903 (2023)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is effectively banned in Virginia under the SB 903 synthetic-THC prohibition and the 2 mg total-THC-per-package cap.',
        statute: 'SB 903 (2023)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Virginia as a synthetic cannabinoid. It is prohibited under SB 903 and is not protected under the Farm Bill.',
        statute: 'SB 903 (2023)',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is effectively banned in Virginia. As an intoxicating synthetic-adjacent cannabinoid it is captured by the SB 903 synthetic-THC ban and the 2 mg total-THC-per-package cap.',
        statute: 'SB 903 (2023)',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'restricted',
      flower: 'banned',
      tinctures: 'restricted',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Virginia already restricts hemp-derived cannabinoids through SB 903\'s 2 mg total-THC-per-package cap and synthetic-THC ban, and is standing up an adult-use cannabis program. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that tightens the state\'s existing limits, so the additional impact is medium.',
    notes:
      'Virginia regulates hemp products under the Virginia Hemp Act (SB 903, 2023), which imposes a 0.3% total-THC limit and a 2 mg total-THC-per-package cap with a narrow 25:1 CBD:THC exception. The Fourth Circuit upheld the law (Northern Virginia Hemp v. Virginia, January 7, 2025). The 25:1 exception is eliminated August 15, 2026 (pending as of mid-July 2026), and hemp enforcement transfers from VDACS to the Cannabis Control Authority on July 1, 2026; adult-use retail is slated to launch July 1, 2027. Only very-low-dose compliant products remain at retail.',
  },

  washington: {
    name: 'Washington',
    abbreviation: 'WA',
    slug: 'washington',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Washington state outside the licensed cannabis system. SB 5367 prohibits the sale of intoxicating hemp-derived cannabinoids outside of regulated cannabis retailers.',
        statute: 'SB 5367',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are banned in Washington outside the licensed cannabis system under SB 5367. THC products must be purchased through licensed cannabis stores.',
        statute: 'SB 5367',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'Non-intoxicating CBD products are legal in Washington state, but CBD sold in general retail must contain zero detectable THC. Products with any measurable THC are confined to the licensed cannabis system.',
        statute: 'SB 5367',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned in Washington outside the licensed cannabis system under SB 5367, as it falls under the prohibition on intoxicating hemp-derived cannabinoids.',
        statute: 'SB 5367',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in Washington under SB 5367\'s prohibition on intoxicating hemp-derived cannabinoids outside the licensed cannabis program.',
        statute: 'SB 5367',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in Washington outside the licensed cannabis system under SB 5367.',
        statute: 'SB 5367',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Washington both as a synthetic cannabinoid under federal DEA guidance and under SB 5367\'s prohibition on intoxicating hemp-derived products.',
        statute: 'SB 5367',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned in Washington outside the licensed cannabis system. SB 5367\'s prohibition on intoxicating hemp-derived cannabinoids captures THCP.',
        statute: 'SB 5367',
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
    federalChangeImpact: 'low',
    federalChangeNote:
      'Washington already bans hemp-derived intoxicating cannabinoids outside its well-established licensed cannabis system. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that aligns with the state\'s policy, so the impact is low.',
    notes:
      'Washington was an early adopter of cannabis legalization and channels all intoxicating cannabinoid sales through its licensed system via SB 5367. Non-intoxicating CBD products remain available in general retail only if they contain zero detectable THC. The Washington State Liquor and Cannabis Board oversees enforcement.',
  },

  'west-virginia': {
    name: 'West Virginia',
    abbreviation: 'WV',
    slug: 'west-virginia',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is restricted, not freely legal, in West Virginia. SB 220 (2023), codified at W. Va. Code §19-12E-12, permits Delta-8 only under Department of Agriculture permits, with an 11% excise tax, testing, and a 21+ age requirement; unpermitted products are Schedule I under SB 546 (2023).',
        statute: 'SB 220 (2023) §19-12E-12; SB 546 (2023)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is restricted in West Virginia, sold only through the permitted channel established by SB 220 (2023) with testing, an 11% excise tax, and a 21+ age requirement.',
        statute: 'SB 220 (2023) §19-12E-12; SB 546 (2023)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is legal in West Virginia. Hemp-derived CBD products are widely available in retail stores throughout the state.',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is not clearly addressed in West Virginia law. Products are available but occupy a gray area due to the potential conversion to Delta-9 THC and the permit-based structure of the state hemp program.',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is restricted in West Virginia. SB 220 (2023) permits HHC only through licensed, permitted retailers under testing, tax, and age-21 requirements; unpermitted products are Schedule I under SB 546.',
        statute: 'SB 220 (2023) §19-12E-12; SB 546 (2023)',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is restricted in West Virginia and permitted only through the SB 220 (2023) licensed channel with testing, an 11% excise tax, and a 21+ age requirement.',
        statute: 'SB 220 (2023) §19-12E-12; SB 546 (2023)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in West Virginia. It is not among the cannabinoids permitted under SB 220, so it falls into the Schedule I category for unpermitted products under SB 546, and it is not protected under the Farm Bill.',
        statute: 'SB 546 (2023)',
      },
      thcp: {
        status: 'restricted',
        label: 'THCP',
        detail:
          'THCP is restricted in West Virginia. SB 220 (2023) permits THCP through the licensed, permitted channel under testing, tax, and age-21 requirements; unpermitted products are Schedule I under SB 546.',
        statute: 'SB 220 (2023) §19-12E-12; SB 546 (2023)',
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
    federalChangeImpact: 'high',
    federalChangeNote:
      'West Virginia permits hemp-derived cannabinoids only through a licensed, taxed channel and has no recreational cannabis program. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that will sharply curtail the permitted intoxicating hemp market, so the impact is high.',
    notes:
      'West Virginia regulates hemp-derived cannabinoids under SB 220 (2023), codified at W. Va. Code §19-12E-12, which permits Delta-8, Delta-10, HHC, THCP, THCV, and hemp Delta-9 through Department of Agriculture permits with an 11% excise tax, testing, and a 21+ age requirement; SB 546 (2023) makes unpermitted products Schedule I. SB 679 (2024) added ABCA retail enforcement, and an ABCA rule effective May 15, 2025 requires per-location permits and behind-the-counter placement. Out-of-state sellers shipping in need WV registration.',
  },

  wisconsin: {
    name: 'Wisconsin',
    abbreviation: 'WI',
    slug: 'wisconsin',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal but unregulated in Wisconsin. There is no state ban and no product-specific framework; hemp-derived cannabinoids are permitted under the state hemp program (2017 Wisconsin Act 100; 2019 Wisconsin Act 68, Wis. Stat. §94.55). Products are widely sold with no statewide age or potency rules.',
        statute: '2017 Act 100; 2019 Act 68 (Wis. Stat. §94.55)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is legal but unregulated in Wisconsin when products meet the 0.3% dry-weight hemp definition. The state hemp program legalizes hemp, but no specific rules govern intoxicating hemp-derived products.',
        statute: '2017 Act 100; 2019 Act 68 (Wis. Stat. §94.55)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is legal in Wisconsin. Hemp-derived CBD products are widely available in retail stores, pharmacies, and online under the state hemp program.',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is not specifically addressed in Wisconsin law. Products are available but the legal status remains uncertain alongside other novel hemp-derived cannabinoids.',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC exists in a gray area in Wisconsin. There is no specific ban and products are sold in the state, but no explicit authorization exists for this newer cannabinoid.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC exists in a gray area in Wisconsin. Products are available but not specifically regulated or authorized under state law.',
      },
      thco: {
        status: 'gray',
        label: 'THC-O',
        detail:
          'THC-O is in a gray area in Wisconsin. There is no state ban, and while the federal position on THC-O as a synthetic cannabinoid is contested, Wisconsin has not enacted its own prohibition.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Wisconsin. Its legal status is unclear, consistent with the state\'s overall lack of specific hemp-derived cannabinoid legislation.',
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
    federalChangeImpact: 'high',
    federalChangeNote:
      'Wisconsin\'s hemp cannabinoid market is legal but unregulated. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that will directly restrict the currently open Delta-8 and hemp Delta-9 market, so the impact is high.',
    notes:
      'Wisconsin has no specific legislation authorizing or banning Delta-8 and similar hemp-derived cannabinoids; products are legal but unregulated under the state hemp program (2017 Act 100; 2019 Act 68, Wis. Stat. §94.55). Regulatory bills SB 644 and SB 682/AB 747 died at the March 23, 2026 adjournment, leaving only local ordinances (such as in Milwaukee and Madison) and no statewide purchase-age minimum. Wisconsin does not have a recreational cannabis program.',
  },

  wyoming: {
    name: 'Wyoming',
    abbreviation: 'WY',
    slug: 'wyoming',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Wyoming. SF 32 / SEA 24 (2024, effective July 1, 2024) added naturally occurring and synthetic Delta-8 to Schedule I and moved the state to a total-THC standard. The Tenth Circuit upheld the ban in Green Room v. Wyoming (October 27, 2025).',
        statute: 'SF 32 / SEA 24 (2024)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is restricted in Wyoming. SF 32 / SEA 24 (2024) redefined hemp using a total-THC standard (counting all THC toward the 0.3% limit), so only genuinely compliant, non-intoxicating products remain lawful.',
        statute: 'SF 32 / SEA 24 (2024)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is legal in Wyoming. Non-intoxicating hemp-derived CBD products are available in retail stores throughout the state.',
        statute: 'Wyoming Hemp Act; SF 32 / SEA 24 (2024)',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned in Wyoming. Under the SF 32 / SEA 24 total-THC standard, high-THCA flower and products exceed the 0.3% limit once THCA is counted, so they are prohibited.',
        statute: 'SF 32 / SEA 24 (2024)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in Wyoming as a synthetic or psychoactive cannabinoid prohibited under SF 32 / SEA 24 (2024).',
        statute: 'SF 32 / SEA 24 (2024)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in Wyoming as a synthetic or psychoactive cannabinoid prohibited under SF 32 / SEA 24 (2024).',
        statute: 'SF 32 / SEA 24 (2024)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Wyoming as a synthetic cannabinoid prohibited under SF 32 / SEA 24 (2024), and it is not protected under the Farm Bill.',
        statute: 'SF 32 / SEA 24 (2024)',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned in Wyoming as a synthetic or psychoactive cannabinoid captured by the SF 32 / SEA 24 (2024) prohibition.',
        statute: 'SF 32 / SEA 24 (2024)',
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
      'Wyoming already bans synthetic and psychoactive hemp-derived cannabinoids under SF 32 / SEA 24 and applies a total-THC standard upheld by the Tenth Circuit. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, imposes a 0.4 mg total-THC-per-container cap that largely mirrors the state\'s existing prohibition, so the additional impact is low.',
    notes:
      'Wyoming banned synthetic and psychoactive hemp cannabinoids and adopted a total-THC standard under SF 32 / SEA 24 (2024, effective July 1, 2024), which the Tenth Circuit upheld in Green Room v. Wyoming (October 27, 2025). Intoxicating products and high-THCA flower are banned; only non-intoxicating CBD and topicals remain in general retail. A 2025 beverage carve-out bill failed introduction, and there is no statutory purchase-age minimum. Wyoming has no recreational or medical cannabis program.',
  },
};
