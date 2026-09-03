import {
  Award,
  Truck,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SmartImage } from "@/components/common/SmartImage";
import { ABOUT_HERO_IMAGE } from "@/data/images";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "100% genuine products with guaranteed quality.",
  },
  {
    icon: Award,
    title: "Trusted Brands",
    description:
      "Partnering with India's leading piping manufacturers.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description:
      "Reliable supply across Tamil Nadu.",
  },
  {
    icon: Users,
    title: "Technical Expertise",
    description:
      "Expert guidance for the right piping solutions.",
  },
];

export function CompanyStory() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">

        {/* =====================================================
            COMPANY STORY
        ===================================================== */}
        <div
          className="
            grid
            items-center
            gap-7
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10
          "
        >

          {/* ===================================================
              IMAGE
          =================================================== */}
          <Reveal>
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                shadow-[var(--shadow-card)]
              "
            >
              <SmartImage
                src={ABOUT_HERO_IMAGE}
                alt="Ponshankar Agencies"
                variant="water"
                className="
                  aspect-[4/3]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </Reveal>

          {/* ===================================================
              CONTENT
          =================================================== */}
          <Reveal delay={0.1}>
            <div>

              {/* Heading */}
              <SectionHeading
                align="left"
                eyebrow="Who We Are"
                title="Built on Trust. Since 1991."
              />

              {/* =================================================
                  COMPANY DESCRIPTION
              ================================================= */}
              <div
                className="
                  mt-4
                  max-w-2xl
                  space-y-3
                  text-sm
                  leading-6
                  text-muted
                  sm:text-[15px]
                "
              >
                <p>
Since 1991, Ponsankar Agencies has been delivering reliable plumbing solutions across India. We specialise in quality pipes, fittings, bathroom fittings, and plumbing accessories for agricultural, residential, and industrial applications.
                </p>

                <p>
With decades of expertise, we partner with dealers, contractors, businesses, and government and private-sector projects, providing quality products, professional support, and reliable after-sales service.
                </p>
              </div>

              {/* =================================================
                  FEATURES
              ================================================= */}
              <div
                className="
                  mt-6
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                {FEATURES.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="
                        group
                        flex
                        min-h-[132px]
                        flex-col
                        rounded-xl
                        border
                        border-line
                        bg-white
                        p-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-brand-200
                        hover:shadow-[var(--shadow-card)]
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          mb-3
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
                        <Icon
                          className="
                            size-[18px]
                            text-brand-600
                            transition-colors
                            duration-300
                            group-hover:text-white
                          "
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className="
                          text-sm
                          font-semibold
                          text-ink
                          sm:text-[15px]
                        "
                      >
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-muted
                        "
                      >
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                  CTA
              ================================================= */}

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
