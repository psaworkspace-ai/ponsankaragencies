
import { useEffect, useState } from 'react'
import {
  Award,
  BadgeCheck,
  Boxes,
  Network,
  Headphones,
  Wrench,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

const WHY_CHOOSE_US = [
  {
    id: '01',
    number: '35+',
    title: 'Years of Experience',
    description:
      'Three decades of industry experience built on trust, expertise, and consistent performance.',
    icon: Award,
  },
  {
    id: '02',
    number: '01',
    title: 'Quality Products',
    description:
      'Carefully selected products focused on quality, durability, and dependable performance.',
    icon: BadgeCheck,
  },
  {
    id: '03',
    number: '02',
    title: 'Wide Product Range',
    description:
      'A comprehensive range designed to meet the diverse needs of our customers.',
    icon: Boxes,
  },
  {
    id: '04',
    number: '03',
    title: 'Strong Dealer Network',
    description:
      'A reliable network helping us deliver products and support efficiently across regions.',
    icon: Network,
  },
  {
    id: '05',
    number: '04',
    title: 'Professional Support',
    description:
      'Experienced guidance and responsive support for confident product decisions.',
    icon: Headphones,
  },
  {
    id: '06',
    number: '05',
    title: 'After-Sales Service',
    description:
      'Dedicated assistance focused on customer satisfaction and lasting relationships.',
    icon: Wrench,
  },
]

export function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const activeItem = WHY_CHOOSE_US[activeIndex]
  const ActiveIcon = activeItem.icon

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % WHY_CHOOSE_US.length)
  }

  const previousSlide = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + WHY_CHOOSE_US.length) % WHY_CHOOSE_US.length,
    )
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4500)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="relative overflow-hidden bg-softer py-12 sm:py-14 lg:py-16">
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

        {/* Single Glass Slider */}
        <Reveal>
          <div
            className="
              group
              relative
              mx-auto
              max-w-5xl
              overflow-hidden
              rounded-2xl
              border
              border-white/70
              bg-white/50
              shadow-[0_12px_45px_rgba(0,0,0,0.06)]
              backdrop-blur-xl
            "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Glass highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />

            {/* Main Content */}
            <div className="relative px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
              <div
                key={activeItem.id}
                className="animate-in fade-in slide-in-from-right-2 duration-500"
              >
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* Icon */}
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
                      <ActiveIcon
                        className="size-[22px] text-brand-600"
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Label */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600/70">
                        Why Choose Us
                      </p>

                      <p className="mt-0.5 text-[11px] text-muted/60">
                        {activeItem.id} / 06
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={previousSlide}
                      aria-label="Previous benefit"
                      className="
                        grid
                        size-8
                        place-items-center
                        rounded-full
                        border
                        border-white/80
                        bg-white/60
                        text-muted
                        shadow-sm
                        backdrop-blur-md
                        transition-all
                        duration-200
                        hover:border-brand-100
                        hover:bg-white
                        hover:text-brand-600
                        active:scale-95
                        sm:size-9
                      "
                    >
                      <ArrowLeft
                        className="size-3.5"
                        strokeWidth={1.8}
                      />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next benefit"
                      className="
                        grid
                        size-8
                        place-items-center
                        rounded-full
                        bg-brand-600
                        text-white
                        shadow-sm
                        transition-all
                        duration-200
                        hover:bg-brand-700
                        active:scale-95
                        sm:size-9
                      "
                    >
                      <ArrowRight
                        className="size-3.5"
                        strokeWidth={1.8}
                      />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-7 max-w-2xl sm:mt-8">
                  {/* 35+ only */}
                  {activeIndex === 0 && (
                    <div className="mb-1.5 flex items-baseline gap-2">
                      <span className="text-4xl font-bold tracking-[-0.04em] text-brand-600 sm:text-5xl">
                        {activeItem.number}
                      </span>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">
                        Years
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-[27px]">
                    {activeItem.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-[14px]">
                    {activeItem.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-white/60 pt-4">
                  {/* Progress */}
                  <div className="flex items-center gap-1.5">
                    {WHY_CHOOSE_US.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        aria-label={`Show ${item.title}`}
                        onClick={() => setActiveIndex(index)}
                        className={`
                          h-1
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            activeIndex === index
                              ? 'w-7 bg-brand-600'
                              : 'w-1.5 bg-brand-600/15 hover:bg-brand-600/30'
                          }
                        `}
                      />
                    ))}
                  </div>

                  {/* Current title */}
                  <span className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-muted/50 sm:block">
                    {activeItem.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Glass Bar */}
            <div className="border-t border-white/60 bg-white/25 px-5 py-3 backdrop-blur-md sm:px-8">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-muted/55 sm:text-[10px]">
                  Experience • Quality • Reliability
                </p>

                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-600/60 sm:text-[10px]">
                  Ponsankar Agencies
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

