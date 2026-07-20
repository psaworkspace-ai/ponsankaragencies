import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SPECIALIZED } from '@/data/specialized'
import { SPECIALIZED_IMAGES } from '@/data/images'
import { SmartImage } from '@/components/common/SmartImage'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'

export function SpecializedSolutions() {
  return (
    <section className="section-y">
      <div className="container-px">
        <SectionHeading
          eyebrow="Precision Engineering"
          title="Specialized Piping Solutions"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALIZED.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
                <SmartImage src={SPECIALIZED_IMAGES[s.id]} alt={s.title} variant={s.media} className="aspect-[4/3]" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-[1.1rem] font-bold">{s.title}</h3>
                  <p className="mb-4 flex-1 text-[.88rem] text-muted">{s.description}</p>
                  <Link to={s.href} className="inline-flex items-center gap-1.5 text-[.8rem] font-bold uppercase tracking-wider text-brand-600 transition-all group-hover:gap-2.5">
                    View Products <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}