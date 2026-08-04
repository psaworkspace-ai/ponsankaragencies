import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SmartImage } from "@/components/common/SmartImage";

import { PORTFOLIO_IMAGES } from "@/data/images";

const PRODUCT_CATEGORIES = [
  {
    id: 1,
    key: "plumbing",
    title: "Pipes & Fittings",
    count: 9,
    href: "/products/pipes-fittings",
  },
  {
    id: 2,
    key: "plumbing",
    title: "Hoses & Fittings",
    count: 11,
    href: "/products/hoses-fittings",
  },
  {
    id: 3,
    key: "industrial",
    title: "Valves & Cocks",
    count: 6,
    href: "/products/valves-cocks",
  },
  {
    id: 4,
    key: "agri",
    title: "Allied Products",
    count: 11,
    href: "/products/allied-products",
  },
  {
    id: 5,
    key: "storage",
    title: "Bath Fittings & Sanitary Ware",
    count: 3,
    href: "/products/bath-fittings",
  },
];

export function ProductPortfolios() {
  return (
    <section className="bg-slate-50 py-6 sm:py-8 lg:py-12">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="PRODUCT CATEGORIES"
            title="Explore Our Product Categories"
            subtitle="Choose a category to browse all available products."
            className="mb-6 sm:mb-8"
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-3">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.05}>
              <article
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-xl
                  sm:rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <SmartImage
                    variant="industrial"
                    src={PORTFOLIO_IMAGES[category.key]}
                    alt={category.title}
                    className="h-28 sm:h-44 lg:h-52 w-full"
                    imgClassName="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold leading-tight text-slate-900">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-[11px] sm:text-sm text-slate-500">
                    {category.count} Products
                  </p>

                  <Link
                    to={category.href}
                    className="
                      mt-3
                      inline-flex
                      items-center
                      text-xs
                      sm:text-sm
                      font-semibold
                      text-brand-600
                      transition-all
                      duration-300
                      hover:gap-2
                    "
                  >
                    Explore
                    <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}