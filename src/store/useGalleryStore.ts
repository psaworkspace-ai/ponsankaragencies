import { create } from 'zustand'
import type { GalleryCategory } from '@/types'
import { GALLERY_INITIAL_VISIBLE } from '@/data/gallery'

type Filter = GalleryCategory | 'all'

interface GalleryState {
  filter: Filter
  visibleCount: number
  setFilter: (filter: Filter) => void
  loadMore: () => void
  reset: () => void
}

export const useGalleryStore = create<GalleryState>((set) => ({
  filter: 'all',
  visibleCount: GALLERY_INITIAL_VISIBLE,
  setFilter: (filter) => set({ filter, visibleCount: GALLERY_INITIAL_VISIBLE }),
  loadMore: () => set({ visibleCount: Number.MAX_SAFE_INTEGER }),
  reset: () => set({ filter: 'all', visibleCount: GALLERY_INITIAL_VISIBLE }),
}))