import { Wrench, CircleDot, Spline, Box, Cylinder, Disc, Milk, Container, PaintBucket } from 'lucide-react'
import type { GalleryItem } from '@/types'

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'wall-mixer-strip', name: 'Wall Mixer With Strip Rings — Adjustable', category: 'brass', categoryLabel: 'Brass Inserts Fittings', media: 'sunset', icon: Wrench, isNew: true },
  { id: 'ball-valve-grip', name: 'Ball Valve With Rubberized Gripper Handle', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'commercial', icon: CircleDot, isNew: true },
  { id: 'rft-elbow-clamp', name: 'RFT Elbow With Clamp', category: 'brass', categoryLabel: 'Brass Inserts Fittings', media: 'steel', icon: Spline, isNew: true },
  { id: 'elbow', name: 'Elbow', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Spline },
  { id: 'elbow-45', name: 'Elbow 45°', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Spline },
  { id: 'coupler', name: 'Coupler', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Cylinder },
  { id: 'tee-sch40', name: 'TEE (SCH 40)', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'tank', icon: Box },
  { id: 'union', name: 'Union', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Cylinder },
  { id: 'nrv', name: 'NRV (Non Return Valve)', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'industrial', icon: CircleDot, isNew: true },
  { id: 'four-way-tee', name: 'Four Way Tee', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Box, isNew: true },
  { id: 'end-cap', name: 'End Cap', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Disc },
  { id: 'cross-over', name: 'Cross Over', category: 'fabricated', categoryLabel: 'Fabricated Fittings', media: 'drainage', icon: Spline },
  { id: 'fabricated-bend', name: 'Fabricated Bend', category: 'fabricated', categoryLabel: 'Fabricated Fittings', media: 'drainage', icon: Spline },
  { id: 'flange-socket', name: 'Flange With Socket (1PC)', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Disc },
  { id: 'tank-connector', name: 'Tank Connector', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Container },
  { id: 'reducer', name: 'Reducer', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Cylinder },
  { id: 'reducing-male', name: 'Reducing Male Threaded Adapter', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Cylinder },
  { id: 'reducing-tee', name: 'Reducing Tee', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Box, isNew: true },
  { id: 'transition-bush', name: 'Transition Bush', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Cylinder },
  { id: 'solvent-tube', name: 'CPVC Solvent Cement Tube', category: 'solvent', categoryLabel: 'Solvent Cement', media: 'water', icon: Milk },
  { id: 'wall-mixer-down', name: 'Wall Mixer (Hot Down & Cold Down)', category: 'brass', categoryLabel: 'Brass Inserts Fittings', media: 'sunset', icon: Wrench, isNew: true },
  { id: 'solvent-tin', name: 'CPVC Solvent Cement Tin', category: 'solvent', categoryLabel: 'Solvent Cement', media: 'sunset', icon: PaintBucket },
  { id: 'wall-mixer-side', name: 'Wall Mixer (Hot Side & Cold Side)', category: 'brass', categoryLabel: 'Brass Inserts Fittings', media: 'steel', icon: Wrench, isNew: true },
  { id: 'female-adapter', name: 'Female Threaded Adapter (Heavy)', category: 'brass', categoryLabel: 'Brass Inserts Fittings', media: 'steel', icon: Cylinder },
  { id: 'elbow-45-b', name: 'Elbow 45°', category: 'moulded', categoryLabel: 'Moulded Fittings', media: 'steel', icon: Spline },
]

export const GALLERY_TABS = [
  { value: 'all', label: 'All' },
  { value: 'moulded', label: 'Moulded Fittings' },
  { value: 'fabricated', label: 'Fabricated Fittings' },
  { value: 'brass', label: 'Brass Inserts' },
  { value: 'solvent', label: 'Solvent Cement' },
] as const

export const GALLERY_INITIAL_VISIBLE = 15