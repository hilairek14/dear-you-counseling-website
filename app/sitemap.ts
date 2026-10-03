import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'
import { specialtyPages } from '@/lib/specialties'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/services', ...specialtyPages.map((page) => `/${page.slug}`), '/about', '/pricing', '/contact']
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
