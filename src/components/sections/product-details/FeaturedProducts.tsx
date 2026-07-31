import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SmartImage } from "@/components/common/SmartImage";

import { TRENDING_IMAGES } from "@/data/images";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: "CPVC Plumbing Systems",
    category: "Plumbing",
    description:
      "Premium CPVC pipes and fittings engineered for superior hot and cold water distribution.",
    image: TRENDING_IMAGES.smartfit,
    href: "/products",
  },
  {
    id: 2,
    title: "PVC Pressure Pipes",
    category: "Water Supply",
    description:
      "High-strength PVC pressure piping systems for residential, commercial and infrastructure projects.",
    image: TRENDING_IMAGES.greenfit,
    href: "/products",
  },
  {
    id: 3,
    title: "Water Storage Tanks",
    category: "Storage",
    description:
      "Durable multi-layer water tanks designed for safe storage and long-lasting performance.",
    image: TRENDING_IMAGES.storefit,
    href: "/products",
  },
  {
    id: 4,
    title: "Industrial Valves & Fittings",
    category: "Industrial",
    description:
      "Reliable industrial valves and pipe fittings for commercial and industrial applications.",
    image: TRENDING_IMAGES.easyfit,
    href: "/products",
  },
];

export function FeaturedProducts() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="FEATURED PRODUCTS"
            title="Best Selling Products"
            subtitle="Discover our most popular products trusted by homeowners, contractors, builders and industries across Tamil Nadu."
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {FEATURED_PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.08}>
              <article
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-line
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-brand-200
                  hover:shadow-[var(--shadow-card)]
                "
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ink">
                    {product.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted">
                    {product.description}
                  </p>

                  <Link
                    to={product.href}
                    className="mt-6 inline-flex items-center font-semibold text-brand-600 transition-all duration-300 hover:gap-3"
                  >
                    View Product
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-16 rounded-3xl border border-brand-100 bg-brand-50 p-10 text-center">
            <h3 className="text-3xl font-bold text-ink">
              Looking for More Products?
            </h3>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted">
              Ponshankar Agencies offers a complete range of plumbing,
              industrial, agricultural, drainage and water management
              solutions from India's leading brands. Our experienced team
              is ready to help you find the right product for your
              requirements.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-brand-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-700"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}