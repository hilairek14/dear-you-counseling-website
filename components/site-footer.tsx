import Link from 'next/link'
import { navLinks, site } from '@/lib/site'
import { specialtyPages } from '@/lib/specialty-pages'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-2xl font-semibold">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {site.therapist}, {site.credential}. {site.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{site.serviceArea}</p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{site.supervisionNote}</p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <nav aria-label="Footer">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Explore</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Specialties">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Online therapy</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {specialtyPages.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`} className="text-muted-foreground hover:text-foreground">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs leading-relaxed text-muted-foreground md:flex-row md:justify-between">
          <p>
            If you are in crisis, call or text <strong className="text-foreground">988</strong> or call{' '}
            <strong className="text-foreground">911</strong>. This website is not for emergencies.
          </p>
          <p>
            {'\u00A9'} {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
