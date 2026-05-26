import type { BusinessProfile } from '../../types/site';

export const plumbingDemo: BusinessProfile = {
  id: 'plumbing-demo',
  businessName: 'Blueline Plumbing Co.',
  industry: 'plumbing',
  city: 'Fort Worth, TX',
  serviceArea: ['Fort Worth', 'Arlington', 'Benbrook', 'Saginaw'],
  phone: '(817) 555-0187',
  email: 'service@bluelineplumbing.example',
  address: '7801 Camp Bowie Blvd, Fort Worth, TX 76116',
  slogan: 'Responsive plumbing repair with clear answers and clean work.',
  shortDescription: 'A practical plumbing service profile for repairs, drains, water heaters, and urgent household issues.',
  services: [
    { name: 'Leak Repair', description: 'Fixture, pipe, and under-sink leaks diagnosed and repaired.', featured: true },
    { name: 'Drain Cleaning', description: 'Clogs, slow drains, and recurring drain issues handled quickly.', featured: true },
    { name: 'Water Heater Service', description: 'Repair, replacement, and maintenance for common water heaters.' }
  ],
  about: 'Blueline Plumbing Co. is built around fast communication, practical repairs, and straightforward service explanations for homeowners.',
  galleryImages: [],
  testimonials: [
    { name: 'Megan H.', quote: 'They explained the issue clearly and fixed the leak the same day.' },
    { name: 'R. Castillo', quote: 'Professional, tidy, and easy to schedule.' }
  ],
  faqs: [
    { question: 'Do you offer urgent service?', answer: 'Emergency messaging can be enabled when the client offers after-hours service.' },
    { question: 'Can I request a quote online?', answer: 'Yes. The form can work as a quote request or mailto fallback.' }
  ],
  cta: { primaryLabel: 'Call a Plumber', secondaryLabel: 'Request Service', preference: 'both' },
  themePreference: 'clean-blue',
  templatePreference: 'classic-local-service',
  trustBadges: ['Fast response', 'Licensed help', 'Upfront scope', 'Emergency ready'],
  seo: {
    title: 'Plumbing Repair in Fort Worth | Blueline Plumbing Co.',
    description: 'Leak repair, drain cleaning, and water heater service in Fort Worth and nearby communities.',
    keywords: ['plumber Fort Worth', 'leak repair Fort Worth', 'drain cleaning Fort Worth']
  }
};
