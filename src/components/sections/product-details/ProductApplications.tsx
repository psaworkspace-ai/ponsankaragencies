import { Building2 } from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

import type { ProductDetail } from '@/data/productDetails'

interface Props {
  details: ProductDetail
}

export function ProductApplications({ details }: Props) {
  return (
    <section className="section-y bg-soft">

      <div className="container-px">

        <SectionHeading
          eyebrow="Applications"
          title="Recommended Applications"
          subtitle="Suitable for multiple residential, commercial and industrial projects."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {details.applications.map((application, index) => (

            <Reveal
              key={application}
              delay={index * 0.08}
            >

              <div className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm">

                <Building2
                  size={32}
                  className="mx-auto mb-4 text-brand-600"
                />

                <h3 className="font-semibold">
                  {application}
                </h3>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  )
}