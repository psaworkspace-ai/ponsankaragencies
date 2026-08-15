import { Eye, Target } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const ITEMS = [
  {
    title: "Our Vision",
    description:
      "To be Tamil Nadu’s most trusted distribution partner for premium piping and water management solutions by delivering quality products, innovation, and exceptional customer service.",
    icon: Eye,
  },
  {
    title: "Our Mission",
    description:
      "To provide genuine products from leading brands, offer technical expertise, maintain efficient logistics, and build long-term relationships through reliability and customer satisfaction.",
    icon: Target,
  },
];

export function VisionMission() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <div className="mb-7">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Vision & Mission"
            subtitle="Our values guide every partnership, every project, and every solution we deliver."
          />
        </div>

        {/* =====================================================
            VISION & MISSION
        ===================================================== */}
        <div
          className="
            grid
            gap-4
            lg:grid-cols-2
            lg:gap-5
          "
        >
          {ITEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.07}
                className="h-full"
              >
                <div
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[175px]
                    flex-col
                    overflow-hidden
                    rounded-xl
                    border
                    border-line
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-200
                    hover:shadow-[var(--shadow-card)]
                    sm:p-6
                  "
                >
                  {/* =================================================
                      ACCENT
                  ================================================= */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-1
                      bg-brand-600
                      opacity-80
                      transition-all
                      duration-300
                      group-hover:w-1.5
                    "
                  />

                  {/* =================================================
                      ICON
                  ================================================= */}
                  <div
                    className="
                      mb-3.5
                      grid
                      size-10
                      shrink-0
                      place-items-center
                      rounded-lg
                      bg-brand-50
                      transition-all
                      duration-300
                      group-hover:bg-brand-600
                    "
                  >
                    <Icon
                      className="
                        size-[19px]
                        text-brand-600
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================= */}
                  <h3
                    className="
                      text-lg
                      font-semibold
                      leading-6
                      text-ink
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}
                  <p
                    className="
                      mt-2
                      max-w-2xl
                      text-sm
                      leading-6
                      text-muted
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}