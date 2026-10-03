import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

export function FaqList({ items }: { items: { question: string; answer: ReactNode }[] }) {
  return (
    <div className="flex flex-col divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl font-medium text-foreground md:text-2xl [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown
              className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <div className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{item.answer}</div>
        </details>
      ))}
    </div>
  )
}
