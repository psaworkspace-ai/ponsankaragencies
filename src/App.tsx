import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { RootLayout } from "@/components/layout/RootLayout";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage"));
const CategoryProductsPage = lazy(
  () => import("@/pages/CategoryProductsPage")
);
const SolutionsPage = lazy(() => import("@/pages/SolutionsPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function Loader() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="size-10 animate-spin rounded-full border-[3px] border-brand-100 border-t-brand-600" />
        <p className="text-sm font-medium text-muted">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<RootLayout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* About */}
          <Route path="about" element={<AboutPage />} />

          {/* Products */}
          <Route path="products" element={<ProductsPage />} />

          {/* Category Products */}
          <Route
            path="products/:category"
            element={<CategoryProductsPage />}
          />

          {/* Solutions */}
          <Route path="solutions" element={<SolutionsPage />} />

          {/* Contact */}
          <Route path="contact" element={<ContactPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}