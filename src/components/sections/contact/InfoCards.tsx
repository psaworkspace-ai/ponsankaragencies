import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import { CONTACT } from "@/lib/constants";
import { Reveal } from "@/components/common/Reveal";
import type { LucideIcon } from "lucide-react";

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

export function InfoCards() {
  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <div
        className="
          container-px
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          lg:grid-cols-4
          lg:gap-4
        "
      >
        {CARDS.map((card, index) => {
          const Icon = card.icon;

          return (
            <Reveal
              key={card.title}
              delay={index * 0.05}
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
                  border-line
                  bg-white
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand-200
                  hover:shadow-[var(--shadow-card)]
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
                    bg-brand-50
                    transition-colors
                    duration-300
                    group-hover:bg-brand-600
                  "
                >
                  <Icon
                    className="
                      size-5
                      text-brand-600
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h4
                    className="
                      mb-1.5
                      text-sm
                      font-semibold
                      text-ink
                    "
                  >
                    {card.title}
                  </h4>

                  <div className="space-y-0.5">
                    {card.lines.map((line) => (
                      <p
                        key={line}
                        className="
                          break-words
                          text-xs
                          leading-5
                          text-muted
                          sm:text-[13px]
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
    </section>
  );
}