import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";

import { NAV_ITEMS } from "@/data/navigation";
import { useUIStore } from "@/store/useUIStore";
import { MegaMenu } from "./MegaMenu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import logo from "@/assets/logo.jpg";

function BrandMark() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-3"
      aria-label="Ponshankar Agencies Home"
    >
      <img
        src={logo}
        alt="Ponshankar Agencies Logo"
        className="h-9 w-auto object-contain md:h-10"
      />

      <div className="leading-none">
        <h1 className="font-display text-[22px] font-bold text-slate-900 md:text-[20px]">
          Ponshankar Agencies
        </h1>
      </div>
    </Link>
  );
}

export function Header() {
  const openMobileNav = useUIStore((state) => state.openMobileNav);
  const { pathname } = useLocation();

  const closeOnClick = () =>
    (document.activeElement as HTMLElement | null)?.blur();

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-white/95 backdrop-blur-[12px] backdrop-saturate-[180%]">
      <div className="container-px flex h-[68px] items-center justify-between gap-2 lg:h-[72px]">
        <BrandMark />

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const hasDropdown = Boolean(item.dropdown);
            const hasMega = Boolean(item.mega);
            const hasMenu = hasDropdown || hasMega;

            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <li key={item.label} className="group/mega relative">
                <NavLink
                  to={item.href}
                  end={item.href === "/"}
                  className={() =>
                    cn(
                      "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium capitalize tracking-normal transition-colors",
                      active
                        ? "bg-brand-50 text-brand-600"
                        : "text-ink-2 hover:text-brand-600"
                    )
                  }
                >
                  {item.label}

                  {hasMenu && (
                    <ChevronDown className="size-3.5 transition-transform group-hover/mega:rotate-180" />
                  )}
                </NavLink>

                {/* Dropdown Menu */}
                {hasDropdown && (
                  <div
                    className="
                      invisible
                      absolute
                      left-0
                      top-[calc(100%+12px)]
                      z-50
                      min-w-[320px]
                      translate-y-2
                      overflow-hidden
                      rounded-2xl
                      border
                      border-line
                      bg-white
                      opacity-0
                      shadow-[var(--shadow-lift)]
                      transition-all
                      duration-300
                      group-hover/mega:visible
                      group-hover/mega:translate-y-0
                      group-hover/mega:opacity-100
                    "
                  >
                    <div className="p-2">
                      {item.dropdown?.map((link) => (
                        <Link
                          key={link.label}
                          to={link.href}
                          onClick={closeOnClick}
                          className="
                            block
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-ink-2
                            transition-all
                            duration-200
                            hover:bg-brand-50
                            hover:text-brand-600
                          "
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu */}
                {item.mega && (
                  <MegaMenu
                    columns={item.mega}
                    title={item.label}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Contact Button */}
        <div className="hidden shrink-0 lg:flex">
          <Button asChild variant="navy" size="sm">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={openMobileNav}
          aria-label="Open menu"
          className="grid size-10 place-items-center rounded-lg text-ink lg:hidden"
        >
          <Menu className="size-6" />
        </button>
      </div>
    </header>
  );
}