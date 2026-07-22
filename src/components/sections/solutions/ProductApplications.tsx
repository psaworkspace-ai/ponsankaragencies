import {
  Home,
  Building2,
 Factory,
  Sprout,
  Hotel,
  Warehouse,
} from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

const APPLICATIONS = [
  {
    title: 'Residential Projects',
    description:
      'Reliable plumbing solutions for homes, villas, apartments, and gated communities.',
    icon: Home,
  },
  {
    title: 'Commercial Buildings',
    description:
      'Complete piping systems for offices, shopping malls, schools, and hospitals.',
    icon: Building2,
  },
  {
    title: 'Industrial Plants',
    description:
      'Heavy-duty piping systems designed for factories, warehouses, and manufacturing facilities.',
    icon: Factory,
  },
  {
    title: 'Agriculture',
    description:
      'Efficient irrigation and water management solutions for farms and plantations.',
    icon: Sprout,
  },
  {
    title: 'Hospitality',
    description:
      'Premium plumbing systems for hotels, resorts, and hospitality infrastructure.',
    icon: Hotel,
  },
  {
    title: 'Infrastructure',
    description:
      'Large-scale piping solutions for public utilities, government, and infrastructure projects.',
    icon: Warehouse,
  },
]

export function ProductApplications() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">
        <SectionHeading
          eyebrow="Applications"
          title="Built for Every Environment"
          subtitle="Our products are trusted across residential, commercial, industrial, agricultural, and infrastructure projects."
          className="mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
            >
              <div className="group h-full rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50">
                  <item.icon className="h-7 w-7 text-brand-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-ink">
                  {item.title}
                </h3>

                <p className="leading-7 text-muted">
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