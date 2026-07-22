import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { INDUSTRIES } from '@/data/solutions'
import { SmartImage } from '@/components/common/SmartImage'
import { SectionHeading } from '@/components/common/SectionHeading'
import { INDUSTRY_IMAGES } from '@/data/images'

export function IndustriesCarousel() {
  const railRef = useRef<HTMLDivElement>(null)
  const scrollBy = (dir: number) => {
    const rail = railRef.current
    if (rail) rail.scrollBy({ left: dir * Math.min(rail.clientWidth * 0.8, 320), behavior: 'smooth' })
  }

  return (
    <section className="section-y">
      <div className="container-px">
        {/* Item 17 — title + buttons grouped tight */}
        <div className="mb-9 flex items-end justify-between gap-4">
        <SectionHeading
    eyebrow="Sectors"
    align="left"
    title="Industries We Serve"
/>
          <div className="flex gap-2">
            <button onClick={() => scrollBy(-1)} aria-label="Previous industries" className="grid size-10 place-items-center rounded-full border-[1.5px] border-line-2 bg-white text-ink-2 transition-colors hover:border-brand-600 hover:text-brand-600"><ChevronLeft className="size-[18px]" /></button>
            <button onClick={() => scrollBy(1)} aria-label="Next industries" className="grid size-10 place-items-center rounded-full border-[1.5px] border-line-2 bg-white text-ink-2 transition-colors hover:border-brand-600 hover:text-brand-600"><ChevronRight className="size-[18px]" /></button>
          </div>
        </div>
        <div ref={railRef} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
          {INDUSTRIES.map((ind) => (
            <div key={ind.id} className="relative h-[200px] shrink-0 basis-[clamp(230px,26%,290px)] snap-start overflow-hidden rounded-xl">
              <SmartImage src={INDUSTRY_IMAGES[ind.id]} alt={ind.label} variant={ind.media} className="absolute inset-0 size-full" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-[9px] bg-white p-[14px_16px]">
                <ind.icon className="size-[18px] text-brand-600 [stroke-width:1.9]" />
                <span className="text-base font-semibold">{ind.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}