import type { Metadata } from 'next'
import { Clock, HeartPulse, MessageCircle } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { PageIntro } from '@/components/page-intro'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Send a message to Sara Antoine at Dear You Counseling to schedule a free consultation.',
}

const details = [
  {
    icon: MessageCircle,
    title: 'Free consultation',
    body: 'Start with a complimentary 15-minute call to see if we are a good fit.',
  },
  {
    icon: Clock,
    title: 'Response time',
    body: 'Messages are typically answered within 1 to 2 business days.',
  },
  {
    icon: HeartPulse,
    title: 'In crisis?',
    body: 'Call or text 988, the Suicide & Crisis Lifeline, or call 911 for immediate help.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's start a conversation"
        description="Reaching out is a brave first step. Send a message below and Sara will personally get back to you."
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row">
        <div className="glass-panel rounded-[2rem] p-6 md:p-10 lg:w-7/12">
          <ContactForm />
        </div>

        <ul className="flex flex-col gap-5 lg:w-5/12">
          {details.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex gap-5 rounded-3xl bg-secondary/60 p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-card text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <h2 className="font-serif text-2xl font-medium">{title}</h2>
                <p className="mt-1 leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
