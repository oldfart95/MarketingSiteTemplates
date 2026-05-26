import type { BusinessProfile } from '../../types/site';

export const funeralHomeDemo: BusinessProfile = {
  id: 'funeral-home-demo',
  businessName: 'Peaceful Harbor Care',
  industry: 'funeral-home',
  city: 'Greenville, SC',
  serviceArea: ['Greenville', 'Mauldin', 'Simpsonville', 'Travelers Rest'],
  phone: '(864) 555-0198',
  email: 'care@peacefulharbor.org',
  address: '210 Oak Chapel Rd, Greenville, SC 29601',
  slogan: 'Compassionate support for families in life’s most important moments.',
  shortDescription: 'A calm, trustworthy care team providing family guidance, memorial coordination, and supportive resources.',
  services: [
    { name: 'Family Guidance', description: 'Thoughtful planning support with clear, gentle communication.', featured: true },
    { name: 'Memorial Services', description: 'Personalized service coordination that honors each family.', featured: true },
    { name: 'Pre-Planning', description: 'Private conversations and practical next steps for families planning ahead.' }
  ],
  about: 'Peaceful Harbor Care provides respectful support centered on privacy, dignity, and meaningful personal attention. Every section of this site is written to feel helpful rather than pushy.',
  galleryImages: [
    { src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=80', alt: 'Quiet chapel interior with natural light', label: 'Peaceful setting' },
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80', alt: 'Support group meeting', label: 'Community support' }
  ],
  testimonials: [
    { name: 'The Howard Family', quote: 'Their staff cared for us with dignity and patience from start to finish.' },
    { name: 'L. Jordan', quote: 'A calming presence and practical help when we needed it most.' }
  ],
  faqs: [
    { question: 'Can we talk before making decisions?', answer: 'Yes. A first conversation can simply explain options and next steps.' },
    { question: 'Do you help with pre-planning?', answer: 'Yes. Pre-planning sections can be tailored for the family’s preferred process.' },
    { question: 'Can the tone be softer?', answer: 'Yes. All copy is structured and easy to adjust for sensitivity.' }
  ],
  cta: { primaryLabel: 'Speak with a Care Coordinator', secondaryLabel: 'Learn About Our Process', preference: 'calls' },
  themePreference: 'care-green',
  templatePreference: 'warm-family-business',
  trustBadges: ['Respectful care', 'Private guidance', 'Family support', 'Community rooted'],
  seo: {
    title: 'Compassionate Family Support in Greenville | Peaceful Harbor Care',
    description: 'Family guidance, memorial services, pre-planning, and community support in Greenville, SC.',
    keywords: ['funeral home Greenville', 'memorial services Greenville', 'pre-planning Greenville']
  }
};
