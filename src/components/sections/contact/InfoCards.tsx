import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { Reveal } from '@/components/common/Reveal'
import type { LucideIcon } from 'lucide-react'

const CARDS: { icon: LucideIcon; title: string; lines: string[] }[] = [
  { icon: Phone, title: 'Phone', lines: [...CONTACT.phones] },
  { icon: Mail, title: 'Email', lines: [...CONTACT.emails] },
  { icon: MapPin, title: 'Address', lines: [CONTACT.address.line1, CONTACT.address.line2] },
  { icon: Clock, title: 'Business Hours', lines: [...CONTACT.hours] },
]

export function InfoCards() {
  return (
    <section className="py-[88px]">
      <div className="container-px grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-line bg-white p-[26px_24px] shadow-[var(--shadow-soft)]">
              <div className="mb-3.5 grid size-[46px] place-items-center rounded-xl bg-brand-50">
                <c.icon className="size-[22px] text-brand-600" />
              </div>
              <h4 className="mb-2 text-[1.1rem]">{c.title}</h4>
              {c.lines.map((l) => <p key={l} className="text-[.9rem] text-muted">{l}</p>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}