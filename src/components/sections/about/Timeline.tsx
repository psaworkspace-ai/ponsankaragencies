import {
  Building2,
  Truck,
  Award,
  Factory,
} from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

const MILESTONES = [
  {
    year: '1993',
    title: 'Company Founded',
    description:
      'Ponshankar Agencies was established with the vision of supplying reliable piping solutions.',
    icon: Building2,
  },
  {
    year: '2005',
    title: 'Distribution Expansion',
    description:
      'Expanded operations and strengthened our distribution network across Tamil Nadu.',
    icon: Truck,
  },
  {
    year: '2015',
    title: 'Premium Brand Partnerships',
    description:
      'Partnered with India\'s leading piping manufacturers to offer a wider product range.',
    icon: Award,
  },
  {
    year: 'Today',
    title: 'Trusted Industry Partner',
    description:
      'Serving residential, commercial, industrial, and infrastructure projects with dependable solutions.',
    icon: Factory,
  },
]

export function Timeline() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Journey"
          title="Growing Through Quality & Trust"
          subtitle="Over the years, Ponshankar Agencies has continuously expanded its capabilities while maintaining the same commitment to quality, service, and customer satisfaction."
          className="mb-16"
        />

        <div className="relative">
          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-line lg:block" />

          {/* Mobile Line */}
          <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-line lg:hidden" />

          <div className="grid gap-8 lg:grid-cols-4">
            {MILESTONES.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>
                <div className="relative">
                  {/* Desktop */}
                  <div className="hidden lg:block">
                    <div className="mx-auto mb-8 grid size-20 place-items-center rounded-full border-4 border-white bg-brand-600 shadow-lg">
                      <item.icon className="size-8 text-white" />
                    </div>

                    <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <span className="text-sm font-semibold text-brand-600">
                        {item.year}
                      </span>

                      <h3 className="mt-2 text-lg font-semibold text-ink">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="flex gap-5 lg:hidden">
                    <div className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-brand-600 shadow-md">
                      <item.icon className="size-5 text-white" />
                    </div>

                    <div className="flex-1 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
                      <span className="text-sm font-semibold text-brand-600">
                        {item.year}
                      </span>

                      <h3 className="mt-2 text-lg font-semibold text-ink">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}