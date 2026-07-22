import { Seo } from '@/components/common/Seo'

import { AboutHero } from '../components/sections/about/AboutHero'
import { CompanyStory } from '../components/sections/about/CompanyStory'
import { Timeline } from '../components/sections/about/Timeline'
import { EdgeGrid } from '@/components/sections/about/EdgeGrid'
import { BrandGrid } from '../components/sections/about/BrandGrid'
import { VisionMission } from '../components/sections/about/VisionMission'
import { DealerCta } from '@/components/sections/about/DealerCta'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Over three decades of delivering premium piping solutions across Tamil Nadu."
        path="/about"
      />

      <AboutHero />

      <CompanyStory />

      <Timeline />

      <EdgeGrid />

      <BrandGrid />

      <VisionMission />

      <DealerCta />
    </>
  )
}