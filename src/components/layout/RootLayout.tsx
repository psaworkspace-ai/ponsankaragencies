import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileNav } from './MobileNav'
import { useUIStore } from '@/store/useUIStore'

export function RootLayout() {
  const { pathname } = useLocation()
  const closeMobileNav = useUIStore((s) => s.closeMobileNav)

  useEffect(() => {
    window.scrollTo({
    top:0,
    behavior:'auto'
    })
    closeMobileNav()
  }, [pathname, closeMobileNav])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <MobileNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}