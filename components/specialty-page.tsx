import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FaqList } from '@/components/faq-list'
import { GlassLink } from '@/components/glass-button'
import { site } from '@/lib/site'
import { specialtyPages, type SpecialtyContent } from '@/lib/specialty-pages'

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-foreground/85">
          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function SpecialtyPage({ content }: { content: SpecialtyContent }) {
  const related = specialtyPages.filter((page) => page.slug !== content.slug)

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center md:pt-24">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">{content.eyebrow}</p>
        <h1 className="mt-4 font-serif text-5xl font-medium leading-tight text-balance md:text-6xl">
          {content.h1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">{content.intro[0]}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <GlassLink href="/contact" variant="tinted">
            Schedule a free consultation
            <ArrowRight className="size-4" aria-hidden />
          </GlassLink>
          <GlassLink href="/pricing">Rates & insurance</GlassLink>
        </div>
      </section>

      <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6">
        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="sr-only">
            Overview
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{content.intro[1]}</p>
          <p className="mt-5 rounded-2xl bg-secondary/60 px-5 py-4 text-sm leading-relaxed text-foreground/85">
            {site.telehealthNote}
          </p>
        </section>

        <section aria-labelledby="who-heading">
          <h2 id="who-heading" className="font-serif text-3xl font-medium md:text-4xl">
            Who this helps
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{content.whoItHelps.intro}</p>
          <BulletList items={content.whoItHelps.items} />
        </section>

        <section aria-labelledby="signs-heading" className="glass-panel rounded-[2rem] p-8 md:p-10">
          <h2 id="signs-heading" className="font-serif text-3xl font-medium md:text-4xl">
            Common signs
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{content.signs.intro}</p>
          <BulletList items={content.signs.items} />
        </section>

        <section aria-labelledby="approach-heading">
          <h2 id="approach-heading" className="font-serif text-3xl font-medium md:text-4xl">
            How Sara approaches it
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{content.approach.intro}</p>
          <ul className="mt-8 flex flex-col divide-y divide-border border-y border-border">
            {content.approach.items.map((item) => (
              <li key={item.title} className="py-6">
                <h3 className="font-serif text-2xl font-medium">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="sessions-heading">
          <h2 id="sessions-heading" className="font-serif text-3xl font-medium md:text-4xl">
            What sessions look like
          </h2>
          <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            {content.sessions.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Curious about cost? See{' '}
            <Link href="/pricing" className="font-medium text-primary underline underline-offset-4">
              rates and accepted insurance
            </Link>
            , or explore{' '}
            <Link href="/services" className="font-medium text-primary underline underline-offset-4">
              all services
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-serif text-3xl font-medium md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqList items={content.faqs} />
          </div>
        </section>

        <nav aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-serif text-2xl font-medium">
            Related services
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {related.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/${page.slug}`}
                  className="inline-flex rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <section className="mx-auto mt-20 max-w-6xl px-6">
        <div className="flex flex-col items-center rounded-[2.5rem] bg-primary px-6 py-16 text-center text-primary-foreground">
          <h2 className="max-w-2xl font-serif text-4xl font-medium leading-tight text-balance md:text-5xl">
            You do not have to figure this out alone.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
            Start with a free 15-minute consultation to see if we are a good fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GlassLink href="/contact" className="text-foreground">
              Schedule a free consultation
            </GlassLink>
            <GlassLink href="/services" variant="tinted">
              View all services
            </GlassLink>
          </div>
        </div>
      </section>
    </>
  )
}
