import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'
import { specialtyPages } from '@/lib/specialty-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/pricing', '/contact', ...specialtyPages.map((p) => `/${p.slug}`)]
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
