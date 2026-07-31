import { Link } from "react-router-dom";
import {
  Globe,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { SITE } from "@/lib/constants";
import logo from "@/assets/logo.jpg";

function BrandMark() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 sm:gap-4"
      aria-label="Ponshankar Agencies Home"
    >
      <div className="rounded-xl bg-white p-1.5 shadow-lg sm:rounded-2xl sm:p-2">
        <img
          src={logo}
          alt="Ponshankar Agencies Logo"
          className="h-10 w-10 object-contain sm:h-14 sm:w-14"
        />
      </div>

      <div className="leading-tight">
        <h2 className="font-display text-lg font-bold text-white sm:text-2xl">
          Ponshankar Agencies
        </h2>

        <p className="mt-1 text-xs font-medium tracking-wide text-brand-300 sm:text-sm">
          Premium Plumbing & Piping Solutions
        </p>
      </div>
    </Link>
  );
}

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const PRODUCTS = [
  { label: "CPVC Plumbing", href: "/products" },
  { label: "UPVC Pipes", href: "/products" },
  { label: "Industrial Pipes", href: "/products" },
  { label: "Agriculture Pipes", href: "/products" },
  { label: "Water Tanks", href: "/products" },
];

const SOCIALS = [
  {
    icon: Globe,
    label: "Website",
    href: "/",
  },
  {
    icon: Phone,
    label: "Call",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:info@ponshankar.com",
  },
];

const LEGAL = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-px">
        <div className="grid gap-8 border-b border-white/10 py-10 sm:gap-12 sm:py-16 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">

          {/* Company */}
          <div>
            <BrandMark />

            <p className="mt-4 max-w-md text-xs leading-6 text-slate-400 sm:mt-6 sm:text-sm sm:leading-7">
              Ponshankar Agencies has been delivering premium plumbing,
              industrial piping, water storage and infrastructure solutions
              across Tamil Nadu since {SITE.since}. Our commitment to
              quality products and dependable customer service has made us
              a trusted partner for residential, commercial and industrial
              projects.
            </p>

            <div className="mt-5 flex gap-2 sm:mt-8 sm:gap-3">
              {SOCIALS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:bg-brand-600 sm:h-11 sm:w-11 sm:rounded-xl"
                >
                  <item.icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-base font-semibold text-white sm:mb-6 sm:text-lg">
              Quick Links
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-xs text-slate-400 transition-all duration-300 hover:pl-2 hover:text-brand-300 sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-display text-base font-semibold text-white sm:mb-6 sm:text-lg">
              Products
            </h3>

            <ul className="space-y-2 sm:space-y-3">
              {PRODUCTS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-xs text-slate-400 transition-all duration-300 hover:pl-2 hover:text-brand-300 sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
                    {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-base font-semibold text-white sm:mb-6 sm:text-lg">
              Contact Us
            </h3>

            <div className="space-y-4 sm:space-y-5">

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-white/5 p-1.5 sm:p-2">
                  <Phone className="h-3.5 w-3.5 text-brand-300 sm:h-4 sm:w-4" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                    Phone
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="text-xs text-slate-300 transition hover:text-white sm:text-sm"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-white/5 p-1.5 sm:p-2">
                  <Mail className="h-3.5 w-3.5 text-brand-300 sm:h-4 sm:w-4" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                    Email
                  </p>

                  <a
                    href="mailto:info@ponshankar.com"
                    className="break-all text-xs text-slate-300 transition hover:text-white sm:text-sm"
                  >
                    info@ponshankar.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-white/5 p-1.5 sm:p-2">
                  <MapPin className="h-3.5 w-3.5 text-brand-300 sm:h-4 sm:w-4" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                    Address
                  </p>

                  <p className="text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
                    Erode,
                    <br />
                    Tamil Nadu,
                    <br />
                    India
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-3 py-4 sm:gap-5 sm:py-6 md:flex-row">

          <p className="text-center text-xs text-slate-500 sm:text-sm">
            © {year} Ponshankar Agencies. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {LEGAL.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-xs text-slate-500 transition hover:text-brand-300 sm:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}