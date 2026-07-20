import { cn } from '@/lib/utils'

interface MarqueeProps {
  items: readonly string[]
  variant?: 'brand' | 'feature'
  className?: string
}

export function Marquee({ items, variant = 'brand', className }: MarqueeProps) {
  const doubled = [...items, ...items]
  return (
    <div className={cn('overflow-hidden border-y border-line bg-white py-4', className)}>
      <div className={cn('flex w-max', variant === 'brand' ? 'gap-[60px] animate-marquee' : 'gap-10 animate-marquee-fast')}>
        {doubled.map((item, i) =>
          variant === 'brand' ? (
            <span key={i} className="whitespace-nowrap font-display text-[1.05rem] font-bold tracking-tight text-muted-2/70">{item}</span>
          ) : (
            <span key={i} className="flex items-center gap-2 whitespace-nowrap text-[.82rem] font-semibold text-ink-2/80 before:text-brand-500 before:content-['•']">{item}</span>
          ),
        )}
      </div>
    </div>
  )
}