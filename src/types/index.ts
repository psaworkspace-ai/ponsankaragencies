import type { LucideIcon } from 'lucide-react'

export type MediaVariant =
  | 'water' | 'commercial' | 'industrial' | 'infra'
  | 'agri' | 'drainage' | 'sunset' | 'tank' | 'steel'


export interface ProductSpec {
  label: string
  value: string
}

export interface CaseStudyStat {
  label: string
  value: string
}

export interface NavChild {
  /**
   * Navigation title
   */
  label: string

  /**
   * Route or URL
   */
  href: string

  /**
   * Small badge
   * Example: "New", "Popular"
   */
  tag?: string

  /**
   * Short description
   * Used in enhanced dropdowns
   */
  description?: string

  /**
   * Lucide icon name/component
   * (Will be used in later phases)
   */
  icon?: string

  /**
   * Highlight important menu item
   */
  featured?: boolean

  /**
   * Disable navigation if required
   */
  disabled?: boolean

  /**
   * External website
   */
  external?: boolean
}

export interface NavColumn {
  heading: string
  links: NavChild[]
}

export interface NavItem {
  label: string
  href: string
  dropdown?: NavChild[]
  mega?: NavColumn[]
}

export interface Solution {
  id: string
  title: string
  slug: string

  description: string
  detail: string

  outcomes: string[]
  features: string[]

  media: MediaVariant
  icon: LucideIcon
}

export interface Portfolio {
  id: string
  title: string
  description: string
  media: MediaVariant
  icon: LucideIcon
  note?: string
  href: string
  kind: 'tile' | 'note'
}

export interface TrendingProduct {
  id: string;
  name: string;
  slug: string;

  category: string;

  description: string;
  longDescription: string;

  specs: ProductSpec[];
  features: string[];

  media: MediaVariant;

  icon: LucideIcon;

  accent?: "blue" | "green" | "amber";

  href: string;
}

export interface Application {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface ProcessStep {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface Industry {
  id: string
  label: string
  media: MediaVariant
  icon: LucideIcon
}

export type GalleryCategory = 'moulded' | 'fabricated' | 'brass' | 'solvent'

export interface GalleryItem {
  id: string
  name: string
  category: GalleryCategory
  categoryLabel: string
  media: MediaVariant
  icon: LucideIcon
  isNew?: boolean
}

export interface CaseStudy {
  id: string

  title: string
  slug: string

  tag: string

  location: string
  year: string
  scope: string

  overview: string
  challenge: string
  result: string

  stats: CaseStudyStat[]

  description?: string

  media: MediaVariant

  span?: "tall" | "wide"
}