export type BusinessData = {
  slug: string;
  templateType: 'service' | 'trust-care' | 'professional';
  niche: string;
  idealClient: string;
  problemSolved: string;
  keyPages: string[];
  businessName: string;
  tagline: string;
  city: string;
  serviceArea: string[];
  phone: string;
  email: string;
  address: string;
  services: { name: string; description: string }[];
  testimonials: { name: string; quote: string }[];
  galleryImages: { src: string; alt: string }[];
  primaryCTA: string;
  secondaryCTA: string;
  trustPoints: string[];
  objections: { concern: string; response: string }[];
  faqs: { question: string; answer: string }[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    surface: string;
  };
  seo: {
    title: string;
    description: string;
  };
  about: string;
};

export const businesses: BusinessData[] = [
  {
    slug: 'summit-home-services',
    templateType: 'service',
    niche: 'Drywall, painting, and handyman',
    idealClient: 'Homeowners, landlords, and property managers who need clean repair work without chasing a contractor for updates.',
    problemSolved: 'Turns small repairs and room refreshes into a clear estimate, scheduled visit, and clean finished result.',
    keyPages: ['Home', 'Services', 'About', 'Work & Reviews', 'Contact'],
    businessName: 'Summit Home Services',
    tagline: 'Drywall repairs, painting, and handyman work handled with care.',
    city: 'Boise, ID',
    serviceArea: ['Boise', 'Meridian', 'Nampa', 'Eagle'],
    phone: '(208) 555-0134',
    email: 'hello@summithomeservices.com',
    address: '1452 Fairview Ave, Boise, ID 83702',
    services: [
      { name: 'Drywall Repair', description: 'Holes, settlement cracks, water-damage patches, and texture blending handled with careful prep and a clean finish.' },
      { name: 'Interior Painting', description: 'Room refreshes, touch-ups, trim, and finish painting with protected floors, crisp edges, and straightforward scheduling.' },
      { name: 'Handyman Projects', description: 'Door adjustments, fixture swaps, trim repairs, punch-list work, and rental turnover tasks for busy owners and managers.' }
    ],
    testimonials: [
      { name: 'Tina R.', quote: 'They showed up on time, protected the room, and our living room walls look brand new.' },
      { name: 'Marcus P.', quote: 'The estimate was clear, the job stayed tidy, and I did not have to follow up twice to know what was happening.' }
    ],
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80', alt: 'Freshly painted living room wall' },
      { src: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=900&q=80', alt: 'Home repair project in progress' }
    ],
    primaryCTA: 'Call for a Free Estimate',
    secondaryCTA: 'See Recent Work',
    trustPoints: ['Photo-friendly estimates', 'Clean job sites', 'Texture matching', 'Rental turnover support'],
    objections: [
      { concern: 'Will this small job be worth their time?', response: 'Summit handles small repairs, punch lists, and room refreshes without making clients feel like an afterthought.' },
      { concern: 'Will the repair blend in?', response: 'Texture matching, sanding, primer, and paint finish notes are part of the repair conversation from the start.' },
      { concern: 'Will I know what it costs?', response: 'Clients get a practical scope, timing expectations, and material notes before work begins.' }
    ],
    faqs: [
      { question: 'Can you quote from photos?', answer: 'Often, yes. Photos help confirm the repair size, texture, access, and whether an in-person look is needed.' },
      { question: 'Do you work with landlords or property managers?', answer: 'Yes. Summit is a strong fit for punch lists, move-out repairs, and room refreshes between tenants.' },
      { question: 'What areas do you serve?', answer: 'The core service area includes Boise, Meridian, Nampa, and Eagle.' }
    ],
    theme: { primary: '#172033', secondary: '#b45309', accent: '#f59e0b', surface: '#fff4df' },
    seo: {
      title: 'Drywall & Painting in Boise | Summit Home Services',
      description: 'Drywall repair, interior painting, and handyman service in Boise, Meridian, Nampa, and Eagle.'
    },
    about: 'Summit Home Services is a Boise-area crew built for homeowners and property managers who want repairs handled cleanly, explained plainly, and finished without drama.'
  },
  {
    slug: 'peaceful-harbor-care',
    templateType: 'trust-care',
    niche: 'Family care, memorial support, and pre-planning',
    idealClient: 'Families who need a calm first conversation, private guidance, and practical support during sensitive decisions.',
    problemSolved: 'Gives families a respectful path from uncertainty to a clear next step without pressure or confusing language.',
    keyPages: ['Home', 'Services', 'About', 'Guidance & Reviews', 'Contact'],
    businessName: 'Peaceful Harbor Care',
    tagline: 'Compassionate guidance for families in tender seasons.',
    city: 'Greenville, SC',
    serviceArea: ['Greenville', 'Mauldin', 'Simpsonville', 'Travelers Rest'],
    phone: '(864) 555-0198',
    email: 'care@peacefulharbor.org',
    address: '210 Oak Chapel Rd, Greenville, SC 29601',
    services: [
      { name: 'Family Guidance', description: 'A private conversation to understand what happened, what decisions are ahead, and what support would be most helpful.' },
      { name: 'Memorial Services', description: 'Personal service coordination, remembrance planning, and gentle communication for family members and guests.' },
      { name: 'Pre-Planning Support', description: 'Clear, respectful planning for families who want decisions documented before a time of need.' }
    ],
    testimonials: [
      { name: 'The Howard Family', quote: 'Their staff cared for us with dignity and patience from the first phone call through the service.' },
      { name: 'L. Jordan', quote: 'They gave us room to breathe, answered questions clearly, and never made us feel rushed.' }
    ],
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=80', alt: 'Quiet chapel interior with natural light' },
      { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80', alt: 'Supportive family conversation' }
    ],
    primaryCTA: 'Speak with a Care Coordinator',
    secondaryCTA: 'Learn About Our Process',
    trustPoints: ['Private conversations', 'Gentle planning', 'Family-first pace', 'Greenville-area support'],
    objections: [
      { concern: 'We do not know what to ask first.', response: 'A care coordinator can begin with the basics and explain options in plain language.' },
      { concern: 'We are worried about being pressured.', response: 'The tone is intentionally calm, practical, and centered on what the family needs next.' },
      { concern: 'Our family is spread out.', response: 'Planning conversations can include relatives, caregivers, and decision-makers who need the same clear information.' }
    ],
    faqs: [
      { question: 'Can we call before we know what we need?', answer: 'Yes. The first conversation can simply help you understand options and immediate next steps.' },
      { question: 'Do you help with pre-planning?', answer: 'Yes. Peaceful Harbor supports private planning conversations and practical documentation.' },
      { question: 'Is our conversation private?', answer: 'Yes. Family details are handled with discretion, care, and respect.' }
    ],
    theme: { primary: '#243126', secondary: '#047857', accent: '#a78bfa', surface: '#edf7ef' },
    seo: {
      title: 'Compassionate Family Support in Greenville | Peaceful Harbor Care',
      description: 'Family guidance, memorial services, pre-planning, and compassionate support in Greenville, SC.'
    },
    about: 'Peaceful Harbor Care supports Greenville-area families with private guidance, thoughtful memorial coordination, and a calm process when decisions feel heavy.'
  },
  {
    slug: 'harbor-point-advisors',
    templateType: 'professional',
    niche: 'Accounting, bookkeeping, and advisory',
    idealClient: 'Small-business owners who need clean books, fewer tax surprises, and a financial partner who explains the numbers clearly.',
    problemSolved: 'Turns scattered financial information into monthly clarity, better decisions, and a consultation path that feels professional.',
    keyPages: ['Home', 'Services', 'About', 'Insights & Proof', 'Contact'],
    businessName: 'Harbor Point Advisors',
    tagline: 'Accounting and advisory services that make decisions clearer.',
    city: 'Columbus, OH',
    serviceArea: ['Columbus', 'Dublin', 'Westerville', 'Worthington'],
    phone: '(614) 555-0112',
    email: 'team@harborpointadvisors.com',
    address: '88 Market St, Columbus, OH 43215',
    services: [
      { name: 'Monthly Bookkeeping', description: 'Bank reconciliations, monthly close, owner-ready reports, and cleanup support for businesses that need dependable numbers.' },
      { name: 'Tax Preparation', description: 'Small-business and individual tax preparation with planning conversations before deadlines create pressure.' },
      { name: 'Business Advisory', description: 'Cash-flow reviews, owner compensation planning, and practical decision support for local service firms and shops.' }
    ],
    testimonials: [
      { name: 'Jenna K., Shop Owner', quote: 'They cleaned up our books and finally gave us reports we could use to make decisions.' },
      { name: 'Andre M., Contractor', quote: 'Professional, responsive, and very clear about what needed to happen before tax season.' }
    ],
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80', alt: 'Advisor reviewing financial reports' },
      { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80', alt: 'Professional office consultation table' }
    ],
    primaryCTA: 'Book a Consultation',
    secondaryCTA: 'View Services',
    trustPoints: ['Monthly close process', 'Plain-English reporting', 'Tax-aware planning', 'Owner-friendly advice'],
    objections: [
      { concern: 'Our books are behind.', response: 'Harbor Point can start with cleanup and build a monthly process once the numbers are reliable.' },
      { concern: 'We do not understand our reports.', response: 'Reports are paired with a short explanation of what changed, what matters, and what to decide next.' },
      { concern: 'We only hear from our accountant at tax time.', response: 'Monthly and quarterly advisory options keep planning visible throughout the year.' }
    ],
    faqs: [
      { question: 'Can you help if my books are messy?', answer: 'Yes. Cleanup projects can be scoped before moving into monthly bookkeeping.' },
      { question: 'Do you work with contractors and local service businesses?', answer: 'Yes. Harbor Point works well with owners who need job-cost clarity, cash-flow planning, and tax-ready books.' },
      { question: 'What happens in a consultation?', answer: 'The first call reviews your current system, reporting needs, deadlines, and the best next step.' }
    ],
    theme: { primary: '#102033', secondary: '#0e7490', accent: '#fb923c', surface: '#eaf6fb' },
    seo: {
      title: 'Local Accounting in Columbus | Harbor Point Advisors',
      description: 'Bookkeeping, tax preparation, and advisory services for small businesses in Columbus, OH.'
    },
    about: 'Harbor Point Advisors helps Columbus-area owners replace financial guesswork with dependable books, tax-aware planning, and advice they can actually use.'
  }
];

export const getBusiness = (slug: string) => businesses.find((b) => b.slug === slug);
