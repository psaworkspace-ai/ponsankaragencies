import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SmartImage } from '@/components/common/SmartImage'

import { GALLERY_ITEMS } from '@/data/gallery'
import { GALLERY_IMAGES } from '@/data/images'

export function RelatedProducts() {
  const products = GALLERY_ITEMS.slice(0, 4)

  return (
    <section className="section-y bg-soft">

      <div className="container-px">

        <SectionHeading
          eyebrow="Explore More"
          title="Related Products"
          subtitle="Browse more premium Prince SmartFit Plus fittings."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {products.map((product, index) => (

            <Reveal key={product.id} delay={index * 0.08}>

              <Link
                to={`/products/${product.id}`}
                className="group block overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-2 hover:shadow-xl"
              >

                <SmartImage
                  src={GALLERY_IMAGES[product.id]}
                  alt={product.name}
                  variant={product.media}
                  className="aspect-square"
                />

                <div className="p-5">

                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">
                    {product.categoryLabel}
                  </span>

                  <h3 className="mt-4 font-semibold leading-7 transition group-hover:text-brand-600">
                    {product.name}
                  </h3>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-brand-600">

                    View Product

                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </Link>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  )
}