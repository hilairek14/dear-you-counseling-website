import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GlassLink } from '@/components/glass-button'
import { approaches, specialties } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      <section className="relative -mt-20 overflow-hidden">
        <Image
          src="/images/hero-meadow.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start justify-center px-6 pt-32 pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Sara Antoine, RCSWI
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-balance md:text-7xl">
            A gentle place to come back to yourself.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 text-pretty">
            Culturally sensitive, faith-informed therapy for adults, tailored to your unique pace and needs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <GlassLink href="/contact" variant="tinted">
              Schedule a free consultation
              <ArrowRight className="size-4" aria-hidden />
            </GlassLink>
            <GlassLink href="/services">Explore services</GlassLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] md:w-5/12">
            <Image
              src="/images/office.png"
              alt="A calm counseling room with soft chairs, plants, and natural light"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:w-7/12">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Welcome</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-balance md:text-5xl">
              Dear you, you deserve to be heard.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Whether you are carrying anxiety, grief, past hurts, or simply the weight of a season of change,
              therapy can be a place to breathe. I honor your culture, your faith, and your story, and we move
              forward together at a pace that feels right for you.
            </p>
            <div className="mt-8">
              <GlassLink href="/about">Meet Sara</GlassLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Areas of focus</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight md:text-5xl">
              Support for what you are facing
            </h2>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((item) => (
              <li key={item.title}>
                <Link
                  href={`/services#${item.slug}`}
                  className="glass-panel group flex items-center justify-between gap-3 rounded-3xl p-7 transition-transform hover:-translate-y-0.5"
                >
                  <h3 className="font-serif text-2xl font-medium">{item.title}</h3>
                  <ArrowRight
                    className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
            <li className="flex flex-col justify-between rounded-3xl bg-primary p-7 text-primary-foreground">
              <p className="font-serif text-2xl font-medium leading-snug">
                Not sure where to begin? That is okay.
              </p>
              <div className="mt-6">
                <GlassLink href="/contact" className="text-foreground">
                  Reach out
                </GlassLink>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">My approach</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Evidence-based care, rooted in compassion
          </h2>
        </div>
        <ol className="mt-12 flex flex-col divide-y divide-border border-y border-border">
          {approaches.map((item, index) => (
            <li key={item.title}>
              <Link
                href={`/services#${item.slug}`}
                className="group flex items-center gap-3 py-8 transition-colors hover:text-primary md:gap-12"
              >
                <span className="font-serif text-2xl text-primary md:w-16">{`0${index + 1}`}</span>
                <h3 className="flex-1 font-serif text-2xl font-medium">{item.title}</h3>
                <ArrowRight
                  className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <Image src="/images/journal.png" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-primary/55" />
          <div className="relative flex flex-col items-center px-6 py-20 text-center text-primary-foreground">
            <h2 className="max-w-2xl font-serif text-4xl font-medium leading-tight text-balance md:text-5xl">
              Taking the first step is an act of courage.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
              Send a message to schedule your free 15-minute consultation.
            </p>
            <div className="mt-8 flex justify-center">
              <GlassLink href="/contact" className="text-foreground">
                Send a message
              </GlassLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
