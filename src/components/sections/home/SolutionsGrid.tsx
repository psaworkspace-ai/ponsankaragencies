import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { SOLUTIONS } from '@/data/solutions'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SmartImage } from '@/components/common/SmartImage'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/common/Reveal'
import { SOLUTION_IMAGES } from '@/data/images'

export function SolutionsGrid() {
  return (
    <section className="section-y">
      <div className="container-px">
        <SectionHeading eyebrow="Our Expertise" title="Our Comprehensive Solutions" subtitle="End-to-end piping systems engineered for performance across every sector." rule className="mb-12" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <Link to={`/solutions/${s.slug}`} className="block h-full" aria-label={s.title}>
                {/* Item 8 rounded-xl · Item 7 shadow-lg · Item 9 lift+scale */}
                <Card className="group h-full rounded-xl shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_24px_60px_rgba(15,23,42,.14)]">
                  {/* Item 6 — shorter image band */}
                  <SmartImage src={SOLUTION_IMAGES[s.id]} alt={s.title} variant={s.media} icon={s.icon} className="aspect-[16/9]" />
                  <div className="p-6">
                    <h3 className="mb-2.5 text-[1.2rem] text-brand-600">{s.title}</h3>
                    <p className="mb-4 text-[.92rem] text-muted">{s.description}</p>
                    <ul className="flex flex-col gap-[7px]">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[.72rem] font-semibold uppercase tracking-wide text-ink-2">
                          <Check className="size-[15px] shrink-0 text-brand-600" /> {f}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[.85rem] font-semibold text-brand-600 transition-all group-hover:gap-2.5">Learn More <ArrowRight className="size-4" /></span>
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}