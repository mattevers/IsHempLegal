import { StateData } from '@/types/hemp';

export const statesAG: Record<string, StateData> = {
  /* ------------------------------------------------------------------ */
  /*  ALABAMA                                                           */
  /* ------------------------------------------------------------------ */
  alabama: {
    name: 'Alabama',
    abbreviation: 'AL',
    slug: 'alabama',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 edibles and tinctures are restricted to licensed hemp dispensaries under HB 445 Phase 2 (effective Jan 1, 2026): 10 mg total THC per serving, 40 mg per container, adults 21+. Smokable hemp (flower, pre-rolls) and vapes are banned. Online and direct-to-consumer sales into Alabama are prohibited.',
        statute: 'AL HB 445 (2025)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 products are limited to non-smokable form sold through ABC-licensed hemp dispensaries under HB 445 Phase 2, capped at 10 mg total THC per serving and 40 mg per container. Products must contain no more than 0.3% Delta-9 THC by dry weight.',
        statute: 'AL HB 445 (2025)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products are legal under Alabama industrial hemp law. Non-smokable CBD products widely available.',
        statute: 'Ala. Code § 2-8-380 et seq.',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA flower is banned under the smokable hemp ban (HB 445). Non-smokable THCA products are restricted to ABC-licensed hemp dispensaries under the HB 445 Phase 2 10 mg-per-serving cap.',
        statute: 'AL HB 445 (2025)',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'No specific legislation addressing HHC. Sold in some retail locations but legal status is uncertain.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'No specific statute addresses Delta-10. Available in some retail outlets in non-smokable form.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is federally illegal per DEA guidance. Not protected under the 2018 Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'No specific state or federal legislation addresses THCP. Legal status is undefined.',
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
    shippingIn: 'banned',
    shippingOut: 'restricted',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Section 781 of H.R. 5371 (the Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), signed Nov 12, 2025 and effective Nov 12, 2026, imposes a 0.4 mg total-THC-per-container cap that sits far below Alabama\'s HB 445 limit of 10 mg per serving. The enacted federal cap eliminates the edible, tincture, and beverage products HB 445 preserved, leaving Alabama\'s licensed hemp-dispensary channel with almost no compliant inventory.',
    notes:
      'HB 445 Phase 2 (effective Jan 1, 2026) restricts consumable hemp to ABC-licensed hemp dispensaries, caps products at 10 mg total THC per serving and 40 mg per container for adults 21+, and bans smokable flower, pre-rolls, and vapes. Grocery and convenience stores may sell hemp beverages only. Online and direct-to-consumer shipments into Alabama are prohibited. Mellow Fellow v. Ivey saw a TRO denied June 30, 2025 and enforcement raids are ongoing.',
  },

  /* ------------------------------------------------------------------ */
  /*  ALASKA                                                            */
  /* ------------------------------------------------------------------ */
  alaska: {
    name: 'Alaska',
    abbreviation: 'AK',
    slug: 'alaska',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Alaska has banned Delta-8 THC and all hemp-derived THC isomers. The state considers them controlled substances under its existing marijuana regulations.',
        statute: '3 AAC 306.990',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are banned outside the licensed cannabis system. Only state-licensed cannabis retailers may sell THC products.',
        statute: 'AS 17.38',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp with no more than 0.3% THC are legal and widely available.',
        statute: 'AS 03.05.076',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is treated as a THC precursor and banned in hemp products outside the licensed cannabis system.',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC and all hemp-derived intoxicating cannabinoid isomers are banned under Alaska regulations.',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 is banned along with all other hemp-derived THC isomers in Alaska.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is both federally illegal as a synthetic cannabinoid and banned under Alaska state law.',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is treated as a controlled THC analog and is banned in hemp products outside Alaska\'s licensed cannabis system.',
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
      'Alaska already bans hemp-derived intoxicants through its cannabis regulatory framework, a position a federal court upheld on May 29, 2025. Section 781 of H.R. 5371 (Pub. L. 119-37), effective Nov 12, 2026, adds a national 0.4 mg total-THC-per-container cap but changes little in practice because Alaska\'s existing prohibition already keeps these products out of general retail.',
    notes:
      'Alaska regulates all THC products through its licensed cannabis system (AMCO). Only non-intoxicating hemp products like CBD topicals and isolates are available outside licensed retailers.',
  },

  /* ------------------------------------------------------------------ */
  /*  ARIZONA                                                           */
  /* ------------------------------------------------------------------ */
  arizona: {
    name: 'Arizona',
    abbreviation: 'AZ',
    slug: 'arizona',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Attorney General Opinion I24-005 (2024) treats hemp-synthesized intoxicants including Delta-8 as Schedule I controlled substances outside the licensed dispensary system. Retail enforcement began April 24, 2025; products remain on some shelves but their legality is contested pending litigation.',
        statute: 'ARS § 3-311; AG Opinion I24-005',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'The AG\'s March 24, 2025 enforcement position extends to hemp-derived Delta-9 edibles, treating intoxicating hemp THC as restricted to the licensed cannabis system. Retail sale is contested and subject to enforcement.',
        statute: 'ARS § 3-311; AG Opinion I24-005',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'Non-intoxicating CBD is legal under the Arizona hemp program. Widely available in retail and online.',
        statute: 'ARS § 3-311',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'Under AG Opinion I24-005, THCA products that convert to intoxicating THC are treated as controlled substances outside the licensed cannabis system. Availability at general retail is contested.',
        statute: 'ARS § 3-311; AG Opinion I24-005',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is treated as a synthesized intoxicating cannabinoid under AG Opinion I24-005 and restricted to the licensed cannabis system. Retail legality is contested.',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 is treated as a hemp-synthesized intoxicant under AG Opinion I24-005 and restricted outside the licensed cannabis system.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is federally illegal per DEA guidance. Not protected under the Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'No specific legislation addresses THCP at the state or federal level. Legal status is undefined.',
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
      'Arizona\'s intoxicating-hemp market now rests on AG Opinion I24-005 and pending litigation rather than clear statutory protection. Section 781 of H.R. 5371 (Pub. L. 119-37), effective Nov 12, 2026, layers a federal 0.4 mg total-THC-per-container cap on top of state enforcement, removing the remaining retail path for Delta-8, Delta-9, and similar products and pushing any surviving market toward the licensed cannabis system.',
    notes:
      'Attorney General Opinion I24-005 (2024) declared hemp-synthesized intoxicants Schedule I; the enforcement position was extended to hemp Delta-9 edibles on March 24, 2025 and enforcement began April 24, 2025. A HITA preliminary injunction was denied June 25, 2025 (appeal pending), and the fix bill SB 1702 died. Products remain on some shelves, but treating them as fully "legal" is indefensible.',
  },

  /* ------------------------------------------------------------------ */
  /*  ARKANSAS                                                          */
  /* ------------------------------------------------------------------ */
  arkansas: {
    name: 'Arkansas',
    abbreviation: 'AR',
    slug: 'arkansas',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Arkansas. Act 629 (2023, SB 358) classifies Delta-8, Delta-10, and other converted hemp cannabinoids as Schedule VI controlled substances; the Eighth Circuit vacated the injunction on June 24, 2025 (Bio Gen v. Sanders) and the ban is enforced statewide.',
        statute: 'Ark. Act 629 (2023, SB 358); Act 934 (2025)',
      },
      delta9Hemp: {
        status: 'gray',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Act 629 (2023) and Act 934 (2025) ban intoxicating hemp-derived Delta-9 products and add a total-THC basis. Whether compliant sub-0.3%, low-total-THC Delta-9 edibles remain permissible is contested following the Eighth Circuit\'s June 24, 2025 ruling allowing enforcement, so the status is treated as an unresolved gray area.',
        statute: 'Ark. Act 629 (2023, SB 358); Act 934 (2025)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'Compliant CBD derived from hemp with no more than 0.3% Delta-9 THC by dry weight remains legal and widely sold across the state.',
        statute: 'ACA § 2-15-401 et seq.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned. Act 934 (2025) applies a total-THC basis that captures THCA flower and products, and the statewide ban has been enforced since the June 2025 Eighth Circuit ruling.',
        statute: 'Ark. Act 629 (2023, SB 358); Act 934 (2025)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned as a converted/synthesized hemp cannabinoid under Act 629 (2023) and Act 934 (2025).',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 is banned as a converted hemp cannabinoid classified Schedule VI under Act 629 (2023).',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is federally illegal per DEA guidance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'No specific legislation addresses THCP. Legal status is undefined at both state and federal levels.',
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
    federalChangeImpact: 'high',
    federalChangeNote:
      'Arkansas already prohibits intoxicating hemp-derived cannabinoids under Act 629 (2023) and Act 934 (2025), enforced statewide since the Eighth Circuit\'s June 24, 2025 ruling. Section 781 of H.R. 5371 (Pub. L. 119-37), effective Nov 12, 2026, adds a federal 0.4 mg total-THC-per-container cap that reinforces the existing state ban and forecloses any low-dose Delta-9 channel that remains contested under state law.',
    notes:
      'Act 629 (2023, SB 358) banned Delta-8, Delta-10, and other converted intoxicating hemp cannabinoids as Schedule VI substances; Act 934 (2025) added a total-THC basis and placed enforcement with the Arkansas Tobacco Control Board. The Eighth Circuit vacated the injunction on June 24, 2025 (Bio Gen v. Sanders), and thousands of products have been seized since. Non-intoxicating CBD remains legal.',
  },

  /* ------------------------------------------------------------------ */
  /*  CALIFORNIA                                                        */
  /* ------------------------------------------------------------------ */
  california: {
    name: 'California',
    abbreviation: 'CA',
    slug: 'california',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned from retail. AB 8 (signed Oct 2, 2025, effective Jan 1, 2026) made the September 2024 CDPH emergency regulations permanent, prohibiting any detectable THC in hemp products; only high-purity, THC-free isolate is allowed. Licensed-cannabis integration does not arrive until ~Jan 1, 2028.',
        statute: 'CA AB 8 (2025); AB 45 (2021); CDPH emergency regs',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 products with any detectable THC are banned from retail under AB 8 and the CDPH emergency regulations. There is no current general-retail channel; licensed-cannabis integration is not expected until ~Jan 1, 2028.',
        statute: 'CA AB 8 (2025); AB 45 (2021); CDPH emergency regs',
      },
      cbd: {
        status: 'restricted',
        label: 'CBD',
        detail:
          'Non-ingestible CBD topicals remain broadly legal. Ingestible full-spectrum and broad-spectrum CBD with any detectable THC is banned under AB 8 and the CDPH regulations; only THC-free isolate products are permitted at retail.',
        statute: 'CA AB 8 (2025); AB 45 (2021)',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA products are banned from retail. AB 8 and the CDPH regulations prohibit detectable THC, and THCA converts to intoxicating THC when heated.',
        statute: 'CA AB 8 (2025); AB 45 (2021); CDPH emergency regs',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned from retail as an intoxicating hemp derivative under AB 8 and the CDPH emergency regulations.',
        statute: 'CA AB 8 (2025); AB 45 (2021)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 is banned from retail alongside other intoxicating hemp-derived cannabinoids under AB 8 and the CDPH emergency regulations.',
        statute: 'CA AB 8 (2025); AB 45 (2021)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is federally illegal per DEA guidance. Also prohibited under California cannabis regulations.',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned from retail. As an intoxicating THC homolog, it falls under AB 8\'s no-detectable-THC standard, which superseded AB 45 and prohibits any hemp product with detectable THC, including THCP.',
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
      'California\'s AB 8 (2025) and the CDPH emergency regulations already bar detectable-THC hemp products from retail, allowing only high-purity THC-free isolate. Section 781 of H.R. 5371 (Pub. L. 119-37), effective Nov 12, 2026, adds a national 0.4 mg total-THC-per-container cap that aligns with California\'s stricter no-detectable-THC standard, so the federal change adds little beyond what state law already imposes.',
    notes:
      'AB 8 (signed Oct 2, 2025, effective Jan 1, 2026) made the September 2024 CDPH emergency regulations permanent: hemp foods, beverages, and inhalables may contain no detectable THC, and all hemp flower, pre-rolls, and inhalables are banned from retail. Only >99% pure THC-free isolate products qualify. Integration into the licensed cannabis market is not expected until roughly Jan 1, 2028. Non-intoxicating CBD topicals remain legal.',
  },

  /* ------------------------------------------------------------------ */
  /*  COLORADO                                                          */
  /* ------------------------------------------------------------------ */
  colorado: {
    name: 'Colorado',
    abbreviation: 'CO',
    slug: 'colorado',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'SB 22-205 banned chemically modified or converted hemp cannabinoids including Delta-8 in retail hemp products. Only available through the licensed cannabis system.',
        statute: 'CO SB 22-205; SB 23-271; C.R.S. § 25-5-427',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Naturally derived hemp Delta-9 is legal only through a narrow low-dose channel of no more than 1.75 mg total THC per serving; hemp beverages within that limit are sold in liquor stores. Higher-dose products are restricted to the licensed cannabis retail system.',
        statute: 'CO SB 22-205; SB 23-271; C.R.S. § 25-5-427; 6 CCR 1010-24',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal and widely available. Colorado\'s industrial hemp program is one of the oldest in the nation.',
        statute: 'CRS § 35-61-101 et seq.',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA products are restricted under SB 22-205 as they convert to THC when heated. Treated as intoxicating cannabinoids.',
        statute: 'CO SB 22-205',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in retail hemp products as a chemically modified cannabinoid under SB 22-205.',
        statute: 'CO SB 22-205',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 is banned in retail hemp products as a chemically converted cannabinoid under SB 22-205.',
        statute: 'CO SB 22-205',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is both federally illegal as a synthetic and banned under Colorado SB 22-205.',
        statute: 'CO SB 22-205',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'No specific legislation addresses THCP. Likely subject to SB 22-205 restrictions as an intoxicating cannabinoid.',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'banned',
      flower: 'restricted',
      tinctures: 'restricted',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'banned',
    shippingOut: 'banned',
    federalChangeImpact: 'low',
    federalChangeNote:
      'Colorado routes intoxicating hemp cannabinoids through its licensed cannabis system while permitting a narrow low-dose channel (no more than 1.75 mg per serving). Section 781 of H.R. 5371 (Pub. L. 119-37), effective Nov 12, 2026, sets a federal 0.4 mg total-THC-per-container cap that is tighter than Colorado\'s low-dose allowance and will compress that general-retail channel, though the state\'s core dispensary framework is largely unaffected.',
    notes:
      'SB 22-205, SB 23-271, C.R.S. § 25-5-427, and 6 CCR 1010-24 govern hemp cannabinoids. Chemically modified cannabinoids (Delta-8, HHC, Delta-10) are banned in retail hemp products, but a low-dose channel of up to 1.75 mg total THC per serving permits some edibles, tinctures, and hemp beverages (the latter in liquor stores). SB 26-164, which would have raised the beverage limit to 10 mg, was pulled in April 2026. Non-intoxicating CBD remains legal.',
  },

  /* ------------------------------------------------------------------ */
  /*  CONNECTICUT                                                       */
  /* ------------------------------------------------------------------ */
  connecticut: {
    name: 'Connecticut',
    abbreviation: 'CT',
    slug: 'connecticut',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC products are regulated through Connecticut\'s adult-use cannabis program. High-THC products must be sold through licensed cannabis retailers only.',
        statute: 'CT PA 21-1; PA 23-56; PA 24-76; PA 25-101',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'High-THC hemp Delta-9 products are restricted to licensed cannabis retail. Since Jan 1, 2025, PA 24-76 permits moderate-THC products (0.5 to 5 mg per container) through DCP-registered non-cannabis vendors, and hemp-derived THC beverages are sold in package stores.',
        statute: 'CT PA 21-1; PA 23-56; PA 24-76; PA 25-101',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp are legal and available in retail locations statewide. Subject to labeling and testing requirements.',
        statute: 'CGS §§ 22-61l, 22-61m',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA products are regulated as intoxicating cannabinoids under the cannabis program. Restricted to licensed retail.',
        statute: 'CT PA 21-1',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is regulated as an intoxicating hemp-derived cannabinoid. Must be sold through licensed cannabis retailers.',
        statute: 'CT PA 21-1',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 falls under the same cannabis program restrictions as other intoxicating hemp cannabinoids.',
        statute: 'CT PA 21-1',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is federally illegal per DEA guidance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'No specific legislation addresses THCP. Likely subject to regulation as an intoxicating cannabinoid under CT PA 21-1.',
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
      'Connecticut channels most intoxicating hemp THC through its cannabis program while allowing a moderate-THC vendor channel (0.5 to 5 mg per container) and package-store beverages. Section 781 of H.R. 5371 (Pub. L. 119-37), effective Nov 12, 2026, imposes a federal 0.4 mg total-THC-per-container cap below Connecticut\'s 0.5 to 5 mg range, tightening the non-cannabis retail channel while the licensed program continues under state law.',
    notes:
      'Connecticut integrates high-THC hemp products into its adult-use cannabis system (PA 21-1). PA 23-56, PA 24-76, and PA 25-101 opened a moderate-THC channel: since Jan 1, 2025, DCP-registered non-cannabis vendors may sell products of 0.5 to 5 mg per container, and hemp-derived THC beverages are sold through package stores. Non-intoxicating CBD and topicals remain broadly available.',
  },

  /* ------------------------------------------------------------------ */
  /*  DELAWARE                                                          */
  /* ------------------------------------------------------------------ */
  delaware: {
    name: 'Delaware',
    abbreviation: 'DE',
    slug: 'delaware',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delaware has banned Delta-8 THC and all synthetic or chemically derived cannabinoids. The state treats these as controlled substance analogs.',
        statute: 'Del. Code tit. 16 § 4701 et seq.',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are banned outside the state medical cannabis program. Delaware does not permit retail sale of intoxicating hemp products.',
        statute: '16 Del. C. § 4714',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp with no more than 0.3% THC are legal and available throughout the state.',
        statute: 'Del. Code tit. 3 § 2800 et seq.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA products are effectively banned as Delaware prohibits intoxicating hemp-derived cannabinoids.',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned as a synthetic or chemically derived cannabinoid under Delaware law.',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 is banned along with other chemically derived cannabinoids.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is both federally illegal as a synthetic cannabinoid and banned under Delaware state law.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'No specific legislation addresses THCP, but it is likely to be classified as a banned intoxicating cannabinoid under Delaware law.',
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
      'Delaware already bans intoxicating hemp-derived THC outside its medical cannabis program. Section 781 of H.R. 5371 (Pub. L. 119-37), effective Nov 12, 2026, adds a national 0.4 mg total-THC-per-container cap with little practical effect on Delaware\'s already-restrictive market. A pending beverage bill (HB 373) awaiting the governor\'s signature could open a narrow low-dose channel, but any such products must still reconcile with the federal per-container cap.',
    notes:
      'Delaware takes a strict approach to hemp-derived cannabinoids. Only non-intoxicating CBD products are permitted outside the medical cannabis program; Delta-8 and all synthetic cannabinoids are explicitly banned. HB 373, a bill regulating THC-infused beverages (no more than 10 mg per container, sold through package stores, 21+), passed both chambers in early July 2026 and is pending governor signature as of July 18, 2026; beverages remain banned until it is signed.',
  },

  /* ------------------------------------------------------------------ */
  /*  FLORIDA                                                           */
  /* ------------------------------------------------------------------ */
  florida: {
    name: 'Florida',
    abbreviation: 'FL',
    slug: 'florida',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is broadly legal and widely sold throughout Florida under FSA § 581.217 as amended by SB 1676 (2023), with FDACS rules setting testing and labeling requirements. Multiple legislative attempts to ban Delta-8 have failed (SB 438 died in 2025; SB 1270 died in committee in 2026).',
        statute: 'FSA § 581.217; SB 1676 (2023); FDACS Rule 5K-4.034',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal when containing no more than 0.3% Delta-9 THC by dry weight. Widely available across the state.',
        statute: 'FSA § 581.217',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal under Florida\'s hemp program. One of the largest CBD markets in the country.',
        statute: 'FSA § 581.217',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA is restricted. FDACS Rule 5K-4.034 applies a total Delta-9 formula (Delta-9 + 0.877 x THCA), strictly enforced since June 16, 2025, so high-THCA flower and products exceed the 0.3% limit and are not permitted at retail.',
        statute: 'FSA § 581.217; FDACS Rule 5K-4.034',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal as a hemp-derived cannabinoid. Sold alongside Delta-8 in retail locations statewide.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 is legal as a hemp-derived cannabinoid in Florida. Available in many retail outlets.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is federally illegal per DEA guidance. Not protected under the Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'No specific legislation addresses THCP at the state or federal level. Legal status is undefined.',
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
      'Florida hosts one of the largest hemp-derived cannabinoid markets in the country, operating under FSA § 581.217 as amended by SB 1676 (2023) and FDACS Rule 5K-4.034. Section 781 of H.R. 5371 (Pub. L. 119-37), effective Nov 12, 2026, imposes a federal 0.4 mg total-THC-per-container cap far below the doses in Florida\'s edibles and beverages, threatening a large share of the state\'s retail industry.',
    notes:
      'Florida regulates hemp under FSA § 581.217 (amended by SB 1676, 2023) and FDACS rules; a 2024 hemp-regulation bill was vetoed on June 7, 2024. FDACS Rule 5K-4.034 enforces a total Delta-9 standard (Delta-9 + 0.877 x THCA) as of June 16, 2025, restricting high-THCA products. Bills to ban Delta-8 (SB 438 in 2025, SB 1270 in 2026) failed, so Delta-8 remains legal.',
  },

  /* ------------------------------------------------------------------ */
  /*  GEORGIA                                                           */
  /* ------------------------------------------------------------------ */
  georgia: {
    name: 'Georgia',
    abbreviation: 'GA',
    slug: 'georgia',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is restricted under SB 494 (2024, effective Oct 1, 2024): sales are limited to licensed retailers, buyers must be 21+, and products are capped at 10 mg total THC per serving and 300 mg per container. Most hemp-infused foods are banned, though gummies are excepted.',
        statute: 'OCGA § 2-23-1 et seq.; SB 494 (2024); SB 33 (2026)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal when containing no more than 0.3% Delta-9 THC by dry weight under the Georgia Hemp Farming Act.',
        statute: 'OCGA § 2-23-1 et seq.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal under the Georgia Hemp Farming Act. Widely available in retail and online.',
        statute: 'OCGA § 2-23-1 et seq.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned. SB 494 (2024) adopts a total-THC standard that captures THCA and, together with the OCGA § 2-23-4 retail hemp-flower ban, removes THCA flower and pre-rolls from the market.',
        statute: 'OCGA § 2-23-1 et seq.; SB 494 (2024)',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC is in transition. SB 33 (2026, effective May 11, 2026) targets non-natural / synthesized cannabinoids such as HHC for a phase-out, with full elimination scheduled by 2027; until then its status is an unsettled gray area.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'No specific statute addresses Delta-10 in Georgia. Generally available as a hemp derivative but regulatory status is uncertain.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is federally illegal per DEA guidance. Not protected under the Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'No specific legislation addresses THCP at the state or federal level. Legal status is undefined.',
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
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Georgia\'s hemp market now operates under SB 494 (2024) and SB 33 (2026), which impose a total-THC standard, ban retail hemp flower, and cap servings. Section 781 of H.R. 5371 (Pub. L. 119-37), effective Nov 12, 2026, adds a federal 0.4 mg total-THC-per-container cap far below Georgia\'s 300 mg-per-container limit, removing most licensed hemp products from shelves in a state with no adult-use cannabis alternative.',
    notes:
      'SB 494 (2024, effective Oct 1, 2024) imposes a total-THC standard, bans retail hemp flower and pre-rolls (OCGA § 2-23-4), limits sales to licensed retailers for buyers 21+, and caps products at 10 mg per serving and 300 mg per container, with hemp beverages limited to 10 mg per 12 oz. SB 33 (2026, effective May 11, 2026) targets synthesized cannabinoids such as HHC with a phase-out toward 2027. Georgia has no licensed adult-use cannabis system.',
  },
};
