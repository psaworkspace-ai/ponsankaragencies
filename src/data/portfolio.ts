import { BadgeCheck, Truck, LifeBuoy, IndianRupee, Warehouse, Users } from 'lucide-react'
import type { CaseStudy, Feature } from '@/types'

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'metro', slug: 'metro-hub-systems', title: 'Metro Hub Systems', tag: 'Steel Industry',
    description: "Comprehensive drainage and fire protection network for the city's newest transit hub.",
    media: 'industrial', span: 'tall',
    location: 'Chennai, Tamil Nadu', year: '2023', scope: 'Drainage & Fire Protection',
    overview: "Ponshankar Agencies supplied the complete drainage and fire-suppression piping network for a major metropolitan transit hub. The project demanded high-diameter, fire-rated systems installed within a compressed construction schedule and coordinated across multiple contractor teams.",
    challenge: 'Deliver a fire-rated, high-capacity network across a live construction site with zero tolerance for schedule slippage.',
    result: 'The full network was delivered on time, passed fire-safety certification on first inspection, and continues to serve thousands of daily commuters.',
    stats: [{ label: 'Pipe Laid', value: '4.2 km' }, { label: 'Duration', value: '8 months' }, { label: 'Fittings', value: '3,500+' }],
  },
  {
    id: 'chennai', slug: 'chennai-industrial-estate', title: 'Chennai Industrial Estate', tag: 'Industrial',
    media: 'sunset',
    location: 'Ambattur, Chennai', year: '2022', scope: 'Industrial Process Piping',
    overview: 'A multi-unit industrial estate required chemical-resistant process piping across several manufacturing facilities. We provided CPVC and HDPE systems rated for aggressive media and continuous operation.',
    challenge: 'Standardise a chemical-resistant piping specification across diverse manufacturing tenants with varying process requirements.',
    result: 'A unified, maintainable piping standard was deployed estate-wide, reducing spares inventory and simplifying maintenance for every tenant.',
    stats: [{ label: 'Facilities', value: '12' }, { label: 'Duration', value: '6 months' }, { label: 'Media Types', value: '5' }],
  },
  {
    id: 'eco', slug: 'eco-housing-township', title: 'Eco Housing Township', tag: 'Residential',
    media: 'steel',
    location: 'Coimbatore, Tamil Nadu', year: '2023', scope: 'Residential Plumbing & Storage',
    overview: 'A large sustainable-housing township needed a complete potable-water plumbing and storage solution across hundreds of units, with an emphasis on water safety and efficiency.',
    challenge: 'Guarantee potable-water safety and consistent pressure across a sprawling low-rise township on a tight developer budget.',
    result: 'Every unit received a leak-free CPVC plumbing system and antimicrobial storage, delivered within budget and ahead of the handover date.',
    stats: [{ label: 'Units', value: '480' }, { label: 'Tanks', value: '520' }, { label: 'Duration', value: '10 months' }],
  },
  {
    id: 'ghats', slug: 'western-ghats-irrigation', title: 'Western Ghats Irrigation', tag: 'Agriculture',
    description: 'Optimized water distribution system covering 500+ acres of farmland.',
    media: 'tank', span: 'wide',
    location: 'Western Ghats, Tamil Nadu', year: '2021', scope: 'Agricultural Irrigation',
    overview: 'An agricultural cooperative required a high-pressure irrigation distribution network spanning hilly terrain to serve over 500 acres of farmland efficiently and reliably.',
    challenge: 'Maintain consistent pressure and flow across steep, uneven terrain while minimising water loss.',
    result: 'The optimised HDPE distribution network delivered reliable irrigation across the full acreage, improving crop yield and cutting water waste significantly.',
    stats: [{ label: 'Coverage', value: '500+ acres' }, { label: 'Pipe Laid', value: '11 km' }, { label: 'Duration', value: '5 months' }],
  },
]

export function getProjectBySlug(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug)
}

export const EDGE: Feature[] = [
  { id: 'quality', title: 'Certified Quality', description: 'Every product undergoes rigorous multi-stage quality checks to meet ISI and international standards.', icon: BadgeCheck },
  { id: 'delivery', title: 'Swift Delivery', description: 'Our robust logistics network ensures on-site delivery within committed timelines, keeping your projects on track.', icon: Truck },
  { id: 'support', title: 'Technical Support', description: 'Access expert guidance for material selection and installation best practices from our engineering team.', icon: LifeBuoy },
  { id: 'pricing', title: 'Competitive Pricing', description: 'We leverage deep manufacturer partnerships to provide the most competitive rates for bulk infrastructure orders.', icon: IndianRupee },
  { id: 'inventory', title: 'Massive Inventory', description: 'With 10,000+ sq. ft of warehousing, we maintain ready stock for even the largest industrial requirements.', icon: Warehouse },
  { id: 'partnership', title: 'Trusted Partnership', description: "We don't just sell pipes; we partner with you to ensure long-term structural integrity for your projects.", icon: Users },
]