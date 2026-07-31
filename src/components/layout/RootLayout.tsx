import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileNav } from './MobileNav'
import { useUIStore } from '@/store/useUIStore'

export function RootLayout() {
  const { pathname, hash } = useLocation();
  const closeMobileNav = useUIStore((s) => s.closeMobileNav)

  useEffect(() => {
    closeMobileNav();

    if (hash) {
      const id = hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname, hash, closeMobileNav]);

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