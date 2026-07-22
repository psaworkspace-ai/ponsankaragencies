import { PROCESS_STEPS } from '@/data/solutions'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'

export function ProcessTimeline() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">
        <SectionHeading title="Our Collaborative Process" subtitle="From initial inquiry to long-term operational success, we partner with you at every stage." className="mb-12" />
        <Reveal className="relative">
          {/* Item 13 — 2px line */}
          <div className="absolute inset-x-[8%] top-[28px] hidden h-0.5 bg-line-2 lg:block" />
          {/* Item 14 — tighter gaps */}
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-2">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="group relative z-10 px-2 text-center">
                {/* Item 12 — 48px+ dot */}
                <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full border-2 border-brand-100 bg-white transition-all duration-200 group-hover:-translate-y-1 group-hover:border-brand-600 group-hover:bg-brand-600">
                  <step.icon className="size-6 text-brand-600 transition-colors group-hover:text-white [stroke-width:1.9]" />
                </div>
                <h4 className="mb-2 text-lg font-semibold">{step.title}</h4>
                <p className="text-sm leading-6 text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}