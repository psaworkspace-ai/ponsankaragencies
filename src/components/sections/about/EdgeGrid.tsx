import { EDGE } from '@/data/portfolio'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'

export function EdgeGrid() {
  return (
    <section className="py-[88px]">
      <div className="container-px">
        <SectionHeading
          title="The Ponshankar Edge"
          subtitle="For three decades, we have remained the preferred choice for engineers and contractors who value technical integrity and supply chain reliability."
          className="mb-[52px]"
        />
        <div className="grid grid-cols-1 gap-[26px] md:grid-cols-2 lg:grid-cols-3">
          {EDGE.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-white p-[28px_26px] transition-all duration-[260ms] hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
                <div className="mb-[18px] grid size-[52px] place-items-center rounded-[13px] bg-brand-50">
                  <f.icon className="size-6 text-brand-600 [stroke-width:1.8]" />
                </div>
                <h3 className="mb-2.5 text-[1.06rem]">{f.title}</h3>
                <p className="text-[.9rem] text-muted">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}