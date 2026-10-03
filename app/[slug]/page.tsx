import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SpecialtyPage } from '@/components/specialty-page'
import { pageMetadata } from '@/lib/seo'
import { getSpecialtyPage, specialtyPages } from '@/lib/specialties'

export const dynamicParams = false

export function generateStaticParams() {
  return specialtyPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getSpecialtyPage(slug)
  if (!page) return {}
  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/${page.slug}` })
}

export default async function SpecialtyRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getSpecialtyPage(slug)
  if (!page) notFound()
  return <SpecialtyPage page={page} />
}
