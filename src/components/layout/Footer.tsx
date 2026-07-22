import { Link } from 'react-router-dom'
import { Globe, Phone, Mail } from 'lucide-react'
import { SITE } from '@/lib/constants'

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-navy-900 to-brand-600">
        <span className="flex gap-[3px]">
          <i className="block h-4 w-1 rounded-sm bg-brand-300" />
          <i className="block h-4 w-1 rounded-sm bg-white" />
        </span>
      </span>

      <span className="leading-none">
        <b className="font-display text-base font-bold text-white md:text-lg">
          Ponshankar
        </b>

        <small className="mt-0.5 block text-[11px] font-medium text-brand-300 md:text-xs">
          Agencies
        </small>
      </span>
    </div>
  )
}

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const PRODUCTS = [
  { label: 'CPVC Plumbing', href: '/products' },
  { label: 'Industrial Pipes', href: '/products' },
  { label: 'SWR Drainage', href: '/products' },
  { label: 'Agriculture Pipes', href: '/products' },
]

const SOCIALS = [
  { icon: Globe, label: 'Website', href: '/' },
  { icon: Phone, label: 'Call', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email', href: 'mailto:info@ponshankar.com' },
]

const LEGAL = [
  { label: 'Privacy Policy', href: '/contact' },
  { label: 'Terms of Service', href: '/contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-px">

        {/* Top Footer */}
        <div className="grid gap-8 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Company */}
          <div>
            <BrandMark />

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Trusted distributor of premium plumbing and piping solutions
              across Tamil Nadu since {SITE.since}.
            </p>

            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  aria-label={item.label}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 transition-colors hover:bg-brand-600"
                >
                  <item.icon className="h-4.5 w-4.5 text-slate-200" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-white">
              Quick Links
            </h4>

            <div className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-white">
              Products
            </h4>

            <div className="space-y-2">
              {PRODUCTS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-white">
              Contact
            </h4>

            <div className="space-y-2 text-sm text-slate-400">
              <p>Erode, Tamil Nadu</p>

              <a
                href="tel:+919876543210"
                className="block transition-colors hover:text-white"
              >
                +91 98765 43210
              </a>

              <a
                href="mailto:info@ponshankar.com"
                className="block break-all transition-colors hover:text-white"
              >
                info@ponshankar.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-3 py-5 text-center md:flex-row">

          <p className="text-xs text-slate-500 md:text-sm">
            © {year} Ponshankar Agencies. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {LEGAL.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-xs text-slate-500 transition-colors hover:text-white md:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  )
}