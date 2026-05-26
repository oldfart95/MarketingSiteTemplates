import type { TemplateConfig } from '../../types/site';

export const templateConfigs: TemplateConfig[] = [
  {
    id: 'classic-local-service',
    name: 'Classic Local Service',
    description: 'Clean, bright, trust-first layout with strong phone CTA and service cards.',
    bestFor: ['drywall', 'plumbing', 'cleaning', 'painter', 'generic-local-service'],
    layoutStyle: 'bright'
  },
  {
    id: 'premium-dark',
    name: 'Premium Dark',
    description: 'Elegant dark presentation for premium contractors, advisors, and visual businesses.',
    bestFor: ['general-contractor', 'roofing', 'auto-repair', 'generic-local-service'],
    layoutStyle: 'dark'
  },
  {
    id: 'warm-family-business',
    name: 'Warm Family Business',
    description: 'Soft, community-oriented design for care, faith, family, and hospitality organizations.',
    bestFor: ['funeral-home', 'church-ministry', 'restaurant-cafe', 'landscaping'],
    layoutStyle: 'warm'
  },
  {
    id: 'bold-contractor',
    name: 'Bold Contractor',
    description: 'Rugged, high-impact design with large hero, strong proof, and before/after feel.',
    bestFor: ['drywall', 'roofing', 'general-contractor', 'electrician', 'hvac'],
    layoutStyle: 'rugged'
  }
];

export const getTemplateConfig = (id: string) =>
  templateConfigs.find((template) => template.id === id) ?? templateConfigs[0];
