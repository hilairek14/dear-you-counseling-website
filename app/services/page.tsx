import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GlassLink } from '@/components/glass-button'
import { PageIntro } from '@/components/page-intro'
import { pageMetadata } from '@/lib/seo'
import { approaches, populations, specialties } from '@/lib/site'
import { specialtyPages } from '@/lib/specialty-pages'

export const metadata = pageMetadata({
  title: 'Online Therapy Services in Florida | Dear You Counseling',
  description:
    'Online therapy for anxiety, depression, trauma, life transitions, and relationship challenges for adults across Florida.',
  path: '/services',
})

const relationships = specialties.find((item) => item.title === 'Relationship Challenges')

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Care tailored to you"
        description="Culturally sensitive, faith-informed online therapy for young adults and adults across Florida. Each approach is tailored to your unique pace and needs, and every session happens by secure video."
      />

      <section className="mx-auto max-w-6xl px-6" aria-labelledby="who-heading">
        <h2 id="who-heading" className="font-serif text-3xl font-medium md:text-4xl">
          Who I work with
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {populations.map((item) => (
            <li key={item.title} className="glass-panel rounded-3xl p-7">
              <h3 className="font-serif text-2xl font-medium">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="focus-heading">
        <h2 id="focus-heading" className="font-serif text-3xl font-medium md:text-4xl">
          Areas of specialty
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Choose a specialty to learn who it helps, common signs, and what online sessions look like.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialtyPages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/${page.slug}`}
                className="glass-panel group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-0.5"
              >
                <h3 className="font-serif text-2xl font-medium">{page.h1}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{page.metaDescription}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {relationships && (
        <section
          id="relationship-challenges"
          className="mx-auto mt-20 max-w-6xl scroll-mt-28 px-6"
          aria-labelledby="relationships-heading"
        >
          <div className="flex flex-col gap-6 border-y border-border py-10 md:flex-row md:gap-12">
            <h2 id="relationships-heading" className="font-serif text-3xl font-medium md:w-80 md:text-4xl">
              {relationships.title}
            </h2>
            <div className="flex flex-1 flex-col gap-4 leading-relaxed text-muted-foreground">
              <p>{relationships.description}</p>
              <p>
                Whether you are navigating conflict with a partner, setting boundaries with family, or healing
                after a friendship ends, online sessions offer a calm place to understand your patterns and
                practice new ways of connecting.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="mt-20 bg-secondary/50 py-20" aria-labelledby="approach-heading">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="approach-heading" className="font-serif text-3xl font-medium md:text-4xl">
            Therapeutic approaches
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {approaches.map((item) => (
              <li key={item.title} className="glass-panel flex flex-col rounded-3xl p-7">
                <span className="self-start rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {item.short}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-medium">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="faith-heading">
        <div className="flex flex-col gap-8 rounded-[2rem] border border-border p-8 md:flex-row md:p-12">
          <div className="md:w-1/2">
            <h2 id="faith-heading" className="font-serif text-3xl font-medium md:text-4xl">
              <Link href="/faith-informed-therapy" className="hover:text-primary">
                Culturally sensitive & faith-informed
              </Link>
            </h2>
          </div>
          <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground md:w-1/2">
            <p>
              Your culture, family traditions, and beliefs are part of who you are. In our work together, they
              are welcomed and respected, never dismissed.
            </p>
            <p>
              For clients who desire it, faith can be thoughtfully integrated into therapy as a source of
              strength and meaning. For those who prefer not to, sessions remain fully secular. You always
              decide.
            </p>
            <div className="mt-2">
              <GlassLink href="/faith-informed-therapy">Learn about faith-informed therapy</GlassLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="font-serif text-4xl font-medium text-balance">Ready to begin?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Start with a free 15-minute consultation to see if we are a good fit.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <GlassLink href="/contact" variant="tinted">
            Get in touch
          </GlassLink>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Curious about cost? See{' '}
          <Link href="/pricing" className="font-medium text-primary underline underline-offset-4">
            rates and accepted insurance
          </Link>
          .
        </p>
      </section>
    </>
  )
}
