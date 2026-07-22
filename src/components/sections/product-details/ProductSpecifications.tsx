import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import type { ProductDetail } from '@/data/productDetails'

interface Props {
  details: ProductDetail
}

export function ProductSpecifications({ details }: Props) {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">

        <SectionHeading
          eyebrow="Technical Details"
          title="Product Specifications"
          subtitle="Technical specifications and manufacturing standards."
        />

        <Reveal>

          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white">

            {details.specifications.map((spec) => (

              <div
                key={spec.label}
                className="grid border-b border-line last:border-none md:grid-cols-[250px_1fr]"
              >

                <div className="bg-soft px-6 py-5 font-semibold">
                  {spec.label}
                </div>

                <div className="px-6 py-5 text-muted">
                  {spec.value}
                </div>

              </div>

            ))}

          </div>

        </Reveal>

      </div>
    </section>
  )
}