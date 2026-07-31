import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FEATURED_PROJECT, PROJECT_GALLERY } from "@/data/projects";
import { FEATURED_IMAGE, PROJECT_IMAGES } from "@/data/images";

import { SmartImage } from "@/components/common/SmartImage";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="section-y bg-softer">
      <div className="container-px mx-auto max-w-7xl">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

          <div className="flex flex-col justify-center">

            <SectionHeading
              align="left"
              eyebrow="Our Projects"
              title="Trusted Piping Solutions Across Tamil Nadu"
              subtitle="For over two decades, Ponshankar Agencies has successfully supplied premium plumbing, industrial, drainage, agricultural, and water management solutions across residential, commercial and infrastructure projects."
            />

          </div>

          <Reveal delay={0.15}>

            <div className="relative overflow-hidden rounded-3xl shadow-xl">

              <SmartImage
                src={FEATURED_IMAGE}
                alt={FEATURED_PROJECT.title}
                variant={FEATURED_PROJECT.media}
                className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[460px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">

                <div className="flex items-center justify-between rounded-2xl bg-white/95 p-5 backdrop-blur">

                  <div>

                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                      {FEATURED_PROJECT.tag}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-ink">
                      {FEATURED_PROJECT.title}
                    </h3>

                  </div>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                    <ArrowRight className="h-5 w-5" />
                  </span>

                </div>

              </div>

            </div>

          </Reveal>

        </div>
                {/* ===================== Projects Slider ===================== */}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.4,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3.2,
            },
          }}
          className="mt-20"
        >
          {PROJECT_GALLERY.map((project, index) => (
            <SwiperSlide key={project.id}>
              <Reveal delay={(index % 3) * 0.08}>
                <article
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-line
                    bg-white
                    shadow-lg
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  <div className="relative h-[260px] overflow-hidden lg:h-[300px]">
                    <SmartImage
                      src={PROJECT_IMAGES[project.id]}
                      alt={project.title}
                      variant={project.media}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <span
                      className="
                        absolute
                        left-5
                        top-5
                        rounded-full
                        bg-white/95
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-ink
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="space-y-4 p-6">

                    <h3 className="text-xl font-bold text-ink">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-6 text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-2">

                      <button
                        className="
                          inline-flex
                          items-center
                          gap-2
                          font-medium
                          text-brand-600
                          transition
                          hover:gap-3
                        "
                      >
                        View Project

                        <ArrowUpRight className="h-4 w-4" />
                      </button>

                      <span
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          bg-brand-50
                          text-brand-600
                          transition
                          group-hover:bg-brand-600
                          group-hover:text-white
                        "
                      >
                        <ArrowRight className="h-5 w-5" />
                      </span>

                    </div>

                  </div>

                </article>
              </Reveal>
            </SwiperSlide>
          ))}
        </Swiper>
              </div>
    </section>
  );
}