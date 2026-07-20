import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import type { MediaVariant } from '@/types'
import { MediaPlaceholder } from './MediaPlaceholder'
import { cn } from '@/lib/utils'

interface SmartImageProps {
  src?: string
  alt: string
  variant: MediaVariant
  icon?: LucideIcon
  className?: string
  iconClassName?: string
  imgClassName?: string
  eager?: boolean
}

/**
 * Real photo when `src` is provided; themed placeholder otherwise or on load error.
 * Drop files in src/assets and pass the import as `src`.
 */
export function SmartImage({
  src, alt, variant, icon, className, iconClassName, imgClassName, eager,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return <MediaPlaceholder variant={variant} icon={icon} className={className} iconClassName={iconClassName} />
  }

  return (
    <div className={cn('relative overflow-hidden bg-soft', className)}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFailed(true)}
        className={cn('size-full object-cover', imgClassName)}
      />
    </div>
  )
}