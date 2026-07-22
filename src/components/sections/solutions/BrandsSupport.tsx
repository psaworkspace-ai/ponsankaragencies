import { CheckCircle2 } from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { BRANDS } from '@/data/brands'

const FEATURES = [
  'Authorized Brand Partners',
  'Certified Quality Products',
  'Nationwide Trusted Manufacturers',
  'Complete Product Availability',
]

export function BrandsSupport() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Trusted Brands"
              title="Solutions Backed by Industry-Leading Manufacturers"
              subtitle="We partner with India's most trusted piping and water management brands to ensure every solution meets the highest standards of quality, reliability, and performance."
            />

            <div className="mt-8 space-y-5">
              {FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50">
                    <CheckCircle2 className="h-5 w-5 text-brand-600" />
                  </div>

                  <span className="text-base font-medium text-ink">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Brand Grid */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="
                    group
                    flex
                    h-36
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-line
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[var(--shadow-card)]
                  "
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="
                      mb-4
                      max-h-14
                      w-auto
                      object-contain
                      opacity-80
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:opacity-100
                    "
                  />

                  <span className="text-sm font-medium text-muted">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}