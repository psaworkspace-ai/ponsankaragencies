import type { NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    dropdown: [
      { label: 'Company Overview', href: '/about' },
      { label: 'Infrastructure Portfolio', href: '/about' },
      { label: 'The Ponshankar Edge', href: '/about' },
      { label: 'Certifications & Quality', href: '/about' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    mega: [
      {
        heading: 'Plumbing',
        links: [
          { label: 'SmartFit Plus — CPVC', href: '/products/gallery' },
          { label: 'EasyFit — UPVC', href: '/products' },
          { label: 'EasyFit RE — Reclaim', href: '/products' },
        ],
      },
      {
        heading: 'Industrial',
        links: [
          { label: 'OneFit Corzan CPVC', href: '/products' },
          { label: 'GreenFit PP-R', href: '/products' },
          { label: 'GreenFit Blue', href: '/products' },
        ],
      },
      {
        heading: 'Agriculture',
        links: [
          { label: 'AquaFit Pressure', href: '/products' },
          { label: 'SafeFit Borewell', href: '/products' },
          { label: 'PeFit Aqua HDPE', href: '/products' },
        ],
      },
      {
        heading: 'Storage & Drainage',
        links: [
          { label: 'StoreFit Tanks', href: '/products' },
          { label: 'SilentFit SWR', href: '/products' },
          { label: 'DeciLo Drainage', href: '/products', tag: 'New' },
        ],
      },
    ],
  },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Contact', href: '/contact' },
]

export const FOOTER_COLUMNS = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Water Management', href: '/solutions' },
      { label: 'Industrial Piping', href: '/solutions' },
      { label: 'Agricultural Systems', href: '/solutions' },
      { label: 'Waste Management', href: '/solutions' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'CAD Library', href: '/products' },
      { label: 'Installation Guides', href: '/products' },
      { label: 'Compliance Docs', href: '/products' },
      { label: 'Project Case Studies', href: '/about' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Distribution Network', href: '/about' },
      { label: 'Contact Sales', href: '/contact' },
      { label: 'Partner Program', href: '/contact' },
      { label: 'Engineering Careers', href: '/about' },
    ],
  },
] as const