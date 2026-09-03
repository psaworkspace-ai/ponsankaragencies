import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { PRODUCT_RANGE } from "@/data/productRange";
import { PRODUCT_IMAGES } from "@/data/images";

import { SmartImage } from "@/components/common/SmartImage";
import { SectionHeading } from "@/components/common/SectionHeading";

const keyFor = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-");

export function ProductRange() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: number) => {
    const rail = railRef.current;

    if (!rail) return;

    const amount = Math.min(
      rail.clientWidth * 0.85,
      640
    );

    rail.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-y">
      <div className="container-px">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mb-8 flex items-end justify-between gap-6">

          {/* Heading */}
          <div className="min-w-0">
            <SectionHeading
              align="left"
              title="Out Product Range"
              subtitle=" Explore our complete range of plumbing products, carefully selected to meet the needs of every application."
            />
          </div>

          {/* Navigation */}
          <div className="flex shrink-0 items-center gap-2 pb-1">

            {/* Previous */}
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous products"
              className="
                grid
                size-10
                place-items-center
                rounded-lg
                border
                border-line-2
                bg-white
                text-ink-2
                shadow-sm
                transition-all
                duration-300
                hover:border-brand-600
                hover:bg-brand-50
                hover:text-brand-600
                active:scale-95
              "
            >
              <ArrowLeft className="size-[18px]" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next products"
              className="
                grid
                size-10
                place-items-center
                rounded-lg
                bg-navy-900
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:bg-navy-800
                active:scale-95
              "
            >
              <ArrowRight className="size-[18px]" />
            </button>

          </div>
        </div>

        {/* =====================================================
            PRODUCT HORIZONTAL RAIL
        ===================================================== */}

        <div
          ref={railRef}
          className="
            no-scrollbar
            flex
            gap-4
            overflow-x-auto
            overscroll-x-contain
            scroll-smooth
            snap-x
            snap-mandatory
            pb-3

            touch-pan-x
            [-webkit-overflow-scrolling:touch]

            sm:gap-5

            md:grid
            md:grid-cols-2
            md:gap-6
            md:overflow-visible
            md:snap-none

            lg:grid-cols-4
          "
        >

          {PRODUCT_RANGE.map((product) => (
            <div
              key={product.num}
              className="
                w-[78vw]
                min-w-[78vw]
                shrink-0
                snap-start

                sm:w-[300px]
                sm:min-w-[300px]

                md:w-auto
                md:min-w-0
                md:shrink
              "
            >

              <Link
                to={product.href}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  transform-none
                  transition-none
                "
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    aspect-[5/4]
                    w-full
                    overflow-hidden
                    rounded-2xl
                    bg-slate-100
                  "
                >

                  <SmartImage
                    src={
                      PRODUCT_IMAGES[
                        keyFor(product.name)
                      ]
                    }
                    alt={product.name}
                    variant={product.media}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                    imgClassName="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Gradient */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[linear-gradient(transparent_35%,rgba(8,20,40,.88))]
                    "
                  />

                  {/* Product Number */}

                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      text-[0.72rem]
                      font-bold
                      tracking-wide
                      text-white/75
                    "
                  >
                    {product.num}
                  </span>

                  {/* Product Name */}

                  <h3
                    className="
                      absolute
                      inset-x-4
                      bottom-4
                      line-clamp-2
                      text-lg
                      font-semibold
                      leading-tight
                      text-white
                    "
                  >
                    {product.name}
                  </h3>

                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="flex flex-1 flex-col">

                  {/* Description */}

                  <p
                    className="
                      mt-3
                      min-h-[48px]
                      line-clamp-2
                      text-sm
                      leading-6
                      text-muted
                    "
                  >
                    {product.description}
                  </p>

                  {/* View Products */}

                  <span
                    className="
                      mt-auto
                      inline-flex
                      items-center
                      gap-1.5
                      pt-3
                      text-sm
                      font-semibold
                      text-brand-600
                      transition-all
                      duration-300
                      group-hover:gap-2.5
                    "
                  >
                    View Products

                    <ArrowRight className="size-3.5" />
                  </span>

                </div>

              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}