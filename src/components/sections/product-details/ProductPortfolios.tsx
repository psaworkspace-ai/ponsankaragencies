import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SmartImage } from "@/components/common/SmartImage";

import { PORTFOLIO_IMAGES } from "@/data/images";

const PORTFOLIOS = [
  {
    id: 1,
    key: "plumbing",
    title: "Plumbing Solutions",
    description:
      "Premium CPVC, UPVC and plumbing systems for residential and commercial buildings.",
  },
  {
    id: 2,
    key: "industrial",
    title: "Industrial Piping",
    description:
      "Reliable industrial pipes, fittings and valves designed for demanding applications.",
  },
  {
    id: 3,
    key: "agri",
    title: "Agricultural Solutions",
    description:
      "Efficient irrigation systems, borewell pipes and agricultural water management products.",
  },
  {
    id: 4,
    key: "storage",
    title: "Water Storage",
    description:
      "High-quality water tanks and storage solutions for homes, industries and institutions.",
  },
  {
    id: 5,
    key: "plumbing",
    title: "Plumbing Solutions",
    description:
      "Premium CPVC, UPVC and plumbing systems for residential and commercial buildings.",
  },
  {
    id: 6,
    key: "industrial",
    title: "Industrial Piping",
    description:
      "Reliable industrial pipes, fittings and valves designed for demanding applications.",
  },
  {
    id: 7,
    key: "agri",
    title: "Agricultural Solutions",
    description:
      "Efficient irrigation systems, borewell pipes and agricultural water management products.",
  },
  {
    id: 8,
    key: "storage",
    title: "Water Storage",
    description:
      "High-quality water tanks and storage solutions for homes, industries and institutions.",
  },
];

export function ProductPortfolios() {
  return (
    <section className="bg-slate-50 py-6 sm:py-10 lg:py-16">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="PRODUCT CATEGORIES"
            title="Explore Our Product Portfolio"
            subtitle="Browse our complete collection of plumbing, industrial, agricultural and water storage solutions from trusted brands."
            className="mb-5 sm:mb-8 lg:mb-10"
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {PORTFOLIOS.map((portfolio, index) => (
            <Reveal key={portfolio.id} delay={index * 0.03}>
              <article
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-lg
                  sm:rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div className="overflow-hidden">
                  <SmartImage
                    src={PORTFOLIO_IMAGES[portfolio.key]}
                    alt={portfolio.title}
                    className="
                      h-24
                      sm:h-44
                      lg:h-48
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="flex flex-1 flex-col p-2 sm:p-5 lg:p-6">
                  <h3 className="text-[13px] sm:text-lg lg:text-xl font-semibold leading-5 text-slate-900">
                    {portfolio.title}
                  </h3>

                  <p className="mt-1 flex-1 text-[11px] sm:text-sm leading-4 sm:leading-6 text-slate-600 line-clamp-2">
                    {portfolio.description}
                  </p>

                  <Link
                    to="/products"
                    className="
                      mt-2
                      sm:mt-4
                      inline-flex
                      items-center
                      text-[11px]
                      sm:text-sm
                      font-semibold
                      text-primary
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