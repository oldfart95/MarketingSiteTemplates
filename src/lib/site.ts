import { activeSite } from '../data/site.config';
import { getBusinessProfile } from '../data/businesses';
import { getIndustryConfig } from '../data/industries';
import { getTemplateConfig } from '../data/templates/index';
import { getSiteTheme } from '../data/themes';
import type { BusinessProfile, GalleryImage } from '../types/site';

export const getActiveSite = () => {
  const business = getBusinessProfile(activeSite.businessId);
  const template = getTemplateConfig(activeSite.templateId || business.templatePreference);
  const theme = getSiteTheme(activeSite.themeId || business.themePreference);
  const industry = getIndustryConfig(business.industry);

  return { business, template, theme, industry };
};

export const getHeroHeadline = (business: BusinessProfile) => business.slogan;

export const getGalleryImages = (business: BusinessProfile): GalleryImage[] => {
  if (business.galleryImages.length > 0) return business.galleryImages;

  return [
    { alt: 'Recent project placeholder', label: 'Recent project' },
    { alt: 'Finished work placeholder', label: 'Finished work' },
    { alt: 'Service example placeholder', label: 'Service example' }
  ];
};

export const buildLocalBusinessJsonLd = (business: BusinessProfile) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: business.businessName,
  description: business.shortDescription,
  telephone: business.phone,
  email: business.email,
  address: business.address,
  areaServed: business.serviceArea,
  url: '/',
  makesOffer: business.services.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.name,
      description: service.description
    }
  }))
});
