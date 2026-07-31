import { Seo } from "@/components/common/Seo";

import { ProductHero } from "@/components/sections/product-details/ProductHero";
import { ProductPortfolios } from "@/components/sections/product-details/ProductPortfolios";
import { BrandShowcase } from "@/components/sections/product-details/BrandShowcase";

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Products"
        description="Explore our complete range of plumbing, industrial, agricultural and water management solutions."
        path="/products"
      />

      <section id="hero">
        <ProductHero />
      </section>

      <section id="categories">
        <ProductPortfolios />
      </section>

      <section id="brands">
        <BrandShowcase />
      </section>

    </>
  );
}