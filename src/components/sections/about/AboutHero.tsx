import { Link } from "react-router-dom";
import {
  ArrowRight,
  History,
  LayoutGrid,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { ABOUT_HERO_IMAGE } from "@/data/images";

const STATS = [
  {
    icon: History,
    value: "35 Years",
    label: "Experience",
  },
  {
    icon: LayoutGrid,
    value: "4500+",
    label: "Products",
  },
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden text-white">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      {ABOUT_HERO_IMAGE && (
        <img
          src={ABOUT_HERO_IMAGE}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />
      )}

      {/* =====================================================
          BACKGROUND OVERLAY
      ===================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(120deg,#081428,#0C2145_40%,#1E3A8A)]
          opacity-95
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(50%_70%_at_85%_25%,rgba(59,130,246,.4),transparent_60%)]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div
        className="
          container-px
          relative
          py-10
          sm:py-12
          lg:py-14
        "
      >
        <Reveal>
          <div
            className="
              max-w-[540px]
              rounded-2xl
              border
              border-white/[0.16]
              bg-white/[0.08]
              p-6
              backdrop-blur-[14px]
              sm:p-7
              lg:p-8
            "
          >

            {/* =================================================
                EYEBROW
            ================================================= */}
            <span
              className="
                mb-2.5
                inline-block
                text-[11px]
                font-semibold
                uppercase
                tracking-wider
                text-brand-300
              "
            >
              Precision Engineering
            </span>

            {/* =================================================
                TITLE
            ================================================= */}
            <h1
              className="
                text-2xl
                font-extrabold
                leading-[1.12]
                text-white
                sm:text-3xl
                md:text-4xl
                lg:text-[2.7rem]
              "
            >
              Building Stronger Water Systems for Every Project
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p
              className="
                mt-3
                max-w-[500px]
                text-sm
                leading-6
                text-slate-200/85
                sm:text-[15px]
                sm:leading-6
              "
            >
              Setting the benchmark for infrastructure excellence
              with certified, high-performance piping solutions for
              industrial, agricultural, and residential developments.
            </p>

            {/* =================================================
                CTA
            ================================================= */}

            {/* =================================================
                STATS
            ================================================= */}
            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-3
                sm:flex
                sm:flex-wrap
              "
            >
              {STATS.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="
                      flex
                      items-center
                      gap-2.5
                      rounded-xl
                      border
                      border-white/[0.14]
                      bg-white/[0.08]
                      px-3.5
                      py-2.5
                      backdrop-blur-[10px]
                      sm:px-4
                    "
                  >
                    <Icon
                      className="
                        size-5
                        shrink-0
                        text-brand-300
                        sm:size-[22px]
                      "
                    />

                    <div>
                      <b
                        className="
                          block
                          font-display
                          text-lg
                          font-extrabold
                          leading-none
                          text-white
                          sm:text-xl
                        "
                      >
                        {stat.value}
                      </b>

                      <span
                        className="
                          mt-0.5
                          block
                          text-[10px]
                          text-slate-200/75
                          sm:text-xs
                        "
                      >
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
