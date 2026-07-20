import { SITE } from '@/lib/constants'

interface SeoProps {
  title: string
  description: string
  path?: string
  image?: string
}

const DEFAULT_OG = `${SITE.url}/favicon.svg` // replace with a real 1200x630 image later

export function Seo({ title, description, path = '', image = DEFAULT_OG }: SeoProps) {
  const fullTitle = `${title} - ${SITE.name}`
  const url = `${SITE.url}${path}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}