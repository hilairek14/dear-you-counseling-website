import Link from 'next/link'
import { Check, ShieldCheck } from 'lucide-react'
import { GlassLink } from '@/components/glass-button'
import { PageIntro } from '@/components/page-intro'
import { pageMetadata } from '@/lib/seo'
import { insurances, sessionRates } from '@/lib/site'
import { cn } from '@/lib/utils'

export const metadata = pageMetadata({
  title: 'Therapy Rates & Insurance in Florida | Dear You Counseling',
  description:
    'Session rates, accepted insurance plans, and self-pay options for online therapy with Dear You Counseling in Florida.',
  path: '/pricing',
})

export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Rates & Insurance"
        title="Therapy rates & insurance"
        description="Clear, upfront pricing so you can focus on what matters most: your wellbeing."
      />

      <p className="mx-auto -mt-6 mb-12 max-w-2xl px-6 text-center font-medium text-foreground">
        All sessions are offered through secure telehealth for clients located in Florida.
      </p>

      <section className="mx-auto max-w-6xl px-6" aria-labelledby="rates-heading">
        <h2 id="rates-heading" className="sr-only">
          Session rates
        </h2>
        <ul className="grid gap-5 md:grid-cols-3">
          {sessionRates.map((rate) => (
            <li
              key={rate.name}
              className={cn(
                'flex flex-col rounded-[2rem] p-8',
                rate.featured ? 'bg-primary text-primary-foreground' : 'glass-panel',
              )}
            >
              <p
                className={cn(
                  'text-xs font-medium uppercase tracking-[0.25em]',
                  rate.featured ? 'text-primary-foreground/80' : 'text-primary',
                )}
              >
                {rate.duration}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium">{rate.name}</h3>
              <p className="mt-6 font-serif text-6xl font-medium">{rate.price}</p>
              <p
                className={cn(
                  'mt-5 flex-1 leading-relaxed',
                  rate.featured ? 'text-primary-foreground/85' : 'text-muted-foreground',
                )}
              >
                {rate.description}
              </p>
              <div className="mt-8">
                <GlassLink
                  href="/contact"
                  variant={rate.featured ? 'clear' : 'tinted'}
                  className="w-full"
                >
                  Book now
                </GlassLink>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="insurance-heading">
        <div className="flex flex-col gap-10 rounded-[2rem] bg-secondary/60 p-8 md:flex-row md:p-12">
          <div className="md:w-5/12">
            <ShieldCheck className="size-8 text-primary" aria-hidden />
            <h2 id="insurance-heading" className="mt-4 font-serif text-4xl font-medium">
              Insurance accepted
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I am in-network with the following plans. Coverage varies, so I recommend calling your insurance
              provider to confirm your mental health benefits, copay, and deductible.
            </p>
          </div>
          <ul className="grid flex-1 content-start gap-3 sm:grid-cols-2">
            {insurances.map((plan) => (
              <li key={plan} className="glass-panel flex items-center gap-3 rounded-2xl px-5 py-4">
                <Check className="size-4 shrink-0 text-primary" aria-hidden />
                <span className="font-medium">{plan}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-5 px-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border p-8">
          <h2 className="font-serif text-2xl font-medium">Paying out of pocket</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Self-pay clients are always welcome. If your plan is not listed, I can provide a superbill you may
            submit to your insurance for possible out-of-network reimbursement.
          </p>
        </div>
        <div className="rounded-3xl border border-border p-8">
          <h2 className="font-serif text-2xl font-medium">Good Faith Estimate</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Under the No Surprises Act, if you are uninsured or not using insurance, you have the right to
            receive a Good Faith Estimate of expected charges. Please ask for one at any time.
          </p>
        </div>
      </section>

      <p className="mx-auto mt-12 max-w-3xl px-6 text-center leading-relaxed text-muted-foreground">
        Curious what to expect from online sessions? Learn more about my{' '}
        <Link href="/services" className="font-medium text-primary underline underline-offset-4">
          online therapy services
        </Link>{' '}
        or{' '}
        <Link href="/contact" className="font-medium text-primary underline underline-offset-4">
          schedule a free consultation
        </Link>
        .
      </p>
    </>
  )
}
