import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SmartImage } from "@/components/common/SmartImage";

import { PORTFOLIO_IMAGES } from "@/data/images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const PRODUCT_CATEGORIES = [
  {
    id: 1,
    key: "plumbing",
    title: "Pipes & Fittings",
    count: 9,
    href: "/products/pipes-fittings",
  },
  {
    id: 2,
    key: "plumbing",
    title: "Hoses & Fittings",
    count: 11,
    href: "/products/hoses-fittings",
  },
  {
    id: 3,
    key: "industrial",
    title: "Valves & Cocks",
    count: 6,
    href: "/products/valves-cocks",
  },
  {
    id: 4,
    key: "agri",
    title: "Allied Products",
    count: 11,
    href: "/products/allied-products",
  },
  {
    id: 5,
    key: "storage",
    title: "Bath Fittings & Sanitary Ware",
    count: 3,
    href: "/products/bath-fittings",
  },
];

export function ProductPortfolios() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12 lg:py-14">
      <div className="container-px">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <Reveal>
          <SectionHeading
            eyebrow="Product Categories"
            title="Explore Our Product Categories"
            subtitle="Tap or select a product category to explore."
            className="mb-7 sm:mb-8"
          />
        </Reveal>

        {/* =====================================================
            AUTO PRODUCT SLIDER
        ===================================================== */}
        <div className="relative">

          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={700}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={14}
            breakpoints={{
              /* Mobile */
              0: {
                slidesPerView: 1.15,
                spaceBetween: 12,
              },

              /* Large Mobile */
              480: {
                slidesPerView: 1.5,
                spaceBetween: 14,
              },

              /* Tablet */
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },

              /* Small Desktop */
              768: {
                slidesPerView: 3,
                spaceBetween: 18,
              },

              /* Desktop */
              1024: {
                slidesPerView: 4,
                spaceBetween: 18,
              },

              /* Large Desktop */
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            className="product-category-swiper !pb-10"
          >

            {PRODUCT_CATEGORIES.map((category, index) => (
              <SwiperSlide
                key={category.id}
                className="!h-auto"
              >
                <Reveal
                  delay={index * 0.05}
                  className="h-full"
                >

                  {/* =================================================
                      ENTIRE CARD IS CLICKABLE
                  ================================================= */}
                  <Link
                    to={category.href}
                    aria-label={`Explore ${category.title}`}
                    className="
                      group
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-brand-300
                      hover:shadow-lg
                      focus:outline-none
                      focus:ring-2
                      focus:ring-brand-500/30
                      active:scale-[0.98]
                    "
                  >

                    {/* =================================================
                        IMAGE
                    ================================================= */}
                    <div
                      className="
                        relative
                        h-[145px]
                        overflow-hidden
                        bg-slate-100
                        sm:h-[160px]
                        lg:h-[175px]
                      "
                    >
                      <SmartImage
                        variant="industrial"
                        src={PORTFOLIO_IMAGES[category.key]}
                        alt={category.title}
                        className="h-full w-full"
                        imgClassName="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          ease-out
                          group-hover:scale-105
                        "
                      />

                      {/* Image Overlay */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/35
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* =================================================
                          TAP / SELECT INDICATOR
                      ================================================= */}
                      <div
                        className="
                          absolute
                          right-3
                          top-3
                          flex
                          size-8
                          items-center
                          justify-center
                          rounded-full
                          bg-white/90
                          text-slate-700
                          opacity-0
                          shadow-md
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      >
                        <ArrowRight className="size-4" />
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}
                    <div
                      className="
                        flex
                        min-h-[105px]
                        flex-1
                        flex-col
                        p-3
                        sm:p-4
                      "
                    >

                      {/* Title */}
                      <h3
                        className="
                          text-sm
                          font-semibold
                          leading-5
                          text-slate-900
                          transition-colors
                          duration-300
                          group-hover:text-brand-600
                          sm:text-base
                          lg:text-[17px]
                        "
                      >
                        {category.title}
                      </h3>

                      {/* Explore */}
                      <div
                        className="
                          mt-auto
                          inline-flex
                          w-fit
                          items-center
                          pt-3
                          text-xs
                          font-semibold
                          text-brand-600
                          transition-all
                          duration-300
                          sm:text-sm
                        "
                      >
                        Explore

                        <ArrowRight
                          className="
                            ml-1
                            size-3.5
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            sm:size-4
                          "
                        />
                      </div>

                    </div>

                  </Link>

                </Reveal>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </div>
    </section>
  );
}