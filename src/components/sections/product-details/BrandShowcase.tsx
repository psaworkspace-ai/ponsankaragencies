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
    <section className="bg-softer py-10 sm:py-12 lg:py-16">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="OUR BRANDS"
            title="Trusted Brands We Proudly Distribute"
            subtitle="Partnering with India's leading manufacturers to deliver premium plumbing and water management solutions."
            className="mb-8 lg:mb-10"
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
          {/* Left Side */}
          <Reveal>
            <div className="space-y-4">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      flex
                      items-start
                      gap-4
                      rounded-2xl
                      border
                      border-line
                      bg-white
                      p-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-brand-300
                      hover:shadow-lg
                    "
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 transition group-hover:bg-brand-600">
                      <Icon className="h-5 w-5 text-brand-600 transition group-hover:text-white" />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-ink">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right Side */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="
                    group
                    flex
                    h-28
                    sm:h-32
                    lg:h-36
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-line
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-300
                    hover:shadow-lg
                  "
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="
                      mb-3
                      max-h-10
                      sm:max-h-12
                      lg:max-h-14
                      w-auto
                      object-contain
                      grayscale
                      opacity-70
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:grayscale-0
                      group-hover:opacity-100
                    "
                  />

                  <span className="text-center text-xs sm:text-sm font-medium text-muted">
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