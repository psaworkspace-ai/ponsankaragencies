import { Link } from "react-router-dom";
import {
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Instagram,
} from "lucide-react";

import { SITE } from "@/lib/constants";
import logo from "@/assets/logo.jpg";

function BrandMark() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-3"
      aria-label="Ponshankar Agencies Home"
    >
      <div
        className="
          rounded-xl
          bg-white
          p-1.5
          shadow-lg
          sm:rounded-2xl
          sm:p-2
        "
      >
        <img
          src={logo}
          alt="Ponshankar Agencies Logo"
          className="
            h-10
            w-10
            object-contain
            sm:h-12
            sm:w-12
          "
        />
      </div>

      <div className="leading-tight">
        <h2
          className="
            font-display
            text-lg
            font-bold
            text-white
            sm:text-xl
          "
        >
          Ponshankar Agencies
        </h2>

        <p
          className="
            mt-1
            text-[10px]
            font-medium
            tracking-wide
            text-brand-300
            sm:text-xs
          "
        >
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
  { label: "Contact", href: "/contact" },
];
 

/* ============================================================
   FOOTER QUICK ACTIONS
============================================================ */

const SOCIALS = [
  {
    icon: Globe,
    label: "Website",
    href: "https://www.ponsankaragencies.in",
    external: true,
  },
  {
    icon: Phone,
    label: "Call",
    href: "tel:+919865293333",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ponsankared@gmail.com",
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/ponsankarerode",
    external: true,
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

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div
          className="
            grid
            gap-8
            border-b
            border-white/10
            py-9
            sm:gap-10
            sm:py-12
            lg:grid-cols-[2fr_1fr_1fr_1.2fr]
            lg:gap-8
          "
        >

          {/* ===================================================
              COMPANY
          =================================================== */}
          <div className="max-w-md">

            <BrandMark />

            <p
              className="
                mt-4
                text-xs
                leading-5
                text-slate-400
                sm:mt-5
                sm:text-sm
                sm:leading-6
              "
            >
              Ponshankar Agencies has been delivering premium plumbing,
              industrial piping, water storage and infrastructure
              solutions across Tamil Nadu since {SITE.since}. Our
              commitment to quality products and dependable customer
              service has made us a trusted partner for residential,
              commercial and industrial projects.
            </p>

            {/* =================================================
                QUICK ACTION ICONS
            ================================================= */}
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    title={item.label}
                    target={item.external ? "_blank" : undefined}
                    rel={
                      item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      grid
                      size-9
                      place-items-center
                      rounded-lg
                      border
                      border-white/10
                      bg-white/5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-brand-400
                      hover:bg-brand-600
                      sm:size-10
                      sm:rounded-xl
                    "
                  >
                    <Icon
                      className="
                        size-4
                        text-white
                        sm:size-[18px]
                      "
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              QUICK LINKS
          =================================================== */}
          <div>
            <h3
              className="
                mb-4
                font-display
                text-sm
                font-semibold
                text-white
                sm:text-base
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="
                      inline-flex
                      items-center
                      text-xs
                      text-slate-400
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-brand-300
                      sm:text-sm
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================================
              CONTACT
          =================================================== */}
          <div>

            <h3
              className="
                mb-4
                font-display
                text-sm
                font-semibold
                text-white
                sm:text-base
              "
            >
              Contact Us
            </h3>

            <div className="space-y-3.5">

              {/* =================================================
                  PHONE
              ================================================= */}
              <a
                href="tel:+919865293333"
                aria-label="Call Ponshankar Agencies"
                title="Call Ponshankar Agencies"
                className="
                  group
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    grid
                    size-8
                    shrink-0
                    place-items-center
                    rounded-lg
                    bg-white/5
                    transition-colors
                    group-hover:bg-brand-600
                  "
                >
                  <Phone
                    className="
                      size-3.5
                      text-brand-300
                      group-hover:text-white
                    "
                  />
                </span>

                <span>
                  <span
                    className="
                      block
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-slate-500
                    "
                  >
                    Phone
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      text-xs
                      text-slate-300
                      transition-colors
                      group-hover:text-white
                      sm:text-sm
                    "
                  >
                    +91 98652 93333
                  </span>
                </span>
              </a>

              {/* =================================================
                  EMAIL
              ================================================= */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ponsankared@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Ponshankar Agencies"
                title="Email Ponshankar Agencies"
                className="
                  group
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    grid
                    size-8
                    shrink-0
                    place-items-center
                    rounded-lg
                    bg-white/5
                    transition-colors
                    group-hover:bg-brand-600
                  "
                >
                  <Mail
                    className="
                      size-3.5
                      text-brand-300
                      group-hover:text-white
                    "
                  />
                </span>

                <span className="min-w-0">
                  <span
                    className="
                      block
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-slate-500
                    "
                  >
                    Email
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      break-all
                      text-xs
                      text-slate-300
                      transition-colors
                      group-hover:text-white
                      sm:text-sm
                    "
                  >
                    ponsankared@gmail.com
                  </span>
                </span>
              </a>

              {/* =================================================
                  INSTAGRAM
              ================================================= */}
              <a
                href="https://www.instagram.com/ponsankarerode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ponshankar Agencies Instagram"
                title="Instagram"
                className="
                  group
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    grid
                    size-8
                    shrink-0
                    place-items-center
                    rounded-lg
                    bg-white/5
                    transition-colors
                    group-hover:bg-brand-600
                  "
                >
                  <Instagram
                    className="
                      size-3.5
                      text-brand-300
                      group-hover:text-white
                    "
                  />
                </span>

                <span>
                  <span
                    className="
                      block
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-slate-500
                    "
                  >
                    Instagram
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      text-xs
                      text-slate-300
                      transition-colors
                      group-hover:text-white
                      sm:text-sm
                    "
                  >
                    @ponsankarerode
                  </span>
                </span>
              </a>

              {/* =================================================
                  ADDRESS
              ================================================= */}
              <div className="flex items-start gap-3">

                <span
                  className="
                    grid
                    size-8
                    shrink-0
                    place-items-center
                    rounded-lg
                    bg-white/5
                  "
                >
                  <MapPin
                    className="
                      size-3.5
                      text-brand-300
                    "
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-slate-500
                    "
                  >
                    Address
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      leading-5
                      text-slate-300
                      sm:text-sm
                      sm:leading-5
                    "
                  >
                    558, Sathy Road,
                    <br />
                    Erode - 3,
                    <br />
                    Tamil Nadu
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-3
            py-4
            sm:py-5
            md:flex-row
          "
        >

          <p
            className="
              text-center
              text-[10px]
              text-slate-500
              sm:text-xs
            "
          >
            © {year} Ponshankar Agencies. All Rights Reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
            "
          >
            {LEGAL.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="
                  inline-flex
                  items-center
                  gap-1
                  text-[10px]
                  text-slate-500
                  transition-colors
                  hover:text-brand-300
                  sm:text-xs
                "
              >
                {item.label}
                <ArrowUpRight className="size-3" />
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}