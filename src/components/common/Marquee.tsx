import { cn } from '@/lib/utils'

interface BrandItem {
  name: string
  logo: string
}

interface MarqueeProps {
  items: readonly BrandItem[]
  variant?: 'brand'
  className?: string
}

export function Marquee({
  items,
  variant = 'brand',
  className,
}: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div
      className={cn(
        'overflow-hidden border-y border-line bg-slate-50 py-6',
        className
      )}
    >
      <div
        className={cn(
          'flex w-max items-center',
          variant === 'brand'
            ? 'gap-16 lg:gap-24 animate-marquee'
            : 'gap-10 animate-marquee-fast'
        )}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex h-14 items-center justify-center"
          >
            <img
              src={item.logo}
              alt={item.name}
              title={item.name}
              className="h-8 w-auto object-contain opacity-75 transition-all duration-300 hover:opacity-100 md:h-10 lg:h-12"
            />
          </div>
        ))}
      </div>
    </div>
  )
}