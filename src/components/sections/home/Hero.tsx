import { Link } from 'react-router-dom'
import { ArrowRight, Boxes } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { SmartImage } from '@/components/common/SmartImage'
import { HERO_IMAGE } from '@/data/images'

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-8 pb-4">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0">
            <SmartImage src={HERO_IMAGE} alt="Industrial piping infrastructure" variant="industrial" icon={Boxes} className="size-full" eager />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,20,40,.92)_0%,rgba(10,27,56,.80)_45%,rgba(20,51,107,.55)_100%)]" />

          <div className="relative px-8 py-20 sm:px-12 lg:px-16 lg:py-28">
            <Reveal>
              <h1 className="max-w-[620px] text-[clamp(2.4rem,5.2vw,3.8rem)] font-extrabold leading-[1.04] text-white">
                Building Stronger <span className="text-brand-400">Water Systems</span> for Every Project.
              </h1>
              <p className="mt-5 max-w-[440px] text-[1.02rem] leading-[1.7] text-slate-200/85">
                We provide high-end, professional industrial infrastructure solutions. Premium PVC, CPVC, and SWR systems engineered for longevity and performance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" aria-label="Explore our products">
                  <Link to="/products">Explore Products <ArrowRight /></Link>
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToProjects} aria-label="View our portfolio">
                  Our Portfolio
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}