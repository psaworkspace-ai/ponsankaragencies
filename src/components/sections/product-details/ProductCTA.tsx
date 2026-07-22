import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Download } from 'lucide-react'

import { Reveal } from '@/components/common/Reveal'

export function ProductCTA() {
  return (
    <section className="section-y">

      <div className="container-px">

        <Reveal>

          <div className="overflow-hidden rounded-3xl bg-brand-600 px-8 py-14 text-center text-white lg:px-16">

            <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
              Need Assistance?
            </span>

            <h2 className="mt-6 text-3xl font-bold lg:text-5xl">
              Looking for the Right Plumbing Solution?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
              Our experts can help you choose the perfect Prince SmartFit Plus
              products for residential, commercial and industrial applications.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-brand-700 transition hover:scale-105"
              >
                <Phone size={18} />
                Contact Us
              </Link>

              <button
                className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-700"
              >
                <Download size={18} />
                Download Brochure
              </button>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-700"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  )
}