'use server'

import { randomUUID } from 'node:crypto'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Partial<Record<'name' | 'email' | 'message' | 'florida', string>>
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  if (String(formData.get('company') ?? '').length > 0) {
    return { status: 'success' }
  }

  const name = String(formData.get('name') ?? '').trim().slice(0, 120)
  const email = String(formData.get('email') ?? '').trim().slice(0, 200)
  const phone = String(formData.get('phone') ?? '').trim().slice(0, 40)
  const topic = String(formData.get('topic') ?? '').trim().slice(0, 80)
  const message = String(formData.get('message') ?? '').trim().slice(0, 5000)

  const fieldErrors: ContactState['fieldErrors'] = {}
  if (!name) fieldErrors.name = 'Please share your name.'
  if (!EMAIL_PATTERN.test(email)) fieldErrors.email = 'Please enter a valid email address.'
  if (message.length < 10) fieldErrors.message = 'Please write a short message (at least 10 characters).'
  if (formData.get('florida') !== 'on') {
    fieldErrors.florida = 'Sessions are currently available only to clients located in Florida.'
  }
  if (Object.keys(fieldErrors).length > 0) {
    return { status: 'error', message: 'Please review the highlighted fields.', fieldErrors }
  }

  const apiKey = process.env.RESEND_API_KEY
  const recipient = process.env.CONTACT_EMAIL
  if (!apiKey || !recipient) {
    console.error('Contact form is not configured: RESEND_API_KEY and CONTACT_EMAIL are required.')
    return {
      status: 'error',
      message: 'Online messaging is not available right now. Please try again later.',
    }
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone || 'Not provided'],
    ['Reason', topic || 'Not specified'],
    ['Located in Florida', 'Confirmed'],
  ]
  const html = `
    <h2>New message from the Dear You Counseling website</h2>
    <table cellpadding="6">${rows
      .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`)
      .join('')}</table>
    <p><strong>Message</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': `contact-form/${randomUUID()}`,
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? 'Dear You Counseling <onboarding@resend.dev>',
      to: [recipient],
      reply_to: email,
      subject: `New inquiry from ${name}`,
      html,
    }),
  })

  if (!response.ok) {
    console.error('Resend error:', response.status, await response.text())
    return {
      status: 'error',
      message: 'Something went wrong sending your message. Please try again in a moment.',
    }
  }

  return {
    status: 'success',
    message: 'Thank you for reaching out. Sara will get back to you within 1 to 2 business days.',
  }
}
