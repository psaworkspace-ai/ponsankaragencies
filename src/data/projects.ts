import type { MediaVariant } from '@/types'

export const PROJECT_STATS = [
  { value: '500+', label: 'Projects' },
  { value: '50+', label: 'Cities' },
  { value: '25+', label: 'Years' },
] as const

export const FEATURED_PROJECT = {
  tag: 'Featured Project',
  title: 'Municipal Water Distribution',
  media: 'sunset' as MediaVariant,
}

export interface ProjectCard {
  id: string
  category: string
  title: string
  media: MediaVariant
}

export const PROJECT_GALLERY: ProjectCard[] = [
  { id: 'municipal', category: 'Water Infrastructure', title: 'Municipal Water Supply Network', media: 'water' },
  { id: 'residential', category: 'Plumbing', title: 'Residential Plumbing Systems', media: 'steel' },
  { id: 'factory', category: 'Industrial', title: 'Factory Process Piping', media: 'commercial' },
  { id: 'irrigation', category: 'Agriculture', title: 'Smart Irrigation Network', media: 'agri' },
  { id: 'sewer', category: 'Drainage', title: 'Underground Sewer System', media: 'sunset' },
  { id: 'rainwater', category: 'Sustainability', title: 'Rainwater Management Solutions', media: 'tank' },
]