import type { MediaVariant } from '@/types'

export interface SpecializedSolution {
  id: string
  title: string
  description: string
  media: MediaVariant
  href: string
}

export const SPECIALIZED: SpecializedSolution[] = [
  { id: 'industrial-cpvc', title: 'Industrial CPVC', description: 'High-temperature, chemical-resistant systems for demanding industrial fluid transport.', media: 'industrial', href: '/products' },
  { id: 'pvc-infrastructure', title: 'PVC Infrastructure', description: 'Cost-effective, durable solutions for urban sewage and municipal water distribution.', media: 'water', href: '/products' },
  { id: 'agriculture-range', title: 'Agriculture Range', description: 'Optimized irrigation fittings and high-pressure pipes for large-scale agricultural projects.', media: 'agri', href: '/products' },
  { id: 'specialty-fittings', title: 'Specialty Fittings', description: 'Precision-engineered valves and couplings for complex architectural plumbing.', media: 'steel', href: '/products' },
]