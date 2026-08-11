import { Link } from 'react-router-dom'
import {  Building2, Factory } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { SOLUTIONS_HERO_IMAGE } from '@/data/images'

const STATS = [
  {
    icon: Building2,
    value: '4500+',
    label: 'Products',
  },
  {
    icon: Factory,
    value: '30+',
    label: 'Years Experience',
  },
]

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden text-white">
      {SOLUTIONS_HERO_IMAGE && (
        <img
          src={SOLUTIONS_HERO_IMAGE}
          alt="Solutions"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(120deg,#081428,#0C2145_40%,#1E3A8A)] opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_70%_at_85%_25%,rgba(59,130,246,.35),transparent_60%)]" />

      <div className="container-px relative py-16 lg:py-24">
        <Reveal>
          <div className="max-w-3xl rounded-3xl border border-white/15 bg-white/10 p-8 lg:p-10 backdrop-blur-xl">
            <span className="mb-4 inline-block text-xs font-semibold tracking-wide text-brand-300">
              Complete Piping Solutions
            </span>

            <h1 className="text-3xl  font-bold leading-tight md:text-4xl lg:text-5xl text-white">
              Innovative Solutions for Every Water Management Need
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
              From residential plumbing to industrial infrastructure,
              Ponshankar Agencies delivers reliable piping systems,
              premium brands, and technical expertise for projects of every size.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

<Button
  asChild
  variant="outline"
  size="lg"
  className="border-white bg-white/10 text-white hover:bg-white/20"
>
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              {STATS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-lg"
                >
                  <div className="rounded-xl bg-brand-500/20 p-3">
                    <item.icon className="h-6 w-6 text-brand-300" />
                  </div>

                  <div>
                    <div className="text-2xl font-bold">
                      {item.value}
                    </div>

                    <div className="text-sm text-slate-300">
                      {item.label}
                    </div>
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