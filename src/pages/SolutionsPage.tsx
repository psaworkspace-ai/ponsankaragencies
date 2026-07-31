import { Seo } from "@/components/common/Seo";

import { SolutionsHero } from "@/components/sections/solutions/SolutionsHero";
import { ProductApplications } from "@/components/sections/solutions/ProductApplications";
import { WhyChooseUs } from "@/components/sections/solutions/WhySolutions";
import { BrandsSupport } from "@/components/sections/solutions/BrandsSupport";
import { FAQ } from "@/components/sections/solutions/FAQ";
import { SolutionsCta } from "@/components/sections/solutions/SolutionsCta";

export default function SolutionsPage() {
  return (
    <>
      <Seo
        title="Solutions"
        description="End-to-end piping solutions for residential, commercial, industrial, agricultural, and infrastructure projects."
        path="/solutions"
      />

      <main>
        <section id="hero" className="scroll-mt-20">
          <SolutionsHero />
        </section>

        <section id="applications" className="scroll-mt-20">
          <ProductApplications />
        </section>

        <section id="why-us" className="scroll-mt-20">
          <WhyChooseUs />
        </section>

        <section id="brands" className="scroll-mt-20">
          <BrandsSupport />
        </section>

        <section id="faq" className="scroll-mt-20">
          <FAQ />
        </section>

        <section id="contact" className="scroll-mt-20">
          <SolutionsCta />
        </section>
      </main>
    </>
  );
}