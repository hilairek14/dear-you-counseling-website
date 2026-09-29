export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center md:pt-24">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h1 className="mt-4 font-serif text-5xl font-medium leading-tight text-balance md:text-6xl">{title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>
    </section>
  )
}
