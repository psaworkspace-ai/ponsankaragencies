import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { NAV_ITEMS } from "@/data/navigation";
import { useUIStore } from "@/store/useUIStore";
import { Sheet } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const { mobileNavOpen, closeMobileNav } = useUIStore();

  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Sheet open={mobileNavOpen} onClose={closeMobileNav}>
      <nav className="flex h-full flex-col overflow-y-auto px-4 pb-6 pt-12">
        {NAV_ITEMS.map((item) => {
          const subItems =
            item.dropdown ??
            item.mega?.flatMap((column) => column.links);

          const hasSub = Boolean(subItems?.length);
          const isOpen = expanded === item.label;

          return (
            <div
              key={item.label}
              className="border-b border-line py-1 last:border-none"
            >
              {/* Main Navigation */}
              <div className="flex items-center">
                <Link
                  to={item.href}
                  onClick={closeMobileNav}
                  className="
                    flex-1
                    rounded-lg
                    px-3
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
                  {item.label}
                </Link>

                {hasSub && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label}`}
                    onClick={() =>
                      setExpanded(isOpen ? null : item.label)
                    }
                    className="
                      grid
                      size-10
                      place-items-center
                      rounded-lg
                      text-muted
                      transition-all
                      hover:bg-brand-50
                    "
                  >
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                )}
              </div>

              {/* Sub Navigation */}
              {hasSub && (
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="ml-3 border-l border-line pl-4 pb-2">
                    {subItems!.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={closeMobileNav}
                        className="
                          block
                          rounded-lg
                          px-2
                          py-2
                          transition-all
                          duration-200
                          hover:bg-brand-50
                        "
                      >
                        <div className="text-sm font-medium text-ink-2">
                          {link.label}
                        </div>

                        {"description" in link &&
                          link.description && (
                            <p className="mt-1 text-xs text-muted">
                              {link.description}
                            </p>
                          )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </Sheet>
  );
}