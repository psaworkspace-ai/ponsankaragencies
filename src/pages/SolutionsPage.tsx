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
        title="Solutions | Ponshankar Agencies"
        description="Explore complete piping solutions, premium products, trusted brands, technical support, and reliable services from Ponshankar Agencies."
      />

      <main>
        {/* Hero */}
        <section id="hero" className="scroll-mt-20">
          <SolutionsHero />
        </section>

        {/* Product Applications */}
        <section id="applications" className="scroll-mt-20">
          <ProductApplications />
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="scroll-mt-20">
          <WhyChooseUs />
        </section>

        {/* Brands & Support */}
        <section id="brands" className="scroll-mt-20">
          <BrandsSupport />
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20">
          <FAQ />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <SolutionsCta />
        </section>
      </main>
    </>
  );
}