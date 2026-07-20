import { cn } from '@/lib/utils'

interface TabItem {
  value: string
  label: string
}

interface TabsProps {
  tabs: readonly TabItem[]
  active: string
  onChange: (value: string) => void
  className?: string
}

export function Tabs({ tabs, active, onChange, className }: TabsProps) {
  return (
    <div className={cn('flex flex-wrap gap-1 border-b border-line', className)} role="tablist">
      {tabs.map((tab) => {
        const isActive = tab.value === active
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.value)}
            className={cn(
              'relative px-[18px] py-3 text-[.92rem] font-semibold transition-colors',
              isActive ? 'text-brand-600' : 'text-muted hover:text-ink',
            )}
          >
            {tab.label}
            <span
              className={cn(
                'absolute inset-x-3 -bottom-px h-0.5 origin-center bg-brand-600 transition-transform duration-200',
                isActive ? 'scale-x-100' : 'scale-x-0',
              )}
            />
          </button>
        )
      })}
    </div>
  )
}