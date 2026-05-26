import type { IndustryConfig } from '../../types/site';

const service = (name: string, description: string) => ({ name, description });
const faq = (question: string, answer: string) => ({ question, answer });

export const industryConfigs: IndustryConfig[] = [
  {
    id: 'drywall',
    name: 'Drywall Contractor',
    tone: 'rugged',
    heroHeadlinePatterns: ['Clean drywall work for {city} homes and remodels', 'Reliable drywall repair across {serviceArea}'],
    defaultServices: [
      service('Drywall installation', 'New walls, additions, garages, basements, and remodel-ready installation.'),
      service('Drywall repair', 'Cracks, holes, dents, water damage patches, and texture blending.'),
      service('Finishing and taping', 'Smooth finishing, taping, sanding, and paint-ready surfaces.'),
      service('Ceiling repair', 'Ceiling patches, sagging sections, and water-damage repair.'),
      service('Patch work', 'Small repairs handled cleanly for homeowners and property managers.'),
      service('Remodel drywall', 'Drywall support for kitchens, baths, rentals, and whole-room updates.')
    ],
    faqExamples: [
      faq('Can you match existing texture?', 'Most common textures can be matched closely after an in-person or photo review.'),
      faq('Do you handle small repair jobs?', 'Yes. Small patch and punch-list work is a strong fit.'),
      faq('How fast can you estimate?', 'Most requests can be reviewed within one business day.')
    ],
    ctaLanguage: { primaryLabel: 'Request a Free Estimate', secondaryLabel: 'See Recent Work', preference: 'both' },
    trustBadges: ['Clean job sites', 'Clear estimates', 'Texture matching', 'Local crew'],
    seoKeywords: ['drywall repair', 'drywall contractor', 'ceiling repair', 'drywall installation'],
    suggestedSections: ['EmergencyBanner', 'ServicesGrid', 'GalleryPreview', 'Testimonials', 'FAQSection'],
    imageHints: ['finished wall', 'drywall patch', 'paint-ready room'],
    emergencyEligible: true
  },
  {
    id: 'roofing',
    name: 'Roofing Company',
    tone: 'rugged',
    heroHeadlinePatterns: ['Roof repair and replacement for {city} properties'],
    defaultServices: [
      service('Roof repair', 'Leak repair, storm damage, flashing, vents, and missing shingles.'),
      service('Roof replacement', 'Full replacement planning with durable materials and clear timelines.'),
      service('Inspection', 'Photo-backed roof assessments for homeowners and property managers.')
    ],
    faqExamples: [faq('Do you inspect storm damage?', 'Yes. Inspection copy can be adapted for storm and insurance-related calls.')],
    ctaLanguage: { primaryLabel: 'Schedule Roof Inspection', secondaryLabel: 'View Roofing Services', preference: 'both' },
    trustBadges: ['Storm-ready', 'Photo estimates', 'Licensed crew', 'Warranty guidance'],
    seoKeywords: ['roof repair', 'roof replacement', 'roofing contractor'],
    suggestedSections: ['EmergencyBanner', 'ServicesGrid', 'ProcessSection', 'FAQSection'],
    imageHints: ['roof repair', 'shingles', 'inspection'],
    emergencyEligible: true
  },
  {
    id: 'landscaping',
    name: 'Landscaping Company',
    tone: 'friendly',
    heroHeadlinePatterns: ['Landscaping and lawn care that makes {city} properties easier to enjoy'],
    defaultServices: [
      service('Lawn care', 'Routine mowing, edging, trimming, and property upkeep.'),
      service('Landscape design', 'Planting plans, beds, borders, and curb-appeal improvements.'),
      service('Mulching', 'Seasonal mulch installation, bed cleanup, and weed reduction.'),
      service('Seasonal cleanup', 'Spring and fall cleanup for lawns, beds, leaves, and debris.'),
      service('Hardscaping', 'Patios, paths, stone edging, and outdoor living improvements.'),
      service('Maintenance', 'Recurring maintenance plans for homes and small commercial properties.')
    ],
    faqExamples: [faq('Do you offer recurring maintenance?', 'Yes. Maintenance plans can be weekly, biweekly, or seasonal.')],
    ctaLanguage: { primaryLabel: 'Request Landscaping Quote', secondaryLabel: 'Explore Services', preference: 'quotes' },
    trustBadges: ['Seasonal plans', 'Reliable crews', 'Curb appeal', 'Local routes'],
    seoKeywords: ['landscaping', 'lawn care', 'mulching', 'yard cleanup'],
    suggestedSections: ['ServicesGrid', 'GalleryPreview', 'ServiceAreaSection', 'Testimonials'],
    imageHints: ['finished landscape', 'mulch beds', 'lawn care']
  },
  {
    id: 'plumbing',
    name: 'Plumbing Company',
    tone: 'serious',
    heroHeadlinePatterns: ['Responsive plumbing help for {city} homes and businesses'],
    defaultServices: [
      service('Leak repair', 'Fixture, pipe, and under-sink leaks diagnosed and repaired.'),
      service('Drain cleaning', 'Clogs, slow drains, and recurring drain issues.'),
      service('Water heater service', 'Repair, replacement, and maintenance for common water heaters.')
    ],
    faqExamples: [faq('Do you offer urgent service?', 'Emergency messaging can be enabled for plumbing and repair industries.')],
    ctaLanguage: { primaryLabel: 'Call a Plumber', secondaryLabel: 'Request Service', preference: 'both' },
    trustBadges: ['Fast response', 'Licensed help', 'Upfront scope', 'Emergency ready'],
    seoKeywords: ['plumber', 'plumbing repair', 'drain cleaning', 'water heater repair'],
    suggestedSections: ['EmergencyBanner', 'ServicesGrid', 'FAQSection', 'ContactCTA'],
    imageHints: ['plumbing repair', 'sink repair', 'water heater'],
    emergencyEligible: true
  },
  {
    id: 'cleaning',
    name: 'Cleaning Company',
    tone: 'friendly',
    heroHeadlinePatterns: ['Reliable cleaning for {city} homes and workplaces'],
    defaultServices: [service('Residential cleaning', 'Recurring and one-time cleaning for busy households.'), service('Deep cleaning', 'Detailed cleaning for move-ins, move-outs, and seasonal resets.'), service('Office cleaning', 'Simple cleaning plans for small offices and local businesses.')],
    faqExamples: [faq('Do you bring supplies?', 'Supply details can be customized by the client profile.')],
    ctaLanguage: { primaryLabel: 'Request Cleaning Quote', secondaryLabel: 'See Cleaning Services', preference: 'quotes' },
    trustBadges: ['Reliable scheduling', 'Detail focused', 'Local team', 'Recurring plans'],
    seoKeywords: ['cleaning service', 'house cleaning', 'office cleaning'],
    suggestedSections: ['ServicesGrid', 'Testimonials', 'FAQSection'],
    imageHints: ['clean room', 'office cleaning', 'supplies']
  },
  {
    id: 'general-contractor',
    name: 'General Contractor',
    tone: 'premium',
    heroHeadlinePatterns: ['Project-ready contracting for {city} homes and properties'],
    defaultServices: [service('Remodeling', 'Kitchen, bath, basement, and whole-room project coordination.'), service('Repairs', 'Practical repair work for homes and rental properties.'), service('Project management', 'Scope, schedule, trade coordination, and client communication.')],
    faqExamples: [faq('Can you manage multiple trades?', 'Yes. Contractor profiles can emphasize coordination and planning.')],
    ctaLanguage: { primaryLabel: 'Discuss a Project', secondaryLabel: 'View Capabilities', preference: 'quotes' },
    trustBadges: ['Project planning', 'Trade coordination', 'Clear scope', 'Local references'],
    seoKeywords: ['general contractor', 'remodeling contractor', 'home renovation'],
    suggestedSections: ['ProcessSection', 'GalleryPreview', 'ServicesGrid'],
    imageHints: ['remodel project', 'construction detail', 'finished room']
  },
  {
    id: 'electrician',
    name: 'Electrician',
    tone: 'serious',
    heroHeadlinePatterns: ['Licensed electrical help for {city} homes and businesses'],
    defaultServices: [service('Electrical repair', 'Troubleshooting, outlets, switches, fixtures, and panels.'), service('Lighting installation', 'Interior, exterior, recessed, and security lighting.'), service('Panel upgrades', 'Panel replacement and capacity planning for modern electrical needs.')],
    faqExamples: [faq('Do you handle urgent electrical issues?', 'Emergency messaging can be enabled when the business offers it.')],
    ctaLanguage: { primaryLabel: 'Call an Electrician', secondaryLabel: 'Request Electrical Service', preference: 'both' },
    trustBadges: ['Licensed help', 'Safety first', 'Code-aware', 'Fast response'],
    seoKeywords: ['electrician', 'electrical repair', 'panel upgrade'],
    suggestedSections: ['EmergencyBanner', 'ServicesGrid', 'FAQSection'],
    imageHints: ['electrical panel', 'lighting installation', 'outlet repair'],
    emergencyEligible: true
  },
  {
    id: 'hvac',
    name: 'HVAC Company',
    tone: 'serious',
    heroHeadlinePatterns: ['Heating and cooling service for {city} comfort'],
    defaultServices: [service('AC repair', 'Diagnostics and repairs for cooling problems and poor performance.'), service('Furnace service', 'Heating repair, maintenance, and replacement recommendations.'), service('Maintenance plans', 'Seasonal tune-ups that help systems run efficiently.')],
    faqExamples: [faq('Do you offer seasonal maintenance?', 'Yes. Maintenance plan CTAs are included for HVAC profiles.')],
    ctaLanguage: { primaryLabel: 'Schedule HVAC Service', secondaryLabel: 'View Heating & Cooling', preference: 'both' },
    trustBadges: ['Seasonal tune-ups', 'Comfort focused', 'System diagnostics', 'Emergency ready'],
    seoKeywords: ['hvac repair', 'ac repair', 'furnace service'],
    suggestedSections: ['EmergencyBanner', 'ServicesGrid', 'ProcessSection'],
    imageHints: ['hvac system', 'air conditioner', 'furnace'],
    emergencyEligible: true
  },
  {
    id: 'painter',
    name: 'Painting Company',
    tone: 'friendly',
    heroHeadlinePatterns: ['Clean painting and prep for {city} homes and businesses'],
    defaultServices: [service('Interior painting', 'Room, trim, cabinet, and whole-home painting.'), service('Exterior painting', 'Exterior prep, painting, staining, and curb appeal updates.'), service('Color consultation', 'Helpful guidance for finishes, palettes, and project planning.')],
    faqExamples: [faq('Can you help choose colors?', 'Yes. Consultation copy can be included for painting profiles.')],
    ctaLanguage: { primaryLabel: 'Request Painting Estimate', secondaryLabel: 'See Recent Projects', preference: 'quotes' },
    trustBadges: ['Clean prep', 'Sharp lines', 'Premium finishes', 'Protected spaces'],
    seoKeywords: ['house painter', 'interior painting', 'exterior painting'],
    suggestedSections: ['GalleryPreview', 'ServicesGrid', 'Testimonials'],
    imageHints: ['painted room', 'exterior painting', 'color swatches']
  },
  {
    id: 'auto-repair',
    name: 'Auto Repair Shop',
    tone: 'serious',
    heroHeadlinePatterns: ['Straightforward auto repair for {city} drivers'],
    defaultServices: [service('Diagnostics', 'Check-engine lights, drivability issues, and clear repair recommendations.'), service('Brake service', 'Brake pads, rotors, inspections, and safety repairs.'), service('Routine maintenance', 'Oil changes, fluid service, belts, filters, and scheduled maintenance.')],
    faqExamples: [faq('Can I request an appointment online?', 'Yes. The contact form can act as a simple appointment request.')],
    ctaLanguage: { primaryLabel: 'Schedule Auto Service', secondaryLabel: 'View Repair Services', preference: 'both' },
    trustBadges: ['Clear diagnostics', 'Local shop', 'Maintenance plans', 'No-pressure advice'],
    seoKeywords: ['auto repair', 'mechanic', 'brake repair', 'car diagnostics'],
    suggestedSections: ['ServicesGrid', 'Testimonials', 'ContactCTA'],
    imageHints: ['auto bay', 'mechanic', 'brake repair']
  },
  {
    id: 'restaurant-cafe',
    name: 'Restaurant / Cafe',
    tone: 'friendly',
    heroHeadlinePatterns: ['Local food, coffee, and gathering space in {city}'],
    defaultServices: [service('Breakfast and lunch', 'A flexible menu section for daily favorites and seasonal items.'), service('Coffee and drinks', 'Coffee, tea, specialty drinks, and grab-and-go options.'), service('Catering', 'Simple catering or group ordering for local events and offices.')],
    faqExamples: [faq('Can the menu be added?', 'Yes. Services can be replaced with menu categories or specials.')],
    ctaLanguage: { primaryLabel: 'View Menu', secondaryLabel: 'Call the Cafe', preference: 'calls' },
    trustBadges: ['Local favorite', 'Fresh menu', 'Community space', 'Easy ordering'],
    seoKeywords: ['restaurant', 'cafe', 'coffee shop', 'local food'],
    suggestedSections: ['GalleryPreview', 'Testimonials', 'ContactCTA'],
    imageHints: ['cafe interior', 'coffee', 'prepared food']
  },
  {
    id: 'church-ministry',
    name: 'Church / Ministry',
    tone: 'compassionate',
    heroHeadlinePatterns: ['A welcoming community for {city} families'],
    defaultServices: [service('Worship gatherings', 'Service times, gatherings, and Sunday information.'), service('Community groups', 'Small groups, ministries, and ways to connect.'), service('Outreach', 'Local service, events, and support programs.')],
    faqExamples: [faq('What should I expect on a first visit?', 'First-visit copy can answer timing, parking, children, and accessibility questions.')],
    ctaLanguage: { primaryLabel: 'Plan a Visit', secondaryLabel: 'See Ministries', preference: 'calls' },
    trustBadges: ['Welcoming community', 'Family friendly', 'Local outreach', 'Service times'],
    seoKeywords: ['church', 'ministry', 'worship service', 'community outreach'],
    suggestedSections: ['AboutSection', 'FAQSection', 'ContactCTA'],
    imageHints: ['church gathering', 'community group', 'worship space']
  },
  {
    id: 'funeral-home',
    name: 'Funeral Home',
    tone: 'compassionate',
    heroHeadlinePatterns: ['Compassionate guidance for families in {city}'],
    defaultServices: [
      service('Funeral services', 'Personalized services that honor each family and loved one.'),
      service('Memorial services', 'Flexible memorial gatherings, tributes, and coordination support.'),
      service('Pre-planning', 'Thoughtful planning help for families who want clarity ahead of time.'),
      service('Cremation services', 'Simple cremation options with clear explanations and respectful care.'),
      service('Grief resources', 'Supportive materials and referrals for families after a loss.')
    ],
    faqExamples: [faq('Can we speak with someone before making decisions?', 'Yes. The site is designed around gentle first conversations.')],
    ctaLanguage: { primaryLabel: 'Speak with a Care Coordinator', secondaryLabel: 'Learn About Planning', preference: 'calls' },
    trustBadges: ['Respectful care', 'Private guidance', 'Family support', 'Community rooted'],
    seoKeywords: ['funeral home', 'memorial services', 'pre-planning', 'cremation services'],
    suggestedSections: ['AboutSection', 'ProcessSection', 'FAQSection', 'ContactCTA'],
    imageHints: ['chapel', 'family support', 'memorial flowers']
  },
  {
    id: 'generic-local-service',
    name: 'Generic Local Service Business',
    tone: 'friendly',
    heroHeadlinePatterns: ['Reliable local service for {city} customers'],
    defaultServices: [
      service('Primary service', 'A clear description of the core service customers request most often.'),
      service('Maintenance', 'Recurring or preventive help for customers who need ongoing support.'),
      service('Consultation', 'A guided first step for people who need advice before booking.')
    ],
    faqExamples: [faq('How do I get started?', 'Call, email, or send a request through the contact form.')],
    ctaLanguage: { primaryLabel: 'Request Service', secondaryLabel: 'View Services', preference: 'both' },
    trustBadges: ['Local team', 'Clear communication', 'Simple scheduling', 'Trusted service'],
    seoKeywords: ['local service', 'small business', 'service provider'],
    suggestedSections: ['ServicesGrid', 'Testimonials', 'FAQSection', 'ContactCTA'],
    imageHints: ['local service', 'finished work', 'team photo']
  }
];

const aliases: Partial<Record<string, IndustryConfig>> = {};
for (const config of industryConfigs) aliases[config.id] = config;

export const getIndustryConfig = (id: string) => aliases[id] ?? aliases['generic-local-service']!;
