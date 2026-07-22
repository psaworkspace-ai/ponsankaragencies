import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { APPLICATIONS } from '@/data/products'
import { Reveal } from '@/components/common/Reveal'

export function TailoredByApplication() {
  return (
    <section className="py-[88px]">
      <div className="container-px">
        <div className="mb-[38px] flex flex-wrap items-end justify-between gap-5">
          <Reveal><h2 className="text-[clamp(1.8rem,3.6vw,2.5rem)]">Tailored by Application</h2></Reveal>
          <Link to="/products" className="inline-flex items-center gap-1.5 text-[.9rem] font-semibold text-brand-600 hover:gap-2.5">
            Read Our Guide <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
          {APPLICATIONS.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-white p-[28px_26px] transition-all duration-[260ms] hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
                <div className="mb-4 grid size-[50px] place-items-center rounded-[13px] bg-brand-50">
                  <a.icon className="size-6 text-brand-600 [stroke-width:1.8]" />
                </div>
                <h3 className="mb-2 text-[1.08rem]">{a.title}</h3>
                <p className="text-[.88rem] text-muted">{a.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}