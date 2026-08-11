import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common/Reveal";
import { SmartImage } from "@/components/common/SmartImage";

import { HERO_IMAGE } from "@/data/images";

export function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-5 py-10 sm:px-6 sm:py-16 lg:py-32">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <Reveal>
            <span className="inline-flex rounded-full border border-brand-400/20 bg-brand-600/10 px-3 py-1.5 text-[11px] font-medium text-brand-300 sm:px-4 sm:py-2 sm:text-sm">
              Premium Plumbing & Water Solutions
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:mt-6 lg:text-6xl">
              Complete
              <span className="block text-brand-400">
                Product Portfolio
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 lg:mt-6 lg:text-lg lg:leading-8">
              Explore Ponshankar Agencies' complete collection of plumbing,
              drainage, industrial, agricultural and water storage solutions
              sourced from India's most trusted manufacturers.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 lg:mt-10 lg:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-brand-700 sm:px-7 sm:py-4"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-900 sm:px-7 sm:py-4"
              >
                About Us
              </Link>
            </div>
          </Reveal>

          {/* Right Image */}
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
                <SmartImage
                  src={HERO_IMAGE}
                  alt="Ponshankar Agencies Products"
                  className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[620px]"
                />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute left-3 bottom-3 rounded-xl bg-white p-3 shadow-xl sm:-left-4 sm:bottom-6 sm:p-5 lg:-left-6 lg:bottom-8 lg:p-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-2xl lg:text-3xl">
                  25+
                </h3>

                <p className="mt-1 text-[10px] text-slate-600 sm:text-xs lg:text-sm">
                  Product Categories
                </p>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute right-3 top-3 rounded-xl bg-brand-600 p-3 text-white shadow-xl sm:-right-4 sm:top-6 sm:p-5 lg:-right-6 lg:top-8 lg:p-6">
                <h3 className="text-lg font-bold sm:text-2xl lg:text-3xl">
                  Trusted
                </h3>

                <p className="mt-1 text-[10px] sm:text-xs lg:text-sm">
                  Dealer Network
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}