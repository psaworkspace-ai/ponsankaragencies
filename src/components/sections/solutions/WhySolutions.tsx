import {
  BadgeCheck,
  ShieldCheck,
  Truck,
  Wrench,
  Headphones,
  PackageCheck,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description:
      "High-quality piping products from trusted manufacturers.",
  },
  {
    icon: ShieldCheck,
    title: "Authorized Brands",
    description:
      "100% genuine products sourced directly from leading brands.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Reliable and on-time delivery for projects of every size.",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description:
      "Expert guidance to choose the right products.",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description:
      "Responsive assistance before and after every purchase.",
  },
  {
    icon: PackageCheck,
    title: "Complete Solutions",
    description:
      "Comprehensive piping solutions for every application.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Customers Trust Ponshankar Agencies"
          />

          <p
            className="
              mx-auto
              mt-2.5
              max-w-3xl
              text-center
              text-sm
              leading-6
              text-muted
              sm:text-[15px]
            "
          >
            Delivering quality products, dependable service, and complete
            piping solutions for residential, commercial, and industrial
            projects.
          </p>
        </Reveal>

        {/* =====================================================
            SLIDER
        ===================================================== */}
        <div className="relative mt-7">

          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={650}
            spaceBetween={14}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.08,
                spaceBetween: 12,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 14,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },

              1280: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
            }}
            className="why-choose-swiper !pb-9"
          >
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <SwiperSlide
                  key={feature.title}
                  className="!h-auto"
                >
                  <Reveal
                    delay={(index % 3) * 0.05}
                    className="h-full"
                  >
                    <div
                      className="
                        group
                        relative
                        flex
                        min-h-[175px]
                        h-full
                        flex-col
                        overflow-hidden
                        rounded-xl
                        border
                        border-line
                        bg-white
                        p-4
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-brand-200
                        hover:shadow-[var(--shadow-card)]
                        sm:p-5
                      "
                    >

                      {/* =================================================
                          BACKGROUND GLOW
                      ================================================= */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-7
                          -top-7
                          size-20
                          rounded-full
                          bg-brand-50
                          opacity-50
                          blur-3xl
                          transition-opacity
                          duration-300
                          group-hover:opacity-80
                        "
                      />

                      <div className="relative">

                        {/* =================================================
                            ICON
                        ================================================= */}
                        <div
                          className="
                            mb-3.5
                            grid
                            size-10
                            place-items-center
                            rounded-lg
                            bg-brand-50
                            transition-all
                            duration-300
                            group-hover:bg-brand-600
                          "
                        >
                          <Icon
                            className="
                              size-5
                              text-brand-600
                              transition-colors
                              duration-300
                              group-hover:text-white
                            "
                          />
                        </div>

                        {/* =================================================
                            TITLE
                        ================================================= */}
                        <h3
                          className="
                            mb-1.5
                            text-base
                            font-semibold
                            leading-5
                            text-ink
                            sm:text-[17px]
                          "
                        >
                          {feature.title}
                        </h3>

                        {/* =================================================
                            DESCRIPTION
                        ================================================= */}
                        <p
                          className="
                            text-xs
                            leading-5
                            text-muted
                            sm:text-sm
                            sm:leading-6
                          "
                        >
                          {feature.description}
                        </p>

                      </div>
                    </div>
                  </Reveal>
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </div>
    </section>
  );
}