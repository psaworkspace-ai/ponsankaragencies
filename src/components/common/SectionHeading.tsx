import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  rule?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  rule = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-2 inline-block text-[11px] font-semibold tracking-wide text-brand-600 uppercase">
          {eyebrow}
        </span>
      )}

      <h2 className="text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted md:text-base">
          {subtitle}
        </p>
      )}

      {rule && (
        <div
          className={cn(
            'mt-4 h-1 w-14 rounded bg-brand-600',
            align === 'center' && 'mx-auto',
          )}
        />
      )}
    </Reveal>
  )
}