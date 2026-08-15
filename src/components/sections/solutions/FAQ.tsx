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
    <section className="bg-softer py-10 sm:py-12 lg:py-14">
      <div className="container-px mx-auto max-w-3xl">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <div className="mb-7">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our products and services."
          />
        </div>

        {/* =====================================================
            FAQ LIST
        ===================================================== */}
        <div className="space-y-2.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal
                key={faq.question}
                delay={(index % 4) * 0.04}
              >
                <div
                  className={`
                    overflow-hidden
                    rounded-xl
                    border
                    bg-white
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-brand-200 shadow-[var(--shadow-card)]"
                        : "border-line shadow-sm hover:border-brand-100 hover:shadow-md"
                    }
                  `}
                >

                  {/* =================================================
                      QUESTION
                  ================================================= */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-4
                      py-3.5
                      text-left
                      transition-colors
                      duration-200
                      hover:bg-brand-50/40
                      sm:px-5
                    "
                  >

                    <h3
                      className={`
                        flex-1
                        pr-2
                        text-sm
                        font-semibold
                        leading-5
                        transition-colors
                        duration-200
                        sm:text-[15px]
                        ${
                          isOpen
                            ? "text-brand-700"
                            : "text-ink"
                        }
                      `}
                    >
                      {faq.question}
                    </h3>

                    {/* Chevron */}
                    <span
                      className={`
                        grid
                        size-8
                        shrink-0
                        place-items-center
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-brand-600 text-white"
                            : "bg-brand-50 text-brand-600"
                        }
                      `}
                    >
                      <ChevronDown
                        className={`
                          size-4
                          transition-transform
                          duration-300
                          ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </span>

                  </button>

                  {/* =================================================
                      ANSWER
                  ================================================= */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="overflow-hidden">

                      <div
                        className="
                          border-t
                          border-line
                          px-4
                          py-3.5
                          sm:px-5
                        "
                      >
                        <p
                          className="
                            text-xs
                            leading-5
                            text-muted
                            sm:text-sm
                            sm:leading-6
                          "
                        >
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