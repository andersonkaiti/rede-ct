'use client'

import { LinkIcon, type LinkIconHandle } from '@components/icons/link'
import { Button } from '@components/ui/button'
import Link from 'next/link'
import { useRef } from 'react'
import { toast } from 'sonner'

interface ICongressButtonProps {
  congressLink?: string | null
}

export function CongressButton({ congressLink }: ICongressButtonProps) {
  const iconRef = useRef<LinkIconHandle | null>(null)

  return (
    <Button
      onClick={() =>
        !congressLink && toast.error('Link do congresso indisponível')
      }
      variant="outline"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <Link
        href={congressLink || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <LinkIcon ref={iconRef} />
        Link do congresso
      </Link>
    </Button>
  )
}
