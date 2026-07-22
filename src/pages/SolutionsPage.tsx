import { Seo } from '@/components/common/Seo'

import { SolutionsHero } from '@/components/sections/solutions/SolutionsHero'
import { SolutionsCategories } from '@/components/sections/solutions/SolutionsCategories'
import { ProductApplications } from '@/components/sections/solutions/ProductApplications'
import { WhySolutions } from '@/components/sections/solutions/WhySolutions'
import { BrandsSupport } from '@/components/sections/solutions/BrandsSupport'
import { SolutionsCta } from '@/components/sections/solutions/SolutionsCta'

export default function SolutionsPage() {
  return (
    <>
      <Seo
        title="Solutions"
        description="End-to-end piping solutions for residential, commercial, industrial, agricultural, and infrastructure projects."
        path="/solutions"
      />

      <SolutionsHero />

      <SolutionsCategories />

      <ProductApplications />

      <WhySolutions />

      <BrandsSupport />

      <SolutionsCta />
    </>
  )
}