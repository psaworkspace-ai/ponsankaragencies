import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'

interface NavProduct { label: string; href: string; tag?: string }
interface NavGroup { heading: string; products: NavProduct[] }

const GROUPS: NavGroup[] = [
  {
    heading: 'Plumbing',
    products: [
      { label: 'SmartFit Plus — CPVC', href: '/products/smartfit-plus' },
      { label: 'Easyfit PVC', href: '/products/easyfit-pvc' },
      { label: 'CPVC Pro System', href: '/products/cpvc-pro-system' },
    ],
  },
  {
    heading: 'Industrial',
    products: [
      { label: 'Industrial Ball Valve', href: '/products/industrial-ball-valve' },
      { label: 'Stainless Connector', href: '/products/stainless-connector' },
      { label: 'Flow Control Assembly', href: '/products/flow-control-assembly' },
    ],
  },
  {
    heading: 'Agriculture',
    products: [
      { label: 'Greenfit PPR-C', href: '/products/greenfit' },
      { label: 'HDPE Corrugated', href: '/products/hdpe-corrugated' },
      { label: 'Foamfit Insulation', href: '/products/foamfit-insulation' },
    ],
  },
  {
    heading: 'Storage & Drainage',
    products: [
      { label: 'Storefit Tanks', href: '/products/storefit' },
      { label: 'Aquafit Storage', href: '/products/aquafit-storage' },
      { label: 'Brass Gate Valve', href: '/products/brass-gate-valve', tag: 'New' },
    ],
  },
]

export function GalleryProductNav() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-px py-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <h5 className="mb-3 text-[.74rem] font-bold uppercase tracking-[0.12em] text-brand-600">
                {group.heading}
              </h5>
              <ul className="flex flex-col gap-1.5">
                {group.products.map((p) => (
                  <li key={p.label}>
                    <Link
                      to={p.href}
                      className="inline-flex items-center gap-2 text-[.88rem] font-medium text-ink-2 transition-colors hover:text-brand-600"
                    >
                      {p.label}
                      {p.tag && <Badge variant="new">{p.tag}</Badge>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}