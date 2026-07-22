import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'

export function DealerCta() {
  return (
    <section className="bg-[#050B18] py-16 text-center text-white">
      <div className="container-px">
        <Reveal>
          <h2 className="text-3xl md:text-4xl text-white">
            Expand Your Business with Ponshankar
          </h2>
          <p className="mx-auto my-[14px] mb-[26px] max-w-[600px] text-slate-400">
            Join our growing network of 500+ authorized dealers across the region. Benefit from
            premium branding, exclusive discounts, and dedicated account management.
          </p>
          <Button asChild size="lg"><Link to="/contact">Become a Dealer</Link></Button>
        </Reveal>
      </div>
    </section>
  )
}