import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { cn } from '@utils/cn'
import { format } from 'date-fns'
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  ChevronUp,
  Clock,
  MapPin,
  Monitor,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Event {
  id: string
  title: string
  description: string | null
  imageUrl: string | null
  startDate: string
  endDate: string
  location: string | null
  status: 'PENDING' | 'CANCELLED' | 'FINISHED'
  format: 'ONLINE' | 'IN_PERSON'
  eventLink: string | null
  createdAt: string
  updatedAt: string
}

const statusConfig: Record<
  Event['status'],
  {
    label: string
    icon: typeof AlertCircle
    badgeClass: string
    ariaLabel: string
  }
> = {
  PENDING: {
    label: 'Inscrições Abertas',
    icon: AlertCircle,
    badgeClass:
      'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
    ariaLabel: 'Status: Inscrições Abertas',
  },
  FINISHED: {
    label: 'Encerrado',
    icon: CheckCircle,
    badgeClass:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    ariaLabel: 'Status: Encerrado',
  },
  CANCELLED: {
    label: 'Cancelado',
    icon: AlertCircle,
    badgeClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    ariaLabel: 'Status: Cancelado',
  },
}

export function EventCard({ event }: { event: Event }) {
  const statusInfo = statusConfig[event.status]
  const isClickable =
    event.status === 'PENDING' && (event.eventLink || event.location)

  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="relative flex size-full overflow-hidden rounded-md border-muted-foreground">
          {event.imageUrl ? (
            <>
              <Image
                alt={event.title}
                className="object-cover"
                fill
                src={event.imageUrl}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent dark:from-black/70 dark:to-transparent" />
            </>
          ) : (
            <div className="flex size-full items-center justify-center bg-muted">
              <Calendar className="size-16 text-muted-foreground" />
            </div>
          )}
        </picture>
      </header>

      <div className="flex h-fit grow flex-col justify-between gap-4 py-2">
        <div className="space-y-4">
          <time className="flex items-center gap-2 text-sm leading-4">
            <span className="text-muted-foreground">
              De {format(event.startDate, 'dd/MM/yyyy HH:mm')} até{' '}
              {format(event.endDate, 'dd/MM/yyyy HH:mm')}
            </span>
          </time>

          <div className="flex flex-wrap gap-2">
            <Badge
              className={cn(
                'flex items-center gap-1 rounded-lg px-2.5 py-0.5 font-medium text-xs',
                statusInfo.badgeClass,
              )}
              aria-label={statusInfo.ariaLabel}
            >
              <statusInfo.icon className="size-4" />
              {statusInfo.label}
            </Badge>

            <Badge variant="outline" className="flex items-center gap-1">
              {event.format === 'ONLINE' ? (
                <>
                  <Monitor className="size-4" />
                  Online
                </>
              ) : (
                <>
                  <MapPin className="size-4" />
                  Presencial
                </>
              )}
            </Badge>
          </div>

          <CardTitle className="font-semibold text-2xl">
            {event.title}
          </CardTitle>

          {event.description && (
            <Collapsible>
              <CollapsibleTrigger className="group flex cursor-pointer items-center justify-between gap-2 p-0 text-sm">
                Descrição
                <ChevronUp className="size-4 transition-all duration-300 group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p className="mt-2 text-justify text-sm">{event.description}</p>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="w-fit font-semibold text-sm">Informações</h4>
          <div className="space-y-1.5">
            <div className="flex items-center">
              <Clock className="mr-1.5 size-4 text-muted-foreground" />
              <div className="font-semibold text-muted-foreground text-sm">
                {statusInfo.label}
              </div>
            </div>
            <div className="flex items-center">
              {event.format === 'ONLINE' ? (
                <Monitor className="mr-1.5 size-4 text-muted-foreground" />
              ) : (
                <MapPin className="mr-1.5 size-4 text-muted-foreground" />
              )}
              <div className="font-semibold text-muted-foreground text-sm">
                {event.format === 'ONLINE'
                  ? 'Online'
                  : event.location || 'Presencial'}
              </div>
            </div>
          </div>
        </div>

        <footer>
          {isClickable ? (
            <Button asChild className="w-full" variant="outline">
              <Link
                href={
                  event.format === 'ONLINE' && event.eventLink
                    ? event.eventLink
                    : '#'
                }
                rel="noopener noreferrer"
                target={event.format === 'ONLINE' ? '_blank' : undefined}
              >
                {event.format === 'ONLINE' ? 'Acessar Evento' : 'Ver Detalhes'}
              </Link>
            </Button>
          ) : (
            <Button className="w-full" disabled variant="outline">
              {statusInfo.label}
            </Button>
          )}
        </footer>
      </div>
    </div>
  )
}
