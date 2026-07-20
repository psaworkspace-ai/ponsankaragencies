import { Check } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { ContactForm } from './ContactForm'

const BADGES = ['24/7 Technical Response', 'Global Distribution Network']

export function ContactHero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#081428,#0C2145_45%,#14336B)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_78%_20%,rgba(59,130,246,.35),transparent_60%)]" />
      <div className="container-px relative grid items-center gap-14 py-[72px] lg:grid-cols-[1fr_1.02fr]">
        <Reveal>
          <span className="mb-3.5 inline-block text-[.74rem] font-bold uppercase tracking-[0.16em] text-brand-300">
            Global Support
          </span>
          <h1 className="text-[clamp(2.2rem,5vw,3.3rem)] font-extrabold leading-[1.05] text-white">
            Get in Touch
          </h1>
          <p className="my-5 max-w-[460px] text-[1.05rem] text-slate-200/85">
            Whether you are seeking detailed technical specifications, project-scale quotations, or
            dedicated maintenance support, our team of engineering experts is ready to assist.
          </p>
          <div className="flex flex-wrap gap-6">
            {BADGES.map((b) => (
              <div key={b} className="flex items-center gap-[9px] text-[.9rem] text-slate-200/90">
                <span className="grid size-[26px] shrink-0 place-items-center rounded-full bg-brand-600">
                  <Check className="size-[15px] text-white [stroke-width:3]" />
                </span>
                {b}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-[20px] bg-white p-[34px] shadow-[var(--shadow-lift)]">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}