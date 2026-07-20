import { Seo } from '@/components/common/Seo'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { SpecializedSolutions } from '@/components/sections/about/SpecializedSolutions'
import { PortfolioGrid } from '@/components/sections/about/PortfolioGrid'
import { EdgeGrid } from '@/components/sections/about/EdgeGrid'
import { DealerCta } from '@/components/sections/about/DealerCta'
import { TechnicalConsultation } from '@/components/sections/about/TechnicalConsultation'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Three decades of piping excellence. Certified quality, swift delivery, and trusted partnerships across industrial, agricultural and infrastructure sectors."
        path="/about"
      />
      <AboutHero />
      <SpecializedSolutions />
      <PortfolioGrid />
      <EdgeGrid />
      <DealerCta />
      <TechnicalConsultation />
    </>
  )
}