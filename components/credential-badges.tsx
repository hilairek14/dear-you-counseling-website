import { cn } from '@/lib/utils'

// Simplified outline of the state of Florida (placeholder mark, not an official seal).
export function FloridaBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('size-6', className)}
      role="img"
      aria-label="Outline of the state of Florida"
    >
      <path
        d="M10 14h21l2 4h6l3 3h6l4 4-2 4 3 4-2 4 4 3-10 12-6-4-5 2-8-6-3 3-6-3 2-5-5-4 2-6-6-4 2-7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Generic initials badge standing in for a university crest until an official logo is supplied.
export function UniversityBadge({ initials, className }: { initials: string; className?: string }) {
  return (
    <span
      className={cn(
        'flex size-6 shrink-0 items-center justify-center rounded-full border border-current text-[0.6rem] font-semibold tracking-tight',
        className,
      )}
      aria-label={`${initials} logo placeholder`}
    >
      {initials}
    </span>
  )
}
