import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { FaqList } from '@/components/faq-list'
import { GlassLink } from '@/components/glass-button'
import { PageIntro } from '@/components/page-intro'
import { getSpecialtyPage, type SpecialtyPageContent } from '@/lib/specialties'
import { site } from '@/lib/site'

export function SpecialtyPage({ page }: { page: SpecialtyPageContent }) {
  const related = page.related
    .map((slug) => getSpecialtyPage(slug))
    .filter((item): item is SpecialtyPageContent => Boolean(item))

  return (
    <>
      <PageIntro eyebrow={page.eyebrow} title={page.h1} description={page.intro} />
      <div className="mx-auto -mt-4 flex max-w-3xl flex-col items-center gap-3 px-6 pb-14 text-center">
        <GlassLink href="/contact" variant="tinted">
          Schedule a free consultation
          <ArrowRight className="size-4" aria-hidden />
        </GlassLink>
        <p className="text-sm text-muted-foreground">{site.videoLine}</p>
      </div>

      <article className="mx-auto flex max-w-3xl flex-col gap-14 px-6">
        <section aria-labelledby="who-heading">
          <h2 id="who-heading" className="font-serif text-3xl font-medium md:text-4xl">
            {page.whoHeading}
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            {page.who.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="signs-heading">
          <h2 id="signs-heading" className="font-serif text-3xl font-medium md:text-4xl">
            {page.signsHeading}
          </h2>
          <ul className="mt-6 grid gap-3">
            {page.signs.map((sign) => (
              <li key={sign} className="flex gap-3 leading-relaxed text-foreground/85">
                <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                {sign}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="approach-heading">
          <h2 id="approach-heading" className="font-serif text-3xl font-medium md:text-4xl">
            {page.approachHeading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{page.approachIntro}</p>
          <ul className="mt-6 grid gap-4">
            {page.approaches.map((item) => (
              <li key={item.name} className="glass-panel rounded-3xl p-6">
                <h3 className="font-serif text-2xl font-medium">{item.name}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            You can read more about how I work on the{' '}
            <Link href="/services" className="font-medium text-primary underline underline-offset-4">
              Services page
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="sessions-heading">
          <h2 id="sessions-heading" className="font-serif text-3xl font-medium md:text-4xl">
            {page.sessionsHeading}
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            {page.sessions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            See session fees and accepted plans on the{' '}
            <Link href="/pricing" className="font-medium text-primary underline underline-offset-4">
              Rates &amp; Insurance page
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-serif text-3xl font-medium md:text-4xl">
            Common questions
          </h2>
          <div className="mt-6">
            <FaqList items={page.faqs.map((faq) => ({ q: faq.q, a: faq.a }))} />
          </div>
        </section>
      </article>

      <section className="mx-auto mt-20 flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="font-serif text-4xl font-medium text-balance">Ready to take the first step?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Start with a free 15-minute consultation to see if we are a good fit. {site.videoLine}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <GlassLink href="/contact" variant="tinted">
            Schedule a free consultation
            <ArrowRight className="size-4" aria-hidden />
          </GlassLink>
          <GlassLink href="/services">Explore all services</GlassLink>
        </div>
      </section>

      <nav aria-label="Related pages" className="mx-auto mt-16 max-w-3xl px-6">
        <h2 className="font-serif text-2xl font-medium">Keep exploring</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Link href={`/${item.slug}`} className="glass-btn text-sm">
                {item.navTitle}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/services" className="glass-btn text-sm">
              All services
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="glass-btn text-sm">
              Rates &amp; Insurance
            </Link>
          </li>
          <li>
            <Link href="/contact" className="glass-btn text-sm">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
