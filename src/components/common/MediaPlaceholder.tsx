import type { LucideIcon } from 'lucide-react'
import type { MediaVariant } from '@/types'
import { cn } from '@/lib/utils'

const VARIANT_CLASS: Record<MediaVariant, string> = {
  water: 'media-water',
  commercial: 'media-commercial',
  industrial: 'media-industrial',
  infra: 'media-infra',
  agri: 'media-agri',
  drainage: 'media-drainage',
  sunset: 'media-sunset',
  tank: 'media-tank',
  steel: 'media-steel',
}

interface MediaPlaceholderProps {
  variant: MediaVariant
  icon?: LucideIcon
  className?: string
  iconClassName?: string
  children?: React.ReactNode
}

/** Swap-ready themed tile. Replace with a real <img> when photography is available. */
export function MediaPlaceholder({
  variant,
  icon: Icon,
  className,
  iconClassName,
  children,
}: MediaPlaceholderProps) {
  return (
    <div className={cn('media-tile', VARIANT_CLASS[variant], className)}>
      {Icon && (
        <Icon
          className={cn('size-12 text-white/85 [stroke-width:1.4]', iconClassName)}
          aria-hidden
        />
      )}
      {children}
    </div>
  )
}