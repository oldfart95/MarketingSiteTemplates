import type { BusinessProfile } from '../../types/site';

export const landscapingDemo: BusinessProfile = {
  id: 'landscaping-demo',
  businessName: 'Willow Ridge Landscaping',
  industry: 'landscaping',
  city: 'Asheville, NC',
  serviceArea: ['Asheville', 'Arden', 'Weaverville', 'Black Mountain'],
  phone: '(828) 555-0164',
  email: 'hello@willowridgelandscaping.com',
  address: '44 Meadow Lane, Asheville, NC 28801',
  slogan: 'Practical landscaping that makes outdoor spaces easier to enjoy.',
  shortDescription: 'A friendly landscaping company offering lawn care, planting, mulching, cleanup, and property maintenance.',
  services: [
    { name: 'Lawn Care', description: 'Routine mowing, edging, trimming, and property upkeep.', featured: true },
    { name: 'Landscape Design', description: 'Planting plans, beds, borders, and curb-appeal improvements.' },
    { name: 'Seasonal Cleanup', description: 'Spring and fall cleanup for lawns, beds, leaves, and debris.', featured: true }
  ],
  about: 'Willow Ridge Landscaping helps homeowners keep outdoor spaces healthy, attractive, and manageable through practical seasonal service.',
  galleryImages: [
    { src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80', alt: 'Landscaped garden path', label: 'Garden refresh' },
    { src: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=900&q=80', alt: 'Fresh lawn and landscaping', label: 'Lawn care' }
  ],
  testimonials: [
    { name: 'Dana W.', quote: 'Our yard finally looks intentional and easy to maintain.' },
    { name: 'Chris B.', quote: 'Reliable crew, great communication, and the cleanup was spotless.' }
  ],
  faqs: [
    { question: 'Do you offer recurring maintenance?', answer: 'Yes. Weekly, biweekly, and seasonal plans can be described in the profile.' },
    { question: 'Can you help with design ideas?', answer: 'Yes. The site can position design as a consultation or quote request.' }
  ],
  cta: { primaryLabel: 'Request Landscaping Quote', secondaryLabel: 'See Outdoor Work', preference: 'quotes' },
  themePreference: 'care-green',
  templatePreference: 'warm-family-business',
  trustBadges: ['Seasonal plans', 'Reliable crews', 'Local routes', 'Curb appeal'],
  seo: {
    title: 'Landscaping & Lawn Care in Asheville | Willow Ridge Landscaping',
    description: 'Lawn care, landscape design, mulching, cleanup, and maintenance in Asheville and nearby towns.',
    keywords: ['landscaping Asheville', 'lawn care Asheville', 'seasonal cleanup Asheville']
  }
};
