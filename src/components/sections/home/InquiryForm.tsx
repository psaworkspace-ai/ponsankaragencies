import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Mail, Phone, Loader2, Send } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().optional(),
  email: z.string().email('Enter a valid email'),
  product: z.string(),
  details: z.string().optional(),
})
type FormValues = z.infer<typeof schema>

const PRODUCTS = [
  'CPVC Industrial Piping', 'PVC Pipes', 'SWR Systems', 'Borewell Pipes',
  'Water Tanks', 'Industrial Fittings', 'Agri Solutions', 'DWC Pipes',
]
type Status = 'idle' | 'sending' | 'sent' | 'error'

// Google Maps embed — no API key. Change q= to the exact address.
const MAP_Q = encodeURIComponent('558,Sathy Road,Erode Tamil Nadu 638003')
const MAP_SRC = `https://www.google.com/maps?q=${MAP_Q}&output=embed`

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div>
    <label className="mb-[7px] block text-xs font-semibold tracking-wide text-muted">{label}</label>
    {children}
    {error && <p className="mt-1 text-[.72rem] text-red-500">{error}</p>}
  </div>
)

const InfoRow = ({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) => (
  <div className="flex gap-4">
    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50">
      <Icon className="size-5 text-brand-600" />
    </span>
    <div>
      <h4 className="text-[.98rem] font-bold text-ink">{title}</h4>
      {lines.map((l) => <p key={l} className="text-[.86rem] text-muted">{l}</p>)}
    </div>
  </div>
)

export function InquiryForm() {
  const [status, setStatus] = useState<Status>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { product: PRODUCTS[0] },
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
      console.error('Inquiry error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="section-y">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT — heading, contact info, map */}
          <Reveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ">
              Let's build something great together.
            </h2>
            <p className="mt-4 max-w-[440px] text-sm md:text-base leading-7  text-muted">
              Have a requirement or a query? Reach out to our technical team today. We provide detailed estimations and on-site consultations for large projects.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <InfoRow icon={MapPin} title="Head Office" lines={[CONTACT.address.line1, CONTACT.address.line2]} />
              <InfoRow icon={Mail} title="Email Us" lines={[...CONTACT.emails]} />
              <InfoRow icon={Phone} title="Call Support" lines={[...CONTACT.phones]} />
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-line">
              <iframe
                title="Ponshankar Agencies location"
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

          {/* RIGHT — Send an Inquiry form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
              <h3 className="mb-6 text-xl font-semibold">Send an Inquiry</h3>
              <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Send an inquiry" className="flex flex-col gap-4">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" error={errors.name?.message}>
                    <Input placeholder="John Doe" {...register('name')} />
                  </Field>
                  <Field label="Company Name">
                    <Input placeholder="Acme Construction" {...register('company')} />
                  </Field>
                </div>
                <Field label="Email Address" error={errors.email?.message}>
                  <Input type="email" placeholder="john@example.com" {...register('email')} />
                </Field>
                <Field label="Interested Products">
                  <Select {...register('product')}>
                    {PRODUCTS.map((p) => <option key={p}>{p}</option>)}
                  </Select>
                </Field>
                <Field label="Project Details">
                  <Textarea placeholder="Tell us about your project requirements..." {...register('details')} />
                </Field>
                <Button type="submit" block size="lg" variant="navy" disabled={status === 'sending'} aria-label="Send inquiry">
                  {status === 'sending' ? (<><Loader2 className="animate-spin" /> Sending...</>)
                    : status === 'sent' ? '✓ Inquiry Sent'
                    : status === 'error' ? 'Failed - Try Again'
                    : (<>Send Inquiry <Send className="size-4" /></>)}
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