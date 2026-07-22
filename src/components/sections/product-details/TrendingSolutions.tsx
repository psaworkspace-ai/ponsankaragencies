import { Link } from 'react-router-dom'
import { TRENDING } from '@/data/products'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SmartImage } from '@/components/common/SmartImage'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { TRENDING_IMAGES } from '@/data/images'
import { cn } from '@/lib/utils'

const ACCENT: Record<string, string> = {
  blue: 'text-brand-600', green: 'text-signal', amber: 'text-amber-500',
}

export function TrendingSolutions() {
  return (
    <section className="bg-softer py-[88px]">
      <div className="container-px">
        <SectionHeading
          title="Trending Engineered Solutions"
          subtitle="Our most sought-after products, performance-tested for extreme industrial and domestic environments."
          className="mb-[52px]"
        />
        <div className="grid grid-cols-1 gap-[26px] md:grid-cols-2 lg:grid-cols-3">
          {TRENDING.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <Card className="group h-full hover:-translate-y-1.5 hover:border-transparent hover:shadow-[var(--shadow-lift)]">
                <SmartImage src={TRENDING_IMAGES[p.id]} alt={p.name} variant={p.media} icon={p.icon} className="aspect-[16/11]" />
                <div className="p-5 pb-[22px]">
                  <span className={cn('text-[.64rem] font-bold uppercase tracking-widest text-muted', p.accent && ACCENT[p.accent])}>
                    {p.category}
                  </span>
                  <h3 className="my-1.5 text-[1.14rem]">{p.name}</h3>
                  <p className="mb-4 min-h-[40px] text-[.88rem] text-muted">{p.description}</p>
                  <Button asChild variant="ghost" block><Link to={p.href}>View Product</Link></Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}