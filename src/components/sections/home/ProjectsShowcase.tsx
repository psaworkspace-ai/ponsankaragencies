import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  FEATURED_PROJECT,
  PROJECT_GALLERY,
} from "@/data/projects";

import {
  FEATURED_IMAGE,
  PROJECT_IMAGES,
} from "@/data/images";

import { SmartImage } from "@/components/common/SmartImage";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ProjectsShowcase() {
  return (
    <section
      id="projects"
      className="bg-softer py-10 sm:py-12 lg:py-14"
    >
      <div className="container-px mx-auto max-w-7xl">

        {/* =====================================================
            FEATURED PROJECT
        ===================================================== */}
        <div
          className="
            grid
            items-center
            gap-6
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-8
          "
        >

          {/* =================================================
              HEADING
          ================================================= */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              align="left"
              eyebrow="Our Projects"
              title="Trusted Piping Solutions Across Tamil Nadu"
              subtitle="For over two decades, Ponshankar Agencies has successfully supplied premium plumbing, industrial, drainage, agricultural, and water management solutions across residential, commercial and infrastructure projects."
            />
          </div>

          {/* =================================================
              FEATURED IMAGE
          ================================================= */}
          <Reveal delay={0.1}>
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                shadow-md
              "
            >
              <SmartImage
                src={FEATURED_IMAGE}
                alt={FEATURED_PROJECT.title}
                variant={FEATURED_PROJECT.media}
                className="
                  h-[190px]
                  w-full
                  object-cover
                  sm:h-[230px]
                  lg:h-[280px]
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                "
              />

              {/* Featured Project Info */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-3
                  sm:p-4
                "
              >
                <div
                  className="
                    rounded-xl
                    bg-white/95
                    px-3
                    py-2.5
                    backdrop-blur
                    sm:px-4
                    sm:py-3
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-widest
                      text-brand-600
                      sm:text-[10px]
                    "
                  >
                    {FEATURED_PROJECT.tag}
                  </span>

                  <h3
                    className="
                      mt-0.5
                      text-base
                      font-bold
                      leading-5
                      text-ink
                      sm:text-lg
                    "
                  >
                    {FEATURED_PROJECT.title}
                  </h3>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
            PROJECTS SLIDER
        ===================================================== */}
        <div className="mt-7 lg:mt-8">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={650}
            spaceBetween={14}
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
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
            className="projects-swiper"
          >
            {PROJECT_GALLERY.map((project, index) => (
              <SwiperSlide
                key={project.id}
                className="!h-auto"
              >
                <Reveal
                  delay={(index % 4) * 0.04}
                  className="h-full"
                >
                  <article
                    className="
                      group
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-xl
                      border
                      border-line
                      bg-white
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >

                    {/* =========================================
                        PROJECT IMAGE
                    ========================================= */}
                    <div
                      className="
                        relative
                        h-[160px]
                        overflow-hidden
                        sm:h-[170px]
                        lg:h-[175px]
                      "
                    >
                      <SmartImage
                        src={PROJECT_IMAGES[project.id]}
                        alt={project.title}
                        variant={project.media}
                        className="
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
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/55
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* Category */}
                      <span
                        className="
                          absolute
                          left-2.5
                          top-2.5
                          rounded-full
                          bg-white/95
                          px-2.5
                          py-1
                          text-[10px]
                          font-semibold
                          text-ink
                          shadow-sm
                        "
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* =========================================
                        PROJECT TITLE
                    ========================================= */}
                    <div
                      className="
                        flex
                        min-h-[58px]
                        items-center
                        px-3.5
                        py-3
                      "
                    >
                      <h3
                        className="
                          line-clamp-2
                          text-sm
                          font-semibold
                          leading-5
                          text-ink
                          sm:text-[15px]
                        "
                      >
                        {project.title}
                      </h3>
                    </div>

                  </article>
                </Reveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}