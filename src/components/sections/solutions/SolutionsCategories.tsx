import {
  Home,
  Building2,
  Factory,
  Sprout,
} from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

const CATEGORIES = [
  {
    title: 'Residential Solutions',
    description:
      'Reliable piping systems designed for homes, apartments, villas, and residential communities.',
    icon: Home,
    href: '/products',
    color: 'bg-brand-50',
  },
  {
    title: 'Commercial Solutions',
    description:
      'Efficient plumbing and water distribution systems for offices, hotels, hospitals, and commercial buildings.',
    icon: Building2,
    href: '/products',
    color: 'bg-brand-50',
  },
  {
    title: 'Industrial Solutions',
    description:
      'Heavy-duty piping systems engineered for factories, process plants, manufacturing units, and infrastructure projects.',
    icon: Factory,
    href: '/products',
    color: 'bg-brand-50',
  },
  {
    title: 'Agricultural Solutions',
    description:
      'Advanced irrigation and water management solutions for farms, plantations, and agricultural developments.',
    icon: Sprout,
    href: '/products',
    color: 'bg-brand-50',
  },
]

export function SolutionsCategories() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Solutions"
          title="Solutions for Every Industry"
          subtitle="From homes to industries, Ponshankar Agencies delivers complete piping solutions tailored to every application."
          className="mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.08}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${category.color}`}
                >
                  <category.icon className="h-7 w-7 text-brand-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-ink">
                  {category.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-7 text-muted">
                  {category.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}