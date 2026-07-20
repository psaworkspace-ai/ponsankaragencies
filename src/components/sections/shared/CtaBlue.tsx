import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'

interface CtaBlueProps {
  title: string
  text: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CtaBlue({
  title, text,
  primaryLabel = 'Request a Quote', primaryHref = '/contact',
  secondaryLabel = 'Contact Our Team', secondaryHref = '/contact',
}: CtaBlueProps) {
  return (
    <section className="relative bg-[linear-gradient(120deg,var(--color-navy-900)_0%,var(--color-brand-700)_60%,var(--color-brand-600)_100%)] py-24 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_-20%,rgba(96,165,250,.35),transparent_60%)]" />
      <div className="container-px relative">
        <Reveal>
          {/* Item 21 — leading + pb stops descenders/ascenders clipping */}
          <h2 className="mx-auto max-w-[820px] pb-1 text-[clamp(1.9rem,4.4vw,2.9rem)] font-extrabold leading-[1.12] text-white">{title}</h2>
          <p className="mx-auto mb-9 mt-4 max-w-[620px] text-[1.05rem] text-slate-200/90">{text}</p>
          {/* Item 23 — more spacing */}
          <div className="flex flex-wrap justify-center gap-5">
            <Button asChild variant="white" size="lg"><Link to={primaryHref}>{primaryLabel}</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to={secondaryHref}>{secondaryLabel}</Link></Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}