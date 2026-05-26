export const offerSiteConfig = {
  formProviderName: '',
  formActionUrl: '',
  formMethod: 'post',
  intakeEmail: '',
  formSuccessMessage: 'Thanks. Your request has been sent, and the next step is a focused website review.',
  formFallbackMessage: 'This static preview is not connected to a form endpoint yet. Use the email fallback when an intake email is configured.',
  intakeFormUrl: '',
  intakeFormEmbedUrl: '',
  intakeFormProviderName: 'Google Forms',
  showEmbeddedIntakeForm: false,
  intakeEmailFallback: 'No intake form is connected yet. Use the email fallback when an intake email is configured.',
  serviceArea: 'Serving local businesses remotely from the U.S.',
  founderName: 'Daniel',
  founderLine: 'Work directly with Daniel on the copy, structure, build, and launch plan.',
  proofLine: 'FrontDoor is in pilot mode, using sample builds and a repeatable launch system while early client work is gathered.',
};

export const offerPackages = [
  {
    name: 'Starter Credibility Site',
    price: 'Starting at $1,500',
    eyebrow: 'Fast credibility',
    bestFor: 'Businesses that need to stop looking invisible online.',
    includes: [
      'Clean 4-5 page site',
      'Basic service copy',
      'Mobile layout',
      'Contact page and call-to-action',
      'Basic local SEO structure',
    ],
    notFor: 'Not for deeper messaging, complex proof sections, or custom layouts.',
    ctaLabel: 'Request Starter Plan',
  },
  {
    name: 'Professional Website Launch',
    price: 'Starting at $3,500',
    eyebrow: 'Recommended',
    bestFor: 'Businesses that need the site to explain, build trust, and help prospects choose them.',
    includes: [
      'Expanded copy',
      'Stronger homepage positioning',
      'Service detail',
      'FAQs',
      'Testimonials or proof sections',
      'Gallery or before/after structure',
      'Contact flow',
      'Deployment',
      'One revision round',
    ],
    notFor: 'Not for custom page designs from sketches or heavy brand exploration.',
    ctaLabel: 'Request Launch Plan',
    recommended: true,
  },
  {
    name: 'Custom Layout Build',
    price: 'Starting at $7,000',
    eyebrow: 'Custom direction',
    bestFor: 'Clients bringing a sketch, custom layout idea, stronger brand direction, or a site that should not follow the standard template structure.',
    includes: [
      'Custom homepage wireframe',
      'Section planning',
      'Design mockup pass',
      'Responsive interpretation',
      'Expanded page QA',
      'Extra revision scope',
    ],
    notFor: 'Not needed when the standard launch system already fits the project.',
    ctaLabel: 'Discuss Custom Layout',
  },
  {
    name: 'Monthly Care',
    price: 'Starting at $150/month',
    eyebrow: 'After launch',
    bestFor: 'Keeping the site updated after launch.',
    includes: [
      'One small update batch per month',
      'Photo swaps',
      'Seasonal updates',
      'Minor page improvements',
      'Priority support',
    ],
    notFor: 'New pages, redesigns, advanced SEO, ads, and large content projects are quoted separately.',
    ctaLabel: 'Ask About Care',
  },
];

export const serviceItems = [
  {
    title: 'Homepage Positioning',
    description: 'Clarifies who the business serves, what they do best, and why a prospect should keep reading instead of bouncing.',
  },
  {
    title: 'Service Page Structure',
    description: 'Turns scattered service notes into scannable sections with fit, scope, proof points, and clear paths to inquire.',
  },
  {
    title: 'Trust and Proof Messaging',
    description: 'Places reviews, credentials, before-and-after cues, guarantees, and local experience where they answer buyer hesitation.',
  },
  {
    title: 'Gallery or Before/After Setup',
    description: 'Creates a practical proof area for photos, project examples, captions, and future additions after launch.',
  },
  {
    title: 'Contact Flow',
    description: 'Gives visitors obvious next steps with package interest, timeline, project details, and preferred contact method.',
  },
  {
    title: 'Local SEO Basics',
    description: 'Adds page titles, service-area language, headings, metadata, and clean static structure for local search signals.',
  },
  {
    title: 'Website Copywriting & Message Cleanup',
    description: 'Uses intake questions, homepage positioning, service descriptions, about/trust copy, FAQs, calls to action, light local SEO structure, and tone cleanup so the site sounds professional while still sounding like the business.',
  },
];

export const copywritingOptions = [
  {
    name: 'Client-Provided Copy',
    bestFor: 'Best when the business already has service descriptions, about text, and basic contact info.',
    description: 'We polish, organize, and place usable copy so it fits the page structure and reads clearly on desktop and mobile.',
  },
  {
    name: 'Guided Copywriting',
    bestFor: 'Best when the business has rough notes but needs help turning them into website-ready copy.',
    description: 'We use intake questions and a short interview to write the main pages from real business details.',
  },
  {
    name: 'Full Copy + Positioning',
    bestFor: 'Best when the business needs help explaining the offer from scratch.',
    description: 'Includes customer questions, service framing, trust points, FAQs, and stronger page messaging.',
  },
];

export const copywritingAddOns = [
  {
    name: 'Copy Cleanup / Placement',
    price: 'Included when copy is ready before kickoff',
    description: 'For clients who provide usable service, about, contact, and proof copy. We polish the wording, clean up tone, and place it across the selected 4-5 page structure.',
  },
  {
    name: 'Guided Copywriting Add-On',
    price: 'Starting at $750',
    description: 'For rough notes, scattered ideas, or partial drafts. Includes intake questions, a short interview, main-page copy, basic FAQs, and call-to-action cleanup.',
  },
  {
    name: 'Full Copy + Positioning Add-On',
    price: 'Starting at $1,500',
    description: 'For businesses starting with little usable copy. Includes offer clarification, customer questions, service framing, trust points, FAQs, homepage messaging, and stronger calls to action.',
  },
];
