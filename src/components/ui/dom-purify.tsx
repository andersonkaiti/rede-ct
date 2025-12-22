/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: needed */

'use client'

import DOMPurify from 'dompurify'

interface ISafeHTMLProps {
  html: string
  className?: string
}

export function SafeHTML({ html, className }: ISafeHTMLProps) {
  const safeHTML = DOMPurify.sanitize(html)

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: safeHTML }} />
  )
}
