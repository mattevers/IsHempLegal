import { StateData } from '@/types/hemp';

export const statesPW: Record<string, StateData> = {
  pennsylvania: {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    slug: 'pennsylvania',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Pennsylvania. Hemp-derived cannabinoids are permitted under Act 92, which established the state hemp program in alignment with the 2018 Farm Bill.',
        statute: 'Act 92 (Pennsylvania Hemp Research Act)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal when containing no more than 0.3% THC by dry weight, consistent with federal guidelines and Act 92.',
        statute: 'Act 92',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Pennsylvania. Hemp-derived CBD products are widely available in retail stores, pharmacies, and online.',
        statute: 'Act 92',
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
    ageRestriction: 21,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'Pennsylvania has a well-established hemp market. Federal restrictions on intoxicating cannabinoids could significantly reduce the availability of Delta-8 and similar products, though CBD would likely remain unaffected.',
    notes:
      'Pennsylvania regulates hemp under Act 92. Hemp-derived products are widely available in gas stations, smoke shops, and specialty stores throughout the state. The PA Department of Agriculture oversees the hemp program.',
  },

  'rhode-island': {
    name: 'Rhode Island',
    abbreviation: 'RI',
    slug: 'rhode-island',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Rhode Island outside of the licensed adult-use cannabis program. The state has explicitly prohibited hemp-derived intoxicating cannabinoids from being sold outside of regulated dispensaries.',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products with intoxicating effects are banned outside the licensed cannabis program. Only products sold through the regulated cannabis system are permitted.',
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
          'THCA is effectively banned in Rhode Island outside the licensed cannabis system, as the state has moved to restrict all intoxicating hemp-derived cannabinoids.',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in Rhode Island as part of the state\'s broad prohibition on intoxicating hemp-derived cannabinoids outside the licensed cannabis program.',
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
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Rhode Island. However, given the state\'s broad ban on intoxicating hemp-derived cannabinoids, THCP would likely fall under the same restrictions.',
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
      'Rhode Island has already integrated hemp-derived THC into its licensed cannabis program. Federal changes would have minimal impact since the state independently prohibits unregulated hemp-derived intoxicants.',
    notes:
      'Rhode Island requires all intoxicating hemp-derived cannabinoids to be sold through the licensed cannabis program. Non-intoxicating CBD topicals and wellness products remain available in general retail.',
  },

  'south-carolina': {
    name: 'South Carolina',
    abbreviation: 'SC',
    slug: 'south-carolina',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in South Carolina. The state hemp program, administered by the SC Department of Agriculture, permits hemp-derived cannabinoids consistent with federal definitions.',
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
          'THCA is not specifically addressed in South Carolina law. Products are sold in the state but occupy a legal gray area due to THCA\'s conversion to THC when heated.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is not banned in South Carolina and is available under the general hemp framework administered by the SC Department of Agriculture.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in South Carolina under the state hemp program. No specific restrictions target this cannabinoid.',
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
          'THCP has no specific legislation in South Carolina. Its legal status remains unclear as it is not explicitly addressed in state law.',
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
      'South Carolina has no recreational cannabis program. Federal restrictions on hemp-derived cannabinoids would eliminate the primary source of legal THC products for consumers in the state.',
    notes:
      'The SC Department of Agriculture administers the state hemp program. Hemp-derived products are widely sold in gas stations, convenience stores, and specialty retailers. South Carolina does not have a recreational cannabis program.',
  },

  'south-dakota': {
    name: 'South Dakota',
    abbreviation: 'SD',
    slug: 'south-dakota',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in South Dakota following the state\'s hemp legalization. Hemp-derived cannabinoids are permitted under the state\'s industrial hemp program.',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal in South Dakota when containing no more than 0.3% THC by dry weight, consistent with federal law.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is legal in South Dakota. Hemp-derived CBD products are available in retail stores across the state following hemp legalization.',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is not specifically addressed in South Dakota law. Products are available but the legal status is uncertain due to THCA\'s potential to convert to THC.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is not specifically banned in South Dakota. Products are sold under the general hemp framework.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in South Dakota under the state hemp program. No specific restrictions have been enacted.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is not protected under the Farm Bill. The DEA has classified it as a controlled substance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in South Dakota. Its legal status is unclear and not explicitly addressed in state law.',
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
      'South Dakota\'s hemp market is relatively new. Federal restrictions would significantly impact the availability of hemp-derived THC products, which are a growing market in the state.',
    notes:
      'South Dakota was one of the later states to legalize hemp. The state initially had a contentious relationship with cannabis legalization, but hemp-derived products are now widely available.',
  },

  tennessee: {
    name: 'Tennessee',
    abbreviation: 'TN',
    slug: 'tennessee',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal and very widely sold in Tennessee. The state is a major hemp state, and HB 1927 regulates the sale of hemp-derived cannabinoids with an age restriction of 21+.',
        statute: 'HB 1927',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is legal in Tennessee when products contain no more than 0.3% THC by dry weight. Products are widely available and regulated under HB 1927.',
        statute: 'HB 1927',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Tennessee. The state has a robust hemp industry and CBD products are available in virtually every retail category.',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA exists in a gray area in Tennessee. While not specifically banned, THCA flower and products that convert to Delta-9 THC when heated are subject to debate regarding their compliance with the 0.3% THC threshold.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal in Tennessee under the state\'s hemp framework. Products are widely available alongside Delta-8 and other cannabinoids.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Tennessee and sold alongside other hemp-derived cannabinoid products throughout the state.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is federally illegal per DEA guidance. It is not protected under the Farm Bill or Tennessee\'s hemp laws.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Tennessee. Its legal status is unclear and not explicitly addressed by HB 1927 or other state law.',
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
      'Tennessee is one of the largest hemp markets in the country. Federal restrictions on intoxicating hemp-derived cannabinoids would have a massive economic impact on the state\'s hemp industry and the many retailers selling these products.',
    notes:
      'Tennessee is a major hemp state with one of the most active markets for Delta-8 and other hemp-derived cannabinoids. HB 1927 sets the purchase age at 21+ and establishes a regulatory framework for hemp products. Products are sold in smoke shops, gas stations, and dedicated hemp stores statewide.',
  },

  texas: {
    name: 'Texas',
    abbreviation: 'TX',
    slug: 'texas',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Texas under HB 1325, which established the state hemp program. Gummies and tinctures are permitted, but vapes were banned effective September 2025.',
        statute: 'HB 1325',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal in Texas when containing no more than 0.3% THC by dry weight under HB 1325. Edibles and tinctures are the primary product formats.',
        statute: 'HB 1325',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Texas under HB 1325. CBD products are widely available in stores, pharmacies, and online throughout the state.',
        statute: 'HB 1325',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA occupies a gray area in Texas. While not explicitly banned, Texas law enforcement and regulators have raised concerns about THCA flower since it converts to Delta-9 THC when heated. Enforcement is inconsistent.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is not specifically banned in Texas and is available under the general hemp framework established by HB 1325.',
        statute: 'HB 1325',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Texas under HB 1325. Products are available in edible and tincture formats, though vape products were banned in September 2025.',
        statute: 'HB 1325',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is not protected under the Farm Bill or Texas HB 1325. The DEA has classified it as a controlled substance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Texas. Its legal status is unclear and not explicitly addressed in HB 1325 or subsequent regulations.',
      },
    },
    productTypes: {
      gummies: 'legal',
      vapes: 'banned',
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
      'Texas has one of the largest hemp-derived cannabinoid markets in the country. Without a recreational cannabis program, federal restrictions would eliminate the primary legal source of THC products for millions of Texans.',
    notes:
      'Texas legalized hemp under HB 1325 in 2019. The state banned hemp-derived vape products effective September 2025 but continues to allow gummies, tinctures, and other product formats. THCA flower remains in a legal gray area with inconsistent enforcement. Texas does not have a recreational cannabis program.',
  },

  utah: {
    name: 'Utah',
    abbreviation: 'UT',
    slug: 'utah',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is restricted in Utah. It is available only through licensed outlets under HB 58, which established a regulated framework for hemp-derived cannabinoid products.',
        statute: 'HB 58',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is restricted in Utah. Products are available only through licensed outlets as part of the state\'s regulated hemp product program under HB 58.',
        statute: 'HB 58',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is legal in Utah. Non-intoxicating hemp-derived CBD products are available in retail stores, though Utah maintains stricter regulations than many states.',
        statute: 'HB 58',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA is restricted in Utah under the same framework that governs other intoxicating hemp-derived cannabinoids. Available only through licensed outlets.',
        statute: 'HB 58',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is restricted in Utah. Like other intoxicating hemp-derived cannabinoids, it is only available through licensed outlets under HB 58.',
        statute: 'HB 58',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is restricted in Utah under HB 58. Products are available only through licensed retail outlets.',
        statute: 'HB 58',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is banned. The DEA has classified it as a controlled substance not protected by the Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Utah. It is not explicitly addressed by HB 58 or other state regulations, leaving its status unclear.',
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
      'Utah already restricts hemp-derived cannabinoids to licensed outlets. Federal changes would align with the state\'s existing regulatory approach and have minimal additional impact.',
    notes:
      'Utah takes a conservative approach to hemp-derived cannabinoids under HB 58. Intoxicating products are only available through licensed outlets, not general retail. Non-intoxicating CBD topicals and wellness products are more widely available.',
  },

  vermont: {
    name: 'Vermont',
    abbreviation: 'VT',
    slug: 'vermont',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is banned in Vermont outside the licensed cannabis system. Act 164 prohibits the sale of intoxicating hemp-derived cannabinoids outside of regulated cannabis dispensaries.',
        statute: 'Act 164',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are banned in Vermont outside the licensed cannabis program under Act 164. THC products must go through the regulated adult-use system.',
        statute: 'Act 164',
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
          'THCA is effectively banned in Vermont outside the licensed cannabis system, as Act 164 prohibits intoxicating hemp-derived cannabinoids from being sold in unregulated retail.',
        statute: 'Act 164',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in Vermont under Act 164\'s prohibition on intoxicating hemp-derived cannabinoids outside the licensed cannabis program.',
        statute: 'Act 164',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in Vermont outside the licensed cannabis system under Act 164.',
        statute: 'Act 164',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Vermont both as a synthetic cannabinoid under federal guidance and under Act 164\'s prohibition on intoxicating hemp-derived products.',
        statute: 'Act 164',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Vermont. However, Act 164\'s broad prohibition on intoxicating hemp-derived cannabinoids would likely encompass THCP.',
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
      'Vermont already bans intoxicating hemp-derived cannabinoids outside the licensed cannabis system. Federal changes would align with the state\'s existing policy.',
    notes:
      'Vermont bans intoxicating hemp-derived cannabinoids outside the licensed cannabis program under Act 164. Consumers seeking THC products must purchase through licensed adult-use cannabis dispensaries. Non-intoxicating CBD products remain available in general retail.',
  },

  virginia: {
    name: 'Virginia',
    abbreviation: 'VA',
    slug: 'virginia',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Virginia. Hemp-derived products are regulated under the Virginia Hemp Act and SB 903, which established a framework for the sale and regulation of hemp products.',
        statute: 'SB 903 (Virginia Hemp Act)',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is legal in Virginia when products contain no more than 0.3% THC by dry weight under the Virginia Hemp Act.',
        statute: 'SB 903',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Virginia. Hemp-derived CBD products are widely available in retail stores, wellness shops, and online.',
        statute: 'SB 903',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is not specifically addressed in Virginia law. Products are available in the state but exist in a legal gray area due to the conversion of THCA to Delta-9 THC when heated.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is not specifically banned in Virginia and is available under the general hemp framework established by the Virginia Hemp Act.',
        statute: 'SB 903',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Virginia under the Virginia Hemp Act. Products are available in retail locations throughout the state.',
        statute: 'SB 903',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is not protected under the Farm Bill. The DEA has classified it as a controlled substance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Virginia. Its legal status is unclear and not explicitly addressed under SB 903 or the Virginia Hemp Act.',
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
      'Virginia has an emerging adult-use cannabis program alongside its hemp market. Federal restrictions on hemp-derived cannabinoids would impact the unregulated hemp market but the licensed cannabis system would continue to operate.',
    notes:
      'Virginia regulates hemp products under the Virginia Hemp Act (SB 903). Hemp-derived cannabinoid products are widely available in retail stores. Virginia also has a developing adult-use cannabis program, creating a dual market for THC products.',
  },

  washington: {
    name: 'Washington',
    abbreviation: 'WA',
    slug: 'washington',
    lastUpdated: '2026-04-01',
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
          'Non-intoxicating CBD products are legal in Washington state. CBD is widely available in retail stores and wellness shops.',
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
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Washington. However, SB 5367\'s broad prohibition on intoxicating hemp-derived cannabinoids would likely encompass THCP.',
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
      'Washington already bans hemp-derived intoxicating cannabinoids outside its well-established licensed cannabis system. Federal changes would have minimal impact.',
    notes:
      'Washington was an early adopter of cannabis legalization and has channeled all intoxicating cannabinoid sales through its licensed system via SB 5367. Non-intoxicating CBD products remain available in general retail. The Washington State Liquor and Cannabis Board oversees enforcement.',
  },

  'west-virginia': {
    name: 'West Virginia',
    abbreviation: 'WV',
    slug: 'west-virginia',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in West Virginia. SB 447 established the state hemp program, and hemp-derived cannabinoids are permitted under the framework.',
        statute: 'SB 447',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is legal in West Virginia when products contain no more than 0.3% THC by dry weight under SB 447.',
        statute: 'SB 447',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in West Virginia. Hemp-derived CBD products are widely available in retail stores throughout the state.',
        statute: 'SB 447',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is not specifically addressed in West Virginia law. Products are available but occupy a gray area due to the potential conversion to Delta-9 THC.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is not specifically banned in West Virginia and is available under the general hemp framework established by SB 447.',
        statute: 'SB 447',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in West Virginia under the state hemp program. No specific restrictions target this cannabinoid.',
        statute: 'SB 447',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is not protected under the Farm Bill. The DEA has classified it as a controlled substance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in West Virginia. Its legal status is unclear and not explicitly addressed in state law.',
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
      'West Virginia has no recreational cannabis program. Federal restrictions on hemp-derived cannabinoids would eliminate the primary legal source of THC products for consumers in the state.',
    notes:
      'West Virginia legalized hemp under SB 447. Hemp-derived products are widely available in gas stations, smoke shops, and retail stores. The state has a medical cannabis program but no recreational cannabis.',
  },

  wisconsin: {
    name: 'Wisconsin',
    abbreviation: 'WI',
    slug: 'wisconsin',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'gray',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC exists in a legal gray area in Wisconsin. There is no specific ban, and products are widely sold, but the state has not passed explicit legislation authorizing hemp-derived intoxicating cannabinoids. The 2017 hemp pilot program was expanded but lacks specificity on Delta-8.',
      },
      delta9Hemp: {
        status: 'gray',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are available in Wisconsin but exist in a gray area. While hemp is legal under the expanded 2017 pilot program, specific regulations for intoxicating hemp-derived products have not been enacted.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is legal in Wisconsin. Hemp-derived CBD products are widely available in retail stores, pharmacies, and online following the expansion of the state hemp program.',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is not specifically addressed in Wisconsin law. Products are available but the legal status remains uncertain alongside other hemp-derived cannabinoids.',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC exists in a gray area in Wisconsin. There is no specific ban, and products are sold in the state, but no explicit authorization exists.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC exists in a gray area in Wisconsin. Products are available but not specifically regulated or authorized under state law.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is not protected under the Farm Bill. The DEA has classified it as a controlled substance.',
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
    ageRestriction: 21,
    shippingIn: 'gray',
    shippingOut: 'gray',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Wisconsin\'s hemp cannabinoid market operates in a legal gray area. Federal clarification could either legitimize or eliminate the market, making the impact potentially very significant.',
    notes:
      'Wisconsin has no specific legislation authorizing or banning Delta-8 and similar hemp-derived cannabinoids. Products are widely sold based on the 2017 hemp pilot program and its expansion, but the lack of explicit regulation creates legal uncertainty. Wisconsin does not have a recreational cannabis program.',
  },

  wyoming: {
    name: 'Wyoming',
    abbreviation: 'WY',
    slug: 'wyoming',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Wyoming under the Wyoming Hemp Act. Hemp-derived cannabinoids are permitted consistent with the federal definition of hemp.',
        statute: 'Wyoming Hemp Act',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is legal in Wyoming when products contain no more than 0.3% THC by dry weight under the Wyoming Hemp Act.',
        statute: 'Wyoming Hemp Act',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Wyoming. Hemp-derived CBD products are available in retail stores throughout the state under the Wyoming Hemp Act.',
        statute: 'Wyoming Hemp Act',
      },
      thca: {
        status: 'gray',
        label: 'THCA',
        detail:
          'THCA is not specifically addressed in Wyoming law. Products are available but exist in a gray area due to THCA\'s potential to convert to Delta-9 THC when heated.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is not specifically banned in Wyoming and is available under the general hemp framework established by the Wyoming Hemp Act.',
        statute: 'Wyoming Hemp Act',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Wyoming under the Wyoming Hemp Act. No specific restrictions target this cannabinoid.',
        statute: 'Wyoming Hemp Act',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is not protected under the Farm Bill. The DEA has classified it as a controlled substance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Wyoming. Its legal status is unclear and not explicitly addressed under the Wyoming Hemp Act.',
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
      'Wyoming has no recreational cannabis program. Federal restrictions on hemp-derived cannabinoids would eliminate the only legal source of THC products for consumers in the state.',
    notes:
      'Wyoming legalized hemp under the Wyoming Hemp Act. Hemp-derived products are available in retail stores throughout the state. Wyoming does not have a recreational or medical cannabis program, making hemp-derived products the only legal avenue for THC.',
  },
};
