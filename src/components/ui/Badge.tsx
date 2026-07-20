import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md font-bold uppercase tracking-wider',
  {
    variants: {
      variant: {
        new: 'bg-signal text-white text-[.6rem] px-2.5 py-1',
        tag: 'bg-brand-500 text-white text-[.58rem] px-1.5 py-0.5 rounded-full',
        tagNew: 'bg-orange-500 text-white text-[.58rem] px-1.5 py-0.5 rounded-full',
      },
    },
    defaultVariants: { variant: 'new' },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }