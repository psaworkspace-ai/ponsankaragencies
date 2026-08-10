import {
  BadgeCheck,
  ShieldCheck,
  Truck,
  Wrench,
  Headphones,
  PackageCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
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
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            SECTION HEADING
        ========================================================= */}
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built Around Quality, Reliability & Support"
          />
        </Reveal>

        {/* =========================================================
            SLIDER
        ========================================================= */}
        <div className="relative mt-10">

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            speed={700}
            spaceBetween={24}

            /* -------------------------
               AUTOPLAY
            ------------------------- */
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}

            /* -------------------------
               PAGINATION
               IMPORTANT:
               Uses custom pagination
               container below slider
            ------------------------- */
            pagination={{
              el: ".why-choose-pagination",
              clickable: true,
            }}

            /* -------------------------
               NAVIGATION
               Uses custom buttons below
            ------------------------- */
            navigation={{
              prevEl: ".applications-prev",
              nextEl: ".applications-next",
            }}

            /* -------------------------
               RESPONSIVE
            ------------------------- */
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              640: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}

            className="why-choose-swiper"
          >

            {/* =====================================================
                FEATURE CARDS
            ===================================================== */}
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <SwiperSlide
                  key={feature.title}
                  className="!h-auto"
                >
                  <Reveal delay={index * 0.05}>

                    <div
                      className="
                        group
                        relative
                        flex
                        min-h-[190px]
                        h-full
                        flex-col
                        overflow-hidden
                        rounded-2xl
                        border
                        border-line
                        bg-white
                        p-5
                        shadow-sm
                        transition-all
                        duration-300

                        hover:-translate-y-2
                        hover:border-brand-200
                        hover:shadow-xl
                      "
                    >

                      {/* =========================================
                          BACKGROUND GLOW
                      ========================================= */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-8
                          -top-8
                          h-24
                          w-24
                          rounded-full
                          bg-brand-50
                          opacity-40
                          blur-3xl
                          transition-opacity
                          duration-300
                          group-hover:opacity-70
                        "
                      />

                      {/* =========================================
                          CARD CONTENT
                      ========================================= */}
                      <div className="relative">

                        {/* Icon */}
                        <div
                          className="
                            mb-4
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-brand-50
                            transition-colors
                            duration-300
                            group-hover:bg-brand-100
                          "
                        >
                          <Icon
                            className="
                              h-6
                              w-6
                              text-brand-600
                            "
                          />
                        </div>

                        {/* Title */}
                        <h3
                          className="
                            mb-2
                            text-lg
                            font-semibold
                            text-ink
                          "
                        >
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="
                            text-sm
                            leading-6
                            text-muted
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

          {/* =======================================================
              BOTTOM SLIDER CONTROLS
          ======================================================= */}
          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-4
            "
          >

            {/* =====================================================
                PREVIOUS BUTTON
            ===================================================== */}
            <button
              type="button"
              className="
                applications-prev

                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center

                rounded-full

                border
                border-line

                bg-white
                text-ink

                shadow-sm

                transition-all
                duration-300

                hover:border-brand-600
                hover:bg-brand-600
                hover:text-white

                active:scale-95
              "
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* =====================================================
                PAGINATION DOTS
            ===================================================== */}
            <div
              className="
                why-choose-pagination
                flex
                min-w-[80px]
                items-center
                justify-center
              "
            />

            {/* =====================================================
                NEXT BUTTON
            ===================================================== */}
            <button
              type="button"
              className="
                applications-next

                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center

                rounded-full

                border
                border-line

                bg-white
                text-ink

                shadow-sm

                transition-all
                duration-300

                hover:border-brand-600
                hover:bg-brand-600
                hover:text-white

                active:scale-95
              "
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}