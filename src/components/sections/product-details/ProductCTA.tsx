import {
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common/Reveal";

export function ProductCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 container-px">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="grid lg:grid-cols-[1.5fr_0.9fr]">

              {/* Left Content */}
              <div className="p-10 lg:p-16">
                <span className="inline-flex rounded-full border border-brand-400/20 bg-brand-600/10 px-4 py-2 text-sm font-semibold text-brand-300">
                  LET'S BUILD TOGETHER
                </span>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                  Looking For The Right
                  <span className="block text-brand-400">
                    Plumbing Solution?
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Whether you're constructing a home, managing a commercial
                  building, handling industrial projects or searching for
                  premium plumbing products, Ponshankar Agencies is here to
                  help. Our experienced team will recommend the best products
                  from India's leading brands.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href="tel:+919999999999"
                    className="inline-flex items-center rounded-xl bg-brand-600 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-brand-700"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-900"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-xl border border-brand-500 bg-brand-600/10 px-7 py-4 font-semibold text-brand-300 transition duration-300 hover:bg-brand-600 hover:text-white"
                  >
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>

                </div>

                {/* Trust Indicators */}
                <div className="mt-12 grid gap-6 sm:grid-cols-3">

                  <div>
                    <h3 className="text-3xl font-bold text-brand-400">
                      20+
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Years Experience
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-brand-400">
                      1000+
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Happy Customers
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-brand-400">
                      25+
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Trusted Brands
                    </p>
                  </div>

                </div>
              </div>

              {/* Right Contact Card */}
              <div className="border-t border-white/10 bg-white/5 p-10 lg:border-l lg:border-t-0 lg:p-12">

                <h3 className="text-3xl font-bold text-white">
                  Contact Us
                </h3>

                <p className="mt-3 text-slate-400">
                  We're ready to assist you with product enquiries,
                  quotations and technical guidance.
                </p>

                <div className="mt-10 space-y-8">

                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-brand-600/10 p-3">
                      <Phone className="h-6 w-6 text-brand-400" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Phone
                      </p>

                      <p className="mt-1 font-medium text-white">
                        +91 XXXXX XXXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-brand-600/10 p-3">
                      <MessageCircle className="h-6 w-6 text-brand-400" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        WhatsApp
                      </p>

                      <p className="mt-1 font-medium text-white">
                        +91 XXXXX XXXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-brand-600/10 p-3">
                      <Mail className="h-6 w-6 text-brand-400" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Email
                      </p>

                      <p className="mt-1 break-all font-medium text-white">
                        info@ponshankaragencies.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-brand-600/10 p-3">
                      <MapPin className="h-6 w-6 text-brand-400" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Address
                      </p>

                      <p className="mt-1 text-white">
                        Erode, Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-brand-600/10 p-3">
                      <Clock className="h-6 w-6 text-brand-400" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Working Hours
                      </p>

                      <p className="mt-1 text-white">
                        Monday – Saturday
                      </p>

                      <p className="text-slate-400">
                        9:00 AM – 7:00 PM
                      </p>
                    </div>
                  </div>

                </div>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-brand-700"
                >
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}