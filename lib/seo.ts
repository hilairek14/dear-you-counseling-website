import type { Metadata } from 'next'
import { site, siteUrl } from '@/lib/site'

const ogImage = {
  url: '/images/hero-misty-lake.jpg',
  width: 1920,
  height: 1120,
  alt: 'Misty mountains reflected in a still lake at dawn',
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: `${siteUrl}${path}`,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.url],
    },
  }
}
