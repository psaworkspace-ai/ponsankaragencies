import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Phone, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().optional(),
  email: z.string().email('Enter a valid email'),
  requirement: z.string(),
  message: z.string().optional(),
})
type FormValues = z.infer<typeof schema>

const REQUIREMENTS = [
  'Industrial Projects', 'Residential Plumbing', 'Agricultural Systems',
  'Municipal Infrastructure', 'Commercial Buildings',
]
type Status = 'idle' | 'sending' | 'sent' | 'error'

// Regional Office (exact About-Figma details)
const OFFICE = {
  title: 'Regional Office',
  lines: ['124 Industrial Estate, Ambattur,', 'Chennai, Tamil Nadu - 600058'],
  phones: ['+91 44 2456 7890', '+91 98400 12345'],
}
const MAP_Q = encodeURIComponent('Industrial Estate, Ambattur, Chennai, Tamil Nadu 600058')
const MAP_SRC = `https://www.google.com/maps?q=${MAP_Q}&output=embed`

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div>
    <label className="mb-[7px] block text-[.68rem] font-bold uppercase tracking-wider text-muted">{label}</label>
    {children}
    {error && <p className="mt-1 text-[.72rem] text-red-500">{error}</p>}
  </div>
)

export function TechnicalConsultation() {
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
      console.error('Consultation error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="section-y">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT — heading, office, map */}
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3.6vw,2.4rem)] leading-[1.12]">Get Technical Consultation</h2>
            <p className="mt-4 max-w-[440px] text-[1rem] leading-[1.7] text-muted">
              Submit your project requirements and our engineering team will get back to you with a comprehensive quote and material specification within 24 hours.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50"><MapPin className="size-5 text-brand-600" /></span>
                <div>
                  <h4 className="text-[.98rem] font-bold text-ink">{OFFICE.title}</h4>
                  {OFFICE.lines.map((l) => <p key={l} className="text-[.86rem] text-muted">{l}</p>)}
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50"><Phone className="size-5 text-brand-600" /></span>
                <div>
                  <h4 className="text-[.98rem] font-bold text-ink">Direct Inquiries</h4>
                  {OFFICE.phones.map((p) => <p key={p} className="text-[.86rem] text-muted">{p}</p>)}
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-line">
              <iframe
                title="Ponshankar Agencies Chennai office"
                src={MAP_SRC}
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* RIGHT — form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
              <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Technical consultation" className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" error={errors.name?.message}>
                    <Input placeholder="John Doe" {...register('name')} />
                  </Field>
                  <Field label="Company">
                    <Input placeholder="Engineering Ltd." {...register('company')} />
                  </Field>
                </div>
                <Field label="Email Address" error={errors.email?.message}>
                  <Input type="email" placeholder="john@company.com" {...register('email')} />
                </Field>
                <Field label="Requirement Type">
                  <Select {...register('requirement')}>
                    {REQUIREMENTS.map((r) => <option key={r}>{r}</option>)}
                  </Select>
                </Field>
                <Field label="Message">
                  <Textarea placeholder="Describe your project needs..." {...register('message')} />
                </Field>
                <Button type="submit" block size="lg" disabled={status === 'sending'} aria-label="Send inquiry">
                  {status === 'sending' ? (<><Loader2 className="animate-spin" /> Sending...</>)
                    : status === 'sent' ? '✓ Inquiry Sent'
                    : status === 'error' ? 'Failed - Try Again'
                    : 'Send Inquiry'}
                </Button>
                {status === 'error' && (
                  <p className="text-center text-sm text-red-500">Something went wrong. Please email sales@ponshankaragencies.com directly.</p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}