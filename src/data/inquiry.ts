/* =========================================================
   INQUIRY FORM OPTIONS

   Shared by the Contact page form and the Home page
   inquiry form so both always list the same options.
========================================================= */

/* =========================================================
   CUSTOMER TYPE

   Who is sending the inquiry.
========================================================= */

export const CUSTOMER_TYPES = [
  "Dealer",
  "Distributor",
  "Retailer / Hardware Store",
  "Home Owner / Residential",
  "Farmer / Agriculture",
  "Plumber / Contractor",
  "Builder / Developer",
  "Industrial / Commercial",
  "Government / Institutional",
  "Other",
] as const;

/* =========================================================
   PRODUCT REQUIREMENT

   What the inquiry is about.
   Mirrors the product categories used across the site.
========================================================= */

export const PRODUCT_REQUIREMENTS = [
  "Pipes & Fittings",
  "Hoses & Fittings",
  "Valves & Cocks",
  "Allied Products",
  "Bath Fittings & Sanitary Ware",
  "CPVC Hot & Cold Systems",
  "Agricultural & Borewell",
  "Water Storage Tanks",
  "Sewerage & Drainage",
  "Other / Not Sure",
] as const;
