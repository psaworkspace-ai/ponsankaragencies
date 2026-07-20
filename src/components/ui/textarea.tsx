import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'w-full min-h-[110px] resize-y rounded-md border-[1.5px] border-line-2 bg-white px-3.5 py-3 text-ink transition-all',
        'placeholder:text-muted-2 focus:outline-none focus:border-brand-500 focus:ring-[3px] focus:ring-brand-500/12',
        className,
      )}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'

export { Textarea }