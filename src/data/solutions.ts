import {
  Droplets, Home, Building2, Factory, Share2, Waves,
  MessageSquare, Boxes, PencilRuler, Truck, HardHat, ShieldCheck,
  Cross, Sprout, BadgeCheck, LifeBuoy, IndianRupee, Warehouse, Users,
} from 'lucide-react'
import type { Solution, ProcessStep, Industry, Feature } from '@/types'

export const SOLUTIONS: Solution[] = [
  {
    id: 'water', slug: 'water-management',
    title: 'Water Management Solutions',
    description: 'Advanced piping systems for water supply, treatment plants, municipal distribution networks, and commercial water management projects.',
    detail: 'Our water management systems span the full cycle — from source extraction and treatment to distribution and metering. We supply corrosion-free pipes, precision valves, and monitoring assemblies engineered to deliver clean water reliably across municipal and commercial networks, minimising loss and maintenance over decades of service.',
    media: 'water', icon: Droplets,
    features: ['Leak-proof', 'Corrosion resistance', 'Long service life'],
    outcomes: ['Reduced water loss across the network', 'Lower lifetime maintenance cost', 'Compliance with potable water standards'],
  },
  {
    id: 'residential', slug: 'residential-plumbing',
    title: 'Residential Plumbing Solutions',
    description: 'Reliable hot and cold water distribution systems designed for homes, apartments, villas, and residential communities.',
    detail: 'From single homes to large residential townships, our plumbing systems deliver safe, quiet, and durable hot-and-cold water distribution. CPVC and PPR-C systems ensure leak-free joints, non-toxic water contact, and easy installation that keeps projects on schedule.',
    media: 'tank', icon: Home,
    features: ['Safe drinking water', 'Easy installation', 'Low maintenance'],
    outcomes: ['Safe, potable water at every outlet', 'Faster on-site installation', 'Quiet, leak-free operation'],
  },
  {
    id: 'commercial', slug: 'commercial-building',
    title: 'Commercial Building Solutions',
    description: 'High-performance piping systems for offices, hospitals, hotels, schools, and commercial facilities.',
    detail: 'Commercial buildings demand piping that meets code, handles high occupancy loads, and lasts. We provide fire-rated, high-pressure, and code-compliant systems for HVAC, plumbing, and drainage across offices, healthcare, and hospitality projects.',
    media: 'commercial', icon: Building2,
    features: ['Durable infrastructure', 'Efficient water flow', 'Code compliance'],
    outcomes: ['Building-code compliant installation', 'High-occupancy load handling', 'Reduced downtime and callbacks'],
  },
  {
    id: 'industrial', slug: 'industrial-piping',
    title: 'Industrial Piping Solutions',
    description: 'Heavy-duty piping systems engineered for manufacturing, chemical processing, and industrial fluid transportation.',
    detail: 'Industrial fluid systems face pressure, temperature, and chemical extremes. Our heavy-duty CPVC, HDPE, and metal piping — paired with industrial valves and instrumentation — transports aggressive media safely and reliably across processing plants and manufacturing lines.',
    media: 'industrial', icon: Factory,
    features: ['High pressure resistance', 'Chemical compatibility', 'Reliable operation'],
    outcomes: ['Safe transport of aggressive media', 'Minimal unplanned downtime', 'Extended asset life'],
  },
  {
    id: 'infrastructure', slug: 'infrastructure',
    title: 'Infrastructure Solutions',
    description: 'Comprehensive piping solutions supporting urban infrastructure, public utilities, and large-scale development projects.',
    detail: 'Large-scale infrastructure requires materials that install fast and last for generations. We supply high-diameter pipes, cable ducting, and surface-drainage systems for public utilities, roads, and municipal development projects — engineered for minimal maintenance across decades.',
    media: 'infra', icon: Share2,
    features: ['Large-scale deployment', 'Long lifecycle', 'Minimal maintenance'],
    outcomes: ['Rapid large-scale deployment', 'Multi-decade service life', 'Lower municipal upkeep'],
  },
  {
    id: 'drainage', slug: 'drainage-wastewater',
    title: 'Drainage & Wastewater',
    description: 'Efficient wastewater transportation and drainage systems designed for residential, commercial, and municipal applications.',
    detail: 'Effective drainage protects buildings and the environment. Our SWR and HDPE corrugated systems deliver smooth, high-capacity flow that resists blockage and chemical attack — from household soil-waste-rain lines to municipal stormwater networks.',
    media: 'drainage', icon: Waves,
    features: ['Smooth flow', 'Blockage resistance', 'Environmental safety'],
    outcomes: ['Blockage-resistant high flow', 'Environmentally safe disposal', 'Long buried service life'],
  },
]

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug)
}

export const PROCESS_STEPS: ProcessStep[] = [
  { id: 'consult', title: 'Consultation', description: 'Understanding your specific engineering requirements.', icon: MessageSquare },
  { id: 'select', title: 'Product Selection', description: 'Matching technical specs with the ideal piping system.', icon: Boxes },
  { id: 'support', title: 'Technical Support', description: 'Detailed blueprints and system architecture.', icon: PencilRuler },
  { id: 'supply', title: 'Supply & Logistics', description: 'Timely delivery through our robust supply network.', icon: Truck },
  { id: 'install', title: 'Installation', description: 'Guidance and best practices for safe on-site setup.', icon: HardHat },
  { id: 'reliability', title: 'Long-Term Reliability', description: 'Post-installation support and performance monitoring.', icon: ShieldCheck },
]

export const INDUSTRIES: Industry[] = [
  { id: 'residential', label: 'Residential', media: 'sunset', icon: Home },
  { id: 'commercial', label: 'Commercial', media: 'commercial', icon: Building2 },
  { id: 'healthcare', label: 'Healthcare', media: 'steel', icon: Cross },
  { id: 'manufacturing', label: 'Manufacturing', media: 'industrial', icon: Factory },
  { id: 'agriculture', label: 'Agriculture', media: 'agri', icon: Sprout },
  { id: 'infrastructure', label: 'Infrastructure', media: 'infra', icon: Share2 },
]

export const WHY_US: Feature[] = [
  { id: 'quality', title: 'Certified Quality', description: 'Every product undergoes rigorous multi-stage quality checks to meet ISI and international standards.', icon: BadgeCheck },
  { id: 'delivery', title: 'Swift Delivery', description: 'Our robust logistics network ensures on-site delivery within committed timelines.', icon: Truck },
  { id: 'techsupport', title: 'Technical Support', description: 'Access expert guidance for material selection and installation best practices.', icon: LifeBuoy },
  { id: 'pricing', title: 'Competitive Pricing', description: 'We leverage deep manufacturer partnerships to provide the most competitive rates for bulk orders.', icon: IndianRupee },
  { id: 'inventory', title: 'Massive Inventory', description: 'With 10,000+ sq. ft of warehousing, we maintain ready stock for the largest requirements.', icon: Warehouse },
  { id: 'partnership', title: 'Trusted Partnership', description: 'We partner with you to ensure long-term structural integrity for your projects.', icon: Users },
]