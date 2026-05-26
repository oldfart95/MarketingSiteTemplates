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
    tagline: 'Reliable drywall, painting, and handyman work done right.',
    city: 'Boise, ID',
    serviceArea: ['Boise', 'Meridian', 'Nampa', 'Eagle'],
    phone: '(208) 555-0134',
    email: 'hello@summithomeservices.com',
    address: '1452 Fairview Ave, Boise, ID 83702',
    services: [
      { name: 'Drywall Repair', description: 'Patch holes, fix cracks, and blend texture seamlessly.' },
      { name: 'Interior Painting', description: 'Clean prep, premium paint, and sharp lines in every room.' },
      { name: 'Handyman Projects', description: 'Doors, trim, fixtures, and punch-list tasks for busy homeowners.' }
    ],
    testimonials: [
      { name: 'Tina R.', quote: 'They showed up on time and our living room walls look brand new.' },
      { name: 'Marcus P.', quote: 'Fast estimate, fair price, and no mess left behind.' }
    ],
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80', alt: 'Freshly painted living room wall' },
      { src: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=900&q=80', alt: 'Handyman repairing door frame' }
    ],
    primaryCTA: 'Call for a Free Estimate',
    secondaryCTA: 'See Recent Work',
    theme: { primary: '#172033', secondary: '#b45309', accent: '#f59e0b', surface: '#fff4df' },
    seo: {
      title: 'Drywall & Painting in Boise | Summit Home Services',
      description: 'Local drywall repair, painting, and handyman service in Boise and nearby cities.'
    },
    about: 'We are a locally owned crew focused on clean work, clear communication, and long-lasting finishes for every project.'
  },
  {
    slug: 'peaceful-harbor-care',
    templateType: 'trust-care',
    businessName: 'Peaceful Harbor Care',
    tagline: 'Compassionate support for families in life’s most important moments.',
    city: 'Greenville, SC',
    serviceArea: ['Greenville', 'Mauldin', 'Simpsonville', 'Travelers Rest'],
    phone: '(864) 555-0198',
    email: 'care@peacefulharbor.org',
    address: '210 Oak Chapel Rd, Greenville, SC 29601',
    services: [
      { name: 'Family Guidance', description: 'Thoughtful planning support with clear, gentle communication.' },
      { name: 'Community Support', description: 'Resources and programs for caregivers and loved ones.' },
      { name: 'Memorial Services', description: 'Personalized service coordination that honors each family.' }
    ],
    testimonials: [
      { name: 'The Howard Family', quote: 'Their staff cared for us with dignity and patience from start to finish.' },
      { name: 'L. Jordan', quote: 'A calming presence and practical help when we needed it most.' }
    ],
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=80', alt: 'Quiet chapel interior with natural light' },
      { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80', alt: 'Support group meeting' }
    ],
    primaryCTA: 'Speak with a Care Coordinator',
    secondaryCTA: 'Learn About Our Process',
    theme: { primary: '#243126', secondary: '#047857', accent: '#a78bfa', surface: '#edf7ef' },
    seo: {
      title: 'Compassionate Family Support in Greenville | Peaceful Harbor Care',
      description: 'Family guidance, community support, and memorial planning services in Greenville, SC.'
    },
    about: 'Our team provides calm, trustworthy care centered on respect, privacy, and meaningful personal attention.'
  },
  {
    slug: 'harbor-point-advisors',
    templateType: 'professional',
    businessName: 'Harbor Point Advisors',
    tagline: 'Practical accounting and advisory services for local businesses.',
    city: 'Columbus, OH',
    serviceArea: ['Columbus', 'Dublin', 'Westerville', 'Worthington'],
    phone: '(614) 555-0112',
    email: 'team@harborpointadvisors.com',
    address: '88 Market St, Columbus, OH 43215',
    services: [
      { name: 'Monthly Bookkeeping', description: 'Accurate books, reconciliations, and clear reporting every month.' },
      { name: 'Tax Preparation', description: 'Individual and small business filing support with year-round planning.' },
      { name: 'Business Consulting', description: 'Cash-flow planning and strategy sessions to guide better decisions.' }
    ],
    testimonials: [
      { name: 'Jenna K., Shop Owner', quote: 'They simplified our numbers and helped us make better decisions quickly.' },
      { name: 'Andre M., Contractor', quote: 'Professional, responsive, and always clear on next steps.' }
    ],
    galleryImages: [
      { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80', alt: 'Advisor reviewing financial reports' },
      { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80', alt: 'Professional office consultation table' }
    ],
    primaryCTA: 'Book a Consultation',
    secondaryCTA: 'View Services',
    theme: { primary: '#102033', secondary: '#0e7490', accent: '#fb923c', surface: '#eaf6fb' },
    seo: {
      title: 'Local Accounting in Columbus | Harbor Point Advisors',
      description: 'Bookkeeping, tax prep, and advisory services for small businesses in Columbus, OH.'
    },
    about: 'We help local owners gain financial clarity with dependable reporting and direct, practical advice.'
  }
];

export const getBusiness = (slug: string) => businesses.find((b) => b.slug === slug);
