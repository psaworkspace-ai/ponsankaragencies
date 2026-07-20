import { Link } from 'react-router-dom'
import { Seo } from '@/components/common/Seo'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ProductPortfolios } from '@/components/sections/products/ProductPortfolios'
import { TrendingSolutions } from '@/components/sections/products/TrendingSolutions'
import { TailoredByApplication } from '@/components/sections/products/TailoredByApplication'
import { CtaBlue } from '@/components/sections/shared/CtaBlue'

function ProductsHero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#081428,#0C2145_45%,#14336B)]" />
      <div className="absolute inset-0 bg-[radial-gradient(55%_80%_at_82%_15%,rgba(59,130,246,.35),transparent_60%)]" />
      <div className="container-px relative max-w-[640px] py-[70px]">
        <Reveal>
          <span className="mb-3.5 inline-block text-[.74rem] font-bold uppercase tracking-[0.16em] text-brand-300">
            Our Catalogue
          </span>
          <h1 className="text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold leading-[1.06] text-white">
            Engineered Products for Every Application
          </h1>
          <p className="mt-[18px] text-[1.05rem] text-slate-200/85">
            From residential plumbing to large-scale municipal infrastructure — explore a complete
            range of pipes, fittings, valves, and storage solutions built for durability and
            compliance.
          </p>
          <div className="mt-7">
            <Button asChild size="lg"><Link to="/products/gallery">View SmartFit Gallery <ArrowRight /></Link></Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Products"
        description="Explore the full Ponshankar Agencies catalogue: plumbing, industrial piping, agriculture, storage, and infrastructure protection systems."
        path="/products"
      />
      <ProductsHero />
      <ProductPortfolios />
      <TrendingSolutions />
      <TailoredByApplication />
      <CtaBlue
        title="Need a Custom Product Specification?"
        text="Our engineering team will help you select the right material grade, pressure class, and fittings for your project."
      />
    </>
  )
}