import { CONTACT } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface WhatsAppLinkProps {
  className?: string
  label?: string
}

export function WhatsAppLink(props: WhatsAppLinkProps) {
  const label = props.label ?? 'WhatsApp Support'
  const href = 'https://wa.me/' + CONTACT.whatsapp
  const classes = cn(
    'flex items-center gap-[7px] text-[.78rem] font-bold uppercase tracking-wide text-signal',
    props.className,
  )

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]" aria-hidden>
        <path d="M17.5 14.4c-.3-.15-1.7-.83-1.95-.93s-.45-.15-.64.15-.74.93-.9 1.12-.34.22-.63.07a7.8 7.8 0 0 1-2.3-1.42 8.6 8.6 0 0 1-1.6-1.98c-.16-.29 0-.44.13-.59s.29-.34.44-.51a2 2 0 0 0 .29-.49.54.54 0 0 0 0-.51c-.08-.15-.64-1.55-.88-2.12s-.47-.48-.64-.49h-.55a1.05 1.05 0 0 0-.76.36 3.2 3.2 0 0 0-1 2.38 5.55 5.55 0 0 0 1.17 2.95 12.7 12.7 0 0 0 4.88 4.31c.68.3 1.21.47 1.63.6a3.9 3.9 0 0 0 1.8.11 2.94 2.94 0 0 0 1.93-1.36 2.4 2.4 0 0 0 .17-1.36c-.07-.12-.26-.19-.55-.34zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2z" />
      </svg>
      {label}
    </a>
  )
}