import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'clear' | 'tinted'

function glassClass(variant: Variant, className?: string) {
  return cn('glass-btn', variant === 'tinted' && 'glass-btn-tinted', className)
}

export function GlassLink({
  variant = 'clear',
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={glassClass(variant, className)} {...props} />
}

export function GlassButton({
  variant = 'clear',
  className,
  ...props
}: ComponentProps<'button'> & { variant?: Variant }) {
  return <button className={glassClass(variant, className)} {...props} />
}
