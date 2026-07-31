import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const SOLUTIONS = [
  {
    title: "CPVC Plumbing Systems",
    description:
      "Premium hot and cold water piping systems for residential and commercial buildings.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
    href: "/products",
  },
  {
    title: "UPVC Water Supply",
    description:
      "Reliable UPVC piping systems designed for long-lasting water distribution.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    href: "/products",
  },
  {
    title: "Industrial Piping",
    description:
      "High-performance piping solutions for factories, process industries, and manufacturing plants.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    href: "/products",
  },
  {
    title: "Agriculture & Irrigation",
    description:
      "Efficient irrigation systems for farms, plantations, and agricultural infrastructure.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    href: "/products",
  },
  {
    title: "Water Storage Tanks",
    description:
      "Durable water storage solutions for homes, commercial buildings, and industries.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    href: "/products",
  },
  {
    title: "Drainage Systems",
    description:
      "Advanced SWR and underground drainage solutions for every construction project.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    href: "/products",
  },
];

export function FeaturedSolutions() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Featured Solutions"
          title="Complete Piping Solutions for Every Requirement"
          subtitle="Discover our comprehensive range of premium piping systems designed to meet residential, commercial, industrial, and infrastructure needs."
          className="mb-14"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {SOLUTIONS.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card)]">
                <div className="overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <h3 className="mb-4 text-2xl font-semibold text-ink">
                    {solution.title}
                  </h3>

                  <p className="mb-6 leading-7 text-muted">
                    {solution.description}
                  </p>

                  <Link
                    to={solution.href}
                    className="inline-flex items-center gap-2 font-semibold text-brand-600 transition-all group-hover:gap-3"
                  >
                    View Products

                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}