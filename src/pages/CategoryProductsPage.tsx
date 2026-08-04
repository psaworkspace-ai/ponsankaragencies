import { Navigate, useParams } from "react-router-dom";

import { Seo } from "@/components/common/Seo";
import { ProductGrid } from "@/components/sections/products/ProductGrid";

import { CATEGORY_PRODUCTS } from "@/data/categoryProducts";

const CATEGORY_TITLES: Record<string, string> = {
  "pipes-fittings": "Pipes & Fittings",
  "hoses-fittings": "Hoses & Fittings",
  "valves-cocks": "Valves & Cocks",
  "allied-products": "Allied Products",
  "bath-fittings": "Bath Fittings & Sanitary Ware",
};

export default function CategoryProductsPage() {
  const { category } = useParams();

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const products =
    CATEGORY_PRODUCTS[
      category as keyof typeof CATEGORY_PRODUCTS
    ];

  if (!products) {
    return <Navigate to="/404" replace />;
  }

  const title =
    CATEGORY_TITLES[category] ?? "Products";

  return (
    <>
      <Seo
        title={title}
        description={`Browse our ${title} products.`}
        path={`/products/${category}`}
      />

      {/* Hero */}
      <section className="bg-slate-50 py-10 lg:py-14">
        <div className="container-px text-center">

          <h1 className="text-3xl font-bold text-slate-900 lg:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Browse our complete collection of {title}.
            Select the products that best match your
            project requirements.
          </p>

        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid
        title={title}
        products={products}
      />
    </>
  );
}