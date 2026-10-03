import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Laptop, MessageCircleHeart, ShieldCheck, Wifi } from 'lucide-react'
import { FaqList } from '@/components/faq-list'
import { GlassLink } from '@/components/glass-button'
import { pageMetadata } from '@/lib/seo'
import { approaches, site, specialties } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Online Therapy in Florida | Dear You Counseling',
  description:
    'Culturally sensitive, faith-informed online therapy for adults in Florida. Support for anxiety, trauma, depression, and life transitions. Free consult.',
  path: '/',
})

const onlineSteps = [
  {
    icon: ShieldCheck,
    title: 'Secure video',
    body: 'We meet on a private, HIPAA-compliant video platform. I send you a link before each session, with nothing complicated to set up.',
  },
  {
    icon: Laptop,
    title: 'What you need',
    body: 'A phone, tablet, or computer, a steady internet connection, and a private space where you can speak freely.',
  },
  {
    icon: MessageCircleHeart,
    title: 'Your first session',
    body: 'We start slowly. I get to know you, your story, and your hopes for therapy. You share only what feels comfortable.',
  },
  {
    icon: Wifi,
    title: 'From home',
    body: 'Join from your couch, a quiet bedroom, or anywhere private in Florida. No commute, no waiting room.',
  },
]

const faqs = [
  {
    question: 'Is online therapy as effective as in-person therapy?',
    answer:
      'For anxiety, depression, trauma, and many other concerns, research shows online therapy can be just as effective as meeting in person. What matters most is the connection between you and your therapist, and that can grow just as meaningfully over video.',
  },
  {
    question: 'What if I feel nervous about starting?',
    answer:
      'That is completely normal, and you are welcome exactly as you are. We will go at your pace, and you never have to share more than you are ready to. The free consultation is a low-pressure way to see how it feels to talk with me.',
  },
  {
    question: 'Can I do sessions from home, work, or my car?',
    answer:
      'Yes, as long as you are in Florida and in a private space where you can speak freely. Many clients use their home, a closed office, or a parked car. For your safety, please do not join while driving.',
  },
  {
    question: 'What do I need to get started?',
    answer:
      'A phone, tablet, or computer with a camera, a stable internet connection, and a quiet, private spot. Before our first session, I will send you a secure link and a few intake forms to complete online.',
  },
  {
    question: 'Do you accept insurance?',
    answer: (
      <>
        Yes. I am in-network with Aetna and Cigna. Self-pay is always welcome, and I can provide a superbill for
        possible out-of-network reimbursement. See{' '}
        <Link href="/pricing" className="font-medium text-primary underline underline-offset-4">
          rates and insurance
        </Link>{' '}
        for details.
      </>
    ),
  },
  {
    question: 'Do you work with clients outside Florida?',
    answer:
      'Because of licensing rules, I can only provide therapy to clients who are physically located in Florida during each session. If you live elsewhere or will be traveling out of state, I am happy to help point you toward other resources.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="relative -mt-20 overflow-hidden">
        <Image
          src="/images/misty-lake-at-sunrise.png"
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
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-medium leading-[1.05] text-balance md:text-7xl">
            Online Therapy in Florida: A Gentle Place to Come Back to Yourself.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 text-pretty">
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
              src="/images/cozy-armchair-tea-laptop-at-home.png"
              alt="A cozy armchair with a knit blanket next to a side table holding a mug of tea and an open laptop"
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
            <p className="mt-4 font-medium text-foreground">{site.telehealthNote}</p>
            <div className="mt-8">
              <GlassLink href="/about">Meet Sara</GlassLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20" aria-labelledby="online-heading">
        <div className="glass-panel flex flex-col gap-10 rounded-[2rem] p-8 md:p-12 lg:flex-row">
          <div className="lg:w-5/12">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Online sessions</p>
            <h2 id="online-heading" className="mt-4 font-serif text-4xl font-medium leading-tight md:text-5xl">
              How online sessions work
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Therapy from home can feel surprisingly natural. Many clients find it easier to open up from a space
              that already feels safe and familiar.
            </p>
          </div>
          <ul className="grid flex-1 gap-6 sm:grid-cols-2">
            {onlineSteps.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex flex-col gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-serif text-2xl font-medium">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
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
                  href={item.href}
                  className="glass-panel group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-0.5"
                >
                  <h3 className="font-serif text-2xl font-medium">{item.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    <span className="sr-only">about {item.title.toLowerCase()}</span>
                  </span>
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
            <li key={item.title} className="flex flex-col gap-3 py-8 md:flex-row md:gap-12">
              <span className="font-serif text-2xl text-primary md:w-16">{`0${index + 1}`}</span>
              <h3 className="font-serif text-2xl font-medium md:w-80">{item.title}</h3>
              <p className="flex-1 leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20" aria-labelledby="faq-heading">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Questions</p>
        <h2 id="faq-heading" className="mt-4 font-serif text-4xl font-medium leading-tight md:text-5xl">
          Frequently asked questions
        </h2>
        <div className="mt-10">
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <Image
            src="/images/open-journal-and-tea-by-window.png"
            alt=""
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
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <GlassLink href="/contact" className="text-foreground">
                Schedule a free consultation
              </GlassLink>
              <GlassLink href="/pricing" variant="tinted">
                Rates & insurance
              </GlassLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
