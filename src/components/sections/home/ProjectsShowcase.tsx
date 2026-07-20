import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PROJECT_STATS, FEATURED_PROJECT, PROJECT_GALLERY } from '@/data/projects'
import { FEATURED_IMAGE, PROJECT_IMAGES } from '@/data/images'
import { SmartImage } from '@/components/common/SmartImage'
import { Reveal } from '@/components/common/Reveal'

export function ProjectsShowcase() {
  return (
    <section id="projects" className="section-y bg-softer">
      <div className="container-px">
        {/* Top: text + stats (left) · featured project (right) */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="mb-3.5 inline-block text-[.74rem] font-bold uppercase tracking-[0.16em] text-brand-600">
              Our Projects
            </span>
            <h2 className="text-[clamp(1.9rem,3.8vw,2.6rem)] leading-[1.1]">
              Trusted Piping Solutions Across Tamil Nadu
            </h2>
            <p className="mt-4 max-w-[480px] text-[1rem] leading-[1.7] text-muted">
              For over two decades, Ponshankar Agencies has been the backbone of critical infrastructure, providing high-performance piping for residential, commercial, industrial, and agricultural sectors. We don't just supply pipes; we build reliable flow systems that endure.
            </p>
            <div className="mt-8 flex gap-10">
              {PROJECT_STATS.map((s) => (
                <div key={s.label}>
                  <b className="block font-display text-[2.6rem] font-extrabold leading-none text-brand-600">{s.value}</b>
                  <span className="mt-1.5 block text-[.82rem] text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl">
              <SmartImage src={FEATURED_IMAGE} alt={FEATURED_PROJECT.title} variant={FEATURED_PROJECT.media} className="aspect-[4/3] w-full" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between gap-4 rounded-xl bg-white/95 p-[16px_18px] backdrop-blur-sm">
                  <div>
                    <span className="text-[.66rem] font-bold uppercase tracking-widest text-brand-600">{FEATURED_PROJECT.tag}</span>
                    <h4 className="mt-0.5 text-[1.06rem] font-bold text-ink">{FEATURED_PROJECT.title}</h4>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <ArrowRight className="size-5" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom: 6-card project gallery */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_GALLERY.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.05}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                <SmartImage src={PROJECT_IMAGES[p.id]} alt={p.title} variant={p.media} className="absolute inset-0 size-full" />
                <div className="absolute inset-0 bg-[linear-gradient(transparent_35%,rgba(8,20,40,.88))]" />
                <span className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-[.62rem] font-bold uppercase tracking-wide text-ink-2 backdrop-blur-sm">
                  {p.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <h4 className="max-w-[80%] text-[1.08rem] font-bold leading-tight text-white">{p.title}</h4>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-brand-600">
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