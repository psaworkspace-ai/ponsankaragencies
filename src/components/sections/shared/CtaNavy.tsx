import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { CONTACT } from '@/lib/constants'

export function CtaNavy() {
  return (
    <section className="bg-navy-900 py-[88px] text-center text-white">
      <div className="container-px">
        <Reveal>
          <h2 className="mb-3.5 text-[clamp(1.6rem,3.4vw,2.2rem)] text-white">
            Let's Build Better Infrastructure Together
          </h2>
          <p className="mx-auto mb-[26px] max-w-[560px] text-slate-200/70">
            Partner with Ponshankar Agencies for technical precision, supply chain reliability, and
            monumental engineering success.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Button asChild variant="primary" size="lg">
              <a href={`tel:${CONTACT.phones[0].replace(/\s/g, '')}`}><Phone /> Call Us Now</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}