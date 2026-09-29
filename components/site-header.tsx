'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { GlassLink } from '@/components/glass-button'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Dear You
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Counseling</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.slice(1, -1).map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm transition-colors hover:bg-secondary hover:text-foreground',
                      active ? 'bg-secondary text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <GlassLink href="/contact" variant="tinted" className="px-5 py-2.5 text-sm">
            Contact
          </GlassLink>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="glass-panel mx-auto mt-2 max-w-6xl rounded-3xl p-3 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={cn(
                    'block rounded-2xl px-4 py-3 text-base',
                    pathname === link.href ? 'bg-secondary text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <span className="sr-only">{site.name}</span>
    </header>
  )
}
