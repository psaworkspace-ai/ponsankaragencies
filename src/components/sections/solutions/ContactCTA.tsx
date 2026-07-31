import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-24">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container-px relative z-10">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur">
              Let's Build Better Together
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ready to Start Your Next Project?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Whether you're building a home, managing a commercial project,
              or sourcing industrial piping solutions, our team is here to help
              you choose the right products from trusted brands with reliable
              support and timely delivery.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-7
                  py-4
                  font-semibold
                  text-brand-600
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Contact Our Team
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="tel:+919876543210"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/30
                  bg-white/10
                  px-7
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:bg-white/20
                "
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>

            {/* Contact Cards */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <Phone className="mx-auto mb-4 h-8 w-8 text-white" />

                <h3 className="mb-2 text-lg font-semibold text-white">
                  Call Us
                </h3>

                <p className="text-white/80">
                  +91 98765 43210
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <Mail className="mx-auto mb-4 h-8 w-8 text-white" />

                <h3 className="mb-2 text-lg font-semibold text-white">
                  Email Us
                </h3>

                <p className="break-all text-white/80">
                  info@ponshankaragencies.com
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <MapPin className="mx-auto mb-4 h-8 w-8 text-white" />

                <h3 className="mb-2 text-lg font-semibold text-white">
                  Visit Us
                </h3>

                <p className="text-white/80">
                  Erode, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}