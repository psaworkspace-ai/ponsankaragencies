import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

import { NAV_ITEMS } from '@/data/navigation'
import { useUIStore } from '@/store/useUIStore'
import { Sheet } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export function MobileNav() {
  const { mobileNavOpen, closeMobileNav } = useUIStore()
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <Sheet open={mobileNavOpen} onClose={closeMobileNav}>
      <nav className="flex h-full flex-col gap-1 overflow-y-auto px-4 pt-12 pb-6">
        {NAV_ITEMS.map((item) => {
          const sub = item.dropdown ?? item.mega?.flatMap((c) => c.links)
          const hasSub = !!sub?.length
          const isOpen = expanded === item.label

          return (
            <div key={item.label}>
              <div className="flex items-center">
                <Link
                  to={item.href}
                  onClick={closeMobileNav}
                  className="flex-1 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:bg-soft hover:text-brand-600"
                >
                  {item.label}
                </Link>

                {hasSub && (
                  <button
                    aria-label={`Toggle ${item.label}`}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-soft"
                  >
                    <ChevronDown
                      className={cn(
                        'size-4 transition-transform duration-200',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>
                )}
              </div>

              {hasSub && isOpen && (
                <div className="ml-2 border-l border-line pl-3">
                  {sub!.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={closeMobileNav}
                      className="block py-1.5 text-sm text-muted transition-colors hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </Sheet>
  )
}