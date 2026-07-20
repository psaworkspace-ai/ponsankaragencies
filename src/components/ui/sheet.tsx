import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SheetProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  side?: 'right' | 'left'
  className?: string
}

export function Sheet({ open, onClose, children, side = 'right', className }: SheetProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[200] bg-navy-950/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className={cn(
              'fixed top-0 bottom-0 z-[210] w-[86%] max-w-sm bg-white shadow-[var(--shadow-lift)]',
              side === 'right' ? 'right-0' : 'left-0',
              className,
            )}
            initial={{ x: side === 'right' ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: side === 'right' ? '100%' : '-100%' }}
            transition={{ type: 'tween', ease: [0.22, 0.61, 0.36, 1], duration: 0.32 }}
          >
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-lg text-ink hover:bg-soft"
            >
              <X className="size-5" />
            </button>
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}