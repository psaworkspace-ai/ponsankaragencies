import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { BRANDS } from '@/data/brands'

export function BrandGrid() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Partners"
          title="Trusted Brands We Represent"
          subtitle="We proudly partner with India's leading manufacturers to provide certified, high-quality piping solutions for every project."
          className="mb-14"
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {BRANDS.map((brand, index) => (
            <Reveal key={brand.name} delay={index * 0.05}>
              <div
                className="
                  group
                  flex
                  h-36
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
                    max-h-16
                    w-auto
                    object-contain
                    opacity-80
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:opacity-100
                  "
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}