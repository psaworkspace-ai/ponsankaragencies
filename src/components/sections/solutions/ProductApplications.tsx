import {
  Home,
  Building2,
  Factory,
  Sprout,
  Hotel,
  Warehouse,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const APPLICATIONS = [
  {
    title: "Residential Projects",
    description:
      "Reliable plumbing solutions for homes, villas, apartments, and gated communities.",
    icon: Home,
  },
  {
    title: "Commercial Buildings",
    description:
      "Complete piping systems for offices, shopping malls, schools, and hospitals.",
    icon: Building2,
  },
  {
    title: "Industrial Plants",
    description:
      "Heavy-duty piping systems designed for factories, warehouses, and manufacturing facilities.",
    icon: Factory,
  },
  {
    title: "Agriculture",
    description:
      "Efficient irrigation and water management solutions for farms and plantations.",
    icon: Sprout,
  },
  {
    title: "Hospitality",
    description:
      "Premium plumbing systems for hotels, resorts, and hospitality infrastructure.",
    icon: Hotel,
  },
  {
    title: "Infrastructure",
    description:
      "Large-scale piping solutions for public utilities, government, and infrastructure projects.",
    icon: Warehouse,
  },
];

export function ProductApplications() {
  return (
    <section className="bg-softer py-10 sm:py-12 lg:py-14">
      <div className="container-px">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <div className="mb-7">
          <SectionHeading
            eyebrow="Applications"
            title="Built for Every Environment"
            subtitle="Our products are trusted across residential, commercial, industrial, agricultural, and infrastructure projects."
          />
        </div>

        {/* =====================================================
            APPLICATION SLIDER
        ===================================================== */}
        <div className="relative">

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
            className="applications-swiper !pb-9"
          >
            {APPLICATIONS.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide
                  key={item.title}
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
                          -right-8
                          -top-8
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
                            transition-colors
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
                          {item.title}
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
                          {item.description}
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