import type { NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: "About",
    href: "/about",
    dropdown: [
      {
        label: "Overview",
        href: "/about#hero",
      },
      {
        label: "Company Story",
        href: "/about#company-story",
      },
      {
        label: "Vision & Mission",
        href: "/about#vision-mission",
      },
      {
        label: "Our Journey",
        href: "/about#timeline",
      },
      {
        label: "Contact Us",
        href: "/contact",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    mega: [
      {
        heading: "Pipes & Fittings",
        links: [
          { label: "PVC Pipes", href: "/products/pipes-fittings" },
          { label: "CPVC Pipes", href: "/products/pipes-fittings" },
          { label: "UPVC Pipes", href: "/products/pipes-fittings" },
        ],
      },
      {
        heading: "Hoses & Fittings",
        links: [
          { label: "Garden Hoses", href: "/products/hoses-fittings" },
          { label: "Industrial Hoses", href: "/products/hoses-fittings" },
          { label: "Hose Accessories", href: "/products/hoses-fittings" },
        ],
      },
      {
        heading: "Valves & Cocks",
        links: [
          { label: "Ball Valves", href: "/products/valves-cocks" },
          { label: "Gate Valves", href: "/products/valves-cocks" },
          { label: "Control Valves", href: "/products/valves-cocks" },
        ],
      },
      {
        heading: "Allied Products",
        links: [
          { label: "Sealants", href: "/products/allied-products" },
          { label: "Solvent Cement", href: "/products/allied-products" },
          {
            label: "Bath Fittings & Sanitary Ware",
            href: "/products/bath-fittings",
            tag: "New",
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      {
        label: "Overview",
        href: "/solutions#hero",
      },
      {
        label: "Applications",
        href: "/solutions#applications",
      },
      {
        label: "Why Choose Us",
        href: "/solutions#why-us",
      },
      {
        label: "Trusted Brands",
        href: "/solutions#brands",
      },
    ],
  },
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