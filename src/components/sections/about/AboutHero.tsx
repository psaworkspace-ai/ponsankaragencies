  import { Link } from 'react-router-dom'
  import { ArrowRight, History, LayoutGrid } from 'lucide-react'
  import { Button } from '@/components/ui/button'
  import { Reveal } from '@/components/common/Reveal'
  import { ABOUT_HERO_IMAGE } from '@/data/images'

  const STATS = [
    { icon: History, value: '35 Years', label: 'Experience' },
    { icon: LayoutGrid, value: '4500+', label: 'Products' },
  ]

  export function AboutHero() {
    return (
      <section className="relative overflow-hidden text-white">
        {/* Optional real photo — shows only if ABOUT_HERO_IMAGE is set; otherwise the gradient (matches Figma) */}
        {ABOUT_HERO_IMAGE && (
          <img src={ABOUT_HERO_IMAGE} alt="" className="absolute inset-0 size-full object-cover" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#081428,#0C2145_40%,#1E3A8A)] opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_70%_at_85%_25%,rgba(59,130,246,.4),transparent_60%)]" />
        <div className="container-px relative py-14 lg:py-20">
          <Reveal>
            <div className="max-w-[560px] rounded-[20px] border border-white/[0.18] bg-white/10 p-8 lg:p-10 backdrop-blur-[14px]">
              <span className="mb-3.5 inline-block text-xs font-semibold tracking-wide text-brand-300">
                Precision Engineering
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-white">
                Building Stronger Water Systems for Every Project
              </h1>
              <p className="my-[18px] mb-[26px] text-base md:text-lg leading-7 text-slate-200/85">
                Setting the benchmark for infrastructure excellence with certified, high-performance
                piping solutions for industrial, agricultural, and residential developments.
              </p>
              <Button asChild><Link to="/contact">Browse Categories <ArrowRight /></Link></Button>
              <div className="mt-8 flex flex-wrap gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="flex items-center gap-3 rounded-[14px] border border-white/[0.16] bg-white/10 px-5 py-3 backdrop-blur-[10px]">
                    <s.icon className="size-[26px] text-brand-300" />
                    <div>
                      <b className="block font-display text-[1.4rem] font-extrabold leading-none text-white">{s.value}</b>
                      <span className="text-[.8rem] text-slate-200/75">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }