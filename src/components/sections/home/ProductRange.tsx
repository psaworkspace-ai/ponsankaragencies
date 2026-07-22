import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { PRODUCT_RANGE } from '@/data/productRange'
import { PRODUCT_IMAGES } from '@/data/images'
import { SmartImage } from '@/components/common/SmartImage'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
const keyFor = (name: string) => name.toLowerCase().replace(/\s+/g, '-')

export function ProductRange() {
  const railRef = useRef<HTMLDivElement>(null)
  const scrollBy = (dir: number) => {
    const rail = railRef.current
    if (rail) rail.scrollBy({ left: dir * Math.min(rail.clientWidth * 0.85, 640), behavior: 'smooth' })
  }

  return (
    <section className="section-y">
      <div className="container-px">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
  align="left"
  title="Comprehensive Product Range"
  subtitle="Every pipe, fitting, and storage solution needed for world-class infrastructure."
/>
          <div className="flex gap-2">
            <button onClick={() => scrollBy(-1)} aria-label="Previous products" className="grid size-10 place-items-center rounded-lg border-[1.5px] border-line-2 bg-white text-ink-2 transition-colors hover:border-brand-600 hover:text-brand-600">
              <ArrowLeft className="size-[18px]" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Next products" className="grid size-10 place-items-center rounded-lg bg-navy-900 text-white transition-colors hover:bg-navy-800">
              <ArrowRight className="size-[18px]" />
            </button>
          </div>
        </div>

        {/* 4-up grid on desktop; horizontal scroll on smaller screens */}
        <div
          ref={railRef}
          className="no-scrollbar grid auto-cols-[minmax(220px,1fr)] grid-flow-col gap-5 overflow-x-auto pb-2 md:grid-flow-row md:grid-cols-2 md:overflow-visible lg:grid-cols-4"
        >
          {PRODUCT_RANGE.map((p, i) => (
            <Reveal key={p.num} delay={(i % 4) * 0.05}>
              <Link to={p.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl">
                  <SmartImage src={PRODUCT_IMAGES[keyFor(p.name)]} alt={p.name} variant={p.media} className="aspect-[5/4]" />
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_40%,rgba(8,20,40,.85))]" />
                  <span className="absolute left-4 top-4 text-[.72rem] font-bold text-white/70">{p.num}</span>
                  <h3 className="absolute inset-x-4 bottom-4 text-lg font-semibold text-white">{p.name}</h3>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{p.description}</p>
                <span className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                  View Products <ArrowRight className="size-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}