import {
  Home,
  Building2,
  Factory,
  Sprout,
  Hotel,
  Warehouse,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const INDUSTRIES = [
  {
    title: "Residential",
    description:
      "Reliable plumbing and water distribution solutions for homes, villas, apartments, and residential communities.",
    icon: Home,
    href: "/products",
  },
  {
    title: "Commercial",
    description:
      "Efficient piping systems for offices, shopping malls, hospitals, educational institutions, and commercial buildings.",
    icon: Building2,
    href: "/products",
  },
  {
    title: "Industrial",
    description:
      "Heavy-duty piping solutions engineered for factories, manufacturing plants, processing units, and industrial facilities.",
    icon: Factory,
    href: "/products",
  },
  {
    title: "Agriculture",
    description:
      "Water-efficient irrigation and agricultural piping systems for farms, plantations, and rural developments.",
    icon: Sprout,
    href: "/products",
  },
  {
    title: "Hospitality",
    description:
      "Reliable plumbing infrastructure for hotels, resorts, restaurants, and hospitality projects.",
    icon: Hotel,
    href: "/products",
  },
  {
    title: "Infrastructure",
    description:
      "Large-scale piping solutions for government projects, public infrastructure, utilities, and smart cities.",
    icon: Warehouse,
    href: "/products",
  },
];

export function IndustriesSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Serve"
          subtitle="Delivering complete piping solutions for every sector with premium products, technical expertise, and reliable support."
          className="mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <Reveal
              key={industry.title}
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
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-brand-200
                  hover:shadow-[var(--shadow-card)]
                "
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                  <industry.icon className="h-8 w-8 text-brand-600" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-ink">
                  {industry.title}
                </h3>

                <p className="mb-6 flex-1 leading-7 text-muted">
                  {industry.description}
                </p>

                <Link
                  to={industry.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-all group-hover:gap-3"
                >
                  Explore Products

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}