export const leeCountyWebDesignHub = {
  name: "Lee County",
  region: "Virginia",
  path: "/web-design/lee-county-va",
  title: "Web Design in Lee County, VA | Smith Digitals",
  description:
    "Custom web design for Lee County, Virginia businesses. Smith Digitals builds fast, credible websites designed to earn local visibility and turn visits into leads.",
};

export const leeCountyWebDesignLocations = [
  {
    slug: "pennington-gap",
    name: "Pennington Gap",
    county: "Lee County",
    relationship: "Lee County community",
    landscape:
      "Pennington Gap businesses compete for attention from both nearby residents and customers comparing options across the wider Powell Valley. A clear website helps a strong local reputation travel beyond word of mouth.",
    audience:
      "From downtown storefronts and professional services to contractors and appointment-based businesses, local companies need a site that quickly explains what they do, where they work, and how to take the next step.",
    priorities: [
      "Make services, hours, and contact details effortless to find on a phone",
      "Build location signals around Pennington Gap and the surrounding Lee County service area",
      "Turn referrals and Google searches into calls, quote requests, bookings, or visits",
    ],
    faqLead:
      "A focused Pennington Gap page can help search engines and customers understand that your business is relevant to people looking for services in town.",
  },
  {
    slug: "jonesville",
    name: "Jonesville",
    county: "Lee County",
    relationship: "Lee County community",
    landscape:
      "As the Lee County seat, Jonesville is home to professional offices, established local businesses, community organizations, and service companies that depend on trust. The website has to establish that trust before a customer ever calls.",
    audience:
      "A useful Jonesville business site should answer practical questions, show evidence of experience, and give customers throughout central Lee County a direct path to the right service.",
    priorities: [
      "Present an established, professional first impression that matches the real business",
      "Organize multiple services so customers can reach the right information quickly",
      "Support Jonesville visibility with clear local relevance and consistent business details",
    ],
    faqLead:
      "A Jonesville-focused page gives you room to describe the services you offer locally without forcing visitors to infer whether you serve their area.",
  },
  {
    slug: "ewing",
    name: "Ewing",
    county: "Lee County",
    relationship: "Lee County community",
    landscape:
      "Ewing businesses often serve customers across western Lee County and the surrounding tri-state area. That wider reach makes a precise service area and a fast mobile experience especially important.",
    audience:
      "Whether the business supports visitors, homeowners, farms, families, or other local companies, its website should make a specialized offer easy to discover from anywhere nearby.",
    priorities: [
      "Define the towns, counties, and cross-border areas the business genuinely serves",
      "Help mobile visitors act quickly with prominent directions, calls, and inquiry options",
      "Create useful service content that can compete beyond a single town name",
    ],
    faqLead:
      "An Ewing location page can connect your services to western Lee County searches while clearly describing any wider area you actually cover.",
  },
  {
    slug: "rose-hill",
    name: "Rose Hill",
    county: "Lee County",
    relationship: "Lee County community",
    landscape:
      "Rose Hill sits in a market where customers may look toward several nearby communities before choosing a provider. A polished local website lets a business compete on clarity and credibility, not just proximity.",
    audience:
      "Local shops, home-service providers, independent professionals, and community organizations benefit from content that answers real questions and removes doubt about availability or service area.",
    priorities: [
      "Differentiate the business from alternatives across western Lee County",
      "Show real work, services, or customer proof instead of relying on broad claims",
      "Connect Rose Hill search intent to a simple, trackable conversion path",
    ],
    faqLead:
      "A dedicated Rose Hill page can clarify local availability and give potential customers a more relevant entry point than a generic homepage.",
  },
  {
    slug: "st-charles",
    name: "St. Charles",
    county: "Lee County",
    relationship: "Lee County community",
    landscape:
      "For businesses and organizations serving St. Charles, a website can close the information gap between a personal recommendation and a confident decision. It gives people one reliable place to verify the details.",
    audience:
      "Service providers, community groups, and home-based businesses need straightforward pages that work well on slower connections, feel dependable, and make contact easy.",
    priorities: [
      "Keep the experience lightweight, responsive, and easy to use on any device",
      "Put essential details and calls to action ahead of unnecessary visual clutter",
      "Explain the St. Charles service area in language customers and search engines understand",
    ],
    faqLead:
      "A St. Charles page can serve as a useful local landing point when the content is specific, accurate, and connected to a real service you provide there.",
  },
  {
    slug: "dryden",
    name: "Dryden",
    county: "Lee County",
    relationship: "Lee County community",
    landscape:
      "Dryden businesses can draw customers from neighboring communities in both directions. The site should make that reach clear while still giving Dryden customers a page that feels directly relevant to them.",
    audience:
      "Contractors, local retailers, professional services, and community organizations need a digital presence that works as a practical sales tool rather than a static online brochure.",
    priorities: [
      "Balance Dryden-specific relevance with the broader towns the business serves",
      "Structure services around the questions customers ask before requesting a quote",
      "Use strong page speed and mobile usability to reduce lost local leads",
    ],
    faqLead:
      "A Dryden landing page helps customers immediately confirm that they are in your service area and find the most relevant next step.",
  },
  {
    slug: "keokee",
    name: "Keokee",
    county: "Lee County",
    relationship: "Lee County community",
    landscape:
      "Keokee businesses and organizations often serve people spread across a larger rural area. A well-structured website makes information available when a storefront, sign, or social media post cannot.",
    audience:
      "The strongest approach is practical: clear service descriptions, accurate coverage information, fast pages, and contact options built for customers arriving from search or a recommendation.",
    priorities: [
      "Make accurate business information available around the clock",
      "Reach customers beyond an immediate physical location without overstating coverage",
      "Build a durable search presence the business owns instead of depending only on social media",
    ],
    faqLead:
      "A Keokee-focused page can help a legitimate local service show up with information tailored to customers in that part of Lee County.",
  },
  {
    slug: "duffield",
    name: "Duffield",
    county: "Scott County",
    relationship: "Nearby Southwest Virginia community",
    landscape:
      "Duffield is in neighboring Scott County, but many businesses there naturally reach customers across the Lee–Scott area. A website should reflect that real market instead of forcing the business into an artificial county boundary.",
    audience:
      "For trades, service companies, shops, and independent professionals, the opportunity is to pair strong Duffield relevance with honest coverage across nearby Southwest Virginia communities.",
    priorities: [
      "Establish Duffield as the local focus while naming the wider service area accurately",
      "Create separate, useful service paths for residential and commercial customers when needed",
      "Build trust with concrete work examples, clear contact details, and a professional mobile experience",
    ],
    faqLead:
      "A Duffield page can support local visibility in Scott County and connect naturally to nearby Lee County service content when the business truly works in both areas.",
  },
];

export const getLeeCountyWebDesignLocation = (slug) =>
  leeCountyWebDesignLocations.find((location) => location.slug === slug);

export const getLeeCountyWebDesignPath = (slug) =>
  `${leeCountyWebDesignHub.path}/${slug}`;
