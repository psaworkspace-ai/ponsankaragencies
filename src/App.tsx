import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ProductsPage = lazy(() => import('@/pages/ProductsPage'))
const ProductGalleryPage = lazy(() => import('@/pages/ProductGalleryPage'))
const SolutionsPage = lazy(() => import('@/pages/SolutionsPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const ProductDetailsPage = lazy(() => import('@/pages/ProductDetailsPage'))

function Loader() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="size-10 animate-spin rounded-full border-[3px] border-brand-100 border-t-brand-600" />
        <p className="text-sm font-medium text-muted">Loading…</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />

<Route path="products/gallery" element={<ProductGalleryPage />} />

<Route
    path="products/:productId"
    element={<ProductDetailsPage />}
/>

<Route path="solutions" element={<SolutionsPage />} />

<Route path="contact" element={<ContactPage />} />

<Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}