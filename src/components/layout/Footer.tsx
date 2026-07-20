import { Link } from 'react-router-dom'
import { Globe, Share2, BarChart3 } from 'lucide-react'
import { SITE } from '@/lib/constants'

function BrandMark() {
  return (
    <div className="flex items-center gap-[11px]">
      <span className="grid size-[38px] place-items-center rounded-lg bg-gradient-to-br from-navy-900 to-brand-600">
        <span className="flex gap-[3px]">
          <i className="block h-[18px] w-1 rounded-sm bg-brand-300" />
          <i className="block h-[18px] w-1 rounded-sm bg-white" />
        </span>
      </span>
      <span className="leading-none">
        <b className="block font-display text-[1.16rem] font-extrabold tracking-tight text-white">PONSHANKAR</b>
        <small className="text-[.62rem] font-semibold tracking-[0.34em] text-brand-300">AGENCIES</small>
      </span>
    </div>
  )
}

const COLUMNS = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'About Company', href: '/about' },
      { label: 'Our Infrastructure', href: '/about' },
      { label: 'Latest Projects', href: '/#projects' },
      { label: 'Become a Distributor', href: '/contact' },
      { label: 'Quality Control', href: '/about' },
    ],
  },
  {
    heading: 'Product Range',
    links: [
      { label: 'CPVC Plumbing', href: '/products' },
      { label: 'Industrial Fittings', href: '/products' },
      { label: 'SWR Drainage', href: '/products' },
      { label: 'Agriculture Pipes', href: '/products' },
      { label: 'Storage Tanks', href: '/products' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Download Catalogue', href: '/products' },
      { label: 'Price List 2024', href: '/products' },
      { label: 'Technical Guides', href: '/products' },
      { label: 'Certifications', href: '/about' },
      { label: 'Warranty Info', href: '/contact' },
    ],
  },
]

const SOCIALS = [
  { icon: Globe, label: 'Website', href: '/' },
  { icon: Share2, label: 'Network', href: '/about' },
  { icon: BarChart3, label: 'Insights', href: '/products' },
]
const LEGAL = [
  { label: 'Privacy Policy', href: '/contact' },
  { label: 'Sitemap', href: '/' },
  { label: 'Terms of Service', href: '/contact' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-950 pt-20 text-white">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-8 pb-[46px] md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <BrandMark />
            <p className="my-[18px] max-w-[280px] text-[.9rem] text-slate-400">
              Providing end-to-end infrastructure solutions with the highest quality standards since {SITE.since}.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map((s) => (
                <Link key={s.label} to={s.href} aria-label={s.label} className="grid size-[38px] place-items-center rounded-[9px] bg-white/[0.06] transition-colors hover:bg-brand-600">
                  <s.icon className="size-[18px] text-slate-200" />
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h5 className="mb-4 font-display text-[.92rem] font-bold text-white">{col.heading}</h5>
              {col.links.map((link) => (
                <Link key={link.label} to={link.href} className="block py-1.5 text-[.88rem] text-slate-400 transition-all hover:pl-1 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.08] pb-[30px] pt-[22px]">
          <p className="text-[.8rem] uppercase tracking-wide text-slate-400">
            (c) {year} Ponshankar Agencies. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-[26px]">
            {LEGAL.map((l) => (
              <Link key={l.label} to={l.href} className="text-[.8rem] uppercase tracking-wide text-slate-400 hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}