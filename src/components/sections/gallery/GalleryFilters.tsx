import { GALLERY_TABS } from '@/data/gallery'
import { useGalleryStore } from '@/store/useGalleryStore'
import { Tabs } from '@/components/ui/tabs'
import type { GalleryCategory } from '@/types'

export function GalleryFilters() {
  const { filter, setFilter } = useGalleryStore()
  return (
    <Tabs
      tabs={GALLERY_TABS}
      active={filter}
      onChange={(v) => setFilter(v as GalleryCategory | 'all')}
      className="mb-[34px]"
    />
  )
}