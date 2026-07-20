import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        'w-full rounded-md border-[1.5px] border-line-2 bg-white px-3.5 py-3 text-ink transition-all',
        'placeholder:text-muted-2 focus:outline-none focus:border-brand-500 focus:ring-[3px] focus:ring-brand-500/12',
        className,
      )}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

export { Input }