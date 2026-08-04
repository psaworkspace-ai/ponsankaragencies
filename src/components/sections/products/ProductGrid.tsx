import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  image?: string;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

export function ProductGrid({
  title,
  products,
}: ProductGridProps) {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-px">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">
            {title}
          </h2>

          <p className="mt-2 text-slate-600">
            Browse all available products in this category.
          </p>
        </div>

        {/* Products Grid */}
        <div
          className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}