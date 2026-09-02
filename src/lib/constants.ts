export const SITE = {
  name: 'Ponsankar Agencies',
  tagline: 'Building Stronger Water Systems for Every Project',
  since: 1993,
  url: 'https://www.ponsankaragencies.in',
} as const

export const CONTACT = {
  phones: ['+91 98652 93333', '+91 98652 11114'],
  emails: ['ponsankared@gmail.com'],
  whatsapp: '91 98652 93333',
  address: {
    line1: '558, Sathy Road,',
    line2: 'Erode, Tamil Nadu - 638002',
    full: '558, Sathy Road, Erode, Tamil Nadu - 638002',
  },
  hours: ['Mon - Fri: 09:00 - 18:00', 'Sat: 09:00 - 13:00'],
} as const



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