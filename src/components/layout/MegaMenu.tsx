import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

import type { NavColumn } from "@/types";

interface MegaMenuProps {
  columns: NavColumn[];
}

export function MegaMenu({ columns }: MegaMenuProps) {
  return (
    <div
      className="
        invisible
        absolute
        left-1/2
        top-[calc(100%+8px)]
        z-50

        w-[min(980px,92vw)]

        -translate-x-1/2
        translate-y-2

        overflow-hidden
        rounded-xl
        border
        border-line
        bg-white

        p-5

        opacity-0

        shadow-[var(--shadow-lift)]

        transition-all
        duration-200

        group-hover/mega:visible
        group-hover/mega:translate-y-0
        group-hover/mega:opacity-100
      "
    >
      {/* =====================================================
          MEGA MENU COLUMNS
      ===================================================== */}
      <div
        className="
          grid
          grid-cols-2
          gap-x-5
          gap-y-6
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {columns.map((column) => (
          <div key={column.heading}>

            {/* Column Heading */}
            <h5
              className="
                mb-2.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-brand-600
              "
            >
              {column.heading}
            </h5>

            {/* Links */}
            <div className="space-y-0.5">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="
                    group/link
                    flex
                    min-h-[34px]
                    items-center
                    justify-between
                    gap-3
                    rounded-lg
                    px-2.5
                    py-1.5
                    text-[13px]
                    font-medium
                    text-ink-2
                    transition-all
                    duration-200
                    hover:bg-brand-50
                    hover:text-brand-600
                  "
                >
                  <span
                    className="
                      transition-transform
                      duration-200
                      group-hover/link:translate-x-0.5
                    "
                  >
                    {link.label}
                  </span>

                  {link.tag && (
                    <Badge variant="tagNew">
                      {link.tag}
                    </Badge>
                  )}
                </Link>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}