import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  /* =====================================================
     HOME
  ===================================================== */

  {
    label: "Home",
    href: "/",
  },

  /* =====================================================
     ABOUT
  ===================================================== */

  {
    label: "About",
    href: "/about",

    dropdown: [
      {
        label: "Overview",
        href: "/about#hero",
      },
      {
        label: "Company Story",
        href: "/about#company-story",
      },
      {
        label: "Vision & Mission",
        href: "/about#vision-mission",
      },
      {
        label: "Our Journey",
        href: "/about#timeline",
      },
      {
        label: "Contact Us",
        href: "/contact",
      },
    ],
  },

  /* =====================================================
     PRODUCTS
  ===================================================== */

  {
    label: "Products",
    href: "/products",

    mega: [
      /* =================================================
         01 — PIPES & FITTINGS
      ================================================= */

      {
        heading: "Pipes & Fittings",

        links: [
          {
            label: "All Pipes & Fittings",
            href: "/products/pipes-fittings",
          },
          {
            label: "PVC Pipes",
            href: "/products/pipes-fittings?type=pvc",
          },
          {
            label: "CPVC Pipes",
            href: "/products/pipes-fittings?type=cpvc",
          },
          {
            label: "UPVC Pipes",
            href: "/products/pipes-fittings?type=upvc",
          },
          {
            label: "Pipe Fittings",
            href: "/products/pipes-fittings?type=fittings",
          },
        ],
      },

      /* =================================================
         02 — HOSES & FITTINGS
      ================================================= */

      {
        heading: "Hoses & Fittings",

        links: [
          {
            label: "All Hoses & Fittings",
            href: "/products/hoses-fittings",
          },
          {
            label: "Garden Hoses",
            href: "/products/hoses-fittings?type=garden",
          },
          {
            label: "Industrial Hoses",
            href: "/products/hoses-fittings?type=industrial",
          },
          {
            label: "Agricultural Hoses",
            href: "/products/hoses-fittings?type=agricultural",
          },
          {
            label: "Flexible Hoses",
            href: "/products/hoses-fittings?type=flexible",
          },
          {
            label: "Hose Accessories",
            href: "/products/hoses-fittings?type=accessories",
          },
        ],
      },

      /* =================================================
         03 — VALVES & COCKS
      ================================================= */

      {
        heading: "Valves & Cocks",

        links: [
          {
            label: "All Valves & Cocks",
            href: "/products/valves-cocks",
          },
          {
            label: "Ball Valves",
            href: "/products/valves-cocks?type=ball",
          },
          {
            label: "Gate Valves",
            href: "/products/valves-cocks?type=gate",
          },
          {
            label: "Control Valves",
            href: "/products/valves-cocks?type=control",
          },
          {
            label: "Check Valves",
            href: "/products/valves-cocks?type=check",
          },
          {
            label: "Bib Cocks",
            href: "/products/valves-cocks?type=bib",
          },
        ],
      },

      /* =================================================
         04 — ALLIED PRODUCTS
      ================================================= */

      {
        heading: "Allied Products",

        links: [
          {
            label: "All Allied Products",
            href: "/products/allied-products",
          },
          {
            label: "Sealants",
            href: "/products/allied-products?type=sealants",
          },
          {
            label: "Solvent Cement",
            href: "/products/allied-products?type=solvent",
          },
          {
            label: "Plumbing Accessories",
            href: "/products/allied-products?type=accessories",
          },
          {
            label: "Adhesives",
            href: "/products/allied-products?type=adhesives",
          },
        ],
      },

      /* =================================================
         05 — BATH & SANITARY
      ================================================= */

      {
        heading: "Bath & Sanitary",

        links: [
          {
            label: "All Bath & Sanitary",
            href: "/products/bath-fittings",
          },
          {
            label: "Bath Fittings",
            href: "/products/bath-fittings?type=bath",
          },
          {
            label: "Sanitary Ware",
            href: "/products/bath-fittings?type=sanitary",
          },
          {
            label: "Bathroom Accessories",
            href: "/products/bath-fittings?type=accessories",
          },
          {
            label: "Faucets & Taps",
            href: "/products/bath-fittings?type=faucets",
          },
        ],
      },
    ],
  },

  /* =====================================================
     SOLUTIONS
  ===================================================== */

  {
    label: "Solutions",
    href: "/solutions",

    dropdown: [
      {
        label: "Overview",
        href: "/solutions#hero",
      },
      {
        label: "Applications",
        href: "/solutions#applications",
      },
      {
        label: "Why Choose Us",
        href: "/solutions#why-us",
      },
      {
        label: "Trusted Brands",
        href: "/solutions#brands",
      },
    ],
  },

  /* =====================================================
     CONTACT
  ===================================================== */

  {
    label: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export const FOOTER_COLUMNS = [
  {
    heading: "Solutions",

    links: [
      {
        label: "Water Management",
        href: "/solutions",
      },
      {
        label: "Industrial Piping",
        href: "/solutions",
      },
      {
        label: "Agricultural Systems",
        href: "/solutions",
      },
      {
        label: "Waste Management",
        href: "/solutions",
      },
    ],
  },

  {
    heading: "Products",

    links: [
      {
        label: "Pipes & Fittings",
        href: "/products/pipes-fittings",
      },
      {
        label: "Hoses & Fittings",
        href: "/products/hoses-fittings",
      },
      {
        label: "Valves & Cocks",
        href: "/products/valves-cocks",
      },
      {
        label: "Allied Products",
        href: "/products/allied-products",
      },
      {
        label: "Bath & Sanitary",
        href: "/products/bath-fittings",
      },
    ],
  },

  {
    heading: "Company",

    links: [
      {
        label: "Company Story",
        href: "/about#company-story",
      },
      {
        label: "Our Journey",
        href: "/about#timeline",
      },
      {
        label: "Contact Sales",
        href: "/contact",
      },
      {
        label: "Partner Program",
        href: "/contact",
      },
    ],
  },
] as const;