import { StateData } from '@/types/hemp';

export const statesHM: Record<string, StateData> = {
  /* ------------------------------------------------------------------ */
  /*  HAWAII                                                            */
  /* ------------------------------------------------------------------ */
  hawaii: {
    name: 'Hawaii',
    abbreviation: 'HI',
    slug: 'hawaii',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Hawaii. The Department of Health prohibits all artificially (synthetically) derived cannabinoids, and delta-8 is expressly named among them.',
        statute: 'HRS ch. 328G; HAR 11-37',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC is allowed only in ingestible products within Hawaii\'s caps of 1 mg total THC per serving and 5 mg per container (beverages 0.5 mg per serving). Inhalable and smokable forms are prohibited.',
        statute: 'HRS ch. 328G; HAR 11-37',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp are legal in Hawaii, including in food and supplement form, subject to Department of Health rules.',
        statute: 'HRS ch. 328G; HAR 11-37',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is not separately restricted as a compound in Hawaii, but smokable hemp flower is prohibited, so there is no inhalable retail path.',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in Hawaii. It is expressly listed among the artificially derived cannabinoids prohibited under Department of Health rules (HAR 11-37).',
        statute: 'HRS ch. 328G; HAR 11-37',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in Hawaii as an artificially derived cannabinoid under Department of Health rules.',
        statute: 'HRS ch. 328G; HAR 11-37',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is prohibited in Hawaii as an artificially derived cannabinoid, and it is also excluded from hemp at the federal level as a synthetic compound.',
        statute: 'HRS ch. 328G; HAR 11-37',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned in Hawaii. It is expressly listed among the artificially derived cannabinoids prohibited under Department of Health rules (HRS ch. 328G; HAR 11-37).',
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
    shippingOut: 'legal',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Hawaii already bans artificially derived cannabinoids and caps ingestible delta-9 at 1 mg per serving and 5 mg per container, so the federal rider tightens an already-restrictive framework; impact is moderate because the state\'s few compliant products (5 mg containers) still exceed the federal 0.4 mg cap.',
    notes:
      'Hawaii\'s Department of Health (HRS ch. 328G; HAR 11-37) prohibits all artificially derived cannabinoids — delta-8, delta-10, THC-O, THCP, and HHC are expressly banned — and bars inhalable and smokable hemp products. Ingestible hemp-derived delta-9 is capped at 1 mg THC per serving and 5 mg per container (beverages 0.5 mg per serving). Retailers and distributors must register with the state, a requirement in effect since January 2026.',
  },

  /* ------------------------------------------------------------------ */
  /*  IDAHO                                                             */
  /* ------------------------------------------------------------------ */
  idaho: {
    name: 'Idaho',
    abbreviation: 'ID',
    slug: 'idaho',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Idaho bans all forms of THC including hemp-derived delta-8. Idaho law defines any amount of THC as a controlled substance with no exemption for hemp-derived isomers.',
        statute: 'Idaho Code 37-2701(t)',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Idaho does not recognize the 0.3% THC threshold from the federal Farm Bill. Any detectable THC renders a product illegal.',
        statute: 'Idaho Code 37-2701(t)',
      },
      cbd: {
        status: 'restricted',
        label: 'CBD',
        detail:
          'CBD is legal in Idaho ONLY if it contains absolutely 0.0% THC. Products must be derived from mature hemp stalks or seeds and contain no THC whatsoever. HB 879 (2026, effective July 1, 2026) updated the state industrial hemp program (Idaho Code §22-1701 et seq.).',
        statute: 'Idaho Code 37-2701(t); HB 879 (2026); Idaho Code §22-1701 et seq.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned in Idaho. Since THCA readily converts to THC when heated, Idaho treats it as a controlled substance.',
        statute: 'Idaho Code 37-2701(t)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is effectively banned in Idaho under the state\'s broad prohibition on THC and its analogs.',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned under Idaho\'s zero-tolerance THC policy. All THC isomers are treated as controlled substances.',
        statute: 'Idaho Code 37-2701(t)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Idaho both under state law prohibiting all THC and under the federal classification of THC-O as synthetic.',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is effectively banned in Idaho under the state\'s blanket prohibition on all THC compounds.',
      },
    },
    productTypes: {
      gummies: 'banned',
      vapes: 'banned',
      flower: 'banned',
      tinctures: 'restricted',
      topicals: 'restricted',
      beverages: 'banned',
    },
    ageRestriction: null,
    shippingIn: 'banned',
    shippingOut: 'banned',
    federalChangeImpact: 'low',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Idaho already applies a zero-THC controlled-substances definition independent of federal hemp law, so the federal rider has little practical effect; the state bans essentially all hemp-derived THC regardless of the 0.4 mg cap. Impact is low.',
    notes:
      'Idaho is one of the strictest states for hemp-derived products. Only CBD products with absolutely zero THC are permitted. HB 879 (2026, effective July 1, 2026) updated the industrial hemp program (Idaho Code §22-1701 et seq.), but Idaho\'s zero-THC controlled-substances definition (Idaho Code 37-2701(t)) remains in force. Idaho sets no statutory hemp age minimum. Tinctures and topicals are marked restricted because only 0% THC CBD-only products in those forms may be sold. Possessing any THC product, even hemp-derived, can result in criminal charges.',
  },

  /* ------------------------------------------------------------------ */
  /*  ILLINOIS                                                          */
  /* ------------------------------------------------------------------ */
  illinois: {
    name: 'Illinois',
    abbreviation: 'IL',
    slug: 'illinois',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is currently sold at general retail in Illinois as an unregulated intoxicating hemp product, restricted to adults 21 and older under SB 3222 (signed June 12, 2026). Effective November 12, 2026, SB 3222 reclassifies intoxicating hemp as cannabis, moving these products into licensed dispensaries.',
        statute: 'SB 3222 (2026); 505 ILCS 89 (Industrial Hemp Act)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products are legal and sold at general retail (21+) as an unregulated market until SB 3222 reclassifies intoxicating hemp as cannabis on November 12, 2026.',
        statute: 'SB 3222 (2026); 505 ILCS 89 (Industrial Hemp Act)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD derived from hemp is legal and widely available in Illinois. After November 12, 2026, only non-intoxicating CBD products under 0.4 mg total THC per container remain outside licensed dispensaries under SB 3222.',
        statute: 'Illinois Industrial Hemp Act (505 ILCS 89)',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA hemp flower is currently sold unregulated at general retail (21+). Under SB 3222 it is reclassified as cannabis and moves to licensed dispensaries on November 12, 2026.',
        statute: 'SB 3222 (2026)',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is currently sold at general retail as an unregulated intoxicating hemp product (21+). SB 3222 reclassifies it as cannabis effective November 12, 2026.',
        statute: 'SB 3222 (2026)',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is currently sold at general retail as an unregulated intoxicating hemp product (21+), and is reclassified as cannabis under SB 3222 on November 12, 2026.',
        statute: 'SB 3222 (2026)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal federally. It is not permitted for sale in Illinois.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Illinois; its retail status is unsettled, and SB 3222 will bring intoxicating hemp cannabinoids under the cannabis framework from November 12, 2026.',
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
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Illinois\'s currently unregulated intoxicating hemp market is large, and the federal cap coincides with SB 3222\'s own November 12, 2026 reclassification of these products as cannabis; together they remove intoxicating hemp from general retail, a high-impact change for Illinois consumers and retailers.',
    notes:
      'Illinois legalized adult-use cannabis in 2020. Intoxicating hemp-derived cannabinoids (delta-8, delta-9, THCA, HHC, delta-10) remained unregulated at general retail until SB 3222 (signed June 12, 2026), which immediately restricted sales to adults 21+. Effective November 12, 2026, SB 3222 reclassifies intoxicating hemp as cannabis under the Cannabis Regulation and Tax Act — after that date only non-intoxicating CBD products under 0.4 mg total THC per container may be sold outside licensed dispensaries. Chicago\'s proposed local ban was vetoed by Mayor Johnson in February 2026.',
  },

  /* ------------------------------------------------------------------ */
  /*  INDIANA                                                           */
  /* ------------------------------------------------------------------ */
  indiana: {
    name: 'Indiana',
    abbreviation: 'IN',
    slug: 'indiana',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is widely sold in Indiana, but its legality is contested. SEA 516 regulates hemp products but does not explicitly authorize delta-8, and a non-binding Indiana Attorney General opinion (AG Opinion 2023-1) treats delta-8 as a Schedule I controlled substance. Products remain broadly available pending legislative clarity.',
        statute: 'SEA 516; IC 15-15-13',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products within the 0.3% dry-weight limit are legal in Indiana under state hemp regulations.',
        statute: 'SEA 516; IC 15-15-13',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Indiana. The state was an early adopter of CBD-friendly legislation and products are available at a wide range of retail locations.',
        statute: 'IC 15-15-13',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is not specifically restricted as a compound in Indiana, but smokable THCA hemp flower is banned under the state\'s smokable-hemp prohibition (IC 35-48-4-10.1), so there is no legal inhalable flower path.',
        statute: 'IC 35-48-4-10.1',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal in Indiana. The state has not enacted any restrictions on hemp-derived hydrogenated cannabinoids.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Indiana under the state\'s permissive hemp framework. Products are available in retail stores.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid classified as illegal at the federal level. It is not protected as a hemp product under the Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Indiana. Its legal status is undetermined.',
      },
    },
    productTypes: {
      gummies: 'legal',
      vapes: 'gray',
      flower: 'banned',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'legal',
    },
    ageRestriction: null,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Indiana\'s large, loosely regulated hemp market depends on the federal Farm Bill definition, so the cap and the exclusion of artificially derived cannabinoids remove most delta-8 and edible products from retail — a high-impact change for the state.',
    notes:
      'Indiana broadly permits hemp-derived cannabinoids, but with real limits. Smokable hemp flower is banned under IC 35-48-4-10.1 (in effect since 2019), which also reaches high-THCA flower, and vape legality is unsettled. Delta-8\'s status is contested: Attorney General Opinion 2023-1 (non-binding) treats it as a controlled substance, though products remain widely sold. Indiana sets no statutory hemp age minimum. Reform bills SB 478 (2025) and SB 250 (2026) both failed.',
  },

  /* ------------------------------------------------------------------ */
  /*  IOWA                                                              */
  /* ------------------------------------------------------------------ */
  iowa: {
    name: 'Iowa',
    abbreviation: 'IA',
    slug: 'iowa',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Iowa\'s Hemp Act (HF 2605, 2024) permits consumable hemp delta-8 within caps of 4 mg total THC per serving and 10 mg per container, for adults 21+. Products exceeding the caps, and all inhalable forms, are prohibited.',
        statute: 'HF 2605 (2024); Iowa Code ch. 204',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC is legal in Iowa within HF 2605\'s caps of 4 mg total THC per serving and 10 mg per container (21+). Low-dose edibles and THC beverages are sold at general retail.',
        statute: 'HF 2605 (2024); Iowa Code ch. 204',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp are legal in Iowa provided they comply with state labeling and testing requirements under the Iowa Hemp Act.',
        statute: 'HF 2605 (2024); Iowa Code ch. 204',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is effectively banned in Iowa: smokable hemp flower is prohibited under Iowa Code §204.14A, and HF 2605\'s total-THC accounting captures THCA in consumable products that exceed the caps.',
        statute: 'HF 2605 (2024); Iowa Code §204.14A',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is not permitted in Iowa\'s regulated low-dose hemp market; as an artificially derived cannabinoid it falls outside the consumable products authorized under HF 2605.',
        statute: 'HF 2605 (2024); Iowa Code ch. 204',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is not among the cannabinoids Iowa authorizes for consumable hemp products, and inhalable forms are prohibited under Iowa Code §204.14A.',
        statute: 'HF 2605 (2024); Iowa Code §204.14A',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Iowa as a synthetic cannabinoid; it is excluded from hemp at the federal level and is not permitted under HF 2605.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific mention in Iowa\'s HF 2605; because the law applies total-THC caps, high-potency THCP products readily exceed the limits.',
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
    shippingOut: 'banned',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Iowa\'s legal low-dose products (4 mg total THC per serving) run about ten times the federal 0.4 mg per-container cap, so the enacted rider removes Iowa\'s compliant edible and beverage market from general retail — a high-impact change despite the state\'s existing caps.',
    notes:
      'Iowa\'s Hemp Act (HF 2605, 2024; Iowa Code ch. 204) regulates rather than bans consumable hemp: delta-8 and delta-9 products are legal for adults 21+ within caps of 4 mg total THC per serving and 10 mg per container, and low-dose edibles and THC beverages are sold at general retail. Smokable hemp flower and inhalable/vape products remain prohibited under Iowa Code §204.14A. (An earlier draft of this entry cited a dead 2018 bill rather than the operative Hemp Act.) Iowa also has a limited medical cannabidiol program.',
  },

  /* ------------------------------------------------------------------ */
  /*  KANSAS                                                            */
  /* ------------------------------------------------------------------ */
  kansas: {
    name: 'Kansas',
    abbreviation: 'KS',
    slug: 'kansas',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'gray',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is contested in Kansas. Attorney General Opinion 2021-14 concludes delta-8 is a Schedule I controlled substance unless it contains no more than 0.3% total THC — a bar most delta-8 products fail. Products are still sold, but their legal status is unsettled.',
        statute: 'SB 263 (Kansas Commercial Industrial Hemp Act); AG Opinion 2021-14',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products within the 0.3% limit are legal in Kansas under the state hemp program.',
        statute: 'SB 263',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is fully legal in Kansas. The state\'s hemp program aligns with the federal Farm Bill framework.',
        statute: 'SB 263; K.S.A. 2-3901 et seq.',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is in a gray area in Kansas. Because Attorney General Opinion 2021-14 applies a total-THC standard, high-THCA hemp is likely a controlled substance, and hemp products intended for smoking are separately barred.',
        statute: 'K.S.A. 2-3901(b)(5); AG Opinion 2021-14',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC is not specifically addressed in Kansas law. It occupies a legal gray area due to lack of explicit regulation.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is contested in Kansas. It is a CBD-converted isomer analytically identical in relevant respects to delta-8, so Attorney General Opinion 2021-14\'s total-THC standard applies equally: delta-10 is a Schedule I controlled substance unless it contains no more than 0.3% total THC — a bar most delta-10 products fail.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal at the federal level. It is not protected as a hemp derivative.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Kansas. Its legal status remains undetermined.',
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
    ageRestriction: null,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Kansas relies entirely on the federal Farm Bill definition for its hemp market; the cap and the exclusion of artificially derived cannabinoids sharply narrow the compliant products available in a state with no cannabis program — a high-impact change.',
    notes:
      'Kansas has no adult-use or comprehensive medical cannabis program, so hemp is the main access point for cannabinoid products — but the market is more restricted than it appears. Attorney General Opinion 2021-14 treats delta-8 as a Schedule I controlled substance unless it contains no more than 0.3% total THC, and K.S.A. 2-3901(b)(5) bans hemp cigarettes and products intended for smoking or vaping outright. Compliant hemp products at or below 0.3% total THC remain legal. Kansas sets no statutory hemp age minimum (SB 292 remained in committee).',
  },

  /* ------------------------------------------------------------------ */
  /*  KENTUCKY                                                          */
  /* ------------------------------------------------------------------ */
  kentucky: {
    name: 'Kentucky',
    abbreviation: 'KY',
    slug: 'kentucky',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal for adults 21+ in Kentucky. HB 544 established a regulatory framework for hemp-derived cannabinoid products. Kentucky has a strong hemp farming tradition and a permissive market for hemp-derived products.',
        statute: 'HB 544',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products within the 0.3% dry-weight limit are legal in Kentucky (21+). Hemp beverages are more tightly controlled: SB 202 (2025) caps them at 5 mg THC per 12 oz serving, places them under Alcoholic Beverage Control (ABC) oversight, and since June 1, 2025 restricts sales to alcohol-licensed retailers; HB 775 (2025) added spirits-level excise taxes and licensing.',
        statute: 'HB 544; SB 202 (2025); HB 775 (2025); KRS 260.850-260.869',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Kentucky. The state was a pioneer in hemp cultivation and has a robust CBD market. Products are available at retail locations statewide.',
        statute: 'KRS 260.850-260.869',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is not specifically restricted in Kentucky. Products meeting federal hemp definitions are sold in the state.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is not prohibited in Kentucky. Hemp-derived hydrogenated cannabinoids are available at retail.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Kentucky and available alongside other hemp-derived cannabinoid products.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal at the federal level. It is not protected under the Farm Bill hemp exemption.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Kentucky. Its legal status is undetermined.',
      },
    },
    productTypes: {
      gummies: 'legal',
      vapes: 'legal',
      flower: 'legal',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Kentucky\'s economy is tied to hemp agriculture and it hosts a large retail cannabinoid market, so the rider affects both farmers and retailers — a high-impact change, with the state\'s 5 mg hemp beverages far exceeding the federal cap.',
    notes:
      'Kentucky has one of the longest hemp-cultivation histories in the U.S. and a permissive market: delta-8 and other hemp-derived cannabinoids are legal for adults 21+ under HB 544. Hemp beverages are the exception — SB 202 (2025) limits them to 5 mg THC per 12 oz serving under Alcoholic Beverage Control oversight and, since June 1, 2025, to alcohol-licensed retailers, while HB 775 (2025) imposes spirits-level excise taxes and licensing.',
  },

  /* ------------------------------------------------------------------ */
  /*  LOUISIANA                                                         */
  /* ------------------------------------------------------------------ */
  louisiana: {
    name: 'Louisiana',
    abbreviation: 'LA',
    slug: 'louisiana',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal for adults 21+ in Louisiana but tightly regulated: Act 752 (2024, effective Jan 1, 2025) caps consumable hemp at 5 mg total THC per serving and 40 mg per package, limits beverages to one serving per container, and bars sales at gas stations and similar outlets.',
        statute: 'Act 336 (2021); Act 498 (2022); Act 752 (2024); La. R.S. 3:1481 et seq.',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC is legal for adults 21+ within Act 752\'s 5 mg total THC per serving and 40 mg per package caps. Inhalable forms are prohibited.',
        statute: 'Act 336 (2021); Act 498 (2022); Act 752 (2024); La. R.S. 3:1481 et seq.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Louisiana. Products are widely available at retail stores, pharmacies, and specialty shops, subject to testing and labeling rules.',
        statute: 'Act 336 (2021); La. R.S. 3:1481 et seq.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is not permitted at retail in Louisiana; smokable and inhalable hemp has been barred since 2021, so there is no retail pathway for high-THCA hemp.',
        statute: 'Act 336 (2021); Act 752 (2024)',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC\'s status in Louisiana is unsettled; as an artificially derived cannabinoid it sits outside the clearly regulated delta-8/delta-9 market, and its retail legality is uncertain.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal for adults 21+ under Louisiana\'s regulated hemp framework, subject to the same 5 mg total THC per serving cap. Inhalable forms are prohibited.',
        statute: 'Act 336 (2021); Act 498 (2022); Act 752 (2024)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal federally. It is not permitted for sale in Louisiana.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific mention in Louisiana law; its retail status is undetermined.',
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
    shippingIn: 'restricted',
    shippingOut: 'legal',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Louisiana already runs a capped, registered hemp market (5 mg total THC per serving); the federal 0.4 mg per-container cap is far stricter and removes most compliant edibles and beverages from retail, though the state\'s existing licensing structure could adapt — a moderate impact.',
    notes:
      'Louisiana regulates hemp-derived cannabinoids under a chain of statutes — Act 336 (2021), Act 498 (2022), and Act 752 (2024, effective Jan 1, 2025). Consumable hemp is capped at 5 mg total THC per serving and 40 mg per package, beverages are limited to one serving per container, products require testing and labeling, sales are restricted to adults 21+, and gas stations and similar outlets are barred. Inhalable and smokable hemp — flower and vapes — has been prohibited since 2021, and there is no retail path for high-THCA hemp. HB 12 and HB 36 (2025) added criminal penalties tied to under-21 sales.',
  },

  /* ------------------------------------------------------------------ */
  /*  MAINE                                                             */
  /* ------------------------------------------------------------------ */
  maine: {
    name: 'Maine',
    abbreviation: 'ME',
    slug: 'maine',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal at general retail to adults 21+ in Maine. PL 2025, c. 416 (emergency, effective June 25, 2025) created a "potentially intoxicating hemp product" category with child-resistant packaging, sold outside the cannabis program.',
        statute: '7 M.R.S. §2231 et seq.; PL 2025, c. 416',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC is legal at general retail to adults 21+ under PL 2025, c. 416. Grocery and liquor stores sell hemp THC beverages and edibles.',
        statute: '7 M.R.S. §2231 et seq.; PL 2025, c. 416',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Maine. The state has a well-established hemp program and CBD products are available in general retail.',
        statute: '7 M.R.S. §2231 et seq.',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA hemp flower remains restricted in Maine; while manufactured hemp THC products moved to general retail under PL 2025, c. 416, raw high-THCA flower is treated more cautiously because it converts to THC when heated.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is available at general retail to adults 21+ under Maine\'s "potentially intoxicating hemp product" framework (PL 2025, c. 416).',
        statute: '7 M.R.S. §2231 et seq.; PL 2025, c. 416',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal at general retail to adults 21+ under PL 2025, c. 416, alongside other potentially intoxicating hemp products.',
        statute: '7 M.R.S. §2231 et seq.; PL 2025, c. 416',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal at the federal level. It is banned in Maine.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific mention in Maine\'s hemp statutes. Its retail status remains uncertain.',
      },
    },
    productTypes: {
      gummies: 'legal',
      vapes: 'restricted',
      flower: 'restricted',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'legal',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Maine now sells hemp THC edibles and beverages at general retail; the federal cap conflicts with that market and removes most products from shelves, though Maine\'s parallel cannabis program offers an alternative channel — a moderate impact.',
    notes:
      'Maine reversed course in 2025: rather than confining hemp THC to the cannabis program, PL 2025, c. 416 (emergency, effective June 25, 2025) created a "potentially intoxicating hemp product" category legal at general retail to adults 21+, with child-resistant packaging. Grocery and liquor stores now sell hemp THC beverages and edibles. The governing statute is 7 M.R.S. §2231 et seq. Inhalable forms (vapes, flower) and raw high-THCA flower remain more tightly controlled.',
  },

  /* ------------------------------------------------------------------ */
  /*  MARYLAND                                                          */
  /* ------------------------------------------------------------------ */
  maryland: {
    name: 'Maryland',
    abbreviation: 'MD',
    slug: 'maryland',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned outside licensed cannabis dispensaries in Maryland. In Moore v. Maryland Hemp Coalition (Sept 9, 2025), the appellate court reversed an injunction, confining intoxicating hemp to the licensed market; general retailers may sell only products at or below 0.5 mg THC per serving and 2.5 mg per package.',
        statute: 'HB 556 (Cannabis Reform Act)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC is regulated in Maryland under the cannabis regulatory framework. Products must comply with state cannabis rules.',
        statute: 'HB 556',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal and widely available in Maryland. Products can be purchased at retail stores, pharmacies, and health food shops.',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA is regulated in Maryland under the cannabis framework. High-THCA hemp products are treated similarly to cannabis products.',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is regulated under Maryland\'s cannabis laws alongside other intoxicating hemp-derived cannabinoids.',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned outside licensed dispensaries in Maryland following Moore v. Maryland Hemp Coalition (Sept 9, 2025). Only low-dose products (≤0.5 mg THC per serving, ≤2.5 mg per package) may be sold at general retail.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal at the federal level. It is not permitted in Maryland.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Maryland. Its legal status is undetermined.',
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
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Maryland already channels intoxicating hemp into its licensed cannabis market, so the federal cap largely reinforces the state\'s post-Moore limits — a moderate impact absorbed by the existing dispensary framework.',
    notes:
      'Maryland legalized adult-use cannabis in 2023 and has folded intoxicating hemp into the licensed cannabis market. In Moore v. Maryland Hemp Coalition (Sept 9, 2025), the appellate court reversed a lower-court injunction: delta-8 and delta-10 are illegal outside licensed dispensaries, and general retailers may sell only products at or below 0.5 mg THC per serving and 2.5 mg per package. Non-intoxicating CBD remains available at general retail.',
  },

  /* ------------------------------------------------------------------ */
  /*  MASSACHUSETTS                                                     */
  /* ------------------------------------------------------------------ */
  massachusetts: {
    name: 'Massachusetts',
    abbreviation: 'MA',
    slug: 'massachusetts',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned from retail in Massachusetts. May 2024 guidance from DPH, MDAR, and the ABCC bars intoxicating hemp-derived products from sale, and no licensed hemp-THC retail channel exists. The Department of Agricultural Resources (MDAR) — not the Cannabis Control Commission — regulates hemp.',
        statute: 'M.G.L. c. 128 §§116-123',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC is banned from retail under the May 2024 DPH/MDAR/ABCC guidance; there is no licensed hemp-THC sales channel in Massachusetts.',
        statute: 'M.G.L. c. 128 §§116-123',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is available in Massachusetts, but with an important limit: hemp-derived CBD food and beverages are barred from sale under state guidance. Non-ingestible CBD products, such as topicals, remain available.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned from retail in Massachusetts under the May 2024 interagency guidance barring intoxicating hemp products.',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned from retail in Massachusetts; as an intoxicating hemp-derived cannabinoid it falls under the May 2024 guidance prohibiting such sales.',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned from retail in Massachusetts under the same May 2024 interagency guidance.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal at the federal level. It is not permitted for sale in Massachusetts.',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned from retail in Massachusetts. As an intoxicating THC homolog, it falls within the May 2024 DPH/MDAR/ABCC guidance barring intoxicating hemp-derived products from sale, consistent with the treatment of delta-8, delta-9, THCA, HHC, and delta-10.',
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
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Massachusetts already bars intoxicating hemp from retail, so the federal cap and the exclusion of artificially derived cannabinoids largely align with existing state guidance — a moderate impact, pending the Cannabis Control Commission\'s December 2026 study.',
    notes:
      'Massachusetts bans intoxicating hemp-derived products from retail. May 2024 guidance from the Department of Public Health, the Department of Agricultural Resources (MDAR), and the Alcoholic Beverages Control Commission bars these products, and no licensed hemp-THC sales channel exists — MDAR, not the Cannabis Control Commission, regulates hemp under M.G.L. c. 128 §§116-123. Hemp-derived CBD food and beverages are also barred; non-ingestible CBD (e.g., topicals) remains available. H.5350 (signed Apr 19, 2026) did not open a hemp beverage market — it directed the Cannabis Control Commission to study hemp-derived cannabinoid regulation, with a report due Dec 15, 2026.',
  },

  /* ------------------------------------------------------------------ */
  /*  MICHIGAN                                                          */
  /* ------------------------------------------------------------------ */
  michigan: {
    name: 'Michigan',
    abbreviation: 'MI',
    slug: 'michigan',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is restricted to Michigan\'s licensed marijuana market. PA 87 and PA 56 (2021) placed all hemp-derived THC under the Cannabis Regulatory Agency (CRA), so these products may be sold only by licensed marijuana businesses, not general retailers.',
        statute: 'PA 87 & PA 56 (2021); Initiated Law 1 of 2018',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC is restricted to licensed marijuana businesses under PA 87 and PA 56 (2021), which brought hemp THC under Cannabis Regulatory Agency jurisdiction.',
        statute: 'PA 87 & PA 56 (2021)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal and widely available in Michigan at retail stores, pharmacies, and specialty shops.',
        statute: 'Michigan Industrial Hemp Research and Development Act',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA is restricted to the licensed marijuana market; PA 87 and PA 56 (2021) expressly brought hemp-derived THCA under Cannabis Regulatory Agency oversight.',
        statute: 'PA 87 & PA 56 (2021)',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is restricted to Michigan\'s licensed marijuana market under the Cannabis Regulatory Agency\'s authority over hemp-derived cannabinoids (PA 87 & PA 56, 2021).',
        statute: 'PA 87 & PA 56 (2021)',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is restricted to licensed marijuana businesses under PA 87 and PA 56 (2021).',
        statute: 'PA 87 & PA 56 (2021)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal at the federal level. It is not protected under the Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific mention in Michigan law; its retail status is undetermined outside the licensed marijuana system.',
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
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Michigan already confines hemp-derived THC to its licensed marijuana market, so the federal cap is largely absorbed by the state\'s existing Cannabis Regulatory Agency framework — a moderate impact.',
    notes:
      'Michigan\'s regulatory status is not a gray area — it has been settled since 2021. PA 87 and PA 56 (2021) placed all hemp-derived THC, including THCA, under the Cannabis Regulatory Agency, so intoxicating hemp cannabinoids may be sold only by licensed marijuana businesses, not general retailers, gas stations, or smoke shops. Non-intoxicating CBD remains available at general retail. An October 2025 bill package (HB 5040 and related bills) was not enacted.',
  },

  /* ------------------------------------------------------------------ */
  /*  MINNESOTA                                                         */
  /* ------------------------------------------------------------------ */
  minnesota: {
    name: 'Minnesota',
    abbreviation: 'MN',
    slug: 'minnesota',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is expressly allowed in Minnesota\'s lower-potency hemp edible (LPHE) market: legal at general retail, liquor stores, and bars for adults 21+ within caps of 5 mg per serving and 50 mg per package (beverages ≤10 mg per container). Businesses need an Office of Cannabis Management (OCM) license, available since April 1, 2026.',
        statute: 'Minn. Stat. ch. 342',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC is expressly allowed in the LPHE market within the same caps (5 mg per serving, 50 mg per package; beverages ≤10 mg per container), sold at general retail under an OCM license.',
        statute: 'Minn. Stat. ch. 342',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Minnesota. Non-intoxicating hemp products remain available in general retail.',
        statute: 'Minnesota Statutes 18K (Industrial Hemp Development Act)',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA is restricted in Minnesota; it is not part of the low-potency hemp edible allowance and is handled through the licensed cannabis system.',
        statute: 'Minn. Stat. ch. 342',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in consumable products in Minnesota; it is not among the cannabinoids permitted in the lower-potency hemp edible market.',
        statute: 'Minn. Stat. ch. 342',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is restricted in Minnesota; it falls outside the expressly permitted LPHE cannabinoids and is handled through the licensed cannabis system.',
        statute: 'Minn. Stat. ch. 342',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Minnesota both as a synthetic cannabinoid under federal law and under the state\'s cannabis regulatory framework.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific mention in Minnesota\'s cannabis statutes; if classified as intoxicating it is handled through the licensed cannabis system.',
      },
    },
    productTypes: {
      gummies: 'legal',
      vapes: 'restricted',
      flower: 'restricted',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'legal',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Minnesota\'s roughly $200 million lower-potency hemp edible market allows 5 mg-per-serving products — well above the federal 0.4 mg per-container cap — so the enacted rider removes most of the state\'s general-retail hemp edibles and beverages, a high-impact change.',
    notes:
      'Minnesota did not force all THC into the licensed cannabis system. Its lower-potency hemp edible (LPHE) market — delta-8 and delta-9 expressly allowed, capped at 5 mg per serving and 50 mg per package (beverages ≤10 mg per container) — is legal at general retail, liquor stores, and bars for adults 21+. The MDH-era registration sunset March 31, 2026; since April 1, 2026 businesses operate under Office of Cannabis Management (OCM) licenses. Governing law is Minn. Stat. ch. 342. HHC is banned in consumables, and inhalable forms go through the licensed cannabis system.',
  },

  /* ------------------------------------------------------------------ */
  /*  MISSISSIPPI                                                       */
  /* ------------------------------------------------------------------ */
  mississippi: {
    name: 'Mississippi',
    abbreviation: 'MS',
    slug: 'mississippi',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'gray',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is in a contested gray area in Mississippi. An August 2025 Attorney General opinion (Fitch) concludes that CBD-converted cannabinoids like delta-8 are controlled substances and that consumable hemp without FDA approval is presumptively illegal outside medical dispensaries; seizures have followed.',
        statute: 'Mississippi Hemp Cultivation Act (Miss. Code Ann. 69-25-201 et seq.)',
      },
      delta9Hemp: {
        status: 'gray',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC is in a gray area in Mississippi following the August 2025 AG opinion treating consumable hemp as presumptively illegal outside the medical program.',
        statute: 'Miss. Code Ann. 69-25-201 et seq.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Mississippi. Non-intoxicating CBD products are the least contested part of the market, though the August 2025 AG opinion questions consumable hemp lacking FDA approval.',
        statute: 'Miss. Code Ann. 69-25-201 et seq.',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is in a gray area in Mississippi after the August 2025 AG opinion questioning the legality of consumable hemp outside the medical dispensary system.',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC is in a gray area in Mississippi; as a converted cannabinoid it is implicated by the August 2025 AG opinion treating such products as controlled substances.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is in a gray area in Mississippi; the August 2025 AG opinion treats CBD-converted cannabinoids as controlled substances.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal at the federal level. It is not protected as a hemp product.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific mention in Mississippi law; its status is undetermined and clouded by the August 2025 AG opinion.',
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
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Mississippi\'s hemp market already faces an Attorney General opinion treating most consumable products as presumptively illegal; the federal cap and the exclusion of artificially derived cannabinoids compound that uncertainty and remove the federal-law backstop for these products — a high-impact change.',
    notes:
      'Mississippi\'s hemp market is under a legal cloud. An August 2025 Attorney General opinion (Fitch) concluded that CBD-converted cannabinoids — delta-8, delta-10, THC-O — are controlled substances and that consumable hemp products lacking FDA approval are presumptively illegal outside the state\'s medical cannabis dispensaries; seizures are underway. Reform bill HB 1502 died in conference April 3, 2025, and nothing passed in 2026. Mississippi sets no statutory hemp age minimum. A medical cannabis program exists under SB 2095 (2022).',
  },

  /* ------------------------------------------------------------------ */
  /*  MISSOURI                                                          */
  /* ------------------------------------------------------------------ */
  missouri: {
    name: 'Missouri',
    abbreviation: 'MO',
    slug: 'missouri',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is currently legal and widely available in Missouri, but that changes soon: HB 2641, the Intoxicating Cannabinoid Control Act (signed April 23, 2026, effective November 12, 2026), reclassifies any hemp product exceeding 0.4 mg total THC per container as marijuana, sellable only through licensed channels.',
        statute: 'Amendment 3 (Missouri Cannabis Legalization); HB 2641 (2026)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products within the 0.3% limit are currently legal in Missouri and sold in general retail alongside the regulated cannabis market — until HB 2641 takes effect November 12, 2026 and moves products over 0.4 mg total THC per container into licensed channels.',
        statute: 'Mo. Rev. Stat. 195.207; HB 2641 (2026)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is fully legal in Missouri and widely available at retail stores, pharmacies, and specialty shops.',
        statute: 'Mo. Rev. Stat. 195.207',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is legal in Missouri. The state has not restricted hemp-derived THCA products.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal in Missouri. Hemp-derived cannabinoids are broadly permitted in the state.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Missouri. Hemp-derived products are widely available.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal at the federal level. It is not protected under the Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Missouri. Its legal status is undetermined.',
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
      'Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37) — signed November 12, 2025, effective November 12, 2026 — redefines hemp with a 0.4 mg total-THC-per-container cap and excludes artificially derived cannabinoids. Missouri\'s HB 2641 mirrors the federal rider — both take effect November 12, 2026 and treat products over 0.4 mg total THC per container as marijuana — so the state\'s large dual hemp/cannabis retail market collapses into licensed channels on that date, a high-impact change now under federal-court challenge.',
    notes:
      'Missouri legalized adult-use cannabis in November 2022 (Amendment 3), and hemp-derived products have been sold broadly in general retail. That dual market is ending: HB 2641, the Intoxicating Cannabinoid Control Act (signed by Gov. Kehoe on April 23, 2026, effective November 12, 2026), reclassifies any hemp product with more than 0.4 mg total THC per container as marijuana, sellable only through licensed dispensaries. The path here included former Gov. Parson\'s Executive Order 24-10 (2024), which sought to ban intoxicating hemp. Hemp businesses filed a federal lawsuit challenging HB 2641 on July 16, 2026 (W.D. Mo.); no ruling has issued. Statuses below reflect the market as of mid-2026, before the November sunset.',
  },

  /* ------------------------------------------------------------------ */
  /*  MONTANA                                                           */
  /* ------------------------------------------------------------------ */
  montana: {
    name: 'Montana',
    abbreviation: 'MT',
    slug: 'montana',
    lastUpdated: '2026-07-18',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Montana. HB 948 (2023) prohibits synthetic and chemically converted cannabinoids — including delta-8 — even within the licensed cannabis market, and no compliant retail channel exists for it.',
        statute: 'HB 948 (2023)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC is tightly restricted in Montana. SB 375 (2025) bars the retail sale of hemp products with any detectable THC outside licensed dispensaries, and HB 49 (2025) caps compliant finished products at 0.5 mg total THC per serving and 2 mg per package.',
        statute: 'SB 375 (2025); HB 49 (2025)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Montana. Non-intoxicating hemp products are available at retail stores throughout the state.',
        statute: 'Montana Hemp Economic Development Act (MCA 80-18-101 et seq.)',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is banned at general retail in Montana. Under SB 375 (2025) the state measures total THC (which counts THCA), so high-THCA hemp flower and products are treated as marijuana and cannot be sold outside licensed dispensaries.',
        statute: 'SB 375 (2025)',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in Montana. HB 948 (2023) prohibits synthetic and chemically converted hemp cannabinoids, including HHC, even in the licensed market.',
        statute: 'HB 948 (2023)',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in Montana as a chemically converted cannabinoid prohibited by HB 948 (2023).',
        statute: 'HB 948 (2023)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Montana. It is an artificially derived cannabinoid prohibited by HB 948 (2023) and is not protected under the federal Farm Bill.',
        statute: 'HB 948 (2023)',
      },
      thcp: {
        status: 'banned',
        label: 'THCP',
        detail:
          'THCP is banned in Montana. As an artificially derived cannabinoid produced by chemical conversion, it falls under HB 948 (2023)\'s prohibition on synthetic and converted hemp cannabinoids alongside delta-8, delta-10, HHC, and THC-O.',
        statute: 'HB 948 (2023)',
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
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'low',
    federalChangeNote:
      'Montana already prohibits converted hemp cannabinoids under HB 948 (2023) and caps compliant products at 0.5 mg per serving under HB 49 (2025) — limits stricter than the federal standard. Section 781 of H.R. 5371 (Continuing Appropriations and Extensions Act, 2026, Pub. L. 119-37), effective November 12, 2026, sets a 0.4 mg total-THC-per-container cap nationally, so its impact on Montana is low because the state is already more restrictive.',
    notes:
      'Montana bans synthetic and chemically converted hemp cannabinoids (delta-8, delta-10, HHC, THC-O, THCP) under HB 948 (2023), even inside the licensed adult-use market it created in 2020 (I-190). SB 375 (2025) bars retail sale of any hemp product with detectable THC outside licensed dispensaries, and HB 49 (2025) caps compliant finished products at 0.5 mg total THC per serving and 2 mg per package — limits that took roughly 80–90% of intoxicating hemp gummies and drinks off Montana shelves. Only non-intoxicating CBD and topicals remain broadly available at general retail. Earlier versions of this entry cited a bill that never became law; the operative statutes are HB 948, SB 375, and HB 49.',
  },
};
