import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Truck,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SmartImage } from "@/components/common/SmartImage";
import { ABOUT_HERO_IMAGE } from "@/data/images";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "100% genuine products with guaranteed quality.",
  },
  {
    icon: Award,
    title: "Trusted Brands",
    description: "Partnering with India's leading piping manufacturers.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Reliable supply across Tamil Nadu.",
  },
  {
    icon: Users,
    title: "Technical Expertise",
    description: "Expert guidance for the right piping solutions.",
  },
];

export function CompanyStory() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Image */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <SmartImage
                src={ABOUT_HERO_IMAGE}
                alt="Ponshankar Agencies"
                variant="water"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Right Content */}
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Delivering Trusted Piping Solutions Since 1993"
              subtitle="For over 30 years, Ponshankar Agencies has been supplying quality piping products and water management solutions to customers across Tamil Nadu."
            />

            <div className="mt-6 space-y-5 text-base leading-7 text-muted">
              <p>
                Established in 1993, Ponshankar Agencies is a trusted distributor of
                premium piping products from leading brands. We serve residential,
                commercial, industrial, agricultural, and infrastructure projects with
                reliable products and professional service.
              </p>

              <p>
                Our focus on quality, timely delivery, and customer satisfaction has helped
                us build long-term relationships with contractors, engineers, builders, and
                businesses across Tamil Nadu.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="mb-4 grid size-12 place-items-center rounded-xl bg-brand-50 transition-colors duration-300 group-hover:bg-brand-600">
                    <feature.icon className="size-6 text-brand-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-ink">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}