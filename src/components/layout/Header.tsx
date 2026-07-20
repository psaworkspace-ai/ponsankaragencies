import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu } from 'lucide-react'
import { NAV_ITEMS } from '@/data/navigation'
import { useUIStore } from '@/store/useUIStore'
import { MegaMenu } from './MegaMenu'
import { Button } from '@/components/ui/button'
import logo from "@/assets/logo.jpg";
import { WhatsAppLink } from '@/components/common/WhatsAppLink'
import { cn } from '@/lib/utils'

function BrandMark() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-3"
      aria-label="Ponshankar Agencies Home"
    >
    <img
      src={logo}
      alt="Ponshankar Agencies"
      className="h-12 w-auto object-contain"
    />

      <div className="leading-none">
        <h1 className="font-display text-[28px] font-extrabold tracking-tight text-[#E10600]">
          PONSHANKAR
        </h1>

        <p className="mt-1 text-[16px] font-semibold tracking-[0.35em] text-[#E10600]">
          AGENCIES
        </p>
      </div>
    </Link>
  )
}

export function Header() {
  const openMobileNav = useUIStore((s) => s.openMobileNav)

  // Collapse a hover-open dropdown/mega after clicking a link inside it.
  const closeOnClick = () => (document.activeElement as HTMLElement | null)?.blur()

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-white/[0.94] backdrop-blur-[12px] backdrop-saturate-[180%]">
      <div className="container-px flex h-[76px] items-center justify-between gap-5">
        <BrandMark />

        <ul className="hidden items-center gap-1.5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const hasMenu = !!(item.dropdown || item.mega)
            return (
              <li key={item.label} className="group/mega relative">
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-[.8rem] font-semibold uppercase tracking-[0.06em] transition-colors',
                      isActive ? 'text-brand-600' : 'text-ink-2 hover:text-brand-600',
                    )
                  }
                >
                  {item.label}
                  {hasMenu && <ChevronDown className="size-3.5 transition-transform group-hover/mega:rotate-180" />}
                </NavLink>

                {item.dropdown && (
                  <div className="invisible absolute left-0 top-[calc(100%+10px)] z-50 min-w-[230px] translate-y-2 rounded-xl border border-line bg-white p-2.5 opacity-0 shadow-[var(--shadow-lift)] transition-all duration-200 group-hover/mega:visible group-hover/mega:translate-y-0 group-hover/mega:opacity-100">
                    {item.dropdown.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={closeOnClick}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:bg-brand-50 hover:text-brand-600"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}

                {item.mega && <MegaMenu columns={item.mega} />}
              </li>
            )
          })}
        </ul>

        <div className="hidden shrink-0 items-center gap-3.5 lg:flex">
          <WhatsAppLink />
          <Button asChild variant="navy">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          onClick={openMobileNav}
          aria-label="Open menu"
          className="grid size-[42px] place-items-center rounded-lg text-ink lg:hidden"
        >
          <Menu className="size-6" />
        </button>
      </div>
    </header>
  )
}