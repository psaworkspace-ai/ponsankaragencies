import { ArrowUpRight } from 'lucide-react'
import { CASE_STUDIES } from '@/data/portfolio'
import { SmartImage } from '@/components/common/SmartImage'
import { Reveal } from '@/components/common/Reveal'
import { CASE_STUDY_IMAGES } from '@/data/images'
import { cn } from '@/lib/utils'

export function PortfolioGrid() {
  return (
    <section className="bg-softer py-[88px]">
      <div className="container-px">
        <div className="mb-[38px] flex flex-wrap items-end justify-between gap-5">
          <Reveal>
            <span className="mb-3.5 inline-block text-[.74rem] font-bold uppercase tracking-[0.16em] text-brand-600">
              Case Studies
            </span>
            <h2 className="text-[clamp(1.8rem,3.6vw,2.5rem)]">Infrastructure Portfolio</h2>
          </Reveal>
          <a href="#" className="inline-flex items-center gap-1.5 text-[.9rem] font-semibold text-brand-600 hover:gap-2.5">
            Explore All Projects <ArrowUpRight className="size-4" />
          </a>
        </div>
        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {CASE_STUDIES.map((c) => (
            <div
              key={c.id}
              className={cn(
                'group relative min-h-[200px] overflow-hidden rounded-2xl',
                c.span === 'tall' && 'lg:row-span-2',
                c.span === 'wide' && 'sm:col-span-2',
              )}
            >
              <SmartImage src={CASE_STUDY_IMAGES[c.id]} alt={c.title} variant={c.media} className="absolute inset-0 size-full transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(8,20,40,.86))] p-5">
                <span className="text-[.64rem] font-bold uppercase tracking-widest text-brand-300">{c.tag}</span>
                <h4 className="mt-1 text-[1.1rem] text-white">{c.title}</h4>
                {c.description && <p className="mt-1 text-[.82rem] text-slate-200/80">{c.description}</p>}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}