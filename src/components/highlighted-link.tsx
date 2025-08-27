import { LinkIcon } from 'lucide-react'
import Link, { type LinkProps } from 'next/link'

interface HighlightedLinkProps extends LinkProps {
  children: React.ReactNode
}

export function HighlightedLink({ children, ...rest }: HighlightedLinkProps) {
  return (
    <Link
      className="inline-flex w-full items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-6 py-3 font-semibold text-primary shadow-sm transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:w-fit"
      {...rest}
    >
      <LinkIcon className="h-5 w-5 opacity-80" />
      <span className="font-medium">{children}</span>
    </Link>
  )
}
