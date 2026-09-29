import type { Metadata } from 'next'
import { GlassLink } from '@/components/glass-button'
import { PageIntro } from '@/components/page-intro'
import { approaches, populations, specialties } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Therapy for anxiety, depression, trauma, life transitions, and relationship challenges using CBT, strengths-based therapy, and trauma-informed care.',
}

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Care tailored to you"
        description="Culturally sensitive, faith-informed therapy that meets you where you are. Each approach is tailored to your unique pace and needs."
      />

      <section className="mx-auto max-w-6xl px-6" aria-labelledby="who-heading">
        <h2 id="who-heading" className="font-serif text-3xl font-medium md:text-4xl">
          Who I work with
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
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
        <ul className="mt-8 flex flex-col divide-y divide-border border-y border-border">
          {specialties.map((item) => (
            <li key={item.title} className="flex flex-col gap-2 py-7 md:flex-row md:gap-12">
              <h3 className="font-serif text-2xl font-medium md:w-80">{item.title}</h3>
              <p className="flex-1 leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

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
              Culturally sensitive & faith-informed
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
          <GlassLink href="/pricing">See pricing</GlassLink>
        </div>
      </section>
    </>
  )
}
