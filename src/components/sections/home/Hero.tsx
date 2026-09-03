import { Boxes } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { SmartImage } from '@/components/common/SmartImage'
import { HERO_IMAGE } from '@/data/images'

export function Hero() {
  return (
    <section className="pt-6 md:pt-8 pb-0">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-2xl">

          <div className="absolute inset-0">
            <SmartImage
              src={HERO_IMAGE}
              alt="Industrial Piping Infrastructure"
              variant="industrial"
              icon={Boxes}
              className="size-full object-cover object-center"
              eager
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,20,40,.85)_0%,rgba(10,27,56,.72)_45%,rgba(20,51,107,.50)_100%)]" />

          <div
            className="
              relative
              flex
              items-center
              min-h-[420px]
              md:min-h-[500px]
              lg:min-h-[560px]
              px-6
              py-12
              sm:px-10
              lg:px-12
              lg:py-20
            "
          >
            <Reveal>
              <div className="max-w-2xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                  All Your  {" "}
                  <span className="text-brand-400">
                  Plumbing Needs, 
                  </span>{" "}
                 Under One Roof.
                </h1>

                <p className="mt-4 max-w-xl text-sm md:text-base leading-7 text-slate-200/85">
A complete range of PVC, CPVC, uPVC, and GI pipes and fittings, valves, hoses, water tanks, and allied plumbing products for agricultural, residential, and industrial needs—all under one roof.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}