import { ArrowUpRight } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { Reveal } from '@/components/common/Reveal'

const MAP_Q = encodeURIComponent('Industrial Estate, Guindy, Chennai, Tamil Nadu 600032')
const MAP_SRC = `https://www.google.com/maps?q=${MAP_Q}&output=embed`
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_Q}`

export function MapBlock() {
  return (
    <section className="pb-[88px]">
      <div className="container-px">
        <Reveal className="relative min-h-[440px] overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-soft)]">
          <iframe
            title="Ponshankar Agencies headquarters"
            src={MAP_SRC}
            className="absolute inset-0 size-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute left-6 top-6 z-[3] max-w-[320px] rounded-xl bg-white p-[24px_26px] shadow-[var(--shadow-lift)]">
            <h3 className="mb-2 text-[1.3rem]">Our Headquarters</h3>
            <p className="mb-1.5 text-[.9rem] text-muted">{CONTACT.address.full}</p>
            <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="pointer-events-auto mt-1.5 inline-flex items-center gap-1.5 text-[.9rem] font-semibold text-brand-600 hover:gap-2.5">
              Get Directions <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}