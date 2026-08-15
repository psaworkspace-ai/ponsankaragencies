import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BRANDS } from "@/data/brands";

const FEATURES = [
  "Authorized Brand Partners",
  "Certified Quality Products",
  "Nationwide Trusted Manufacturers",
  "Complete Product Availability",
];

export function BrandsSupport() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10
          "
        >

          {/* ===================================================
              LEFT — CONTENT
          =================================================== */}
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Trusted Brands"
              title="Solutions Backed by Industry-Leading Manufacturers"
              subtitle="We partner with India's most trusted piping and water management brands to ensure every solution meets the highest standards of quality, reliability, and performance."
            />

            {/* =================================================
                FEATURES
            ================================================= */}
            <div className="mt-6 space-y-3">
              {FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-transparent
                    px-2
                    py-2
                    transition-all
                    duration-300
                    hover:border-brand-100
                    hover:bg-white
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      grid
                      size-9
                      shrink-0
                      place-items-center
                      rounded-lg
                      bg-brand-50
                      transition-colors
                      duration-300
                      group-hover:bg-brand-600
                    "
                  >
                    <CheckCircle2
                      className="
                        size-[18px]
                        text-brand-600
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Text */}
                  <span
                    className="
                      text-sm
                      font-medium
                      text-ink
                      sm:text-[15px]
                    "
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ===================================================
              RIGHT — BRAND GRID
          =================================================== */}
          <Reveal delay={0.1}>
            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-3
                sm:gap-4
              "
            >
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="
                    group
                    flex
                    min-h-[105px]
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-line
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-200
                    hover:shadow-[var(--shadow-card)]
                  "
                >

                  {/* =================================================
                      BRAND LOGO
                  ================================================= */}
                  <div
                    className="
                      flex
                      h-10
                      w-full
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="
                        max-h-10
                        max-w-[85%]
                        w-auto
                        object-contain
                        opacity-80
                        transition-all
                        duration-300
                        group-hover:scale-105
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {/* =================================================
                      BRAND NAME
                  ================================================= */}
                  <span
                    className="
                      mt-2
                      text-center
                      text-[11px]
                      font-medium
                      leading-4
                      text-muted
                      sm:text-xs
                    "
                  >
                    {brand.name}
                  </span>

                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}