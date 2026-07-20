import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '@/components/common/Seo'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { SolutionsGrid } from '@/components/sections/home/SolutionsGrid'
import { EcosystemStats } from '@/components/sections/home/EcosystemStats'
import { ProcessTimeline } from '@/components/sections/home/ProcessTimeline'
import { IndustriesCarousel } from '@/components/sections/home/IndustriesCarousel'
import { WhyUs } from '@/components/sections/home/WhyUs'
import { CtaBlue } from '@/components/sections/shared/CtaBlue'

function SolutionsHero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#081428,#0C2145_42%,#14336B)]" />
      <div className="absolute inset-0 bg-[radial-gradient(55%_80%_at_80%_18%,rgba(59,130,246,.4),transparent_60%)]" />
      <div className="container-px relative max-w-[680px] py-[76px]">
        <Reveal>
          <span className="mb-3.5 inline-block text-[.74rem] font-bold uppercase tracking-[0.16em] text-brand-300">
            What We Deliver
          </span>
          <h1 className="text-[clamp(2.2rem,5vw,3.3rem)] font-extrabold leading-[1.05] text-white">
            Engineered Piping Solutions for Every Industry
          </h1>
          <p className="my-5 max-w-[560px] text-[1.06rem] text-slate-200/85">
            From residential plumbing systems to large-scale industrial infrastructure, we deliver
            reliable, durable, and high-performance piping solutions designed for long-term
            efficiency and sustainability.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Button asChild size="lg"><Link to="/products">Explore Solutions <ArrowRight /></Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/contact">Request Consultation</Link></Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function SolutionsPage() {
  return (
    <>
      <Seo
        title="Solutions"
        description="End-to-end piping solutions for water management, residential plumbing, commercial buildings, industrial processing, infrastructure, and drainage."
        path="/solutions"
      />
      <SolutionsHero />
      <SolutionsGrid />
      <EcosystemStats />
      <ProcessTimeline />
      <IndustriesCarousel />
      <WhyUs />
      <CtaBlue
        title="Let's Build Reliable Infrastructure Together"
        text="Our expert team is ready to provide the technical consultation and premium products your project demands."
      />
    </>
  )
}