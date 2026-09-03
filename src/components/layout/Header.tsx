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
      className="
        flex
        shrink-0
        items-center
        gap-2.5
        sm:gap-3
      "
      aria-label="Ponshankar Agencies Home"
    >
      {/* Logo */}
      <div
        className="
          flex
          size-9
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-lg
          bg-white
          sm:size-10
        "
      >
        <img
          src={logo}
          alt="Ponshankar Agencies Logo"
          className="
            h-full
            w-full
            object-contain
          "
        />
      </div>

      {/* Brand Name */}
      <div className="leading-none">
        <h1
          className="
            font-display
            text-[18px]
            font-bold
            tracking-tight
            text-slate-900
            sm:text-[20px]
          "
        >
          Ponsankar Agencies
        </h1>

        <p
          className="
            mt-1
            hidden
            text-[9px]
            font-medium
            tracking-wide
            text-muted
            sm:block
          "
        >
        </p>
      </div>
    </Link>
  );
}

export function Header() {
  const openMobileNav = useUIStore(
    (state) => state.openMobileNav
  );

  const { pathname } = useLocation();

  const closeOnClick = () =>
    (document.activeElement as HTMLElement | null)?.blur();

  return (
    <header
      className="
        sticky
        top-0
        z-[100]
        border-b
        border-line
        bg-white/95
        backdrop-blur-[12px]
        backdrop-saturate-[180%]
      "
    >
      <div
        className="
          container-px
          flex
          h-[64px]
          items-center
          justify-between
          gap-3
          lg:h-[68px]
        "
      >

        {/* =====================================================
            BRAND
        ===================================================== */}
        <BrandMark />

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <nav
          className="
            hidden
            lg:flex
            lg:flex-1
            lg:justify-center
          "
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-0.5">

            {NAV_ITEMS.map((item) => {
              const hasDropdown = Boolean(item.dropdown);
              const hasMega = Boolean(item.mega);
              const hasMenu = hasDropdown || hasMega;

              const active =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <li
                  key={item.label}
                  className="group/mega relative"
                >

                  {/* =================================================
                      NAV LINK
                  ================================================= */}
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    className={() =>
                      cn(
                        `
                          flex
                          items-center
                          gap-1
                          rounded-lg
                          px-2.5
                          py-2
                          text-[13px]
                          font-medium
                          capitalize
                          tracking-normal
                          transition-all
                          duration-200
                        `,
                        active
                          ? "bg-brand-50 text-brand-600"
                          : "text-ink-2 hover:bg-brand-50/60 hover:text-brand-600"
                      )
                    }
                  >
                    {item.label}

                    {hasMenu && (
                      <ChevronDown
                        className="
                          size-3.5
                          transition-transform
                          duration-300
                          group-hover/mega:rotate-180
                        "
                      />
                    )}
                  </NavLink>

                  {/* =================================================
                      DROPDOWN
                  ================================================= */}
                  {hasDropdown && (
                    <div
                      className="
                        invisible
                        absolute
                        left-0
                        top-[calc(100%+8px)]
                        z-50
                        min-w-[280px]
                        translate-y-2
                        overflow-hidden
                        rounded-xl
                        border
                        border-line
                        bg-white
                        opacity-0
                        shadow-[var(--shadow-lift)]
                        transition-all
                        duration-200
                        group-hover/mega:visible
                        group-hover/mega:translate-y-0
                        group-hover/mega:opacity-100
                      "
                    >
                      <div className="p-1.5">
                        {item.dropdown?.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            onClick={closeOnClick}
                            className="
                              block
                              rounded-lg
                              px-3.5
                              py-2.5
                              text-[13px]
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

                  {/* =================================================
                      MEGA MENU
                  ================================================= */}
{item.mega && (
  <MegaMenu columns={item.mega} />
)}

                </li>
              );
            })}

          </ul>
        </nav>

        {/* =====================================================
            CONTACT BUTTON
        ===================================================== */}
        <div className="hidden shrink-0 lg:flex">
          <Button
            asChild
            variant="navy"
            size="sm"
            className="px-4"
          >
            <Link to="/contact">
              Contact
            </Link>
          </Button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <button
          type="button"
          onClick={openMobileNav}
          aria-label="Open menu"
          className="
            grid
            size-9
            place-items-center
            rounded-lg
            text-ink
            transition-colors
            hover:bg-brand-50
            hover:text-brand-600
            lg:hidden
          "
        >
          <Menu className="size-5" />
        </button>

      </div>
    </header>
  );
}