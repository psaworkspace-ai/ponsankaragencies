import { Eye, Target } from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

const ITEMS = [
  {
    title: 'Our Vision',
    description:
      'To be Tamil Nadu’s most trusted distribution partner for premium piping and water management solutions by delivering quality products, innovation, and exceptional customer service.',
    icon: Eye,
  },
  {
    title: 'Our Mission',
    description:
      'To provide genuine products from leading brands, offer technical expertise, maintain efficient logistics, and build long-term relationships through reliability and customer satisfaction.',
    icon: Target,
  },
]

export function VisionMission() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Purpose"
          title="Vision & Mission"
          subtitle="Our values guide every partnership, every project, and every solution we deliver."
          className="mb-14"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div
                className="
                  h-full
                  rounded-2xl
                  border
                  border-line
                  bg-white
                  p-8
                  shadow-[var(--shadow-card)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50">
                  <item.icon className="h-7 w-7 text-brand-600" />
                </div>

                <h3 className="text-2xl font-semibold text-ink">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}