import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  Truck,
  ShieldCheck,
  Users,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SmartImage } from '@/components/common/SmartImage'
import { ABOUT_HERO_IMAGE } from '@/data/images'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    description:
      'We supply only authentic products from trusted manufacturers.',
  },
  {
    icon: Award,
    title: 'Premium Brands',
    description:
      'Authorized distributor for leading national and international brands.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'Efficient logistics ensure timely delivery across Tamil Nadu.',
  },
  {
    icon: Users,
    title: 'Technical Support',
    description:
      'Experienced team providing expert product guidance and assistance.',
  },
]

export function CompanyStory() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Image */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <SmartImage
                src={ABOUT_HERO_IMAGE}
                alt="Ponshankar Agencies"
                variant="water"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Right Content */}
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Delivering Trusted Piping Solutions Since 1993"
              subtitle="Ponshankar Agencies has earned the trust of contractors, engineers, builders, industries, and homeowners by delivering premium-quality piping products backed by dependable service."
            />

            <div className="mt-6 space-y-5 text-base leading-7 text-muted">
              <p>
                For more than three decades, Ponshankar Agencies has been a
                reliable distribution partner for premium piping systems used in
                residential, commercial, industrial, and infrastructure
                projects.
              </p>

              <p>
                Our focus on quality, technical expertise, customer support, and
                timely delivery has helped us become one of Tamil Nadu's trusted
                suppliers for complete water management solutions.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="mb-4 grid size-12 place-items-center rounded-xl bg-brand-50">
                    <feature.icon className="size-6 text-brand-600" />
                  </div>

                  <h3 className="text-lg font-semibold text-ink">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Our Team
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}