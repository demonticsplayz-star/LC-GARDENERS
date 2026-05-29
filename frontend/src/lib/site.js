// Central brand data for LC Gardeners — single source of truth.

export const SITE = {
  name: "LC Gardeners",
  tagline: "Beautiful Landscapes. Reliable Service. Every Time.",
  phone: "(360) 513-4172",
  phoneHref: "tel:+13605134172",
  email: "Hoango1965@yahoo.com",
  emailHref: "mailto:Hoango1965@yahoo.com",
  serviceArea: "Vancouver, WA · 98682 & Surrounding Areas",
  ownerName: "Ervin",
};

export const IMAGES = {
  hero: "https://static.prod-images.emergentagent.com/jobs/032a391c-3f00-401b-bc51-1f5f841b6b72/images/94b5a4b8ed4ea9f47a426c3090ece167533b31d51d80e89b8a3c41cf359b806f.png",
  owner: "https://static.prod-images.emergentagent.com/jobs/032a391c-3f00-401b-bc51-1f5f841b6b72/images/4f58ce3c832f4f7a8b2c49f6958ac4bf76f6bf14d09819486735af7393aee261.png",
  serviceLawn: "https://static.prod-images.emergentagent.com/jobs/032a391c-3f00-401b-bc51-1f5f841b6b72/images/29ade603df04774ddddbde27e2730f918f639ab12712592760b0d1dd35f3ec40.png",
  serviceCleanup: "https://images.unsplash.com/photo-1634081727680-fa43e3237d5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHx5YXJkJTIwY2xlYW51cCUyMGxlYXZlc3xlbnwwfHx8fDE3ODAwOTcyNTR8MA&ixlib=rb-4.1.0&q=85",
  serviceHedge: "https://static.prod-images.emergentagent.com/jobs/032a391c-3f00-401b-bc51-1f5f841b6b72/images/656f5e5e810e9a87170ddbfb7b4cc024d165a2b11be72bd4439c011927fa56b0.png",
  serviceMulch: "https://static.prod-images.emergentagent.com/jobs/032a391c-3f00-401b-bc51-1f5f841b6b72/images/178299774a7dad20ffcccb5abc366a094648efeed93a0cffda32e3b049638acb.png",
  serviceGarden: "https://images.unsplash.com/photo-1595672049786-43da1581214c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxiZWF1dGlmdWwlMjBnYXJkZW4lMjBmbG93ZXJzfGVufDB8fHx8MTc4MDA5NzI1NHww&ixlib=rb-4.1.0&q=85",
  serviceProperty: "https://static.prod-images.emergentagent.com/jobs/032a391c-3f00-401b-bc51-1f5f841b6b72/images/edee6a16f00835b2aa29cfe4fc9ff6a09966b96164ddc34ab0f8889435f0d7d1.png",
  beforeAfter1: "https://static.prod-images.emergentagent.com/jobs/032a391c-3f00-401b-bc51-1f5f841b6b72/images/ce0db68e7c8bcdff00fda5e201d6474af436a967a7c80fc5617034a7516f9d50.png",
  beforeAfter2: "https://static.prod-images.emergentagent.com/jobs/032a391c-3f00-401b-bc51-1f5f841b6b72/images/88828d5849e73fb4c849059e75bb6312e74eee442db76af6440d7ef6b8959389.png",
};

export const SERVICES = [
  {
    title: "Lawn Maintenance",
    description: "Weekly and biweekly lawn care that keeps your grass crisp, healthy, and immaculately edged year-round.",
    image: IMAGES.serviceLawn,
    id: "lawn",
  },
  {
    title: "Yard Cleanups",
    description: "Thorough seasonal cleanups, leaf removal, and debris hauling — leaving your property ready for the next season.",
    image: IMAGES.serviceCleanup,
    id: "cleanup",
  },
  {
    title: "Hedge & Shrub Trimming",
    description: "Precise pruning and shaping that keeps your landscape architecture clean, polished, and full of life.",
    image: IMAGES.serviceHedge,
    id: "hedge",
  },
  {
    title: "Mulch Installation",
    description: "Fresh, premium mulch delivered and installed for that signature manicured, professionally finished look.",
    image: IMAGES.serviceMulch,
    id: "mulch",
  },
  {
    title: "Garden Maintenance",
    description: "Flower beds, perennials, and gardens cared for with attention to detail — every petal, every season.",
    image: IMAGES.serviceGarden,
    id: "garden",
  },
  {
    title: "Property Beautification",
    description: "End-to-end outdoor transformations that elevate curb appeal and the way your property feels to come home to.",
    image: IMAGES.serviceProperty,
    id: "property",
  },
];

export const REVIEWS = [
  {
    name: "Dan Tower",
    text: "We've used LC Gardeners for years. They do a good job and are very nice. Highly recommend.",
    real: true,
  },
  {
    name: "Jennifer Petersen",
    text: "I can always count on him to show up right on schedule. Reliable, every single time.",
    real: true,
  },
  {
    name: "Scott Tiniakos",
    text: "Always happy with their results. Fast, clean work and on time. Hard to find a crew this dependable.",
    real: true,
  },
  {
    name: "Megan R.",
    text: "Our yard has never looked better. Ervin and his team are professional, friendly, and quick.",
    real: false,
  },
  {
    name: "Robert H.",
    text: "Genuinely the easiest landscaping company we've ever worked with. Honest, hardworking, and on schedule.",
    real: false,
  },
  {
    name: "Linda K.",
    text: "Beautiful detail work on our beds and hedges. They treat the property like it's their own.",
    real: false,
  },
];

export const WHY_CHOOSE = [
  {
    title: "Reliable Scheduling",
    text: "We show up when we say we will — rain, shine, or full calendar.",
    icon: "CalendarCheck",
  },
  {
    title: "Years of Customer Trust",
    text: "Many of our clients have stayed with us for years. The relationship matters.",
    icon: "Handshake",
  },
  {
    title: "Fast Service",
    text: "Efficient crews who move quickly — without ever cutting corners.",
    icon: "Zap",
  },
  {
    title: "Professional Results",
    text: "Attention to detail on every blade, hedge, and bed we touch.",
    icon: "Sparkles",
  },
  {
    title: "Friendly Team",
    text: "A landscaping company you'll actually enjoy having on your property.",
    icon: "Smile",
  },
];

export const SOCIAL_PROOF_HIGHLIGHTS = [
  {
    title: "Years of Repeat Customers",
    quote: "We've used LC Gardeners for years.",
    icon: "Award",
  },
  {
    title: "Always On Schedule",
    quote: "I can always count on him to show up right on schedule.",
    icon: "Clock",
  },
  {
    title: "Fast & Clean",
    quote: "Always happy with their results. Fast, clean work and on time.",
    icon: "CheckCircle2",
  },
  {
    title: "Friendly Team",
    quote: "They are very nice people.",
    icon: "HeartHandshake",
  },
];
