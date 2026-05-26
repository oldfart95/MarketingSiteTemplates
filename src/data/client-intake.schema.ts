import type { ClientIntakeField } from '../types/site';

export const clientIntakeSchema: ClientIntakeField[] = [
  { id: 'businessName', label: 'Business name', type: 'text', required: true },
  { id: 'industry', label: 'What industry are you in?', type: 'select', required: true, options: ['drywall', 'roofing', 'landscaping', 'plumbing', 'cleaning', 'funeral home', 'general contractor', 'electrician', 'HVAC', 'painter', 'auto repair', 'restaurant / cafe', 'church / ministry', 'generic local service'] },
  { id: 'city', label: 'Main city or town', type: 'text', required: true },
  { id: 'serviceArea', label: 'Cities, towns, or neighborhoods you serve', type: 'multi-text', required: true },
  { id: 'phone', label: 'Best phone number for customers', type: 'tel', required: true },
  { id: 'email', label: 'Best email address', type: 'email', required: true },
  { id: 'address', label: 'Business address, if public', type: 'text', required: false },
  { id: 'slogan', label: 'Headline or slogan', type: 'text', required: false, helpText: 'Leave blank if you want one written from the industry defaults.' },
  { id: 'shortDescription', label: 'Short description of the business', type: 'textarea', required: true },
  { id: 'services', label: 'What services do you offer?', type: 'multi-text', required: true },
  { id: 'about', label: 'What should people know about your business?', type: 'textarea', required: true },
  { id: 'galleryImages', label: 'Do you have photos?', type: 'boolean', required: false },
  { id: 'testimonials', label: 'Do you have testimonials or reviews?', type: 'textarea', required: false },
  { id: 'trustBadges', label: 'What makes your business trustworthy?', type: 'multi-text', required: false },
  { id: 'ctaPreference', label: 'Do you want quote requests, phone calls, or both?', type: 'select', required: true, options: ['calls', 'quotes', 'both'] },
  { id: 'tone', label: 'What tone should the site use?', type: 'select', required: true, options: ['serious', 'friendly', 'premium', 'rugged', 'compassionate'] },
  { id: 'templatePreference', label: 'Template preference', type: 'select', required: false, options: ['classic-local-service', 'premium-dark', 'warm-family-business', 'bold-contractor'] },
  { id: 'socialLinks', label: 'Social links, if any', type: 'multi-text', required: false }
];
