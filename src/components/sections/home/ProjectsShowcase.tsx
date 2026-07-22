import { useRef } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import { FEATURED_PROJECT, PROJECT_GALLERY } from '@/data/projects'
import { FEATURED_IMAGE, PROJECT_IMAGES } from '@/data/images'

import { SmartImage } from '@/components/common/SmartImage'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'

export function ProjectsShowcase() {
  const railRef = useRef<HTMLDivElement>(null)

  const scrollBy = (direction: number) => {
    if (!railRef.current) return

    railRef.current.scrollBy({
      left: direction * Math.min(railRef.current.clientWidth * 0.85, 420),
      behavior: 'smooth',
    })
  }

  return (
    <section id="projects" className="section-y bg-softer">
      <div className="container-px">
        {/* Heading + Featured Project */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Projects"
              title="Trusted Piping Solutions Across Tamil Nadu"
              subtitle="For over two decades, Ponshankar Agencies has been the backbone of critical infrastructure by delivering high-performance piping solutions for residential, commercial, industrial, and agricultural projects."
            />

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => scrollBy(-1)}
                className="grid size-10 place-items-center rounded-lg border border-line bg-white transition hover:border-brand-600 hover:text-brand-600"
                aria-label="Previous Projects"
              >
                <ChevronLeft className="size-5" />
              </button>

              <button
                onClick={() => scrollBy(1)}
                className="grid size-11 place-items-center rounded-lg bg-brand-600 text-white transition hover:bg-brand-700"
                aria-label="Next Projects"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <SmartImage
                src={FEATURED_IMAGE}
                alt={FEATURED_PROJECT.title}
                variant={FEATURED_PROJECT.media}
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between gap-4 rounded-xl bg-white/95 p-5 backdrop-blur-sm">
                  <div>
                    <span className="text-xs font-semibold text-brand-600">
                      {FEATURED_PROJECT.tag}
                    </span>

                    <h4 className="mt-1 text-lg font-semibold text-ink">
                      {FEATURED_PROJECT.title}
                    </h4>
                  </div>

                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <ArrowRight className="size-5" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Project Slider */}
        <div
          ref={railRef}
          className="
            mt-10
            flex
            gap-6
            overflow-x-auto
            snap-x
            snap-mandatory
            scroll-smooth
            pb-2
            no-scrollbar
          "
        >
          {PROJECT_GALLERY.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 0.05}>
              <div
                className="
                  group
                  relative
                  h-[250px]
                  min-w-[290px]
                  overflow-hidden
                  rounded-2xl
                  snap-start
                  shadow-md
                  lg:min-w-[330px]
                "
              >
                <SmartImage
                  src={PROJECT_IMAGES[project.id]}
                  alt={project.title}
                  variant={project.media}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[linear-gradient(transparent_30%,rgba(8,20,40,.92))]" />

                <span className="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
                  {project.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <h4 className="max-w-[80%] text-base font-semibold leading-tight text-white">
                    {project.title}
                  </h4>

                  <span
                    className="
                      grid
                      size-9
                      shrink-0
                      place-items-center
                      rounded-full
                      bg-white/20
                      text-white
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:bg-brand-700
                    "
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}