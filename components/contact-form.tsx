'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { sendContactMessage, type ContactState } from '@/app/contact/actions'
import { GlassButton } from '@/components/glass-button'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

const fieldClass =
  'w-full rounded-2xl border border-input bg-card/70 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition focus:border-ring focus:outline-none focus:ring-4 focus:ring-ring/20'

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState)

  if (state.status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center py-16 text-center">
        <CheckCircle2 className="size-12 text-primary" aria-hidden />
        <h2 className="mt-5 font-serif text-3xl font-medium">Message sent</h2>
        <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
          {state.message ?? 'Thank you for reaching out.'}
        </p>
      </div>
    )
  }

  const errors = state.fieldErrors ?? {}

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      <div hidden className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        <Field label="Full name" id="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cn(fieldClass, errors.name && 'border-destructive')}
          />
        </Field>
        <Field label="Email" id="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(fieldClass, errors.email && 'border-destructive')}
          />
        </Field>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        <Field label="Phone (optional)" id="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </Field>
        <Field label="Reaching out about" id="topic">
          <select id="topic" name="topic" className={fieldClass} defaultValue="">
            <option value="">Select an option</option>
            <option>Free consultation</option>
            <option>Therapy for myself</option>
            <option>Insurance or pricing question</option>
            <option>Something else</option>
          </select>
        </Field>
      </div>

      <Field label="Message" id="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Share as much or as little as you are comfortable with."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(fieldClass, 'resize-y', errors.message && 'border-destructive')}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <label htmlFor="inFlorida" className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
          <input
            id="inFlorida"
            name="inFlorida"
            type="checkbox"
            required
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? 'inFlorida-error' : undefined}
            className="mt-0.5 size-5 shrink-0 rounded accent-primary"
          />
          I will be located in Florida during my sessions.
        </label>
        {errors.location && (
          <p id="inFlorida-error" className="text-sm text-destructive">
            {errors.location}
          </p>
        )}
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Please avoid sharing sensitive health details here. This form is not monitored for emergencies.
      </p>

      {state.status === 'error' && state.message && (
        <p role="alert" className="rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {state.message}
        </p>
      )}

      <div>
        <GlassButton type="submit" variant="tinted" disabled={pending}>
          {pending ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <Send className="size-4" aria-hidden />
          )}
          {pending ? 'Sending...' : 'Send message'}
        </GlassButton>
      </div>
    </form>
  )
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string
  id: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
