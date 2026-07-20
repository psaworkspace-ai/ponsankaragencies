import { Seo } from '@/components/common/Seo'
import { Marquee } from '@/components/common/Marquee'
import { BRANDS } from '@/lib/constants'
import { Hero } from '@/components/sections/home/Hero'
import { ProductRange } from '@/components/sections/home/ProductRange'
import { ProjectsShowcase } from '@/components/sections/home/ProjectsShowcase'
import { InquiryForm } from '@/components/sections/home/InquiryForm'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Building Stronger Water Systems"
        description="Premium PVC, CPVC, and SWR piping systems engineered for longevity. Trusted piping solutions across Tamil Nadu since 1993."
        path="/"
      />
      <Hero />
      <Marquee items={BRANDS} />
      <ProductRange />
      <ProjectsShowcase />
      <InquiryForm />
    </>
  )
}