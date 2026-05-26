import type { SiteTheme } from '../types/site';

export const siteThemes: SiteTheme[] = [
  {
    id: 'clean-blue',
    name: 'Clean Blue',
    primary: '#102033',
    secondary: '#0e7490',
    accent: '#fb923c',
    surface: '#eaf6fb',
    textSoft: '#475569',
    bodyClass: 'theme-professional'
  },
  {
    id: 'warm-amber',
    name: 'Warm Amber',
    primary: '#172033',
    secondary: '#b45309',
    accent: '#f59e0b',
    surface: '#fff4df',
    textSoft: '#5f5141',
    bodyClass: 'theme-service'
  },
  {
    id: 'care-green',
    name: 'Care Green',
    primary: '#243126',
    secondary: '#047857',
    accent: '#a78bfa',
    surface: '#edf7ef',
    textSoft: '#4d5f52',
    bodyClass: 'theme-trust-care'
  },
  {
    id: 'premium-charcoal',
    name: 'Premium Charcoal',
    primary: '#0b1120',
    secondary: '#d97706',
    accent: '#38bdf8',
    surface: '#e2e8f0',
    textSoft: '#64748b',
    bodyClass: 'theme-premium-dark'
  }
];

export const getSiteTheme = (id: string) => siteThemes.find((theme) => theme.id === id) ?? siteThemes[0];
