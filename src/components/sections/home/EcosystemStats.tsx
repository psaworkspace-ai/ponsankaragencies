import { Boxes } from 'lucide-react'
import { STATS } from '@/lib/constants'
import { SmartImage } from '@/components/common/SmartImage'
import { Reveal } from '@/components/common/Reveal'
import { ECOSYSTEM_IMAGE } from '@/data/images'

export function EcosystemStats() {
  return (
    <section className="section-y overflow-hidden bg-[linear-gradient(150deg,var(--color-navy-950)_0%,var(--color-navy-850)_55%,var(--color-navy-800)_100%)] text-white">
      <div className="container-px grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <h2 className="mb-[18px] text-[clamp(1.7rem,3.4vw,2.3rem)] text-white">Complete Fluid Management Ecosystem</h2>
          <p className="mb-8 max-w-[460px] text-slate-200/80">Ponshankar Agencies provides end-to-end piping systems combining premium pipes, fittings, valves, accessories, and technical support. We don't just sell products; we engineer ecosystems.</p>
          {/* Item 11 — tighter gap, heavier numbers */}
          <div className="grid max-w-[440px] grid-cols-2 gap-x-6 gap-y-6">
            {STATS.map((s) => (
              <div key={s.label} className="border-l-[3px] border-brand-500 pl-4">
                <b className="block font-display text-[2.4rem] font-extrabold leading-none text-white">{s.value}</b>
                <span className="mt-2 block text-[.72rem] uppercase tracking-widest text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3]">
            <SmartImage src={ECOSYSTEM_IMAGE} alt="Piping system network" variant="water" icon={Boxes} className="absolute inset-0 rounded-xl" iconClassName="size-16" />
            <div className="absolute -right-1.5 bottom-[26px] max-w-[210px] rounded-xl bg-white p-[16px_18px] text-ink shadow-[var(--shadow-lift)]">
              <b className="mb-1.5 block text-[.92rem]">Technical Support Excellence</b>
              <p className="text-[.78rem] text-muted">Real-time engineering consultation for complex projects.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}