import { CheckCircle2 } from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

import type { ProductDetail } from '@/data/productDetails'

interface Props {
  details: ProductDetail
}

export function ProductFeatures({ details }: Props) {
  return (
    <section className="section-y">

      <div className="container-px">

        <SectionHeading
          eyebrow="Features"
          title="Product Features"
          subtitle="Engineered to deliver exceptional performance."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {details.features.map((feature, index) => (

            <Reveal
              key={feature}
              delay={index * 0.08}
            >

              <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">

                <CheckCircle2
                  className="mb-4 text-brand-600"
                  size={28}
                />

                <h3 className="font-semibold">
                  {feature}
                </h3>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  )
}