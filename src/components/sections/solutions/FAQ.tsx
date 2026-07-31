import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const FAQS = [
  {
    question: "What types of piping products do you supply?",
    answer:
      "We supply CPVC, UPVC, PVC, SWR, HDPE pipes, water storage tanks, fittings, valves, and plumbing accessories from leading brands.",
  },
  {
    question: "Are all your products genuine?",
    answer:
      "Yes. We are an authorized distributor and source products directly from reputed manufacturers.",
  },
  {
    question: "Do you supply products for large construction projects?",
    answer:
      "Yes. We cater to residential, commercial, industrial, and infrastructure projects with bulk supply capabilities.",
  },
  {
    question: "Can you help choose the right products?",
    answer:
      "Absolutely. Our experts recommend the best products based on your project needs.",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes. We provide timely delivery across Tamil Nadu and nearby regions.",
  },
  {
    question: "Which brands do you deal with?",
    answer:
      "We partner with India's leading piping and water management brands.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-softer py-14 lg:py-16">
      <div className="container-px max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about our products and services."
          className="mb-8"
        />

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm transition hover:shadow-md">
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <h3 className="pr-4 text-base font-semibold text-ink">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      className={`h-5 w-5 text-brand-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-line px-5 py-4">
                        <p className="text-sm leading-6 text-muted">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}