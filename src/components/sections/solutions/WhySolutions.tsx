import {
  BadgeCheck,
  ShieldCheck,
  Truck,
  Wrench,
  Headphones,
  PackageCheck,
} from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

const FEATURES = [
  {
    icon: BadgeCheck,
    title: 'Premium Quality',
    description:
      'We supply certified piping systems from trusted national and international brands.',
  },
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    description:
      'Every product is sourced directly from authorized manufacturers and distributors.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'Efficient inventory management ensures quick delivery for projects of every scale.',
  },
  {
    icon: Wrench,
    title: 'Technical Expertise',
    description:
      'Our experienced team helps you choose the right piping solution for every application.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description:
      'Dedicated assistance before and after every purchase to ensure complete satisfaction.',
  },
  {
    icon: PackageCheck,
    title: 'Complete Solutions',
    description:
      'From residential plumbing to industrial infrastructure, we provide end-to-end piping solutions.',
  },
]

export function WhySolutions() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Customers Choose Ponshankar Agencies"
          subtitle="Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner for thousands of successful projects."
          className="mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 0.05}
            >
              <div className="group h-full rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 transition-colors duration-300 group-hover:bg-brand-100">
                  <feature.icon className="h-7 w-7 text-brand-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-ink">
                  {feature.title}
                </h3>

                <p className="leading-7 text-muted">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}