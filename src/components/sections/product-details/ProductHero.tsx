import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common/Reveal";
import { SmartImage } from "@/components/common/SmartImage";

import { HERO_IMAGE } from "@/data/images";

export function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-0
            top-0
            size-56
            rounded-full
            bg-brand-600/20
            blur-3xl
            sm:size-72
            lg:size-80
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            size-56
            rounded-full
            bg-blue-600/20
            blur-3xl
            sm:size-72
            lg:size-80
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}
      <div
        className="
          container-px
          relative
          z-10
          py-9
          sm:py-12
          lg:py-14
        "
      >
        <div
          className="
            grid
            items-center
            gap-7
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10
          "
        >

          {/* =================================================
              LEFT — CONTENT
          ================================================= */}
          <Reveal>

            {/* Eyebrow */}
            <span
              className="
                inline-flex
                rounded-full
                border
                border-brand-400/20
                bg-brand-600/10
                px-3
                py-1.5
                text-[10px]
                font-semibold
                tracking-wide
                text-brand-300
                sm:px-3.5
                sm:text-xs
              "
            >
              Premium Plumbing & Water Solutions
            </span>

            {/* Heading */}
            <h1
              className="
                mt-3
                max-w-xl
                text-3xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-white
                sm:mt-4
                sm:text-4xl
                lg:text-[48px]
              "
            >
              Complete
              <span className="block text-brand-400">
                Product Portfolio
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-slate-300
                sm:mt-4
                sm:text-[15px]
                sm:leading-6
                lg:text-base
                lg:leading-7
              "
            >
              Explore Ponshankar Agencies' complete collection of
              plumbing, drainage, industrial, agricultural and water
              storage solutions sourced from India's most trusted
              manufacturers.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-2.5
                sm:mt-6
                sm:gap-3
              "
            >
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  rounded-lg
                  bg-brand-600
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-brand-700
                  hover:shadow-lg
                  active:scale-95
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
              >
                Contact Us

                <ArrowRight
                  className="
                    ml-1.5
                    size-3.5
                    sm:size-4
                  "
                />
              </Link>

              <Link
                to="/about"
                className="
                  inline-flex
                  items-center
                  rounded-lg
                  border
                  border-white/20
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-slate-900
                  active:scale-95
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
              >
                About Us
              </Link>
            </div>

          </Reveal>

          {/* =================================================
              RIGHT — IMAGE
          ================================================= */}
          <Reveal delay={0.1}>

            <div className="relative">

              {/* Main Image */}
              <div
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  shadow-xl
                  sm:rounded-2xl
                "
              >
                <SmartImage
                  src={HERO_IMAGE}
                  alt="Ponshankar Agencies Products"
                  className="
                    h-[230px]
                    w-full
                    object-cover
                    sm:h-[300px]
                    lg:h-[360px]
                  "
                />
              </div>

              {/* =================================================
                  FLOATING CARD — PRODUCT CATEGORIES
              ================================================= */}
              <div
                className="
                  absolute
                  bottom-3
                  left-3
                  rounded-lg
                  bg-white
                  px-3
                  py-2.5
                  shadow-lg
                  sm:bottom-4
                  sm:left-4
                  sm:rounded-xl
                  sm:px-4
                  sm:py-3
                  lg:bottom-5
                  lg:left-5
                "
              >
                <h3
                  className="
                    text-base
                    font-bold
                    text-slate-900
                    sm:text-xl
                  "
                >
                  25+
                </h3>

                <p
                  className="
                    mt-0.5
                    text-[9px]
                    text-slate-600
                    sm:text-xs
                  "
                >
                  Product Categories
                </p>
              </div>

              {/* =================================================
                  FLOATING CARD — TRUSTED NETWORK
              ================================================= */}
              <div
                className="
                  absolute
                  right-3
                  top-3
                  rounded-lg
                  bg-brand-600
                  px-3
                  py-2.5
                  text-white
                  shadow-lg
                  sm:right-4
                  sm:top-4
                  sm:rounded-xl
                  sm:px-4
                  sm:py-3
                  lg:right-5
                  lg:top-5
                "
              >
                <h3
                  className="
                    text-base
                    font-bold
                    sm:text-xl
                  "
                >
                  Trusted
                </h3>

                <p
                  className="
                    mt-0.5
                    text-[9px]
                    sm:text-xs
                  "
                >
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