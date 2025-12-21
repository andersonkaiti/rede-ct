import { BackArrow } from '@components/ui/back-arrow'
import { getEventById } from '@http/events/get-event-by-id'
import { formatDate } from '@utils/format-date'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'
import { EventFormat } from '../_components/event-format'
import { EventStatus } from '../_components/event-status'
import { EventButton } from './_components/event-button'
import { NotFound } from './_components/not-found'

interface IEventDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IEventDetailsProps) {
  const { id } = await params

  const event = await getEventById({ id })

  return {
    title: event?.title,
  }
}

export default async function EventDetails({ params }: IEventDetailsProps) {
  const { id } = await params

  const event = await getEventById({ id })

  if (!event) {
    return <NotFound />
  }

  const formattedStartDate = format(
    event.startDate,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  const formattedEndDate = format(
    event.endDate,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  return (
    <PageContainer>
      <BackArrow href="/divisao-cientifica/calendario-de-eventos" />

      <PageHeader className="flex-col items-start gap-8">
        <h1 className="font-bold text-5xl tracking-tight">{event.title}</h1>

        <time className="text-muted-foreground text-sm">
          Última atualização em {formatDate(new Date(event.updatedAt))}
        </time>
      </PageHeader>

      <PageMain className="gap-10">
        {event.imageUrl && (
          <div className="relative h-88 w-full overflow-hidden">
            <Image
              alt={event.title}
              className="rounded-md object-cover"
              fill
              src={event.imageUrl}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        )}

        <section className="space-y-10">
          <div className="flex items-center gap-4">
            <EventFormat format={event.format} />

            <EventStatus status={event.status} />
          </div>

          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            <div className="space-y-1">
              <h2 className="text-muted-foreground">Início do Evento</h2>
              <p>{formattedStartDate}</p>
            </div>

            <div className="space-y-1">
              <h2 className="text-muted-foreground">Fim do Evento</h2>
              <p>{formattedEndDate}</p>
            </div>

            {event.location && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Local</h2>
                <p>{event.location}</p>
              </div>
            )}

            <div className="space-y-1">
              <h2 className="text-muted-foreground">Formato</h2>
              <p>{event.format === 'ONLINE' ? 'Online' : 'Presencial'}</p>
            </div>
          </div>

          {event.description && (
            <p className="whitespace-pre-wrap text-justify">
              {event.description}
            </p>
          )}

          <EventButton
            eventLink={event.eventLink}
            format={event.format}
            status={event.status}
          />
        </section>
      </PageMain>
    </PageContainer>
  )
}
