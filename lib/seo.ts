import type { Metadata } from 'next'
import { site } from '@/lib/site'

export const ogImage = {
  url: '/images/misty-lake-at-sunrise.png',
  width: 1408,
  height: 768,
  alt: 'A calm, misty lake at sunrise with a small wooden rowboat near the shore',
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
      title,
      description,
      url: path,
      siteName: site.name,
      locale: 'en_US',
      type: 'website',
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
