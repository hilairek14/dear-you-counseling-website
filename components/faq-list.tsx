import { ChevronDown } from 'lucide-react'

export type Faq = { q: string; a: React.ReactNode }

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <details key={item.q} className="glass-panel group rounded-2xl px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-medium [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown
              className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="mt-3 leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
