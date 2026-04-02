import { StateData } from '@/types/hemp';

export const statesHM: Record<string, StateData> = {
  /* ------------------------------------------------------------------ */
  /*  HAWAII                                                            */
  /* ------------------------------------------------------------------ */
  hawaii: {
    name: 'Hawaii',
    abbreviation: 'HI',
    slug: 'hawaii',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC derived from hemp is legal in Hawaii. The state follows the federal 2018 Farm Bill definition of hemp and has not enacted a separate ban on delta-8.',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products that remain within the 0.3% THC threshold on a dry-weight basis are legal under Hawaii law.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp are legal and widely available in Hawaii, including in food and supplement form.',
        statute: 'HRS Chapter 328D',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is not separately restricted in Hawaii. Products meeting the federal hemp definition are permitted.',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC is not explicitly addressed in Hawaii statute. Its semi-synthetic nature places it in a legal gray area.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is not specifically addressed in Hawaii law. It exists in a gray area similar to other novel cannabinoids.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal at the federal level under the Federal Analogue Act. It is not protected by the 2018 Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Hawaii. Its legal status remains uncertain.',
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
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Hawaii relies heavily on the federal hemp framework. Changes to the Farm Bill definition of hemp could significantly affect product availability given the state\'s limited local retail infrastructure.',
    notes:
      'Hawaii has a limited brick-and-mortar hemp retail presence compared to the mainland. Most consumers purchase online. The state\'s geographic isolation can affect shipping timelines and product availability.',
  },

  /* ------------------------------------------------------------------ */
  /*  IDAHO                                                             */
  /* ------------------------------------------------------------------ */
  idaho: {
    name: 'Idaho',
    abbreviation: 'ID',
    slug: 'idaho',
    lastUpdated: '2026-04-01',
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
          'CBD is legal in Idaho ONLY if it contains absolutely 0.0% THC. Products must be derived from mature hemp stalks or seeds and contain no THC whatsoever.',
        statute: 'Idaho Code 37-2701(t)',
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
    ageRestriction: 21,
    shippingIn: 'banned',
    shippingOut: 'banned',
    federalChangeImpact: 'low',
    federalChangeNote:
      'Idaho maintains its own strict THC definition independent of federal hemp law. Federal changes are unlikely to loosen Idaho\'s zero-tolerance policy without corresponding state legislative action.',
    notes:
      'Idaho is one of the strictest states for hemp-derived products. Only CBD products with absolutely zero THC are permitted. Tinctures and topicals are marked as restricted because 0% THC CBD-only products in those forms may be sold. Possessing any THC product, even hemp-derived, can result in criminal charges.',
  },

  /* ------------------------------------------------------------------ */
  /*  ILLINOIS                                                          */
  /* ------------------------------------------------------------------ */
  illinois: {
    name: 'Illinois',
    abbreviation: 'IL',
    slug: 'illinois',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is regulated in Illinois under the same framework as cannabis products. Sale is restricted to licensed dispensaries and retailers. Must comply with state cannabis regulations.',
        statute: 'Illinois Cannabis Regulation and Tax Act (410 ILCS 705)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 products are legal but regulated. Products must comply with the state hemp program and cannabis regulations, including labeling and testing requirements.',
        statute: 'Illinois Industrial Hemp Act (505 ILCS 89)',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD derived from hemp is legal and widely available in Illinois. Products are sold in retail stores, pharmacies, and specialty shops throughout the state.',
        statute: 'Illinois Industrial Hemp Act (505 ILCS 89)',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA products are regulated under Illinois cannabis law. High-THCA hemp flower is treated similarly to cannabis flower due to its potential to convert to THC.',
        statute: '410 ILCS 705',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is regulated alongside other intoxicating hemp-derived cannabinoids in Illinois. Products must comply with state cannabis regulatory framework.',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is regulated in Illinois under the cannabis regulatory framework alongside delta-8 and other hemp-derived THC products.',
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
          'THCP has no specific legislation in Illinois. Its status is unclear, though it would likely be regulated under the state\'s cannabis framework if addressed.',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'restricted',
      flower: 'restricted',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Illinois already regulates hemp-derived THC through its cannabis program. Stricter federal rules could further limit the hemp market, but the state\'s existing licensed framework provides a regulatory pathway.',
    notes:
      'Illinois legalized adult-use cannabis in 2020 and has integrated hemp-derived THC regulation into its cannabis program. Products containing intoxicating cannabinoids must be sold through licensed retail channels. CBD-only products remain available in general retail.',
  },

  /* ------------------------------------------------------------------ */
  /*  INDIANA                                                           */
  /* ------------------------------------------------------------------ */
  indiana: {
    name: 'Indiana',
    abbreviation: 'IN',
    slug: 'indiana',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal and widely sold in Indiana. SB 516 established a regulatory framework for hemp-derived products, and delta-8 is explicitly permitted. Indiana is one of the most permissive states for hemp-derived cannabinoids.',
        statute: 'SB 516 (Indiana Hemp Law)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products within the 0.3% dry-weight limit are legal in Indiana under state hemp regulations.',
        statute: 'SB 516; IC 15-15-13',
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
          'THCA from hemp is not specifically restricted in Indiana. Products meeting the federal hemp definition are sold statewide.',
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
      'Indiana\'s hemp market is highly dependent on the federal Farm Bill framework. Stricter federal regulations on hemp-derived THC could severely impact the state\'s thriving hemp product retail sector.',
    notes:
      'Indiana is one of the most permissive states for hemp-derived products. SB 516 explicitly regulates hemp-derived cannabinoids and allows a broad range of products. Delta-8 and other hemp products are widely available at gas stations, smoke shops, and retail stores throughout the state.',
  },

  /* ------------------------------------------------------------------ */
  /*  IOWA                                                              */
  /* ------------------------------------------------------------------ */
  iowa: {
    name: 'Iowa',
    abbreviation: 'IA',
    slug: 'iowa',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Iowa. SF 2398 explicitly prohibited the sale of delta-8 THC and all hemp-derived THC isomers in the state.',
        statute: 'SF 2398',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products are banned in Iowa under SF 2398, which prohibits consumable hemp products containing any detectable amount of THC.',
        statute: 'SF 2398',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp are legal in Iowa provided they contain no more than 0.3% THC. Products must comply with state labeling and testing requirements.',
        statute: 'Iowa Code Chapter 204',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA is effectively banned in Iowa under SF 2398, which covers all hemp-derived THC isomers and their precursors.',
        statute: 'SF 2398',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in Iowa under SF 2398\'s prohibition on intoxicating hemp-derived cannabinoids and THC isomers.',
        statute: 'SF 2398',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in Iowa under SF 2398, which prohibits all hemp-derived THC isomers.',
        statute: 'SF 2398',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Iowa both under SF 2398 and under the federal classification of THC-O as a synthetic cannabinoid.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Iowa. However, given Iowa\'s broad ban on hemp-derived THC isomers under SF 2398, THCP would very likely be considered prohibited.',
      },
    },
    productTypes: {
      gummies: 'banned',
      vapes: 'banned',
      flower: 'banned',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'banned',
    },
    ageRestriction: 21,
    shippingIn: 'banned',
    shippingOut: 'banned',
    federalChangeImpact: 'low',
    federalChangeNote:
      'Iowa has independently banned hemp-derived THC isomers. Federal changes are unlikely to reopen the market without new state legislation.',
    notes:
      'Iowa enacted SF 2398 to ban delta-8 and all hemp-derived THC isomers. Only CBD products that meet strict THC limits are permitted. Tinctures and topicals are marked as legal only for CBD-only products. Iowa also has a limited medical cannabis program.',
  },

  /* ------------------------------------------------------------------ */
  /*  KANSAS                                                            */
  /* ------------------------------------------------------------------ */
  kansas: {
    name: 'Kansas',
    abbreviation: 'KS',
    slug: 'kansas',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Kansas. SB 263 established the state hemp program and does not prohibit delta-8 or other hemp-derived cannabinoids. Products are available at retail locations statewide.',
        statute: 'SB 263 (Kansas Commercial Industrial Hemp Act)',
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
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is not specifically restricted in Kansas. Products meeting the federal hemp definition are allowed.',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC is not specifically addressed in Kansas law. It occupies a legal gray area due to lack of explicit regulation.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is not specifically restricted under Kansas hemp law and is available for sale.',
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
      'Kansas relies on the federal Farm Bill definition of hemp. Tighter federal restrictions on hemp-derived THC could directly impact the availability of delta-8 and other cannabinoid products in the state.',
    notes:
      'Kansas does not have a legal cannabis program for adult use or medical purposes (only a limited CBD-specific program). Hemp-derived cannabinoids represent the only legal access to THC-containing products, making the market particularly significant.',
  },

  /* ------------------------------------------------------------------ */
  /*  KENTUCKY                                                          */
  /* ------------------------------------------------------------------ */
  kentucky: {
    name: 'Kentucky',
    abbreviation: 'KY',
    slug: 'kentucky',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Kentucky. HB 544 established a regulatory framework for hemp-derived cannabinoid products. Kentucky has a strong hemp farming tradition and a permissive market for hemp-derived products.',
        statute: 'HB 544',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products within the 0.3% dry-weight limit are legal under Kentucky\'s hemp program.',
        statute: 'HB 544; KRS 260.850-260.869',
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
      beverages: 'legal',
    },
    ageRestriction: 21,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Kentucky\'s economy has significant ties to hemp agriculture. Federal changes could impact both the farming sector and the retail cannabinoid market. The state\'s hemp industry advocacy groups are active in federal policy discussions.',
    notes:
      'Kentucky has one of the longest histories with hemp cultivation in the United States. HB 544 created a regulatory framework for hemp-derived products including labeling, testing, and age-verification requirements. The state is a major hemp producer.',
  },

  /* ------------------------------------------------------------------ */
  /*  LOUISIANA                                                         */
  /* ------------------------------------------------------------------ */
  louisiana: {
    name: 'Louisiana',
    abbreviation: 'LA',
    slug: 'louisiana',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal for adults 21 and older in Louisiana. HB 640 created a regulatory framework requiring product testing, labeling, and age verification for all hemp-derived THC products.',
        statute: 'HB 640 (La. R.S. 3:1481 et seq.)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products within the 0.3% limit are legal for adults 21+ in Louisiana under the state\'s hemp regulatory framework.',
        statute: 'HB 640',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is fully legal in Louisiana. Products are widely available at retail stores, pharmacies, and specialty shops.',
        statute: 'La. R.S. 3:1481 et seq.',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is regulated under Louisiana\'s hemp framework. Products meeting the federal hemp definition are permitted for adults 21+.',
        statute: 'HB 640',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is regulated under Louisiana\'s hemp-derived cannabinoid framework established by HB 640. Products must meet testing and labeling requirements.',
        statute: 'HB 640',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal for adults 21+ under Louisiana\'s regulated hemp product framework.',
        statute: 'HB 640',
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
          'THCP has no specific legislation in Louisiana. Its legal status is undetermined, though it may fall under the HB 640 regulatory framework.',
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
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Louisiana has its own hemp regulatory framework under HB 640. While federal changes could affect the market, the state\'s existing regulations provide a structure that could adapt to new federal standards.',
    notes:
      'Louisiana\'s HB 640 created one of the more comprehensive state-level regulatory frameworks for hemp-derived cannabinoids. All hemp-derived THC products require third-party testing, proper labeling, and are restricted to adults 21+. Retailers must register with the state.',
  },

  /* ------------------------------------------------------------------ */
  /*  MAINE                                                             */
  /* ------------------------------------------------------------------ */
  maine: {
    name: 'Maine',
    abbreviation: 'ME',
    slug: 'maine',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is regulated in Maine through the state\'s cannabis program. Hemp-derived THC products are restricted and must comply with cannabis regulatory requirements. Sale outside licensed channels is not permitted.',
        statute: 'MRSA Title 28-B (Maine Cannabis Legalization Act)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products are restricted in Maine. Products with intoxicating levels of THC are regulated under the cannabis program.',
        statute: 'MRSA Title 28-B',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Maine. The state has a well-established hemp program and CBD products are available in general retail.',
        statute: 'MRSA Title 7, Chapter 406-A',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA products from hemp are restricted in Maine and fall under the cannabis regulatory framework due to THCA\'s potential to convert to THC.',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is restricted in Maine. Intoxicating hemp-derived cannabinoids are regulated through the state\'s cannabis program.',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is restricted in Maine under the state\'s approach to regulating all intoxicating hemp-derived cannabinoids through the cannabis program.',
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
          'THCP has no specific legislation in Maine. Its legal status remains uncertain.',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'restricted',
      flower: 'restricted',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Maine already channels hemp-derived THC through its cannabis program. Federal changes may formalize this approach or create conflicts between hemp and cannabis regulatory tracks.',
    notes:
      'Maine regulates intoxicating hemp-derived cannabinoids through its adult-use cannabis program. Non-intoxicating hemp products like CBD are available in general retail. The state has a strong agricultural hemp sector.',
  },

  /* ------------------------------------------------------------------ */
  /*  MARYLAND                                                          */
  /* ------------------------------------------------------------------ */
  maryland: {
    name: 'Maryland',
    abbreviation: 'MD',
    slug: 'maryland',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is regulated in Maryland alongside cannabis products. Following adult-use cannabis legalization, hemp-derived intoxicating products are being brought under the cannabis regulatory framework.',
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
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is regulated in Maryland through the cannabis regulatory framework.',
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
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Maryland\'s cannabis legalization provides a regulatory structure that hemp-derived products are being folded into. Federal changes could either reinforce or complicate this approach.',
    notes:
      'Maryland legalized adult-use cannabis in 2023. The state is actively working to bring hemp-derived intoxicating products under the same regulatory umbrella as cannabis. CBD-only products remain available in general retail.',
  },

  /* ------------------------------------------------------------------ */
  /*  MASSACHUSETTS                                                     */
  /* ------------------------------------------------------------------ */
  massachusetts: {
    name: 'Massachusetts',
    abbreviation: 'MA',
    slug: 'massachusetts',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is regulated in Massachusetts through the Cannabis Control Commission (CCC). Hemp-derived THC products are treated as cannabis products and must comply with the state\'s cannabis regulations.',
        statute: 'M.G.L. c. 94G (Massachusetts Cannabis Act)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products are regulated by the Cannabis Control Commission. Products must be sold through licensed channels.',
        statute: 'M.G.L. c. 94G',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Massachusetts. Products are widely available at retail stores and health food shops throughout the state.',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA is regulated by the Cannabis Control Commission. Hemp-derived THCA products fall under cannabis regulations due to THCA\'s potential conversion to THC.',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is regulated in Massachusetts under the Cannabis Control Commission\'s authority over intoxicating hemp-derived cannabinoids.',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is regulated through the Cannabis Control Commission alongside other hemp-derived THC products.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is a synthetically derived cannabinoid considered illegal at the federal level. It is not permitted for sale in Massachusetts.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Massachusetts. Its legal status is undetermined.',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'restricted',
      flower: 'restricted',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Massachusetts already regulates hemp-derived THC through its Cannabis Control Commission. Federal changes would likely be absorbed into the existing regulatory structure.',
    notes:
      'Massachusetts regulates hemp-derived THC products through the Cannabis Control Commission, effectively treating them the same as cannabis products. Non-intoxicating CBD products are available in general retail. The state has a mature legal cannabis market.',
  },

  /* ------------------------------------------------------------------ */
  /*  MICHIGAN                                                          */
  /* ------------------------------------------------------------------ */
  michigan: {
    name: 'Michigan',
    abbreviation: 'MI',
    slug: 'michigan',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'gray',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC exists in a regulatory gray area in Michigan. The state legalized cannabis but has not clearly defined whether hemp-derived THC products fall under cannabis regulations or remain in the hemp market. Products are widely sold but face regulatory uncertainty.',
        statute: 'Michigan Regulation and Taxation of Marihuana Act (Initiated Law 1 of 2018)',
      },
      delta9Hemp: {
        status: 'gray',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products are in a regulatory gray area in Michigan. The state has not clearly reconciled hemp law with cannabis law for these products.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal and widely available in Michigan at retail stores, pharmacies, and specialty shops.',
        statute: 'Michigan Industrial Hemp Research and Development Act',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA from hemp is in a legal gray area in Michigan. The state\'s Cannabis Regulatory Agency has not issued definitive guidance on hemp-derived THCA products.',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC is in a gray area in Michigan. No specific regulation addresses this cannabinoid.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is in a regulatory gray area in Michigan, similar to other hemp-derived THC products.',
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
          'THCP has no specific legislation in Michigan. Its legal status is undetermined.',
      },
    },
    productTypes: {
      gummies: 'gray',
      vapes: 'gray',
      flower: 'gray',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'gray',
    },
    ageRestriction: 21,
    shippingIn: 'gray',
    shippingOut: 'gray',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Michigan\'s unclear regulatory framework for hemp-derived THC products means federal changes could have an outsized impact by providing or removing the legal basis for these products.',
    notes:
      'Michigan legalized adult-use cannabis in 2018 but has not fully addressed the regulatory status of hemp-derived intoxicating cannabinoids. Products are widely sold in smoke shops and gas stations despite the regulatory gray area. The Cannabis Regulatory Agency has signaled interest in bringing hemp-derived products under cannabis oversight.',
  },

  /* ------------------------------------------------------------------ */
  /*  MINNESOTA                                                         */
  /* ------------------------------------------------------------------ */
  minnesota: {
    name: 'Minnesota',
    abbreviation: 'MN',
    slug: 'minnesota',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is restricted in Minnesota. HF 100 legalized cannabis and simultaneously banned unregulated hemp-derived THC. Hemp-derived intoxicating products must now go through the state\'s licensed cannabis system.',
        statute: 'HF 100 (Minnesota Cannabis Law)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products are regulated in Minnesota. Prior to HF 100, low-dose hemp THC edibles were legal. Now all THC products must be sold through the licensed cannabis system.',
        statute: 'HF 100',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Minnesota. Non-intoxicating hemp products remain available in general retail outside the cannabis licensing system.',
        statute: 'Minnesota Statutes 18K (Industrial Hemp Development Act)',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA is restricted under HF 100. Hemp-derived products containing THCA must go through the licensed cannabis system.',
        statute: 'HF 100',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is restricted in Minnesota under HF 100\'s prohibition on unregulated intoxicating hemp-derived cannabinoids.',
        statute: 'HF 100',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is restricted in Minnesota under HF 100. Must be sold through the licensed cannabis system.',
        statute: 'HF 100',
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
          'THCP has no specific legislation in Minnesota. It would likely be regulated under HF 100 if classified as an intoxicating cannabinoid.',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'restricted',
      flower: 'restricted',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Minnesota has already transitioned to a regulated cannabis model that incorporates hemp-derived THC. Federal changes would supplement rather than replace the state\'s existing framework.',
    notes:
      'Minnesota made headlines in 2022 when it inadvertently legalized low-dose hemp-derived THC edibles. HF 100 subsequently legalized full adult-use cannabis and brought all intoxicating hemp-derived products under the licensed cannabis regulatory system. The Office of Cannabis Management oversees the transition.',
  },

  /* ------------------------------------------------------------------ */
  /*  MISSISSIPPI                                                       */
  /* ------------------------------------------------------------------ */
  mississippi: {
    name: 'Mississippi',
    abbreviation: 'MS',
    slug: 'mississippi',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Mississippi under the Mississippi Hemp Cultivation Act. Products are sold at retail locations throughout the state.',
        statute: 'Mississippi Hemp Cultivation Act (Miss. Code Ann. 69-25-201 et seq.)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products within the 0.3% limit are legal in Mississippi under the state hemp program.',
        statute: 'Miss. Code Ann. 69-25-201 et seq.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Mississippi. The Mississippi Hemp Cultivation Act aligns with the federal Farm Bill framework.',
        statute: 'Miss. Code Ann. 69-25-201 et seq.',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is not specifically restricted in Mississippi. Products meeting the federal hemp definition are permitted.',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC is not specifically addressed in Mississippi law. Its legal status is unclear due to lack of explicit regulation.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC from hemp is not restricted in Mississippi and is available at retail.',
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
          'THCP has no specific legislation in Mississippi. Its legal status is undetermined.',
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
      'Mississippi relies on the federal Farm Bill framework for hemp regulation. Tighter federal restrictions could directly impact the availability of hemp-derived THC products throughout the state.',
    notes:
      'Mississippi legalized hemp under the Mississippi Hemp Cultivation Act, aligning with the 2018 Farm Bill. Delta-8 and other hemp-derived products are widely sold. The state also has a medical cannabis program established in 2022 under SB 2095.',
  },

  /* ------------------------------------------------------------------ */
  /*  MISSOURI                                                          */
  /* ------------------------------------------------------------------ */
  missouri: {
    name: 'Missouri',
    abbreviation: 'MO',
    slug: 'missouri',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Missouri. The state legalized adult-use cannabis in 2022 and hemp-derived products remain broadly legal and widely available alongside the cannabis market.',
        statute: 'Amendment 3 (Missouri Cannabis Legalization); Missouri Hemp Extract Registration',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products within the 0.3% limit are legal in Missouri. Products are sold in general retail alongside the regulated cannabis market.',
        statute: 'Mo. Rev. Stat. 195.207',
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
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Missouri has both a legal cannabis market and a permissive hemp market. Federal changes could impact the hemp side, but the state\'s cannabis framework provides an alternative regulatory pathway.',
    notes:
      'Missouri legalized adult-use cannabis in November 2022 via Amendment 3. Hemp-derived products continue to be sold broadly in general retail, creating a dual-market system. The state has not moved to restrict hemp-derived THC products to the licensed cannabis system.',
  },

  /* ------------------------------------------------------------------ */
  /*  MONTANA                                                           */
  /* ------------------------------------------------------------------ */
  montana: {
    name: 'Montana',
    abbreviation: 'MT',
    slug: 'montana',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is restricted in Montana. SB 546 regulates hemp-derived intoxicating cannabinoids, requiring compliance with state standards for testing, labeling, and sales restrictions.',
        statute: 'SB 546',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived delta-9 THC products are restricted in Montana under SB 546. Products must comply with the state\'s regulatory framework for intoxicating hemp-derived cannabinoids.',
        statute: 'SB 546',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in Montana. Non-intoxicating hemp products are available at retail stores throughout the state.',
        statute: 'Montana Hemp Economic Development Act (MCA 80-18-101 et seq.)',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA from hemp is restricted under SB 546 as an intoxicating hemp-derived cannabinoid subject to state regulation.',
        statute: 'SB 546',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is restricted in Montana under SB 546\'s regulation of intoxicating hemp-derived cannabinoids.',
        statute: 'SB 546',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is restricted in Montana under SB 546\'s regulatory framework for intoxicating hemp-derived cannabinoids.',
        statute: 'SB 546',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned as a synthetically derived cannabinoid at the federal level. It is not permitted in Montana.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Montana. Its legal status is undetermined, though SB 546 could potentially apply.',
      },
    },
    productTypes: {
      gummies: 'restricted',
      vapes: 'restricted',
      flower: 'restricted',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'restricted',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Montana has its own regulatory framework under SB 546 for intoxicating hemp-derived cannabinoids. Federal changes could reinforce or conflict with the state\'s existing approach.',
    notes:
      'Montana legalized adult-use cannabis in 2020 (I-190) and subsequently passed SB 546 to regulate hemp-derived intoxicating cannabinoids. The state requires testing, proper labeling, and sales restrictions for intoxicating hemp products. Non-intoxicating products like CBD remain broadly available.',
  },
};
