import { drywallDemo } from './drywall-demo';
import { funeralHomeDemo } from './funeral-home-demo';
import { genericDemo } from './generic-demo';
import { landscapingDemo } from './landscaping-demo';
import { plumbingDemo } from './plumbing-demo';

export const businessProfiles = [
  drywallDemo,
  funeralHomeDemo,
  landscapingDemo,
  plumbingDemo,
  genericDemo
];

export const getBusinessProfile = (id: string) =>
  businessProfiles.find((profile) => profile.id === id) ?? drywallDemo;
