import {
  Package,
  Truck,
  Users,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const SERVICES = [
  {
    icon: Package,
    title: "Premium Product Supply",
    description:
      "We supply a complete range of plumbing, piping, drainage, industrial and water management products from India's leading brands.",
  },
  {
    icon: Users,
    title: "Dealer & Distributor Support",
    description:
      "Dedicated support for dealers, retailers and distributors with reliable stock availability and competitive pricing.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Project Consultation",
    description:
      "Expert guidance to help builders, architects, engineers and homeowners choose the right products for every application.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description:
      "Efficient logistics ensure timely delivery across residential, commercial and industrial projects.",
  },
];

export function OurServices() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Solutions Beyond Products"
            subtitle="Ponshankar Agencies provides complete support from product selection to final delivery, ensuring every customer receives the right solution."
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <article
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
                    hover:border-brand-300
                    hover:shadow-[var(--shadow-card)]
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-brand-50
                      transition-all
                      duration-300
                      group-hover:bg-brand-600
                    "
                  >
                    <Icon className="h-8 w-8 text-brand-600 transition-all duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-ink">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.35}>
          <div className="mt-20 rounded-3xl bg-brand-600 px-8 py-14 text-center text-white">
            <h3 className="text-4xl font-bold">
              Complete Support For Every Project
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Whether you're constructing a new home, managing a commercial
              project, developing industrial infrastructure or supplying retail
              customers, our experienced team ensures you receive genuine
              products, expert guidance and dependable service from start to
              finish.
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-brand-700 transition duration-300 hover:scale-105"
            >
              Talk With Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}