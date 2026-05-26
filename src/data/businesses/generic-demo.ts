import type { BusinessProfile } from '../../types/site';

export const genericDemo: BusinessProfile = {
  id: 'generic-demo',
  businessName: 'Harbor Point Advisors',
  industry: 'generic-local-service',
  city: 'Columbus, OH',
  serviceArea: ['Columbus', 'Dublin', 'Westerville', 'Worthington'],
  phone: '(614) 555-0112',
  email: 'team@harborpointadvisors.com',
  address: '88 Market St, Columbus, OH 43215',
  slogan: 'Practical advisory services for local businesses.',
  shortDescription: 'A polished professional-services demo for consultants, advisors, repair offices, and local firms.',
  services: [
    { name: 'Monthly Support', description: 'Reliable ongoing help, reporting, and client communication.', featured: true },
    { name: 'Project Consulting', description: 'Focused recommendations for owners who need a clear plan.' },
    { name: 'Business Planning', description: 'Simple next-step planning for decisions, operations, and growth.', featured: true }
  ],
  about: 'Harbor Point Advisors helps local owners gain clarity with dependable support and direct, practical advice.',
  galleryImages: [
    { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80', alt: 'Advisor reviewing reports', label: 'Client meeting' },
    { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80', alt: 'Professional office consultation table', label: 'Planning session' }
  ],
  testimonials: [
    { name: 'Jenna K.', quote: 'They simplified our next steps and helped us make better decisions quickly.' },
    { name: 'Andre M.', quote: 'Professional, responsive, and always clear on what mattered next.' }
  ],
  faqs: [
    { question: 'Can this template work for my industry?', answer: 'Yes. The generic profile is meant to be a flexible starting point.' },
    { question: 'Can we change the tone?', answer: 'Yes. Tone, theme, industry, and template are configured separately.' }
  ],
  cta: { primaryLabel: 'Book a Consultation', secondaryLabel: 'View Services', preference: 'both' },
  themePreference: 'clean-blue',
  templatePreference: 'premium-dark',
  trustBadges: ['Clear recommendations', 'Local expertise', 'Responsive support', 'Owner-friendly advice'],
  seo: {
    title: 'Local Business Consulting in Columbus | Harbor Point Advisors',
    description: 'Professional consulting and support services for local businesses in Columbus, Dublin, Westerville, and Worthington.',
    keywords: ['local business consultant Columbus', 'business advisor Columbus', 'small business support']
  }
};
