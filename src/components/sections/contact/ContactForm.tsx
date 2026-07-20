import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  requirement: z.string(),
  message: z.string().optional(),
})
type FormValues = z.infer<typeof schema>

const REQUIREMENTS = [
  'High-Performance Piping', 'CPVC Hot & Cold Systems', 'Industrial Fittings & Valves',
  'Agricultural & Borewell', 'Storage Tanks', 'Sewerage & Drainage',
]
type Status = 'idle' | 'sending' | 'sent' | 'error'

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <label className="mb-[7px] block text-[.72rem] font-bold uppercase tracking-wider text-ink-2">{label}</label>
    {children}
    {error && <p className="mt-1 text-[.75rem] text-red-500">{error}</p>}
  </div>
)

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { requirement: REQUIREMENTS[0] },
  })

  const onSubmit = async (data: FormValues) => {
    setStatus('sending')
    try {
      const res = await fetch(import.meta.env.VITE_CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed: ' + res.status)
      reset()
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      console.error('Contact form error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact inquiry form">
      <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message}><Input placeholder="John Doe" {...register('name')} /></Field>
        <Field label="Email Address" error={errors.email?.message}><Input type="email" placeholder="john@company.com" {...register('email')} /></Field>
        <Field label="Phone Number"><Input type="tel" placeholder="+91 00000 00000" {...register('phone')} /></Field>
        <Field label="Company Name"><Input placeholder="Industrial Corp." {...register('company')} /></Field>
      </div>
      <Field label="Product Requirement">
        <Select {...register('requirement')}>{REQUIREMENTS.map((r) => <option key={r}>{r}</option>)}</Select>
      </Field>
      <Field label="Message"><Textarea placeholder="How can we help your project succeed?" {...register('message')} /></Field>
      <Button type="submit" block size="lg" disabled={status === 'sending'} aria-label="Send inquiry">
        {status === 'sending' ? (<><Loader2 className="animate-spin" /> Sending...</>)
          : status === 'sent' ? '✓ Message Sent'
          : status === 'error' ? 'Failed - Try Again'
          : 'Send Inquiry'}
      </Button>
      {status === 'error' && (
        <p className="mt-3 text-center text-sm text-red-500">Something went wrong. Please email sales@ponshankar.com directly.</p>
      )}
    </form>
  )
}