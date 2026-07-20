import type { LucideIcon } from 'lucide-react'

export type MediaVariant =
  | 'water' | 'commercial' | 'industrial' | 'infra'
  | 'agri' | 'drainage' | 'sunset' | 'tank' | 'steel'

export interface NavChild {
  label: string
  href: string
  tag?: string
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
  media: MediaVariant
  icon: LucideIcon
  features: string[]
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
  id: string
  name: string
  slug: string
  category: string
  description: string
  media: MediaVariant
  icon: LucideIcon
  accent?: 'blue' | 'green' | 'amber'
  href: string
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
  description?: string
  media: MediaVariant
  span?: 'tall' | 'wide'
}