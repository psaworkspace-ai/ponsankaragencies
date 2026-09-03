import {
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

import { BRANDS } from "@/data/brands";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Authorized Distributor",
    description:
      "Official distributor of India's leading plumbing, piping and water management brands.",
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine Products",
    description:
      "Every product is sourced directly from authorized manufacturers with assured quality.",
  },
  {
    icon: CheckCircle2,
    title: "Complete Product Range",
    description:
      "Complete plumbing, industrial and water management solutions under one roof.",
  },
];

export function BrandShowcase() {
  return (
    <section className="bg-softer py-10 sm:py-12 lg:py-14">
      <div className="container-px">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <Reveal>
          <SectionHeading
            eyebrow="Our Brands"
            title="Trusted Partnerships. Quality Products."
            subtitle="Built on strong partnerships with brands we trust, so you can trust every product we deliver."
            className="mb-7 sm:mb-8"
          />
        </Reveal>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <div
          className="
            grid
            items-center
            gap-7
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
          "
        >

          {/* ===================================================
              LEFT — FEATURES
          =================================================== */}
          <Reveal>
            <div className="space-y-3.5">

              {FEATURES.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="
                      group
                      flex
                      items-start
                      gap-3.5
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
                      hover:shadow-lg
                    "
                  >

                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-brand-50
                        transition-colors
                        duration-300
                        group-hover:bg-brand-600
                      "
                    >
                      <Icon
                        className="
                          h-5
                          w-5
                          text-brand-600
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3
                        className="
                          text-sm
                          font-semibold
                          leading-5
                          text-ink
                          sm:text-base
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-muted
                          sm:text-sm
                          sm:leading-6
                        "
                      >
                        {feature.description}
                      </p>
                    </div>

                  </div>
                );
              })}

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
                    h-[105px]
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-line
                    bg-white
                    p-3
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-200
                    hover:shadow-lg
                    sm:h-[120px]
                    sm:p-4
                  "
                >

                  {/* Logo */}
                  <div
                    className="
                      flex
                      h-12
                      w-full
                      items-center
                      justify-center
                      sm:h-14
                    "
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="
                        max-h-9
                        w-auto
                        max-w-[85%]
                        object-contain
                        grayscale
                        opacity-70
                        transition-all
                        duration-300
                        group-hover:scale-105
                        group-hover:grayscale-0
                        group-hover:opacity-100
                        sm:max-h-11
                      "
                    />
                  </div>

                  {/* Brand Name */}
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