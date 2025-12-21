'use client'

import { Button } from '@components/ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

interface IJournalButtonProps {
  journalUrl?: string
}

export function JournalButton({ journalUrl }: IJournalButtonProps) {
  if (!journalUrl) {
    return (
      <Button
        className="w-full"
        variant="outline"
        onClick={() => toast.info('Link não disponível')}
      >
        Link não disponível
      </Button>
    )
  }

  return (
    <Button asChild className="group w-full" variant="outline">
      <Link
        className="w-full"
        href={journalUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink className="size-4 transition-all duration-200 group-hover:translate-x-1" />
        Acessar Revista
      </Link>
    </Button>
  )
}
