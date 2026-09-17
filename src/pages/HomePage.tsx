import { Seo } from '@/components/common/Seo'
import { Marquee } from '@/components/common/Marquee'
import { BRANDS } from '@/data/brands'
import { Hero } from '@/components/sections/home/Hero'
import { ProductRange } from '@/components/sections/home/ProductRange'
import { ProjectsShowcase } from '@/components/sections/home/ProjectsShowcase'
import { InquiryForm } from '@/components/sections/home/InquiryForm'
import { WhyUs } from '@/components/sections/home/WhyUs'


export default function HomePage() {
  return (
    <>
      <Seo
        exactTitle
        title="Ponsankar Agencies | Leading Plumbing Material Distribution Company"
        description="Premium PVC, CPVC, and SWR piping systems engineered for longevity. Trusted piping solutions across Tamil Nadu since 1991."
        path="/"
      />
      <Hero />
      <Marquee items={BRANDS} />
      <ProductRange />
      <ProjectsShowcase />
      <WhyUs />
      <InquiryForm />
    </>
  )
}