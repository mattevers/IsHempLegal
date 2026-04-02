import { StateData } from '@/types/hemp';

export const statesAG: Record<string, StateData> = {
  /* ------------------------------------------------------------------ */
  /*  ALABAMA                                                           */
  /* ------------------------------------------------------------------ */
  alabama: {
    name: 'Alabama',
    abbreviation: 'AL',
    slug: 'alabama',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 edibles, tinctures, and non-smokable products are legal. Smokable hemp (flower, pre-rolls) banned effective July 2025 under HB 445.',
        statute: 'AL HB 445 (2025)',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 products are legal in non-smokable form only. Must contain no more than 0.3% Delta-9 THC by dry weight.',
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
          'THCA flower banned under the smokable hemp ban (HB 445). Non-smokable THCA products occupy a gray area but are generally available.',
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
      gummies: 'legal',
      vapes: 'restricted',
      flower: 'banned',
      tinctures: 'legal',
      topicals: 'legal',
      beverages: 'legal',
    },
    ageRestriction: 21,
    shippingIn: 'restricted',
    shippingOut: 'restricted',
    federalChangeImpact: 'medium',
    federalChangeNote:
      'A federal ban on hemp-derived THC would eliminate the edible/tincture market that survived HB 445. Conversely, clearer federal protection could challenge the smokable hemp ban.',
    notes:
      'HB 445 specifically targets smokable hemp products including flower, pre-rolls, and vapes containing hemp-derived THC. Edibles and tinctures remain legal for adults 21+.',
  },

  /* ------------------------------------------------------------------ */
  /*  ALASKA                                                            */
  /* ------------------------------------------------------------------ */
  alaska: {
    name: 'Alaska',
    abbreviation: 'AK',
    slug: 'alaska',
    lastUpdated: '2026-04-01',
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
        status: 'gray',
        label: 'THCP',
        detail:
          'No specific legislation addresses THCP, though it would likely be considered a controlled THC analog under Alaska law.',
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
      'Alaska already bans hemp-derived THC products through its state cannabis regulatory framework. Federal changes would have minimal practical impact.',
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
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal under Arizona\'s hemp program. Hemp-derived cannabinoids are permitted provided products contain no more than 0.3% Delta-9 THC.',
        statute: 'ARS § 3-311',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal when containing no more than 0.3% Delta-9 THC by dry weight.',
        statute: 'ARS § 3-311',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal under the Arizona hemp program. Widely available in retail and online.',
        statute: 'ARS § 3-311',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA products derived from hemp are legal. Arizona does not apply total THC testing to hemp products at retail.',
        statute: 'ARS § 3-311',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal as a hemp-derived cannabinoid under the state hemp program. No specific restrictions.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal as a hemp derivative under Arizona law.',
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
      'Arizona\'s hemp market is largely unregulated beyond Farm Bill compliance. A federal ban on hemp THC would eliminate a large retail market. Stricter federal rules could force products into the licensed cannabis system.',
    notes:
      'Arizona has a robust hemp-derived cannabinoid market. Products are widely sold in gas stations, smoke shops, and online. Age restriction of 21 applies to intoxicating hemp products.',
  },

  /* ------------------------------------------------------------------ */
  /*  ARKANSAS                                                          */
  /* ------------------------------------------------------------------ */
  arkansas: {
    name: 'Arkansas',
    abbreviation: 'AR',
    slug: 'arkansas',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Arkansas under the state hemp framework established by Act 629. Products must be derived from hemp and comply with labeling and testing requirements.',
        statute: 'Ark. Act 629 (2019); ACA § 2-15-401 et seq.',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal when containing no more than 0.3% Delta-9 THC by dry weight. Regulated under the state hemp program.',
        statute: 'ACA § 2-15-401 et seq.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal under the Arkansas Industrial Hemp Act. Widely sold across the state.',
        statute: 'Ark. Act 629 (2019)',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA hemp products are available and not specifically restricted. Arkansas does not currently enforce total THC testing at retail.',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'No specific legislation addresses HHC. Products are available in some locations, but regulatory status is uncertain.',
      },
      delta10: {
        status: 'gray',
        label: 'Delta-10 THC',
        detail:
          'No specific statute addresses Delta-10. Generally treated as a hemp derivative but regulatory clarity is lacking.',
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
      'Arkansas has a growing hemp-derived cannabinoid market. Federal restrictions on hemp THC products would significantly impact retail and e-commerce operations.',
    notes:
      'Act 629 established Arkansas\'s hemp regulatory framework in 2019. Delta-8 and other hemp cannabinoids are widely sold in convenience stores, vape shops, and online. Testing and labeling requirements apply.',
  },

  /* ------------------------------------------------------------------ */
  /*  CALIFORNIA                                                        */
  /* ------------------------------------------------------------------ */
  california: {
    name: 'California',
    abbreviation: 'CA',
    slug: 'california',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC products containing any amount of THC must be sold through licensed cannabis retailers under AB 45. Products are subject to cannabis testing, labeling, and tax requirements.',
        statute: 'CA AB 45 (2021); HSC § 11018.5',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'All hemp-derived products containing THC must go through the licensed cannabis retail system. Strict testing and compliance requirements apply.',
        statute: 'CA AB 45 (2021)',
      },
      cbd: {
        status: 'restricted',
        label: 'CBD',
        detail:
          'CBD in food and beverages is regulated by CDPH. Non-ingestible CBD products (topicals) are broadly legal. Ingestible CBD products face regulatory requirements under AB 45.',
        statute: 'CA AB 45 (2021); CA AB 2223',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA products are subject to the same cannabis retail requirements as other THC products under AB 45. Must be sold through licensed dispensaries.',
        statute: 'CA AB 45 (2021)',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is treated as an intoxicating hemp derivative and falls under AB 45 requirements. Must be sold through licensed cannabis retailers.',
        statute: 'CA AB 45 (2021)',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 falls under the same restrictions as other intoxicating hemp-derived cannabinoids. Licensed retail only.',
        statute: 'CA AB 45 (2021)',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid and is federally illegal per DEA guidance. Also prohibited under California cannabis regulations.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'No specific legislation addresses THCP. Would likely be subject to AB 45 if marketed as a THC product.',
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
      'California already routes hemp THC products through the licensed cannabis system. Federal changes would have limited additional impact, though federal legalization could simplify interstate commerce.',
    notes:
      'AB 45 is one of the strictest hemp-THC frameworks in the country. All intoxicating hemp products must be sold through licensed cannabis retailers with full compliance, testing, and taxation. Non-intoxicating CBD topicals are exempt.',
  },

  /* ------------------------------------------------------------------ */
  /*  COLORADO                                                          */
  /* ------------------------------------------------------------------ */
  colorado: {
    name: 'Colorado',
    abbreviation: 'CO',
    slug: 'colorado',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'SB 22-205 banned chemically modified or converted hemp cannabinoids including Delta-8 in retail hemp products. Only available through the licensed cannabis system.',
        statute: 'CO SB 22-205; CRS § 25-5-426',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 products are restricted to the licensed cannabis retail system. Cannot be sold in general retail as hemp products.',
        statute: 'CO SB 22-205',
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
      gummies: 'banned',
      vapes: 'banned',
      flower: 'restricted',
      tinctures: 'banned',
      topicals: 'legal',
      beverages: 'banned',
    },
    ageRestriction: 21,
    shippingIn: 'banned',
    shippingOut: 'banned',
    federalChangeImpact: 'low',
    federalChangeNote:
      'Colorado already regulates intoxicating hemp cannabinoids through its mature cannabis licensing system. Federal changes would have minimal additional impact on the state market.',
    notes:
      'SB 22-205 was one of the first state laws to comprehensively ban intoxicating hemp-derived cannabinoids outside the licensed cannabis system. Colorado treats all chemically modified cannabinoids (Delta-8, HHC, Delta-10) as banned in retail hemp products. Non-intoxicating CBD and hemp products remain legal.',
  },

  /* ------------------------------------------------------------------ */
  /*  CONNECTICUT                                                       */
  /* ------------------------------------------------------------------ */
  connecticut: {
    name: 'Connecticut',
    abbreviation: 'CT',
    slug: 'connecticut',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC products are regulated through Connecticut\'s adult-use cannabis program. Must be sold through licensed cannabis retailers only.',
        statute: 'CT PA 21-1; CGS § 21a-420',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are restricted to licensed cannabis retail. Connecticut requires all intoxicating cannabinoid products be sold through the regulated cannabis system.',
        statute: 'CT PA 21-1',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp are legal and available in retail locations statewide. Subject to labeling and testing requirements.',
        statute: 'CGS § 21a-92p',
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
      'Connecticut already regulates hemp-derived THC through its cannabis program. Federal changes would have limited additional impact.',
    notes:
      'Connecticut integrates hemp-derived THC products into its adult-use cannabis regulatory system. Only licensed retailers may sell intoxicating hemp products. Non-intoxicating CBD and topicals remain broadly available.',
  },

  /* ------------------------------------------------------------------ */
  /*  DELAWARE                                                          */
  /* ------------------------------------------------------------------ */
  delaware: {
    name: 'Delaware',
    abbreviation: 'DE',
    slug: 'delaware',
    lastUpdated: '2026-04-01',
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
        statute: 'Del. Code tit. 16 § 4914A',
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
          'No specific legislation addresses THCP, though it would likely be classified as a banned intoxicating cannabinoid under Delaware law.',
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
      'Delaware already bans most hemp-derived THC products. Federal changes would have minimal practical impact on the state market.',
    notes:
      'Delaware takes a strict approach to hemp-derived cannabinoids. Only non-intoxicating CBD products are permitted outside the medical cannabis program. Delta-8 and all synthetic cannabinoids are explicitly banned.',
  },

  /* ------------------------------------------------------------------ */
  /*  FLORIDA                                                           */
  /* ------------------------------------------------------------------ */
  florida: {
    name: 'Florida',
    abbreviation: 'FL',
    slug: 'florida',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is broadly legal and widely sold throughout Florida. Multiple legislative attempts to ban Delta-8 have failed. SB 1698 provides a regulatory framework including testing and labeling requirements.',
        statute: 'FL SB 1698; FSA § 581.217',
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
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA hemp products are legal and widely available. Florida does not enforce total THC testing at the retail level for hemp products.',
        statute: 'FSA § 581.217',
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
      'Florida has one of the largest hemp-derived cannabinoid markets in the country. A federal ban on hemp THC would devastate a significant retail industry. SB 1698 provides regulatory structure that could serve as a model for federal approaches.',
    notes:
      'Florida is one of the most permissive states for hemp-derived cannabinoids. SB 1698 establishes testing, labeling, and age verification requirements. Multiple attempts to ban Delta-8 have failed in the state legislature, reflecting strong industry lobbying and consumer demand.',
  },

  /* ------------------------------------------------------------------ */
  /*  GEORGIA                                                           */
  /* ------------------------------------------------------------------ */
  georgia: {
    name: 'Georgia',
    abbreviation: 'GA',
    slug: 'georgia',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal under the Georgia Hemp Farming Act. Products are widely sold in retail locations throughout the state.',
        statute: 'OCGA § 2-23-1 et seq.',
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
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA hemp products are legal and available. Georgia does not specifically restrict THCA in hemp-derived products.',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'No specific legislation addresses HHC in Georgia. Products are available in some retail locations but legal clarity is lacking.',
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
      'Georgia has a large and growing hemp-derived cannabinoid market. Federal restrictions would significantly impact the state\'s retail and online sales.',
    notes:
      'The Georgia Hemp Farming Act provides broad legalization of hemp-derived products. Delta-8 is widely sold in convenience stores, gas stations, and vape shops. Georgia does not currently have a licensed adult-use cannabis system, making hemp products the primary legal source of THC for consumers.',
  },
};
