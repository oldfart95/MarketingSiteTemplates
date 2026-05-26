export type IndustryId =
  | 'drywall'
  | 'roofing'
  | 'landscaping'
  | 'plumbing'
  | 'cleaning'
  | 'funeral-home'
  | 'general-contractor'
  | 'electrician'
  | 'hvac'
  | 'painter'
  | 'auto-repair'
  | 'restaurant-cafe'
  | 'church-ministry'
  | 'generic-local-service';

export type TemplateId =
  | 'classic-local-service'
  | 'premium-dark'
  | 'warm-family-business'
  | 'bold-contractor';

export type TonePreference = 'serious' | 'friendly' | 'premium' | 'rugged' | 'compassionate';

export type ServiceItem = {
  name: string;
  description: string;
  featured?: boolean;
};

export type Testimonial = {
  name: string;
  quote: string;
  detail?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type GalleryImage = {
  src?: string;
  alt: string;
  label?: string;
};

export type CTAConfig = {
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref?: string;
  secondaryHref?: string;
  preference: 'calls' | 'quotes' | 'both';
};

export type SEOConfig = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
};

export type SiteTheme = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  textSoft: string;
  bodyClass: string;
};

export type IndustryConfig = {
  id: IndustryId;
  name: string;
  tone: TonePreference;
  heroHeadlinePatterns: string[];
  defaultServices: ServiceItem[];
  faqExamples: FAQItem[];
  ctaLanguage: CTAConfig;
  trustBadges: string[];
  seoKeywords: string[];
  suggestedSections: string[];
  imageHints: string[];
  emergencyEligible?: boolean;
};

export type TemplateConfig = {
  id: TemplateId;
  name: string;
  description: string;
  bestFor: IndustryId[];
  layoutStyle: 'bright' | 'dark' | 'warm' | 'rugged';
};

export type BusinessProfile = {
  id: string;
  businessName: string;
  industry: IndustryId;
  city: string;
  serviceArea: string[];
  phone: string;
  email: string;
  address?: string;
  slogan: string;
  shortDescription: string;
  services: ServiceItem[];
  about: string;
  galleryImages: GalleryImage[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  cta: CTAConfig;
  socialLinks?: { label: string; href: string }[];
  themePreference: string;
  templatePreference: TemplateId;
  trustBadges?: string[];
  process?: { title: string; description: string }[];
  seo: SEOConfig;
};

export type ActiveSiteConfig = {
  businessId: string;
  templateId: TemplateId;
  themeId: string;
};

export type ClientIntakeField = {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'email' | 'tel' | 'url' | 'select' | 'multi-text' | 'boolean';
  required: boolean;
  helpText?: string;
  options?: string[];
};
