import { WHY_US } from '@/data/solutions'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'

export function WhyUs() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Ponshankar"
          title="Why Ponshankar Agencies?"
          subtitle="Decades of technical excellence and a commitment to quality that defines every project we undertake."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-[260ms] hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
                <div className="mb-4 grid size-[58px] place-items-center rounded-[14px] bg-brand-50">
                  <f.icon className="size-7 text-brand-600 [stroke-width:1.8]" />
                </div>
                <h3 className="mb-2 text-[1.06rem]">{f.title}</h3>
                <p className="text-[.9rem] text-muted">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}