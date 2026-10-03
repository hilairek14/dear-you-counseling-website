import { SpecialtyPage } from '@/components/specialty-page'
import { pageMetadata } from '@/lib/seo'
import { getSpecialtyPage } from '@/lib/specialty-pages'

const content = getSpecialtyPage('depression-therapy')

export const metadata = pageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: '/depression-therapy',
})

export default function Page() {
  return <SpecialtyPage content={content} />
}
