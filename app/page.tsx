import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Video } from 'lucide-react'
import { FaqList } from '@/components/faq-list'
import { GlassLink } from '@/components/glass-button'
import { pageMetadata } from '@/lib/seo'
import { approaches, insurances, site, specialties } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Online Therapy in Florida | Dear You Counseling',
  description:
    'Culturally sensitive, faith-informed online therapy for adults in Florida. Support for anxiety, trauma, depression, and life transitions. Free consult.',
  path: '/',
})

const faqs = [
  {
    q: 'Is online therapy as effective as in-person therapy?',
    a: 'For many people, yes. Research suggests online therapy can work as well as in-person sessions for concerns like anxiety and depression, and many clients find it easier to open up from a familiar space. If you are not sure it is right for you, we can talk about it during your free consultation.',
  },
  {
    q: 'What if I feel nervous about starting?',
    a: 'That is completely normal, and it shows how much you care about taking this step. You do not need to have everything figured out. We begin with a free 15-minute conversation, and you set the pace from there.',
  },
  {
    q: 'Can I do sessions from home, work, or my car?',
    a: 'Yes, as long as you are in Florida and somewhere private where you can speak freely. Home is ideal for most people. If you are at work or in a parked car, please make sure you are alone and not driving.',
  },
  {
    q: 'What do I need to get started?',
    a: 'A phone, tablet, or computer with a camera, a reliable internet connection, and a private space. After you reach out, I will share the details for joining your secure video session.',
  },
  {
    q: 'Do you accept insurance?',
    a: (
      <>
        Yes. I am currently in-network with {insurances.join(' and ')}. If your plan is not listed, self-pay is
        welcome and I can provide a superbill for possible out-of-network reimbursement. You can see the details on
        my{' '}
        <Link href="/pricing" className="font-medium text-primary underline underline-offset-4">
          Rates &amp; Insurance page
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Do you work with clients outside Florida?',
    a: 'Not at this time. I can only see clients who are located in Florida during their sessions. If you live elsewhere, I encourage you to look for a licensed therapist in your state.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="relative -mt-20 overflow-hidden">
        <Image
          src="/images/hero-misty-lake.jpg"
          alt="Misty mountains reflected in a still lake at dawn"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/35 to-background" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start justify-center px-6 pt-32 pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/90">
            Sara Antoine, RCSWI
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-medium leading-[1.08] text-balance text-primary-foreground md:text-6xl">
            Online Therapy in Florida: A Gentle Place to Come Back to Yourself.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85 text-pretty">
            Culturally sensitive, faith-informed online therapy for adults across Florida, tailored to your unique
            pace and needs.
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
              src="/images/beige-armchair-with-laptop-at-home.jpg"
              alt="A beige armchair and ottoman with a laptop resting on it in a calm, softly lit room"
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
            <p className="mt-5 flex items-center gap-3 font-medium text-foreground">
              <Video className="size-5 shrink-0 text-primary" aria-hidden />
              {site.videoLine}
            </p>
            <div className="mt-8">
              <GlassLink href="/about">Meet Sara</GlassLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20" aria-labelledby="how-online-heading">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="how-online-heading" className="font-serif text-4xl font-medium leading-tight md:text-5xl">
            How online sessions work
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Sessions take place over a secure, private video platform, so you can meet with me from wherever you
              feel comfortable in Florida. All you need is a private space, a phone or computer with a camera, and
              a reliable internet connection. Many clients join from a favorite chair at home.
            </p>
            <p>
              Your first session is a relaxed conversation. We talk about what brought you in, what you hope will
              feel different, and what has helped before. There is nothing to prepare, and you can share as much or
              as little as feels right. From there, we move at your pace.
            </p>
            <p>Online therapy lets you receive support in your own space, without a commute or a waiting room.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="focus-heading">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Areas of focus</p>
          <h2 id="focus-heading" className="mt-4 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Support for what you are facing
          </h2>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
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
            <p className="font-serif text-2xl font-medium leading-snug">Not sure where to begin? That is okay.</p>
            <div className="mt-6">
              <GlassLink href="/contact" className="text-foreground">
                Reach out
              </GlassLink>
            </div>
          </li>
        </ul>
      </section>

      <section className="bg-secondary/50 py-20" aria-labelledby="approach-heading">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">My approach</p>
            <h2 id="approach-heading" className="mt-4 font-serif text-4xl font-medium leading-tight md:text-5xl">
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
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20" aria-labelledby="faq-heading">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">FAQ</p>
        <h2 id="faq-heading" className="mt-4 font-serif text-4xl font-medium leading-tight md:text-5xl">
          Questions you may have
        </h2>
        <div className="mt-10">
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <Image
            src="/images/journal-and-tea-on-table.jpg"
            alt="An open journal with a pen and a cup of tea resting on a table"
            fill
            sizes="100vw"
            className="object-cover"
          />
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
                Schedule a free consultation
                <ArrowRight className="size-4" aria-hidden />
              </GlassLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
