export const SITE = {
  name: 'Ponshankar Agencies',
  tagline: 'Building Stronger Water Systems for Every Project',
  since: 1993,
  url: 'https://www.ponshankaragencies.com',
} as const

export const CONTACT = {
  phones: ['+91 44 2250 1234', '+91 98400 12345'],
  emails: ['info@ponshankaragencies.com', 'sales@ponshankaragencies.com'],
  whatsapp: '914422501234',
  address: {
    line1: '12/B, Industrial Estate, Guindy',
    line2: 'Chennai, Tamil Nadu - 600032',
    full: '12/B, Industrial Estate, Guindy, Chennai, Tamil Nadu - 600032',
  },
  hours: ['Mon - Fri: 09:00 - 18:00', 'Sat: 09:00 - 13:00'],
} as const

export const BRANDS = [
  'PRINCE PIPES', 'FINOLEX', 'ASTRAL', 'ASHIRVAD', 'AQUEL BATHWARE', 'HAURATON', 'SUPREME',
] as const

export const GALLERY_FEATURES = [
  'Up to 82°C', 'High tensile and impact strength', 'Freedom from toxicity',
  'Low thermal expansion', 'UV resistant', 'Consistent product quality', 'No corrosion',
] as const

export const STATS = [
  { value: '5000+', label: 'Projects Supported' },
  { value: '25+', label: 'Years Experience' },
  { value: '100%', label: 'Quality Assured' },
  { value: 'Global', label: 'Supply Network' },
] as const