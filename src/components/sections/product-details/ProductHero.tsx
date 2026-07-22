import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'
import { SmartImage } from '@/components/common/SmartImage'

import type { ProductDetail } from '@/data/productDetails'

interface Props {
  product: any
  image?: string
  details: ProductDetail
}
export function ProductHero({
  product,
  image,
  details,
}: Props) {
  return (
    <section className="bg-soft py-16 lg:py-20">
      <div className="container-px">

        <Link
          to="/products/gallery"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:underline"
        >
          <ArrowLeft className="size-4" />
          Back to Gallery
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <Reveal>

            <div className="overflow-hidden rounded-2xl border border-line bg-white">

              <SmartImage
                src={image}
                alt={product.name}
                variant={product.media}
                className="aspect-square"
              />

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
              {product.categoryLabel}
            </span>

            <h1 className="mt-4 text-3xl font-bold lg:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-base leading-7 text-muted">
{details.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="rounded-xl border border-line bg-white px-5 py-4">
                <p className="text-xs uppercase tracking-wide text-muted">
                  Category
                </p>

                <h4 className="mt-1 font-semibold">
                  {product.categoryLabel}
                </h4>
              </div>

              <div className="rounded-xl border border-line bg-white px-5 py-4">
                <p className="text-xs uppercase tracking-wide text-muted">
                  Product Type
                </p>

                <h4 className="mt-1 font-semibold">
                  SmartFit Plus
                </h4>
              </div>

            </div>

          </Reveal>

        </div>

      </div>
    </section>
  )
}
