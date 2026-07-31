import {
  BadgeCheck,
  CircleDollarSign,
  Headset,
  ShieldCheck,
  Truck,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Trusted Brands",
    description:
      "We partner with India's leading manufacturers to provide premium plumbing, piping and water management solutions that deliver long-lasting performance.",
  },
  {
    icon: BadgeCheck,
    title: "100% Genuine Products",
    description:
      "Every product supplied by Ponshankar Agencies is sourced directly from authorized brands, ensuring authenticity and uncompromised quality.",
  },
  {
    icon: Headset,
    title: "Expert Technical Support",
    description:
      "Our experienced team helps homeowners, builders, contractors and industries select the right products for every application.",
  },
  {
    icon: CircleDollarSign,
    title: "Competitive Pricing",
    description:
      "We combine premium quality with competitive pricing, delivering excellent value without compromising reliability or service.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Fast and dependable delivery services ensure your products reach your project site safely and on schedule.",
  },
  {
    icon: Wrench,
    title: "Complete Product Range",
    description:
      "From pipes and fittings to valves, tanks, drainage systems and accessories, we provide complete solutions under one roof.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-y bg-softer">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="Why Customers Trust Ponshankar Agencies"
            subtitle="Our commitment to quality products, trusted partnerships and exceptional customer service has made us the preferred supplier for residential, commercial and industrial projects."
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 0.08}>
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
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-20 rounded-3xl bg-brand-600 px-8 py-14 text-center text-white">
            <h3 className="text-4xl font-bold">
              Delivering Quality. Building Long-Term Trust.
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              At Ponshankar Agencies, every project is backed by genuine
              products, trusted brands and expert guidance. From residential
              plumbing to industrial infrastructure, we are committed to helping
              customers build with confidence.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <h4 className="text-5xl font-bold">20+</h4>
                <p className="mt-2 text-white/80">
                  Years of Industry Experience
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold">1000+</h4>
                <p className="mt-2 text-white/80">
                  Satisfied Customers
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold">25+</h4>
                <p className="mt-2 text-white/80">
                  Trusted Brand Partners
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-12 inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-brand-700 transition duration-300 hover:scale-105"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}