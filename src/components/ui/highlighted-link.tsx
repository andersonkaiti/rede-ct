'use client'

import Link, { type LinkProps } from 'next/link'
import { useRef } from 'react'
import { LinkIcon, type LinkIconHandle } from '../icons/link'

interface HighlightedLinkProps extends LinkProps {
  children: React.ReactNode
}

export function HighlightedLink({ children, ...rest }: HighlightedLinkProps) {
  const iconRef = useRef<LinkIconHandle>(null)

  return (
    <Link
      className="inline-flex w-full items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-2 font-semibold text-primary shadow-sm transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      {...rest}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <LinkIcon className="opacity-80" ref={iconRef} size={20} />
      <span className="font-medium">{children}</span>
    </Link>
  )
}
