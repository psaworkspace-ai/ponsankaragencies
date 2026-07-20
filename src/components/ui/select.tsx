import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          'w-full appearance-none rounded-md border-[1.5px] border-line-2 bg-white px-3.5 py-3 pr-10 text-ink transition-all',
          'focus:outline-none focus:border-brand-500 focus:ring-[3px] focus:ring-brand-500/12',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
    </div>
  ),
)
Select.displayName = 'Select'

export { Select }