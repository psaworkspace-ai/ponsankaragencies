import { Link } from 'react-router-dom'
import type { NavColumn } from '@/types'
import { Badge } from '@/components/ui/badge'

interface MegaMenuProps {
  columns: NavColumn[]
}

export function MegaMenu({ columns }: MegaMenuProps) {
  return (
    <div
      className="invisible absolute left-1/2 top-[calc(100%+10px)] z-50 grid w-[min(1080px,94vw)] -translate-x-1/2 translate-y-2 grid-cols-4 gap-x-[30px] gap-y-6 rounded-2xl border border-line bg-white p-[30px_34px] opacity-0 shadow-[var(--shadow-lift)] transition-all duration-[240ms] group-hover/mega:visible group-hover/mega:translate-y-0 group-hover/mega:opacity-100"
    >
      {columns.map((col) => (
        <div key={col.heading}>
          <h5 className="mb-3 text-[.74rem] font-bold uppercase tracking-[0.12em] text-brand-600">
            {col.heading}
          </h5>
          {col.links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="flex items-center gap-2 py-[5px] text-[.82rem] font-medium text-ink-2 transition-colors hover:text-brand-600"
            >
              {link.label}
              {link.tag && <Badge variant="tagNew">{link.tag}</Badge>}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}