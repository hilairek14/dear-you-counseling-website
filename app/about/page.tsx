import Image from 'next/image'
import { Award, BadgeCheck, ExternalLink, GraduationCap, HeartHandshake } from 'lucide-react'
import { FloridaBadge, UniversityBadge } from '@/components/credential-badges'
import { GlassLink } from '@/components/glass-button'
import { PageIntro } from '@/components/page-intro'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'About Sara Antoine, RCSWI | Online Therapist in Florida',
  description:
    'Meet Sara Antoine, a pre-licensed Registered Clinical Social Work Intern offering culturally sensitive, faith-informed online therapy in Florida.',
  path: '/about',
})

const credentials = [
  {
    icon: Award,
    title: 'Registered Clinical Social Work Intern (RCSWI)',
    detail: 'Pre-licensed, State of Florida',
    badge: <FloridaBadge />,
  },
  {
    icon: GraduationCap,
    title: "Master's Degree",
    detail: 'University of South Florida',
    badge: <UniversityBadge initials="USF" />,
  },
  {
    icon: GraduationCap,
    title: 'Bachelor of Social Work',
    detail: 'Florida Atlantic University',
    badge: <UniversityBadge initials="FAU" />,
  },
]

const values = [
  'Culturally sensitive care that honors your background and identity',
  'Faith-informed support, integrated only as you wish',
  'A warm, non-judgmental space where you set the pace',
  'Collaborative goals tailored to your unique needs',
]

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Hi, I'm Sara Antoine."
        description="I am a pre-licensed Registered Clinical Social Work Intern (RCSWI) and the founder of Dear You Counseling, offering culturally sensitive, faith-informed online therapy to clients across Florida. My practice is built on the belief that every person deserves to feel seen, understood, and cared for."
      />

      <section className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 md:flex-row md:items-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] md:sticky md:top-28 md:w-5/12">
            <Image
              src="/images/tea-and-laptop-by-warm-lamp.jpg"
              alt="A cup of tea on a saucer beside a warm lamp and an open laptop on a table"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-10 md:w-7/12">
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                My practice is fully online and focuses on culturally sensitive, faith-informed therapy for adults
                across Florida. I know that our cultures, families, and beliefs shape the way we experience the
                world, and I bring that understanding into every session.
              </p>
              <p>
                I specialize in anxiety, depression, trauma, life transitions, and relationship challenges. My
                work draws on Cognitive Behavioral Therapy (CBT), strengths-based therapy, and trauma-informed
                care. Each approach is tailored to your unique pace and needs, because healing is never
                one-size-fits-all.
              </p>
              <p>
                The name Dear You is an invitation: to pause, to turn toward yourself with kindness, and to
                write a new chapter of your story. I would be honored to walk alongside you.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-medium">Education & Credentials</h2>
              <ul className="mt-6 flex flex-col gap-4">
                {credentials.map(({ icon: Icon, title, detail, badge }) => (
                  <li key={title} className="glass-panel flex items-center gap-5 rounded-3xl p-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="flex flex-1 items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-foreground">{title}</p>
                        <p className="text-sm text-muted-foreground">{detail}</p>
                      </div>
                      <span className="shrink-0 text-primary">{badge}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={site.psychologyTodayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn mt-6"
              >
                <BadgeCheck className="size-4" aria-hidden />
                View my Psychology Today profile
                <ExternalLink className="size-4" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            <div className="rounded-3xl bg-secondary/60 p-8">
              <div className="flex items-center gap-3">
                <HeartHandshake className="size-6 text-primary" aria-hidden />
                <h2 className="font-serif text-3xl font-medium">What you can expect</h2>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {values.map((value) => (
                  <li key={value} className="flex gap-3 leading-relaxed text-foreground/85">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <GlassLink href="/contact" variant="tinted">
                Work with Sara
              </GlassLink>
              <GlassLink href="/services">View services</GlassLink>
              <GlassLink href="/pricing">Rates &amp; Insurance</GlassLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
