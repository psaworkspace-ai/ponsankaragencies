import {
  Award,
  Building2,
  Boxes,
  Users,
  Briefcase,
  Clock3,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const STATS = [
  {
    value: "30+",
    label: "Years of Experience",
    description: "Delivering trusted piping solutions since 1993.",
    icon: Clock3,
  },
  {
    value: "4500+",
    label: "Products",
    description: "Extensive range of plumbing and piping products.",
    icon: Boxes,
  },
  {
    value: "25+",
    label: "Brand Partners",
    description: "Partnering with India's leading manufacturers.",
    icon: Award,
  },
  {
    value: "10000+",
    label: "Satisfied Customers",
    description: "Serving contractors, builders, industries, and homeowners.",
    icon: Users,
  },
  {
    value: "500+",
    label: "Projects Supported",
    description: "Reliable supply for residential, commercial, and industrial projects.",
    icon: Briefcase,
  },
  {
    value: "100%",
    label: "Genuine Products",
    description: "Authorized products backed by trusted manufacturers.",
    icon: Building2,
  },
];

export function SuccessStatistics() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Achievements"
          title="Trusted by Professionals Across Tamil Nadu"
          subtitle="Our long-standing commitment to quality, service, and customer satisfaction has helped us become one of the region's trusted piping solution providers."
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.05}
            >
              <div
                className="
                  group
                  h-full
                  rounded-3xl
                  border
                  border-line
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-brand-200
                  hover:shadow-[var(--shadow-card)]
                "
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                  <stat.icon className="h-8 w-8 text-brand-600" />
                </div>

                <div className="mb-2 text-5xl font-bold text-brand-600">
                  {stat.value}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-ink">
                  {stat.label}
                </h3>

                <p className="leading-7 text-muted">
                  {stat.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}