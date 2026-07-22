import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'

export function SolutionsCta() {
  return (
    <section className="relative overflow-hidden bg-[#050B18] py-20 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,.12),transparent_45%)]" />

      <div className="container-px relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-brand-300 backdrop-blur">
              Let's Build Together
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Looking for the Right Piping Solution?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Whether you're working on a residential, commercial, industrial,
              or agricultural project, our team is ready to help you choose the
              right products and deliver complete piping solutions.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border border-white/15 bg-white/10 text-white hover:bg-white/20"
              >
                <a href="tel:+919876543210">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}