import { type BusinessData, businesses } from './templates';

export type PremiumFeatureSet = {
  promise: string;
  highlights: string[];
  packages: { name: string; price: string; description: string; features: string[] }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  resources: { title: string; description: string; category: string }[];
  team: { name: string; role: string; bio: string }[];
  hours: string;
};

const sharedProcess = [
  { step: '01', title: 'Quick fit check', description: 'A short call or message confirms timing, location, and what kind of help is needed.' },
  { step: '02', title: 'Clear recommendation', description: 'The client gets a plain-English plan with scope, next steps, and what to expect.' },
  { step: '03', title: 'Scheduled delivery', description: 'Work is booked around practical availability with reminders and easy contact options.' },
  { step: '04', title: 'Follow-through', description: 'The business checks that the client has what they need before closing the loop.' }
];

const premiumFeatures: Record<string, PremiumFeatureSet> = {
  'summit-home-services': {
    promise: 'A rugged home-service crew for repairs, room refreshes, and punch-list work that needs a clear estimate and a clean finished result.',
    highlights: ['Same-week estimates', 'Before-and-after photos', 'Neighborhood coverage', 'Property care plans'],
    packages: [
      { name: 'Small Repair Visit', price: 'From $185', description: 'A focused visit for punch-list items, holes, trim, fixtures, and small fixes.', features: ['Photo review before booking', 'Two-hour appointment window', 'Materials guidance'] },
      { name: 'Room Refresh', price: 'Custom quote', description: 'Drywall touch-ups, paint, and finish details for one or more rooms.', features: ['Written scope', 'Color and finish notes', 'Clean-site checklist'] },
      { name: 'Property Care Plan', price: 'Monthly', description: 'Ongoing handyman support for rentals, offices, and busy households.', features: ['Priority scheduling', 'Quarterly walkthrough', 'Simple recurring billing'] }
    ],
    process: sharedProcess,
    faqs: [
      { question: 'Can I send photos before scheduling?', answer: 'Yes. Photos help the team understand scope, materials, access, and whether an in-person visit is needed.' },
      { question: 'Does this work for emergency calls?', answer: 'It can. The alert band and contact sections are built to support urgent-call messaging.' },
      { question: 'Can the service areas become their own pages later?', answer: 'Yes. The service area section is structured so future local landing pages are straightforward.' }
    ],
    resources: [
      { title: 'Drywall Repair Cost Guide', description: 'A simple article slot for explaining common project ranges and what affects price.', category: 'Homeowner Guide' },
      { title: 'Paint Finish Cheat Sheet', description: 'A quick resource that helps homeowners choose matte, eggshell, satin, or semi-gloss.', category: 'Planning' },
      { title: 'Rental Turnover Checklist', description: 'A lead magnet idea for landlords and property managers.', category: 'Checklist' }
    ],
    team: [
      { name: 'Nolan Price', role: 'Owner / Lead Estimator', bio: 'Keeps projects scoped clearly and makes sure clients know what happens next.' },
      { name: 'Maya Serrano', role: 'Finish Specialist', bio: 'Handles paint detail, texture matching, and the final quality walkthrough.' }
    ],
    hours: 'Monday-Friday, 7:30 AM-5:30 PM'
  },
  'peaceful-harbor-care': {
    promise: 'Calm, respectful support for families who need privacy, reassurance, and a clear next step during sensitive decisions.',
    highlights: ['Guided inquiry path', 'Resource library', 'Care-team bios', 'Private consultation CTA'],
    packages: [
      { name: 'Initial Guidance Call', price: 'No-cost', description: 'A gentle starting point for families who need clarity before making decisions.', features: ['Private conversation', 'Next-step summary', 'Resource recommendations'] },
      { name: 'Family Support Plan', price: 'Custom', description: 'Coordinated help for care planning, memorial support, or family services.', features: ['Dedicated coordinator', 'Timeline planning', 'Community referrals'] },
      { name: 'Community Program', price: 'By program', description: 'Workshops, group support, and recurring community care offerings.', features: ['Event detail pages', 'RSVP-friendly copy', 'Follow-up resources'] }
    ],
    process: sharedProcess,
    faqs: [
      { question: 'Can the wording be made more sensitive?', answer: 'Yes. Every section is plain text in the data model so tone can be softened or made more formal.' },
      { question: 'Can this support nonprofit or ministry content?', answer: 'Yes. The resource, team, services, and process pages are intentionally flexible.' },
      { question: 'Does the form collect private medical details?', answer: 'No. The first inquiry should stay focused on basic contact information and the kind of support the family needs.' }
    ],
    resources: [
      { title: 'How to Prepare for a First Conversation', description: 'A reassuring guide for families who are unsure what to ask first.', category: 'Family Guide' },
      { title: 'Caregiver Support Resources', description: 'A curated resource slot for local programs, groups, and practical help.', category: 'Support' },
      { title: 'Planning Checklist', description: 'A printable-style checklist for decisions, documents, and family conversations.', category: 'Checklist' }
    ],
    team: [
      { name: 'Elaine Morris', role: 'Care Coordinator', bio: 'Helps families understand options with calm, respectful guidance.' },
      { name: 'Rev. Thomas Lee', role: 'Community Support Lead', bio: 'Connects clients with programs, pastoral support, and local resources.' }
    ],
    hours: 'Monday-Friday, 8:30 AM-5:00 PM'
  },
  'harbor-point-advisors': {
    promise: 'Practical accounting and advisory help for owners who need cleaner books, fewer surprises, and a clearer plan.',
    highlights: ['Consultation path', 'Package clarity', 'Industry focus', 'Resource hub'],
    packages: [
      { name: 'Startup Setup', price: 'From $650', description: 'A clean foundation for new owners who need books, payroll basics, and filing confidence.', features: ['Entity checklist', 'Chart of accounts', 'First reporting review'] },
      { name: 'Monthly Advisory', price: 'From $425/mo', description: 'Ongoing bookkeeping, reporting, and owner guidance for growing businesses.', features: ['Monthly close', 'Management reports', 'Quarterly planning call'] },
      { name: 'Tax + Strategy', price: 'Custom', description: 'Year-round tax preparation, planning, and decision support.', features: ['Tax calendar', 'Projection review', 'Owner compensation planning'] }
    ],
    process: sharedProcess,
    faqs: [
      { question: 'Can prospects self-select a package?', answer: 'Yes. Package cards clarify common starting points while still routing users to a consultation.' },
      { question: 'Can this support niche industries?', answer: 'Yes. Industry and resource sections can be swapped for contractors, retailers, clinics, or firms.' },
      { question: 'Can this connect to our existing tools?', answer: 'Yes. The site can point prospects to existing scheduling, payment, or client portal tools when needed.' }
    ],
    resources: [
      { title: 'Monthly Close Checklist', description: 'A practical article slot that shows business owners how organized books should feel.', category: 'Operations' },
      { title: 'Quarterly Tax Planning Guide', description: 'A lead-generation resource for owners who want fewer surprises.', category: 'Tax Planning' },
      { title: 'Cash Flow Dashboard Starter', description: 'A simple explanation of the numbers owners should watch each month.', category: 'Advisory' }
    ],
    team: [
      { name: 'Renee Whitaker', role: 'Principal Advisor', bio: 'Leads planning conversations and translates reports into owner decisions.' },
      { name: 'Cal Brooks', role: 'Client Accounting Lead', bio: 'Manages monthly close workflows, reconciliations, and reporting quality.' }
    ],
    hours: 'Monday-Thursday, 8:00 AM-5:00 PM; Friday by appointment'
  }
};

export const premiumBusinesses = businesses.map((business) => ({
  ...business,
  premium: premiumFeatures[business.slug]
}));

export type PremiumBusiness = BusinessData & { premium: PremiumFeatureSet };

export const getPremiumBusiness = (slug: string) => premiumBusinesses.find((business) => business.slug === slug);
