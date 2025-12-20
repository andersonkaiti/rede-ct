'use client'

import { Button } from '@components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { EventFormat } from './event-format'
import { EventStatus } from './event-status'

interface Event {
  id: string
  title: string
  description: string | null
  imageUrl: string | null
  startDate: Date
  endDate: Date
  location: string | null
  status: 'PENDING' | 'CANCELLED' | 'FINISHED'
  format: 'ONLINE' | 'IN_PERSON'
  eventLink: string | null
  createdAt: Date
  updatedAt: Date
}

export function EventCard({ event }: { event: Event }) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="relative flex size-full overflow-hidden rounded-md">
          <Image
            alt={event.title}
            className="object-cover"
            fill
            priority
            src={event.imageUrl || '/placeholder.svg'}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent dark:from-black/70 dark:to-transparent" />
        </picture>
      </header>

      <div className="flex h-fit grow flex-col gap-4 py-2">
        <div className="space-y-4">
          <h1 className="font-semibold text-foreground text-xl">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            <EventStatus status={event.status} />
            <EventFormat format={event.format} />
          </div>
        </div>

        <footer className="mt-4">
          <Button asChild variant="outline">
            <Link
              className="w-full"
              href={`/divisao-cientifica/calendario-de-eventos/${event.id}`}
            >
              Ver mais detalhes
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
