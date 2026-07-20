import type { MediaVariant } from '@/types'

export interface RangeProduct {
  num: string
  name: string
  description: string
  media: MediaVariant
  href: string
}

export const PRODUCT_RANGE: RangeProduct[] = [
  { num: '01', name: 'PVC Pipes', description: 'High-durability rigid pressure pipes for clean water supply and complex networks.', media: 'steel', href: '/products' },
  { num: '02', name: 'CPVC Systems', description: 'Sophisticated hot and cold water distribution systems engineered for longevity.', media: 'water', href: '/products' },
  { num: '03', name: 'SWR Systems', description: 'Soil, waste, and rain water management with world-class seals for leak-proof flow.', media: 'commercial', href: '/products' },
  { num: '04', name: 'Borewell Pipes', description: 'Lightweight, high-resistance column pipes designed for deep submersible use.', media: 'tank', href: '/products' },
  { num: '05', name: 'Water Tanks', description: 'Multi-layered storage tanks with antimicrobial properties for safe water storage.', media: 'tank', href: '/products' },
  { num: '06', name: 'Industrial Fittings', description: 'Precision-engineered valves and joints for chemical resistance and high pressure.', media: 'steel', href: '/products' },
  { num: '07', name: 'Agri Solutions', description: 'Drip irrigation and pressure piping for modern high-yield farming requirements.', media: 'agri', href: '/products' },
  { num: '08', name: 'DWC Pipes', description: 'Double wall corrugated pipes for large scale municipal sewerage and city drainage.', media: 'drainage', href: '/products' },
]