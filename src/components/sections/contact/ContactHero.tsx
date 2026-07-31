import { Check, Phone, Mail, MapPin, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { CONTACT } from "@/lib/constants";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "./ContactForm";

const BADGES = [
  "24/7 Technical Response",
  "Global Distribution Network",
];

const CARDS: { icon: LucideIcon; title: string; lines: string[] }[] = [
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
    lines: [CONTACT.address.line1, CONTACT.address.line2],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [...CONTACT.hours],
  },
];

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#081428,#0C2145_45%,#14336B)] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.25),transparent_55%)]" />

      <div className="container-px relative py-16 lg:py-20">
        {/* Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.02fr]">
          <Reveal>
            <span className="mb-4 inline-block rounded-full bg-brand-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Global Support
            </span>

            <h1 className="text-4xl font-extrabold leading-tight lg:text-5xl">
              <span className="bg-gradient-to-r from-white via-brand-200 to-brand-400 bg-clip-text text-transparent">
                Let's Build Your
              </span>

              <span className="mt-2 block text-brand-300">
                Next Project Together
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Need product recommendations, technical assistance, or a bulk
              quotation? Our experienced team is here to help with reliable
              piping solutions tailored to your project.
            </p>

            <div className="mt-8 space-y-4">
              {BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>

                  <span className="text-slate-200">{badge}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-white p-6 shadow-2xl lg:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        {/* Contact Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CARDS.map((card, index) => (
            <Reveal key={card.title} delay={0.2 + index * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-white/15">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/20">
                  <card.icon className="h-7 w-7 text-brand-300" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  {card.title}
                </h3>

                <div className="space-y-2">
                  {card.lines.map((line) => (
                    <p
                      key={line}
                      className="text-sm leading-6 text-slate-300"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}