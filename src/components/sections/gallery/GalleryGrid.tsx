import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { GALLERY_ITEMS } from '@/data/gallery'
import { useGalleryStore } from '@/store/useGalleryStore'
import { SmartImage } from '@/components/common/SmartImage'
import { GALLERY_IMAGES } from '@/data/images'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { cn } from '@/lib/utils'

const CAT_ACCENT: Record<string, string> = {
  fabricated: 'text-orange-500',
  solvent: 'text-amber-500',
  brass: 'text-brand-700',
}

export function GalleryGrid() {
  const { filter, visibleCount, loadMore } = useGalleryStore()

  const filtered = useMemo(
    () => (filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter)),
    [filter],
  )
  const visible = filtered.slice(0, visibleCount)
  const hasMore = visible.length < filtered.length

  return (
    <>
      <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {visible.map((item, i) => (
          <Reveal key={item.id} delay={(i % 5) * 0.04}>
            <Link
              to="/products/smartfit-plus"
              className="group relative block h-full overflow-hidden rounded-xl border border-brand-100 bg-white transition-all duration-[240ms] hover:-translate-y-1.5 hover:border-brand-400 hover:shadow-[var(--shadow-card)]"
            >
              {item.isNew && <Badge variant="new" className="absolute right-3 top-3 z-[2]">New</Badge>}
              <div className="grid aspect-square place-items-center bg-[#F4F6FA] p-[22px]">
                <SmartImage
                  src={GALLERY_IMAGES[item.id]}
                  alt={item.name}
                  variant={item.media}
                  icon={item.icon}
                  className="size-full rounded-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-[14px_16px_18px] text-center">
                <span className={cn('text-[.62rem] font-bold uppercase tracking-widest text-muted', CAT_ACCENT[item.category])}>
                  {item.categoryLabel}
                </span>
                <h4 className="mt-[5px] text-[.92rem] text-ink transition-colors group-hover:text-brand-600">{item.name}</h4>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <div className="mt-11 text-center">
          <Button variant="ghost" size="lg" onClick={loadMore}>Load More Products</Button>
        </div>
      )}
    </>
  )
}