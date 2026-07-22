import { GALLERY_ITEMS } from './gallery'

export interface ProductSpecification {
  label: string
  value: string
}

export interface ProductDetail {
  id: string
  shortDescription: string
  description: string

  specifications: ProductSpecification[]

  features: string[]

  applications: string[]

  sizes: string[]

  downloads: {
    brochure: string
    datasheet: string
  }
}

const DEFAULT_SPECIFICATIONS: ProductSpecification[] = [
  {
    label: 'Material',
    value: 'CPVC',
  },
  {
    label: 'Working Pressure',
    value: '16 kg/cm²',
  },
  {
    label: 'Temperature',
    value: '0°C to 93°C',
  },
  {
    label: 'Color',
    value: 'Ivory',
  },
  {
    label: 'Standard',
    value: 'ISI Certified',
  },
]

const DEFAULT_FEATURES = [
  'Leak Proof Joint',
  'High Strength',
  'Easy Installation',
  'Corrosion Resistant',
  'Chemical Resistant',
  'Long Service Life',
]

const DEFAULT_APPLICATIONS = [
  'Residential Plumbing',
  'Commercial Buildings',
  'Industrial Projects',
  'Hotels',
  'Hospitals',
  'Educational Institutions',
]

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {}

GALLERY_ITEMS.forEach((item) => {
  PRODUCT_DETAILS[item.id] = {
    id: item.id,

    shortDescription:
      'Premium Prince SmartFit Plus fitting manufactured for superior plumbing performance.',

    description:
      'Prince SmartFit Plus fittings are manufactured using premium quality CPVC compounds, providing leak-proof joints, excellent corrosion resistance, high temperature tolerance and long operational life. Suitable for residential, commercial and industrial plumbing applications.',

    specifications: DEFAULT_SPECIFICATIONS,

    features: DEFAULT_FEATURES,

    applications: DEFAULT_APPLICATIONS,

    sizes: [
      '½"',
      '¾"',
      '1"',
      '1¼"',
      '1½"',
      '2"',
    ],

    downloads: {
      brochure: '#',
      datasheet: '#',
    },
  }
})