import { Link } from "react-router-dom";
import { Building2, Factory, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { SOLUTIONS_HERO_IMAGE } from "@/data/images";

const STATS = [
  {
    icon: Building2,
    value: "4500+",
    label: "Products",
  },
  {
    icon: Factory,
    value: "30+",
    label: "Years Experience",
  },
];

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden text-white">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      {SOLUTIONS_HERO_IMAGE && (
        <img
          src={SOLUTIONS_HERO_IMAGE}
          alt="Ponshankar Agencies piping solutions"
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
          bg-[radial-gradient(50%_70%_at_85%_25%,rgba(59,130,246,.35),transparent_60%)]
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
              max-w-[650px]
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
              Complete Piping Solutions
            </span>

            {/* =================================================
                TITLE
            ================================================= */}
            <h1
              className="
                max-w-[600px]
                text-2xl
                font-extrabold
                leading-[1.12]
                text-white
                sm:text-3xl
                md:text-4xl
                lg:text-[2.7rem]
              "
            >
              Innovative Solutions for Every Water Management Need
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p
              className="
                mt-3
                max-w-[570px]
                text-sm
                leading-6
                text-slate-200/85
                sm:text-[15px]
                sm:leading-6
              "
            >
              From residential plumbing to industrial infrastructure,
              Ponshankar Agencies delivers reliable piping systems,
              premium brands, and technical expertise for projects of
              every size.
            </p>

            {/* =================================================
                CTA
            ================================================= */}
            <div className="mt-5">
              <Button
                asChild
                size="default"
                variant="outline"
                className="
                  border-white/70
                  bg-white/10
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-ink
                "
              >
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

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
              {STATS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
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
                    {/* Icon */}
                    <div
                      className="
                        grid
                        size-9
                        shrink-0
                        place-items-center
                        rounded-lg
                        bg-brand-500/20
                      "
                    >
                      <Icon
                        className="
                          size-[18px]
                          text-brand-300
                        "
                      />
                    </div>

                    {/* Stat */}
                    <div>
                      <div
                        className="
                          text-lg
                          font-extrabold
                          leading-none
                          text-white
                          sm:text-xl
                        "
                      >
                        {item.value}
                      </div>

                      <div
                        className="
                          mt-0.5
                          text-[10px]
                          text-slate-300
                          sm:text-xs
                        "
                      >
                        {item.label}
                      </div>
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