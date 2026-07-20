import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold text-sm tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-[18px] [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40',
  {
    variants: {
      variant: {
        primary: 'bg-brand-600 text-white shadow-[var(--shadow-blue)] hover:bg-brand-700 hover:-translate-y-0.5',
        navy: 'bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5',
        outline: 'border-[1.5px] border-white/55 bg-white/[0.06] text-white hover:bg-white/[0.14]',
        ghost: 'border-[1.5px] border-line-2 bg-white text-ink hover:border-brand-400 hover:text-brand-600',
        white: 'bg-white text-navy-900 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]',
        link: 'text-brand-600 underline-offset-4 hover:underline',
      },
      // Item 31 — fixed heights so every button matches
      size: {
        default: 'h-11 px-6',
        lg: 'h-[52px] px-8 text-base',
        sm: 'h-9 px-4 text-xs',
        icon: 'size-11',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  block?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, block, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), block && 'w-full', className)
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>
      return React.cloneElement(child, { className: cn(classes, child.props.className) })
    }
    return <button ref={ref} className={classes} {...props}>{children}</button>
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }