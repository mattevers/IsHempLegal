import { StateData } from '@/types/hemp';

export const statesNO: Record<string, StateData> = {
  nebraska: {
    name: 'Nebraska',
    abbreviation: 'NE',
    slug: 'nebraska',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC derived from hemp is legal in Nebraska. The state\'s hemp program, established under LB 657 (Nebraska Hemp Farming Act), permits hemp-derived cannabinoids so long as the source material contains no more than 0.3% Delta-9 THC.',
        statute: 'LB 657 — Nebraska Hemp Farming Act',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal when they contain no more than 0.3% Delta-9 THC on a dry-weight basis, consistent with federal Farm Bill standards adopted by Nebraska under LB 657.',
        statute: 'LB 657',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD derived from hemp is fully legal in Nebraska. The state permits the sale and possession of CBD products that comply with the 0.3% THC threshold.',
        statute: 'LB 657',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is legal in Nebraska. The state has not enacted specific restrictions on THCA, and it falls under the general hemp-derived cannabinoid allowance established by LB 657.',
        statute: 'LB 657',
      },
      hhc: {
        status: 'gray',
        label: 'HHC',
        detail:
          'HHC occupies a gray area in Nebraska. While not explicitly banned, it is a hydrogenated cannabinoid with no specific legislative guidance, leaving its status uncertain under existing hemp law.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC from hemp is not explicitly restricted in Nebraska and is treated similarly to other hemp-derived cannabinoids under LB 657.',
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
          'THCP has no specific legislation in Nebraska. Its legal status is uncertain as state lawmakers have not addressed this naturally occurring but potent cannabinoid.',
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
      'Nebraska\'s hemp program closely mirrors federal law. Significant changes to the federal definition of hemp or cannabinoid scheduling would likely require the state to update LB 657 accordingly.',
    notes:
      'Nebraska was slower to adopt a hemp program but now permits a range of hemp-derived products. Retailers commonly sell Delta-8 and CBD across the state.',
  },

  nevada: {
    name: 'Nevada',
    abbreviation: 'NV',
    slug: 'nevada',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'Nevada banned the sale of Delta-8 THC products outside the state\'s licensed cannabis dispensary system through AB 49. Only products purchased through licensed cannabis retailers are permitted.',
        statute: 'AB 49',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are restricted in Nevada. They must be sold through the licensed cannabis regulatory framework or comply with strict hemp product rules under AB 49.',
        statute: 'AB 49',
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
          'THCA is restricted in Nevada. Because THCA converts to THC when heated, the state treats high-THCA hemp products similarly to cannabis products, requiring them to go through the licensed system.',
        statute: 'AB 49',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is effectively banned for retail sale outside the licensed cannabis system in Nevada. AB 49 broadly restricts intoxicating hemp-derived cannabinoids.',
        statute: 'AB 49',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned for sale outside the licensed cannabis dispensary system under Nevada\'s AB 49, which restricts all intoxicating hemp-derived cannabinoids.',
        statute: 'AB 49',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Nevada both under AB 49 and because it is considered a synthetic cannabinoid not protected by the federal Farm Bill.',
        statute: 'AB 49',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Nevada. However, given the state\'s broad restrictions on intoxicating hemp-derived cannabinoids under AB 49, it would likely be treated as restricted or banned.',
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
      'Nevada already has a mature licensed cannabis market. Federal changes to hemp cannabinoid policy would have minimal impact since the state already channels these products through its dispensary system.',
    notes:
      'Nevada\'s AB 49 effectively funnels all intoxicating hemp-derived cannabinoids into the regulated cannabis market. Non-intoxicating CBD products remain widely available outside dispensaries.',
  },

  'new-hampshire': {
    name: 'New Hampshire',
    abbreviation: 'NH',
    slug: 'new-hampshire',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal and widely sold in New Hampshire. The state has not enacted specific legislation restricting hemp-derived Delta-8, and products are available at numerous retail locations.',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal in New Hampshire when they contain no more than 0.3% Delta-9 THC on a dry-weight basis, consistent with federal guidelines.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in New Hampshire and is one of the most commonly sold hemp-derived products in the state. No special restrictions apply beyond the federal 0.3% THC limit.',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is legal in New Hampshire. The state has minimal restrictions on hemp-derived cannabinoids, and THCA products are available alongside other hemp products.',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal in New Hampshire. The state\'s permissive approach to hemp-derived cannabinoids extends to HHC, which is not specifically restricted.',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in New Hampshire. Like other hemp-derived cannabinoids, it is not specifically restricted and is available for sale.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is considered a synthetic cannabinoid by the DEA and is not protected under the Farm Bill. It is effectively banned as a controlled substance analog regardless of New Hampshire\'s permissive hemp stance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in New Hampshire. While the state is generally permissive toward hemp-derived cannabinoids, the lack of explicit guidance leaves THCP in a gray area.',
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
    ageRestriction: 18,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'New Hampshire has no recreational cannabis program and relies heavily on federal hemp law for its permissive cannabinoid market. Federal restrictions on hemp-derived THC would significantly impact retailers and consumers.',
    notes:
      'New Hampshire is one of the most permissive states for hemp-derived cannabinoids. Delta-8 and other hemp products are widely sold with minimal regulatory oversight.',
  },

  'new-jersey': {
    name: 'New Jersey',
    abbreviation: 'NJ',
    slug: 'new-jersey',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is restricted in New Jersey. Hemp-derived THC products are regulated through the state\'s cannabis program, and retail sales outside licensed dispensaries face enforcement action.',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC is restricted in New Jersey and regulated through the Cannabis Regulatory Commission. Products must comply with the state\'s cannabis framework.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD products derived from hemp are legal and widely available in New Jersey. Non-intoxicating CBD products are not subject to the cannabis regulatory framework.',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA products are restricted in New Jersey. The state\'s cannabis regulators treat high-THCA hemp flower and products as functionally equivalent to cannabis, subjecting them to the licensed cannabis system.',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is restricted in New Jersey. Intoxicating hemp-derived cannabinoids fall under the state\'s broad cannabis regulatory approach.',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is restricted in New Jersey and subject to regulation through the state cannabis program alongside other intoxicating hemp-derived cannabinoids.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in New Jersey as a synthetic cannabinoid. It is not protected under the Farm Bill and is considered a controlled substance.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in New Jersey. Given the state\'s restrictive approach to hemp-derived intoxicating cannabinoids, THCP likely falls under the same regulatory umbrella, but no explicit guidance exists.',
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
      'New Jersey already regulates hemp-derived THC through its cannabis program. Federal changes would have limited practical impact since the state has preemptively restricted these products.',
    notes:
      'New Jersey funnels intoxicating hemp-derived cannabinoids through its Cannabis Regulatory Commission. Non-intoxicating CBD remains freely available.',
  },

  'new-mexico': {
    name: 'New Mexico',
    abbreviation: 'NM',
    slug: 'new-mexico',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is regulated in New Mexico through the Cannabis Control Division (CCD). As a legal cannabis state, New Mexico requires hemp-derived intoxicating cannabinoids to comply with cannabis regulations.',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are regulated through New Mexico\'s Cannabis Control Division. Products must meet state cannabis standards and labeling requirements.',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is legal in New Mexico and widely available. Non-intoxicating hemp-derived CBD products are not subject to cannabis licensing requirements.',
      },
      thca: {
        status: 'restricted',
        label: 'THCA',
        detail:
          'THCA is regulated in New Mexico. The Cannabis Control Division treats high-THCA products as functionally similar to cannabis and requires compliance with the state\'s cannabis regulatory framework.',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC falls under New Mexico\'s broad regulation of intoxicating hemp-derived cannabinoids through the Cannabis Control Division.',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is regulated in New Mexico alongside other intoxicating hemp-derived cannabinoids through the Cannabis Control Division.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned as a synthetic cannabinoid. It is not naturally occurring in hemp and is not protected under the federal Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in New Mexico. While the state broadly regulates intoxicating cannabinoids, THCP has not been explicitly addressed by the Cannabis Control Division.',
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
      'New Mexico\'s legal cannabis framework already encompasses hemp-derived intoxicating cannabinoids. Federal changes would have minimal additional impact on the state\'s regulatory approach.',
    notes:
      'New Mexico legalized recreational cannabis and regulates hemp-derived intoxicating products through its Cannabis Control Division. CBD and non-intoxicating hemp products remain freely available.',
  },

  'new-york': {
    name: 'New York',
    abbreviation: 'NY',
    slug: 'new-york',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'New York banned the sale of Delta-8 THC products outside the licensed cannabis system. The Marijuana Regulation and Taxation Act (MRTA) and subsequent Office of Cannabis Management (OCM) regulations prohibit hemp-derived intoxicating cannabinoids from being sold in unlicensed retail settings.',
        statute: 'MRTA — Marijuana Regulation and Taxation Act',
      },
      delta9Hemp: {
        status: 'banned',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are banned outside the licensed cannabis dispensary system in New York. The OCM has taken enforcement action against retailers selling these products without a cannabis license.',
        statute: 'MRTA',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD derived from hemp is legal in New York and widely available in retail stores, health food shops, and online. Non-intoxicating CBD products are not subject to cannabis licensing.',
      },
      thca: {
        status: 'banned',
        label: 'THCA',
        detail:
          'THCA products are banned for retail sale outside the licensed cannabis system in New York. The OCM considers high-THCA hemp flower to be functionally equivalent to cannabis.',
        statute: 'MRTA',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned for retail sale outside the licensed cannabis system in New York under the broad MRTA regulations targeting intoxicating hemp-derived cannabinoids.',
        statute: 'MRTA',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned for sale outside the licensed cannabis system in New York. The OCM\'s regulations encompass all intoxicating hemp-derived cannabinoids.',
        statute: 'MRTA',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in New York both under MRTA regulations and as a synthetic cannabinoid not protected by the federal Farm Bill.',
        statute: 'MRTA',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in New York. However, given the state\'s broad ban on intoxicating hemp-derived cannabinoids under MRTA, THCP would almost certainly be treated as banned if enforcement occurs.',
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
      'New York has already banned hemp-derived intoxicating cannabinoids outside its licensed cannabis system. Federal changes would reinforce the existing state approach rather than create new impact.',
    notes:
      'New York\'s Office of Cannabis Management aggressively enforces bans on hemp-derived intoxicating cannabinoids sold outside licensed dispensaries. CBD and non-intoxicating topicals remain legal.',
  },

  'north-carolina': {
    name: 'North Carolina',
    abbreviation: 'NC',
    slug: 'north-carolina',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal and widely sold in North Carolina. SB 352 established the state\'s hemp program and does not specifically restrict Delta-8 derived from compliant hemp.',
        statute: 'SB 352',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal in North Carolina when they contain no more than 0.3% Delta-9 THC on a dry-weight basis. SB 352 aligns state law with the federal Farm Bill.',
        statute: 'SB 352',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD from hemp is fully legal in North Carolina. The state was among the early adopters of hemp-friendly legislation and CBD products are widely available.',
        statute: 'SB 352',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is legal in North Carolina. The state has not enacted restrictions targeting THCA specifically, and it is sold alongside other hemp-derived cannabinoids.',
        statute: 'SB 352',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal in North Carolina. The state\'s hemp program under SB 352 does not restrict hemp-derived cannabinoids beyond the 0.3% Delta-9 THC threshold.',
        statute: 'SB 352',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in North Carolina and available at hemp retailers across the state. SB 352 does not specifically restrict this cannabinoid.',
        statute: 'SB 352',
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
          'THCP has no specific legislation in North Carolina. While the state is generally permissive toward hemp-derived cannabinoids, THCP remains unaddressed in SB 352 or subsequent regulations.',
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
    ageRestriction: 18,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'North Carolina has a thriving hemp-derived cannabinoid market with minimal state-level restrictions. Federal restrictions on Delta-8 or hemp-derived THC would severely impact the state\'s retailers and manufacturers.',
    notes:
      'North Carolina is one of the most active hemp markets in the United States. SB 352 created a robust hemp program, and Delta-8 products are widely available at gas stations, smoke shops, and specialty retailers.',
  },

  'north-dakota': {
    name: 'North Dakota',
    abbreviation: 'ND',
    slug: 'north-dakota',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'banned',
        label: 'Delta-8 THC',
        detail:
          'North Dakota has banned Delta-8 THC and other intoxicating hemp-derived cannabinoids. The state explicitly added Delta-8 THC to its list of controlled substances, making its sale, possession, and distribution illegal.',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are heavily restricted in North Dakota. While hemp itself is legal under the state\'s agricultural program, intoxicating hemp-derived products face strict regulatory barriers.',
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
          'THCA is effectively banned in North Dakota under the state\'s broad prohibition on intoxicating hemp-derived cannabinoids. High-THCA products are treated as marijuana equivalents.',
      },
      hhc: {
        status: 'banned',
        label: 'HHC',
        detail:
          'HHC is banned in North Dakota as part of the state\'s comprehensive restriction on intoxicating hemp-derived cannabinoids.',
      },
      delta10: {
        status: 'banned',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is banned in North Dakota. The state\'s restrictions on hemp-derived intoxicating cannabinoids encompass Delta-10 along with other THC isomers.',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in North Dakota both under the state\'s ban on intoxicating hemp-derived cannabinoids and as a synthetic cannabinoid not protected by the Farm Bill.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in North Dakota. However, given the state\'s broad ban on intoxicating hemp-derived cannabinoids, THCP would almost certainly be treated as a banned substance.',
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
      'North Dakota has already banned most intoxicating hemp-derived cannabinoids. Federal restrictions would align with existing state law, while federal legalization could create pressure to revise the state\'s restrictive approach.',
    notes:
      'North Dakota is one of the most restrictive states for hemp-derived cannabinoids. Only non-intoxicating CBD products are readily available. The state has actively enforced its ban on Delta-8 and similar compounds.',
  },

  ohio: {
    name: 'Ohio',
    abbreviation: 'OH',
    slug: 'ohio',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Ohio. SB 57 established a regulatory framework for hemp-derived products, permitting the sale of Delta-8 and other hemp-derived cannabinoids that comply with the 0.3% Delta-9 THC limit.',
        statute: 'SB 57',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal in Ohio under SB 57, provided they contain no more than 0.3% Delta-9 THC on a dry-weight basis.',
        statute: 'SB 57',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Ohio and widely available. SB 57 explicitly permits the sale of hemp-derived CBD products that meet federal THC limits.',
        statute: 'SB 57',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is legal in Ohio. SB 57\'s regulatory framework does not specifically restrict THCA, and products are available at hemp retailers throughout the state.',
        statute: 'SB 57',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal in Ohio under the state\'s hemp-derived product framework established by SB 57. It is not specifically restricted.',
        statute: 'SB 57',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Ohio. SB 57 permits hemp-derived cannabinoids that comply with the federal 0.3% Delta-9 THC threshold.',
        statute: 'SB 57',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned as a synthetic cannabinoid. The DEA has determined it is not naturally occurring in hemp, and it is not protected under the Farm Bill or Ohio\'s SB 57.',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Ohio. While SB 57 broadly permits hemp-derived cannabinoids, THCP has not been explicitly addressed in the regulatory framework.',
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
      'Ohio\'s SB 57 framework is built on federal hemp definitions. Changes to the Farm Bill or federal cannabinoid scheduling would require Ohio to update its regulatory approach, potentially impacting its growing hemp market.',
    notes:
      'Ohio\'s SB 57 created one of the more structured state-level hemp product frameworks. The state also legalized recreational cannabis, but hemp-derived products remain separately regulated and widely available.',
  },

  oklahoma: {
    name: 'Oklahoma',
    abbreviation: 'OK',
    slug: 'oklahoma',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'legal',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is legal in Oklahoma. HB 3208 established the state\'s hemp regulatory framework and permits the sale of hemp-derived cannabinoids, including Delta-8, that comply with the 0.3% Delta-9 THC limit.',
        statute: 'HB 3208',
      },
      delta9Hemp: {
        status: 'legal',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are legal in Oklahoma when they contain no more than 0.3% Delta-9 THC on a dry-weight basis, as regulated under HB 3208.',
        statute: 'HB 3208',
      },
      cbd: {
        status: 'legal',
        label: 'CBD',
        detail:
          'CBD is fully legal in Oklahoma and is one of the most widely sold hemp products in the state. Oklahoma has a strong hemp and CBD retail market.',
        statute: 'HB 3208',
      },
      thca: {
        status: 'legal',
        label: 'THCA',
        detail:
          'THCA from hemp is legal in Oklahoma. HB 3208 does not specifically restrict THCA, and it is available at hemp retailers alongside other cannabinoid products.',
        statute: 'HB 3208',
      },
      hhc: {
        status: 'legal',
        label: 'HHC',
        detail:
          'HHC is legal in Oklahoma. The state\'s hemp regulatory framework under HB 3208 does not restrict HHC or other non-Delta-9 cannabinoids derived from compliant hemp.',
        statute: 'HB 3208',
      },
      delta10: {
        status: 'legal',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is legal in Oklahoma under HB 3208. The state permits hemp-derived cannabinoids that meet the federal 0.3% Delta-9 THC threshold.',
        statute: 'HB 3208',
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
          'THCP has no specific legislation in Oklahoma. While the state is generally permissive toward hemp-derived cannabinoids under HB 3208, THCP has not been explicitly addressed.',
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
    ageRestriction: 18,
    shippingIn: 'legal',
    shippingOut: 'legal',
    federalChangeImpact: 'high',
    federalChangeNote:
      'Oklahoma has one of the strongest hemp and CBD markets in the country. Federal restrictions on Delta-8 or hemp-derived THC would significantly impact the state\'s large number of hemp retailers and manufacturers.',
    notes:
      'Oklahoma has a robust hemp market with strong retail presence. HB 3208 provides regulatory structure while maintaining a business-friendly environment for hemp-derived products. The state also has one of the largest medical cannabis programs in the country.',
  },

  oregon: {
    name: 'Oregon',
    abbreviation: 'OR',
    slug: 'oregon',
    lastUpdated: '2026-04-01',
    compounds: {
      delta8: {
        status: 'restricted',
        label: 'Delta-8 THC',
        detail:
          'Delta-8 THC is restricted in Oregon. SB 1564 brought hemp-derived intoxicating cannabinoids under the Oregon Liquor and Cannabis Commission (OLCC) regulatory framework, requiring compliance with cannabis rules for retail sale.',
        statute: 'SB 1564',
      },
      delta9Hemp: {
        status: 'restricted',
        label: 'Delta-9 THC (Hemp)',
        detail:
          'Hemp-derived Delta-9 THC products are restricted in Oregon and regulated alongside cannabis products under SB 1564. Products must comply with OLCC standards for testing, labeling, and retail licensing.',
        statute: 'SB 1564',
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
          'THCA is restricted in Oregon under SB 1564. High-THCA hemp products are regulated through the OLCC alongside other intoxicating hemp-derived cannabinoids.',
        statute: 'SB 1564',
      },
      hhc: {
        status: 'restricted',
        label: 'HHC',
        detail:
          'HHC is restricted in Oregon under SB 1564. Intoxicating hemp-derived cannabinoids are regulated through the state\'s cannabis framework managed by the OLCC.',
        statute: 'SB 1564',
      },
      delta10: {
        status: 'restricted',
        label: 'Delta-10 THC',
        detail:
          'Delta-10 THC is restricted in Oregon. SB 1564 encompasses all intoxicating hemp-derived cannabinoids under the OLCC regulatory framework.',
        statute: 'SB 1564',
      },
      thco: {
        status: 'banned',
        label: 'THC-O',
        detail:
          'THC-O is banned in Oregon both under SB 1564 and as a synthetic cannabinoid not protected by the federal Farm Bill. The OLCC does not permit synthetic cannabinoids.',
        statute: 'SB 1564',
      },
      thcp: {
        status: 'gray',
        label: 'THCP',
        detail:
          'THCP has no specific legislation in Oregon. While SB 1564 broadly regulates intoxicating hemp-derived cannabinoids, THCP has not been explicitly named in the statute or OLCC guidance.',
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
      'Oregon already regulates hemp-derived intoxicating cannabinoids through its mature cannabis system. Federal changes would have limited additional impact, as the state has proactively addressed the hemp-cannabis regulatory gap.',
    notes:
      'Oregon was an early legal cannabis state and has proactively regulated hemp-derived intoxicating cannabinoids through SB 1564. The OLCC oversees both cannabis and intoxicating hemp products. Non-intoxicating CBD remains freely available.',
  },
};
