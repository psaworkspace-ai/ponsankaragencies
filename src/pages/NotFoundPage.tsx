import { Link } from 'react-router-dom'
import { Seo } from '@/components/common/Seo'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="grid min-h-[70vh] place-items-center bg-softer py-[88px] text-center">
        <div className="container-px">
          <p className="font-display text-[6rem] font-extrabold leading-none text-brand-600">404</p>
          <h1 className="mt-4 text-[clamp(1.6rem,3.4vw,2.2rem)]">Page Not Found</h1>
          <p className="mx-auto mt-3 max-w-md text-muted">
            The page you're looking for may have been moved or no longer exists.
          </p>
          <div className="mt-8">
            <Button asChild size="lg"><Link to="/"><Home /> Back to Home</Link></Button>
          </div>
        </div>
      </section>
    </>
  )
}