import { useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { Seo } from '@/components/common/Seo'

import { GALLERY_ITEMS } from '@/data/gallery'
import { GALLERY_IMAGES } from '@/data/images'
import { PRODUCT_DETAILS } from '@/data/productDetails'
import { ProductHero } from '@/components/sections/product-details/ProductHero'
import { ProductGallery } from '@/components/sections/product-details/ProductGallery'
import { ProductSpecifications } from '@/components/sections/product-details/ProductSpecifications'
import { ProductFeatures } from '@/components/sections/product-details/ProductFeatures'
import { ProductApplications } from '@/components/sections/product-details/ProductApplications'
import { RelatedProducts } from '@/components/sections/product-details/RelatedProducts'
import { ProductCTA } from '@/components/sections/product-details/ProductCTA'

export default function ProductDetailsPage() {
  const { productId } = useParams()

  const product = useMemo(
    () => GALLERY_ITEMS.find((item) => item.id === productId),
    [productId]
  )

  if (!product) {
    return <Navigate to="/404" replace />
  }

    const image = GALLERY_IMAGES[product.id]
    const details = PRODUCT_DETAILS[product.id]

    if (!details) {
    return <Navigate to="/products/gallery" replace />
    }

  return (
    <>
      <Seo
        title={product.name}
        description={product.categoryLabel}
        path={`/products/${product.id}`}
      />

<ProductHero />

      <ProductGallery
        product={product}
        image={image}
      />

      <ProductSpecifications details={details} />

      <ProductFeatures details={details} />

      <ProductApplications details={details} />

      <RelatedProducts />

      <ProductCTA />
    </>
  )
}