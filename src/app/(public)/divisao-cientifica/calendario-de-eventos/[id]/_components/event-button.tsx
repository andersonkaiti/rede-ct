'use client'

import { Button } from '@components/ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

interface IEventButtonProps {
  eventLink?: string | null
  format: 'ONLINE' | 'IN_PERSON'
  status: 'PENDING' | 'CANCELLED' | 'FINISHED'
}

export function EventButton({ eventLink, format, status }: IEventButtonProps) {
  const isDisabled = status !== 'PENDING'
  const hasLink = format === 'ONLINE' && eventLink

  if (isDisabled) {
    return (
      <Button className="w-full" variant="outline" disabled>
        {status === 'FINISHED' ? 'Evento Encerrado' : 'Evento Cancelado'}
      </Button>
    )
  }

  return (
    <Button
      asChild
      className="group w-full font-bold"
      variant="outline"
      onClick={() => !hasLink && toast.info('Link não disponível')}
    >
      {hasLink ? (
        <Link
          className="w-full"
          href={eventLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="size-4 transition-all duration-200 group-hover:translate-x-1" />
          Acessar Evento
        </Link>
      ) : (
        <span className="w-full">
          {format === 'ONLINE' ? 'Link não disponível' : 'Evento Presencial'}
        </span>
      )}
    </Button>
  )
}
