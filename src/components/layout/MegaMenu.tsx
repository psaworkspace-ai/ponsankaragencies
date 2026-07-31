import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { NavColumn } from "@/types";

interface MegaMenuProps {
  title?: string;
  columns: NavColumn[];
}

export function MegaMenu({ title, columns }: MegaMenuProps) {
  return (
    <div
      className="
        invisible
        absolute
        left-1/2
        top-[calc(100%+12px)]
        z-50
        w-[min(1080px,94vw)]
        -translate-x-1/2
        translate-y-2
        rounded-2xl
        border
        border-line
        bg-white
        p-8
        opacity-0
        shadow-[var(--shadow-lift)]
        transition-all
        duration-300
        group-hover/mega:visible
        group-hover/mega:translate-y-0
        group-hover/mega:opacity-100
      "
    >
      {/* Optional Title */}
      {title && (
        <div className="mb-6 border-b border-line pb-4">
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>
        </div>
      )}

      <div className="grid grid-cols-4 gap-8">
        {columns.map((column) => (
          <div key={column.heading}>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-600">
              {column.heading}
            </h5>

            <div className="space-y-1">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    px-2
                    py-2
                    text-sm
                    font-medium
                    text-ink-2
                    transition-all
                    duration-200
                    hover:bg-brand-50
                    hover:text-brand-600
                  "
                >
                  <span>{link.label}</span>

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