import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PORTFOLIOS } from '@/data/products'
import { SmartImage } from '@/components/common/SmartImage'
import { Reveal } from '@/components/common/Reveal'
import { PORTFOLIO_IMAGES } from '@/data/images'

const DEST: Record<string, string> = {
  plumbing: '/products/gallery',
  industrial: '/products/industrial-ball-valve',
  sewerage: '/solutions/drainage-wastewater',
  agri: '/products/greenfit',
  storage: '/products/storefit',
  protection: '/solutions/infrastructure',
}

export function ProductPortfolios() {
  return (
    <section className="py-[88px]">
      <div className="container-px">
        <Reveal className="mb-[38px]">
          <h2 className="text-[clamp(1.8rem,3.6vw,2.5rem)]">Product Portfolios</h2>
          <p className="mt-3.5 text-[1.02rem] text-muted">Discover solutions tailored for every industrial and domestic application.</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIOS.map((p, i) => {
            const to = DEST[p.id] ?? p.href
            return (
              <Reveal key={p.id} delay={i * 0.05}>
                {p.kind === 'tile' ? (
                  <Link to={to} className="group relative block min-h-[270px] overflow-hidden rounded-2xl">
                    <SmartImage src={PORTFOLIO_IMAGES[p.id]} alt={p.title} variant={p.media} icon={p.icon} className="absolute inset-0 size-full transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(8,20,40,.85))] p-6">
                      <h3 className="text-[1.3rem] text-white">{p.title}</h3>
                      <span className="mt-2.5 inline-flex items-center gap-1.5 text-[.9rem] font-semibold text-white transition-all group-hover:gap-2.5">
                        View Collection <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="flex min-h-[270px] flex-col justify-between rounded-2xl border border-brand-100 bg-brand-50 p-7">
                    <div className="grid size-[52px] place-items-center rounded-[13px] bg-white shadow-[var(--shadow-soft)]">
                      <p.icon className="size-6 text-brand-600 [stroke-width:1.8]" />
                    </div>
                    <div className="mt-5">
                      <h3 className="mb-1.5 text-[1.3rem]">{p.title}</h3>
                      <p className="text-[.92rem] text-muted">{p.note}</p>
                    </div>
                    <Link to={to} className="mt-3.5 inline-flex items-center gap-1.5 text-[.9rem] font-semibold text-brand-600 hover:gap-2.5">
                      Explore Systems <ArrowRight className="size-4" />
                    </Link>
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}