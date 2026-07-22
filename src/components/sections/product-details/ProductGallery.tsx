import { SmartImage } from '@/components/common/SmartImage'
import { Reveal } from '@/components/common/Reveal'

interface Props {
  image?: string
  product: any
}

export function ProductGallery({ image, product }: Props) {
  return (
    <section className="section-y">
      <div className="container-px">

        <Reveal>

          <div className="grid gap-8 lg:grid-cols-[120px_1fr]">

            {/* Thumbnails */}

            <div className="flex gap-4 lg:flex-col">

              {[1, 2, 3, 4].map((item) => (
                <button
                  key={item}
                  className="overflow-hidden rounded-xl border border-line transition hover:border-brand-600"
                >
                  <SmartImage
                    src={image}
                    alt={product.name}
                    variant={product.media}
                    className="aspect-square h-24 w-24 object-cover"
                  />
                </button>
              ))}

            </div>

            {/* Main Image */}

            <div className="overflow-hidden rounded-3xl border border-line bg-white">

              <SmartImage
                src={image}
                alt={product.name}
                variant={product.media}
                className="aspect-square w-full object-cover"
              />

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  )
}