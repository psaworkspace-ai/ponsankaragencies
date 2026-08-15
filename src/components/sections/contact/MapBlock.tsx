import { ArrowUpRight } from "lucide-react";

import { CONTACT } from "@/lib/constants";
import { Reveal } from "@/components/common/Reveal";

const MAP_Q = encodeURIComponent(
  "558,Sathy Road,Erode Tamil Nadu 638003"
);

const MAP_SRC = `https://www.google.com/maps?q=${MAP_Q}&output=embed`;

const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_Q}`;

export function MapBlock() {
  return (
    <section className="pb-10 sm:pb-12 lg:pb-14">
      <div className="container-px">

        <Reveal
          className="
            relative
            min-h-[300px]
            overflow-hidden
            rounded-xl
            border
            border-line
            shadow-sm
            sm:min-h-[340px]
            lg:min-h-[380px]
          "
        >
          {/* =====================================================
              GOOGLE MAP
          ===================================================== */}
          <iframe
            title="Ponshankar Agencies headquarters"
            src={MAP_SRC}
            className="absolute inset-0 size-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* =====================================================
              LOCATION CARD
          ===================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              left-3
              top-3
              z-[3]
              max-w-[260px]
              rounded-xl
              bg-white
              p-4
              shadow-lg
              sm:left-5
              sm:top-5
              sm:max-w-[300px]
              sm:p-5
            "
          >
            <h3
              className="
                mb-1.5
                text-base
                font-semibold
                text-ink
                sm:text-lg
              "
            >
              Our Headquarters
            </h3>

            <p
              className="
                mb-2
                text-xs
                leading-5
                text-muted
                sm:text-sm
                sm:leading-6
              "
            >
              {CONTACT.address.full}
            </p>

            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="
                pointer-events-auto
                inline-flex
                items-center
                gap-1
                text-xs
                font-semibold
                text-brand-600
                transition-all
                duration-200
                hover:gap-2
                sm:text-sm
              "
            >
              Get Directions

              <ArrowUpRight className="size-3.5 sm:size-4" />
            </a>
          </div>

        </Reveal>

      </div>
    </section>
  );
}