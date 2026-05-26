export type BusinessData = {
  slug: string;
  templateType: 'service' | 'trust-care' | 'professional';
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
  proofIntro: string;
  contactPrompt: string;
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
    businessName: 'Summit Home Services',
    tagline: 'Drywall repair, painting, and small handyman work for Boise-area homes.',
    city: 'Boise, ID',
    serviceArea: ['Boise', 'Meridian', 'Nampa', 'Eagle'],
    phone: '(208) 555-0134',
    email: 'hello@summithomeservices.com',
    address: '1452 Fairview Ave, Boise, ID 83702',
    services: [
      { name: 'Drywall Repair', description: 'Patch holes, repair settlement cracks, replace damaged sections, and blend orange-peel or knockdown texture so the repair does not announce itself.' },
      { name: 'Interior Painting', description: 'Room refreshes, touch-ups, trim painting, and finish work with protected floors, clean edges, and careful prep.' },
      { name: 'Small Handyman Jobs', description: 'Trim repair, door adjustments, fixture swaps, punch-list tasks, and rental turnover fixes for homeowners and property managers.' }
    ],
    testimonials: [
      { name: 'Tina R.', quote: 'They protected the room, matched the wall texture, and left the space cleaner than they found it.' },
      { name: 'Marcus P.', quote: 'The estimate was clear, the repair blended in, and the before-and-after photos made the whole thing easy to trust.' }
    ],
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80', alt: 'Freshly painted living room wall' },
      { src: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=900&q=80', alt: 'Home repair project in progress' }
    ],
    primaryCTA: 'Call for a Free Estimate',
    secondaryCTA: 'See Before & After Proof',
    trustPoints: ['Free estimates', 'Clean job sites', 'Texture matching', 'Before-and-after proof'],
    objections: [
      { concern: 'Will the patch blend in?', response: 'Texture matching, sanding, primer, and paint finish notes are handled before the final walkthrough.' },
      { concern: 'Is my repair too small?', response: 'Small drywall repairs, trim fixes, and punch-list handyman jobs are a regular part of the schedule.' },
      { concern: 'Will my home stay clean?', response: 'Floors and furniture are protected, dust is contained where possible, and cleanup is part of the job.' }
    ],
    faqs: [
      { question: 'Can you quote from photos?', answer: 'Often, yes. Photos help confirm the repair size, texture, access, and whether an in-person look is needed.' },
      { question: 'Do you handle rental turnover repairs?', answer: 'Yes. Summit helps landlords and property managers with punch lists, touch-ups, trim, and drywall repairs between tenants.' },
      { question: 'What areas do you serve?', answer: 'Summit serves Boise, Meridian, Nampa, Eagle, and nearby homes when scheduling allows.' }
    ],
    proofIntro: 'Before-and-after photos help homeowners see the quality of texture matching, paint blending, and job-site cleanup before they call.',
    contactPrompt: 'Tell us what needs repairing, where the home is located, and whether you can send photos for a faster estimate.',
    theme: { primary: '#0f172a', secondary: '#1d4ed8', accent: '#f59e0b', surface: '#f8fafc' },
    seo: {
      title: 'Drywall & Painting in Boise | Summit Home Services',
      description: 'Drywall repair, interior painting, texture matching, trim repair, and small handyman jobs in Boise and nearby cities.'
    },
    about: 'Summit Home Services helps Boise-area homeowners and property managers finish drywall, painting, trim, and small repair projects without messy communication or messy job sites.'
  },
  {
    slug: 'peaceful-harbor-care',
    templateType: 'trust-care',
    businessName: 'Peaceful Harbor Care',
    tagline: 'Calm guidance for families making difficult decisions.',
    city: 'Greenville, SC',
    serviceArea: ['Greenville', 'Mauldin', 'Simpsonville', 'Travelers Rest'],
    phone: '(864) 555-0198',
    email: 'care@peacefulharbor.org',
    address: '210 Oak Chapel Rd, Greenville, SC 29601',
    services: [
      { name: 'Family Guidance', description: 'Private conversations that help families understand immediate needs, available choices, and the next respectful step.' },
      { name: 'Memorial Planning', description: 'Compassionate coordination for gatherings, remembrance details, family communication, and meaningful personal touches.' },
      { name: 'Aftercare Resources', description: 'Follow-up support, grief resources, local referrals, and practical guidance after the immediate arrangements are complete.' }
    ],
    testimonials: [
      { name: 'The Howard Family', quote: 'They explained everything gently and gave our family time to make decisions with dignity.' },
      { name: 'L. Jordan', quote: 'We felt cared for, never rushed, and always knew who to call with the next question.' }
    ],
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=80', alt: 'Quiet chapel interior with natural light' },
      { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80', alt: 'Supportive family conversation' }
    ],
    primaryCTA: 'Speak with a Care Coordinator',
    secondaryCTA: 'Learn About Our Process',
    trustPoints: ['Private guidance', 'Dignified planning', 'Aftercare resources', 'Calm coordination'],
    objections: [
      { concern: 'We do not know what to ask first.', response: 'The first conversation can begin with what happened, who needs support, and what decisions are time-sensitive.' },
      { concern: 'We need privacy.', response: 'Family details are handled with discretion, respect, and a calm pace.' },
      { concern: 'We are overwhelmed.', response: 'The care team helps organize next steps without pushing families faster than they are ready to move.' }
    ],
    faqs: [
      { question: 'Can we call before we know what we need?', answer: 'Yes. A care coordinator can explain immediate options and help you understand what matters first.' },
      { question: 'Do you help with memorial planning?', answer: 'Yes. Peaceful Harbor helps coordinate details, communication, remembrance elements, and family preferences.' },
      { question: 'Do you offer aftercare resources?', answer: 'Yes. Families can receive local referrals, grief-support resources, and practical follow-up guidance.' }
    ],
    proofIntro: 'Families look for signs of privacy, dignity, and steadiness before making a call. The experience is intentionally calm and clear.',
    contactPrompt: 'Share only what you are comfortable sharing. A care coordinator can help identify the next gentle step.',
    theme: { primary: '#1f2937', secondary: '#065f46', accent: '#7c3aed', surface: '#f9fafb' },
    seo: {
      title: 'Compassionate Family Support in Greenville | Peaceful Harbor Care',
      description: 'Family guidance, memorial planning, compassionate coordination, privacy, dignity, and aftercare resources in Greenville, SC.'
    },
    about: 'Peaceful Harbor Care supports Greenville-area families with private guidance, memorial planning, compassionate coordination, and aftercare resources during difficult decisions.'
  },
  {
    slug: 'harbor-point-advisors',
    templateType: 'professional',
    businessName: 'Harbor Point Advisors',
    tagline: 'Bookkeeping, tax prep, and advisory support for Columbus business owners.',
    city: 'Columbus, OH',
    serviceArea: ['Columbus', 'Dublin', 'Westerville', 'Worthington'],
    phone: '(614) 555-0112',
    email: 'team@harborpointadvisors.com',
    address: '88 Market St, Columbus, OH 43215',
    services: [
      { name: 'Monthly Bookkeeping', description: 'Bank reconciliations, monthly close, cleanup support, and owner-ready reports that make the numbers easier to use.' },
      { name: 'Tax Preparation', description: 'Small business and individual tax preparation with organized records, planning reminders, and fewer last-minute surprises.' },
      { name: 'Small Business Advisory', description: 'Cash-flow clarity, monthly reports, planning conversations, and practical guidance for Columbus-area owners.' }
    ],
    testimonials: [
      { name: 'Jenna K., Shop Owner', quote: 'Our monthly reports finally make sense, and we know what to look at before making decisions.' },
      { name: 'Andre M., Contractor', quote: 'They cleaned up our books, kept tax deadlines visible, and explained everything in plain language.' }
    ],
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80', alt: 'Advisor reviewing financial reports' },
      { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80', alt: 'Professional office consultation table' }
    ],
    primaryCTA: 'Book a Consultation',
    secondaryCTA: 'View Services',
    trustPoints: ['Monthly reports', 'Tax-ready records', 'Cash-flow clarity', 'Consultation booking'],
    objections: [
      { concern: 'Our books are behind.', response: 'Harbor Point can start with cleanup and create a monthly close process once the records are reliable.' },
      { concern: 'We do not understand the reports.', response: 'Reports are explained in plain language so owners know what changed and what to decide next.' },
      { concern: 'We only hear from our accountant at tax time.', response: 'Advisory support keeps cash flow, taxes, and planning visible throughout the year.' }
    ],
    faqs: [
      { question: 'Can you clean up prior months?', answer: 'Yes. Cleanup work can be scoped before moving into monthly bookkeeping or advisory support.' },
      { question: 'Do you work with local service businesses?', answer: 'Yes. Harbor Point is a fit for contractors, shops, consultants, and owner-led firms around Columbus.' },
      { question: 'What happens in a consultation?', answer: 'The first call reviews your current books, reporting needs, deadlines, tax concerns, and best next step.' }
    ],
    proofIntro: 'Business owners want to see practical clarity: organized books, understandable reports, and a professional consultation path.',
    contactPrompt: 'Tell us about your bookkeeping, tax, or cash-flow question and the best time to schedule a consultation.',
    theme: { primary: '#111827', secondary: '#0e7490', accent: '#f97316', surface: '#f8fafc' },
    seo: {
      title: 'Local Accounting in Columbus | Harbor Point Advisors',
      description: 'Bookkeeping, tax prep, cash-flow clarity, monthly reports, and advisory services for Columbus-area business owners.'
    },
    about: 'Harbor Point Advisors helps Columbus-area business owners replace financial guesswork with clean books, tax-ready records, monthly reports, and practical advisory conversations.'
  }
];

export const getBusiness = (slug: string) => businesses.find((b) => b.slug === slug);
