import { Star } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const TESTIMONIALS = [
  {
    name: "R. Kumar",
    role: "Civil Contractor",
    company: "Kumar Constructions",
    message:
      "Ponshankar Agencies has been our trusted supplier for years. Their genuine products, competitive pricing, and timely delivery make them our preferred partner.",
  },
  {
    name: "S. Prakash",
    role: "Project Engineer",
    company: "ABC Infrastructure",
    message:
      "Excellent customer support and technical guidance. Their team always recommends the right piping solutions for our projects.",
  },
  {
    name: "M. Ramesh",
    role: "Builder",
    company: "Ramesh Builders",
    message:
      "The product quality is outstanding, and deliveries are always on time. Highly recommended for residential and commercial developments.",
  },
];

export function Testimonials() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          subtitle="Trusted by builders, contractors, engineers, industries, and homeowners across Tamil Nadu."
          className="mb-14"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card)]">
                
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="flex-1 text-base leading-8 text-muted italic">
                  "{item.message}"
                </p>

                <div className="mt-8 border-t border-line pt-5">
                  <h3 className="text-lg font-semibold text-ink">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted">
                    {item.role}
                  </p>

                  <p className="text-sm font-medium text-brand-600">
                    {item.company}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}