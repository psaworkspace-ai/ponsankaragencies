import {
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { CONTACT } from "@/lib/constants";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "./ContactForm";

const BADGES = [
  "24/7 Technical Response",
  "Global Distribution Network",
];

const CARDS: {
  icon: LucideIcon;
  title: string;
  lines: string[];
}[] = [
  {
    icon: Phone,
    title: "Phone",
    lines: [...CONTACT.phones],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [...CONTACT.emails],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [
      CONTACT.address.line1,
      CONTACT.address.line2,
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [...CONTACT.hours],
  },
];

export function ContactHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(120deg,#081428,#0C2145_45%,#14336B)]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.25),transparent_55%)]
        "
      />

      <div
        className="
          container-px
          relative
          py-10
          sm:py-12
          lg:py-14
        "
      >

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}
        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[1fr_1fr]
            lg:gap-10
          "
        >

          {/* ===================================================
              LEFT CONTENT
          =================================================== */}
          <Reveal>

            <span
              className="
                mb-3
                inline-block
                rounded-full
                bg-brand-500/20
                px-3
                py-1
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-brand-300
                sm:text-xs
              "
            >
              Global Support
            </span>

            <h1
              className="
                max-w-xl
                text-3xl
                font-extrabold
                leading-[1.1]
                sm:text-4xl
                lg:text-[42px]
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-brand-200
                  to-brand-400
                  bg-clip-text
                  text-transparent
                "
              >
                Let's Build Your
              </span>

              <span
                className="
                  mt-1
                  block
                  text-brand-300
                "
              >
                Next Project Together
              </span>
            </h1>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-6
                text-slate-300
                sm:text-base
                sm:leading-7
              "
            >
              Need product recommendations, technical assistance,
              or a bulk quotation? Our experienced team is here to
              help with reliable piping solutions tailored to your
              project.
            </p>

            {/* =================================================
                BADGES
            ================================================= */}
            <div className="mt-6 space-y-3">
              {BADGES.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-3"
                >
                  <span
                    className="
                      flex
                      size-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-brand-600
                    "
                  >
                    <Check
                      className="size-3.5 text-white"
                      strokeWidth={3}
                    />
                  </span>

                  <span className="text-sm text-slate-200">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

          </Reveal>

          {/* ===================================================
              CONTACT FORM
          =================================================== */}
          <Reveal delay={0.1}>
            <div
              className="
                rounded-2xl
                bg-white
                p-5
                shadow-2xl
                sm:p-6
                lg:p-7
              "
            >
              <ContactForm />
            </div>
          </Reveal>

        </div>

        {/* =====================================================
            CONTACT INFORMATION CARDS
        ===================================================== */}
        <div
          className="
            mt-8
            grid
            gap-3
            sm:grid-cols-2
            lg:mt-10
            xl:grid-cols-4
          "
        >
          {CARDS.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal
                key={card.title}
                delay={0.15 + index * 0.05}
                className="h-full"
              >
                <div
                  className="
                    group
                    flex
                    h-full
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    p-4
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-400/30
                    hover:bg-white/15
                  "
                >

                  {/* Icon */}
                  <div
                    className="
                      flex
                      size-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-brand-500/20
                      transition-colors
                      duration-300
                      group-hover:bg-brand-500/30
                    "
                  >
                    <Icon
                      className="size-5 text-brand-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3
                      className="
                        mb-1.5
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      {card.title}
                    </h3>

                    <div className="space-y-0.5">
                      {card.lines.map((line) => (
                        <p
                          key={line}
                          className="
                            break-words
                            text-xs
                            leading-5
                            text-slate-300
                          "
                        >
                          {line}
                        </p>
                      ))}
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