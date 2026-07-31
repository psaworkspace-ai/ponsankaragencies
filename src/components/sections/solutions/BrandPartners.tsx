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
      "Partnering with India's leading piping manufacturers.",
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine Products",
    description:
      "Every product is supplied directly from trusted brands.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description:
      "Certified products backed by manufacturer standards.",
  },
];

export function BrandPartners() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Brand Partners"
          title="Trusted Brands We Represent"
          subtitle="Ponshankar Agencies proudly partners with India's leading piping and water management brands to deliver reliable, high-quality solutions for every project."
          className="mb-14"
        />

        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left Content */}
          <Reveal>
            <div>
              <div className="space-y-6">
                {FEATURES.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 rounded-2xl border border-line bg-softer p-5 transition-all duration-300 hover:border-brand-200 hover:shadow-sm"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                      <item.icon className="h-7 w-7 text-brand-600" />
                    </div>

                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-ink">
                        {item.title}
                      </h3>

                      <p className="leading-7 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Brand Logos */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="
                    group
                    flex
                    h-36
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-line
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-brand-200
                    hover:shadow-[var(--shadow-card)]
                  "
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="
                      mb-4
                      max-h-14
                      w-auto
                      object-contain
                      grayscale
                      opacity-70
                      transition-all
                      duration-300
                      group-hover:grayscale-0
                      group-hover:scale-105
                      group-hover:opacity-100
                    "
                  />

                  <span className="text-sm font-medium text-muted">
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