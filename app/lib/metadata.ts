import { Metadata } from 'next'

const BASE_URL = 'https://ocmoldpros.com'

export const SITE_DEFAULTS = {
  siteName: 'OC Mold Pros',
  defaultImage: `${BASE_URL}/logo.jpg`,
  twitterHandle: '@ocmoldpros',
  locale: 'en_US' as const,
}

interface BuildMetadataConfig {
  title: string
  description: string
  keywords: string[]
  path: string
  ogImage?: string
}

export function buildMetadata({
  title,
  description,
  keywords,
  path,
  ogImage,
}: BuildMetadataConfig): Metadata {
  const url = path === '/' ? BASE_URL : `${BASE_URL}${path}`
  const image = ogImage ?? SITE_DEFAULTS.defaultImage

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: SITE_DEFAULTS.locale,
      siteName: SITE_DEFAULTS.siteName,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
