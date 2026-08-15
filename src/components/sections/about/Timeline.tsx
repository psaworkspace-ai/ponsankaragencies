import {
  Building2,
  Truck,
  Award,
  Factory,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const MILESTONES = [
  {
    year: "1993",
    title: "Company Founded",
    description:
      "Ponshankar Agencies was established with the vision of supplying reliable piping solutions.",
    icon: Building2,
  },
  {
    year: "2005",
    title: "Distribution Expansion",
    description:
      "Expanded operations and strengthened our distribution network across Tamil Nadu.",
    icon: Truck,
  },
  {
    year: "2015",
    title: "Premium Brand Partnerships",
    description:
      "Partnered with India's leading piping manufacturers to offer a wider product range.",
    icon: Award,
  },
  {
    year: "Today",
    title: "Trusted Industry Partner",
    description:
      "Serving residential, commercial, industrial, and infrastructure projects with dependable solutions.",
    icon: Factory,
  },
];

export function Timeline() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <div className="mb-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Growing Through Quality & Trust"
            subtitle="Over the years, Ponshankar Agencies has continuously expanded its capabilities while maintaining the same commitment to quality, service, and customer satisfaction."
          />
        </div>

        {/* =====================================================
            TIMELINE
        ===================================================== */}
        <div className="relative">

          {/* Desktop Timeline Line */}
          <div
            className="
              absolute
              left-0
              right-0
              top-8
              hidden
              h-px
              bg-line
              lg:block
            "
          />

          {/* Mobile Timeline Line */}
          <div
            className="
              absolute
              bottom-0
              left-[19px]
              top-0
              w-px
              bg-line
              lg:hidden
            "
          />

          {/* ===================================================
              MILESTONES
          =================================================== */}
          <div
            className="
              grid
              gap-5
              lg:grid-cols-4
              lg:gap-4
            "
          >
            {MILESTONES.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.year}
                  delay={index * 0.06}
                  className="h-full"
                >
                  <div className="relative">

                    {/* =========================================
                        DESKTOP
                    ========================================= */}
                    <div className="hidden lg:block">

                      {/* Timeline Icon */}
                      <div
                        className="
                          relative
                          z-10
                          mx-auto
                          mb-5
                          grid
                          size-16
                          place-items-center
                          rounded-full
                          border-4
                          border-softer
                          bg-brand-600
                          shadow-md
                        "
                      >
                        <Icon className="size-6 text-white" />
                      </div>

                      {/* Timeline Card */}
                      <div
                        className="
                          flex
                          min-h-[170px]
                          flex-col
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

                        {/* Year */}
                        <span
                          className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wide
                            text-brand-600
                          "
                        >
                          {item.year}
                        </span>

                        {/* Title */}
                        <h3
                          className="
                            mt-1.5
                            text-base
                            font-semibold
                            leading-5
                            text-ink
                          "
                        >
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="
                            mt-2
                            text-xs
                            leading-5
                            text-muted
                          "
                        >
                          {item.description}
                        </p>

                      </div>
                    </div>

                    {/* =========================================
                        MOBILE
                    ========================================= */}
                    <div
                      className="
                        flex
                        gap-4
                        lg:hidden
                      "
                    >

                      {/* Mobile Icon */}
                      <div
                        className="
                          relative
                          z-10
                          grid
                          size-10
                          shrink-0
                          place-items-center
                          rounded-full
                          border-4
                          border-softer
                          bg-brand-600
                          shadow-sm
                        "
                      >
                        <Icon className="size-4 text-white" />
                      </div>

                      {/* Mobile Card */}
                      <div
                        className="
                          mb-1
                          min-w-0
                          flex-1
                          rounded-xl
                          border
                          border-line
                          bg-white
                          p-4
                          shadow-sm
                        "
                      >

                        {/* Year */}
                        <span
                          className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wide
                            text-brand-600
                          "
                        >
                          {item.year}
                        </span>

                        {/* Title */}
                        <h3
                          className="
                            mt-1.5
                            text-base
                            font-semibold
                            leading-5
                            text-ink
                          "
                        >
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="
                            mt-2
                            text-xs
                            leading-5
                            text-muted
                          "
                        >
                          {item.description}
                        </p>

                      </div>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}