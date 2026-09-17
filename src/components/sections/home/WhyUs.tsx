import {
  Award,
  BadgeCheck,
  Boxes,
  Network,
  Headphones,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

interface Benefit {
  id: string
  title: string
  description: string
  icon: LucideIcon
  stat?: string
  statLabel?: string
}

const WHY_CHOOSE_US: Benefit[] = [
  {
    id: '01',
    title: 'Years of Experience',
    description:
      'Three decades of industry experience built on trust, expertise, and consistent performance.',
    icon: Award,
    stat: '35+',
    statLabel: 'Years',
  },
  {
    id: '02',
    title: 'Quality Products',
    description:
      'Carefully selected products focused on quality, durability, and dependable performance.',
    icon: BadgeCheck,
  },
  {
    id: '03',
    title: 'Wide Product Range',
    description:
      'A comprehensive range designed to meet the diverse needs of our customers.',
    icon: Boxes,
  },
  {
    id: '04',
    title: 'Strong Dealer Network',
    description:
      'A reliable network helping us deliver products and support efficiently across regions.',
    icon: Network,
  },
  {
    id: '05',
    title: 'Professional Support',
    description:
      'Experienced guidance and responsive support for confident product decisions.',
    icon: Headphones,
  },
  {
    id: '06',
    title: 'After-Sales Service',
    description:
      'Dedicated assistance focused on customer satisfaction and lasting relationships.',
    icon: Wrench,
  },
]

export function WhyUs() {
  return (
    <section className="section-y relative overflow-hidden bg-softer">
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 size-64 rounded-full bg-brand-100/25 blur-3xl" />
        <div className="absolute -right-32 bottom-0 size-72 rounded-full bg-brand-50/40 blur-3xl" />
      </div>

      <div className="container-px relative">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built on Experience. Driven by Quality."
          subtitle="Three decades of experience, quality products, dependable service, and lasting customer relationships."
          className="mb-9"
        />

        {/* All Six Benefits */}
        <div
          className="
            mx-auto
            grid
            max-w-5xl
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal
                key={item.id}
                delay={index * 0.05}
                className="h-full"
              >
                <article
                  className="
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/70
                    bg-white/50
                    p-5
                    shadow-[0_12px_45px_rgba(0,0,0,0.06)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-100
                    hover:bg-white/70
                    sm:p-6
                  "
                >
                  {/* Glass highlight */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />

                  {/* Icon + Stat */}
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        grid
                        size-11
                        shrink-0
                        place-items-center
                        rounded-xl
                        border
                        border-white/80
                        bg-white/65
                        shadow-sm
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:border-brand-100
                      "
                    >
                      <Icon
                        className="size-[22px] text-brand-600"
                        strokeWidth={1.7}
                      />
                    </div>

                    {item.stat && (
                      <div className="ml-auto flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold tracking-[-0.04em] text-brand-600">
                          {item.stat}
                        </span>

                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">
                          {item.statLabel}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-foreground sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom Glass Bar */}
        <Reveal delay={0.1}>
          <div
            className="
              mx-auto
              mt-4
              flex
              max-w-5xl
              items-center
              justify-between
              gap-3
              rounded-2xl
              border
              border-white/70
              bg-white/40
              px-5
              py-3
              backdrop-blur-md
              sm:px-8
            "
          >
            <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-muted/55 sm:text-[10px]">
              Experience • Quality • Reliability
            </p>

            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-600/60 sm:text-[10px]">
              Ponsankar Agencies
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
