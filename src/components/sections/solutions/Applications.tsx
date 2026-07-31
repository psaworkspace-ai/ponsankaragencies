import {
  Home,
  Building2,
  Factory,
  Sprout,
  Hotel,
  Warehouse,
  School,
  Landmark,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const APPLICATIONS = [
  {
    title: "Residential",
    description:
      "Modern plumbing and water distribution systems for homes, villas, and apartments.",
    icon: Home,
  },
  {
    title: "Commercial",
    description:
      "Reliable piping solutions for offices, malls, retail spaces, and business centers.",
    icon: Building2,
  },
  {
    title: "Industrial",
    description:
      "High-performance piping systems for factories, manufacturing plants, and industries.",
    icon: Factory,
  },
  {
    title: "Agriculture",
    description:
      "Efficient irrigation and water management solutions for agricultural applications.",
    icon: Sprout,
  },
  {
    title: "Hospitality",
    description:
      "Premium plumbing infrastructure for hotels, resorts, restaurants, and hospitality projects.",
    icon: Hotel,
  },
  {
    title: "Infrastructure",
    description:
      "Complete piping systems for government, utility, and infrastructure developments.",
    icon: Warehouse,
  },
  {
    title: "Educational Institutions",
    description:
      "Reliable water supply and drainage systems for schools, colleges, and universities.",
    icon: School,
  },
  {
    title: "Healthcare",
    description:
      "Safe and hygienic piping solutions for hospitals, clinics, and healthcare facilities.",
    icon: Landmark,
  },
];

export function Applications() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">
        <SectionHeading
          eyebrow="Applications"
          title="Built for Every Environment"
          subtitle="Our piping systems are trusted across residential, commercial, industrial, agricultural, hospitality, and public infrastructure projects."
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APPLICATIONS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
            >
              <div
                className="
                  group
                  flex
                  h-full
                  flex-col
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
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                  <item.icon className="h-7 w-7 text-brand-600" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-ink">
                  {item.title}
                </h3>

                <p className="leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}