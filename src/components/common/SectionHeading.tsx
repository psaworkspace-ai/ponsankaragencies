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
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-3.5 inline-block text-[.74rem] font-bold uppercase tracking-[0.16em] text-brand-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.8rem,3.6vw,2.5rem)] font-bold">{title}</h2>
      {subtitle && <p className="mt-3.5 text-[1.02rem] text-muted">{subtitle}</p>}
      {rule && (
        <div
          className={cn(
            'mt-[18px] h-1 w-16 rounded bg-brand-600',
            align === 'center' && 'mx-auto',
          )}
        />
      )}
    </Reveal>
  )
}