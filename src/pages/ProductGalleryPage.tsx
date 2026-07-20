import { useEffect } from 'react'
import { Seo } from '@/components/common/Seo'
import { Marquee } from '@/components/common/Marquee'
import { GALLERY_FEATURES } from '@/lib/constants'
import { useGalleryStore } from '@/store/useGalleryStore'
import { GalleryFilters } from '@/components/sections/gallery/GalleryFilters'
import { GalleryGrid } from '@/components/sections/gallery/GalleryGrid'
import { Reveal } from '@/components/common/Reveal'

export default function ProductGalleryPage() {
  const reset = useGalleryStore((s) => s.reset)
  useEffect(() => reset(), [reset])

  return (
    <>
      <Seo
        title="SmartFit Plus Gallery"
        description="Prince SmartFit Plus CPVC pipes and fittings — moulded, fabricated, brass inserts and solvent cement. Engineered for a 25-year service life."
        path="/products/gallery"
      />

      <section className="bg-soft py-[66px] text-center">
        <div className="container-px">
          <Reveal>
            <h1 className="text-[clamp(2rem,4.6vw,3rem)] font-extrabold">SmartFit Plus Product Gallery</h1>
            <p className="mx-auto mt-4 max-w-[660px] text-[1.02rem] text-muted">
              Engineered for long-term reliability, Prince SmartFit Plus CPVC pipes and fittings
              deliver unmatched performance. Designed for a service life of 25 years, they are ideal
              for both hot and cold water applications.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pt-11 pb-[88px]">
        <div className="container-px">
          <GalleryFilters />
          <GalleryGrid />
        </div>
      </section>

      <Marquee items={GALLERY_FEATURES} variant="feature" />
    </>
  )
}