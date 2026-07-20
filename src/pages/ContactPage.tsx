import { Seo } from '@/components/common/Seo'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { InfoCards } from '@/components/sections/contact/InfoCards'
import { MapBlock } from '@/components/sections/contact/MapBlock'
import { CtaNavy } from '@/components/sections/shared/CtaNavy'

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Reach the Ponshankar Agencies engineering team for technical specifications, project-scale quotations and dedicated maintenance support."
        path="/contact"
      />
      <ContactHero />
      <InfoCards />
      <MapBlock />
      <CtaNavy />
    </>
  )
}