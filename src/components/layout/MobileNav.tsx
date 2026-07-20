import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { NAV_ITEMS } from '@/data/navigation'
import { useUIStore } from '@/store/useUIStore'
import { Sheet } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { WhatsAppLink } from '@/components/common/WhatsAppLink'
import { cn } from '@/lib/utils'

export function MobileNav() {
  const { mobileNavOpen, closeMobileNav } = useUIStore()
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <Sheet open={mobileNavOpen} onClose={closeMobileNav}>
      <nav className="flex h-full flex-col gap-1 overflow-y-auto px-5 pb-8 pt-20">
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
                  className="flex-1 rounded-lg px-3 py-3.5 text-sm font-semibold text-ink-2 hover:bg-soft"
                >
                  {item.label}
                </Link>
                {hasSub && (
                  <button
                    aria-label={`Toggle ${item.label}`}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="grid size-10 place-items-center rounded-lg text-muted hover:bg-soft"
                  >
                    <ChevronDown
                      className={cn('size-4 transition-transform', isOpen && 'rotate-180')}
                    />
                  </button>
                )}
              </div>
              {hasSub && isOpen && (
                <div className="ml-3 border-l border-line pl-3">
                  {sub!.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={closeMobileNav}
                      className="block py-2 text-[.85rem] text-muted hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
        <Button asChild block className="mt-4">
          <Link to="/contact" onClick={closeMobileNav}>Get a Quote</Link>
        </Button>
        <div className="mt-4 px-3">
          <WhatsAppLink />
        </div>
      </nav>
    </Sheet>
  )
}