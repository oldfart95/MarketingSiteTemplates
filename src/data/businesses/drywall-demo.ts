import type { BusinessProfile } from '../../types/site';

export const drywallDemo: BusinessProfile = {
  id: 'drywall-demo',
  businessName: 'Summit Home Services',
  industry: 'drywall',
  city: 'Boise, ID',
  serviceArea: ['Boise', 'Meridian', 'Nampa', 'Eagle'],
  phone: '(208) 555-0134',
  email: 'hello@summithomeservices.com',
  address: '1452 Fairview Ave, Boise, ID 83702',
  slogan: 'Reliable drywall, painting, and handyman work done right.',
  shortDescription: 'A locally owned crew focused on clean work, clear communication, and long-lasting finishes for homes and small properties.',
  services: [
    { name: 'Drywall Repair', description: 'Patch holes, fix cracks, and blend texture seamlessly.', featured: true },
    { name: 'Interior Painting', description: 'Clean prep, premium paint, and sharp lines in every room.', featured: true },
    { name: 'Handyman Projects', description: 'Doors, trim, fixtures, and punch-list tasks for busy homeowners.' }
  ],
  about: 'Summit Home Services helps homeowners and property managers finish repairs without the runaround. The crew keeps projects scoped clearly, protects the workspace, and leaves clients with clean, durable results.',
  galleryImages: [
    { src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80', alt: 'Freshly painted living room wall', label: 'Finished wall repair' },
    { src: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=900&q=80', alt: 'Home repair project in progress', label: 'Recent project' }
  ],
  testimonials: [
    { name: 'Tina R.', quote: 'They showed up on time and our living room walls look brand new.' },
    { name: 'Marcus P.', quote: 'Fast estimate, fair price, and no mess left behind.' }
  ],
  faqs: [
    { question: 'Can you handle small repairs?', answer: 'Yes. Small patches, texture matching, trim, and punch-list items are a strong fit.' },
    { question: 'How do estimates work?', answer: 'Send a few details and photos, then the team confirms scope, timing, and next steps.' },
    { question: 'Do you serve nearby cities?', answer: 'Yes. The main service area includes Boise, Meridian, Nampa, and Eagle.' }
  ],
  cta: { primaryLabel: 'Call for a Free Estimate', secondaryLabel: 'See Recent Work', preference: 'both' },
  themePreference: 'warm-amber',
  templatePreference: 'bold-contractor',
  trustBadges: ['Clean job sites', 'Clear estimates', 'Local crew', 'Texture matching'],
  process: [
    { title: 'Send project details', description: 'Photos and a short description help confirm the right next step.' },
    { title: 'Review the estimate', description: 'Get a clear recommendation with scope, timing, and expectations.' },
    { title: 'Get the work done', description: 'The crew protects the space, completes the job, and cleans up.' }
  ],
  seo: {
    title: 'Drywall Repair & Painting in Boise | Summit Home Services',
    description: 'Local drywall repair, painting, and handyman service in Boise, Meridian, Nampa, and Eagle.',
    keywords: ['Boise drywall repair', 'interior painting Boise', 'handyman Boise'],
    ogTitle: 'Summit Home Services',
    ogDescription: 'Reliable drywall, painting, and handyman work in Boise.'
  }
};
