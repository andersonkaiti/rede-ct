import { BackArrow } from '@components/ui/back-arrow'
import { Button } from '@components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { Separator } from '@components/ui/separator'
import { getMeetingById } from '@http/institutional/meetings/get-meeting-by-id'
import { formatDate } from '@utils/format-date'
import {
  Calendar,
  ChevronUp,
  FileCheckCorner,
  FileText,
  MapPin,
} from 'lucide-react'
import Link from 'next/link'
import { PageContainer, PageMain } from '../../../_components/page-container'
import { MeetingFormat } from '../_components/meeting-format'
import { MeetingStatus } from '../_components/meeting-status'
import { MeetingButton } from './_components/meeting-button'
import { NotFound } from './_components/not-found'

interface IMeetingDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IMeetingDetailsProps) {
  const { id } = await params

  const meeting = await getMeetingById(id)

  return {
    title: meeting?.title,
  }
}

export default async function MeetingDetails({ params }: IMeetingDetailsProps) {
  const { id } = await params

  const meeting = await getMeetingById(id)

  if (!meeting) {
    return <NotFound />
  }

  const formattedDate = meeting.scheduledAt.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const formattedTime = meeting.scheduledAt.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <PageContainer>
      <BackArrow href="/quem-somos/reunioes-e-atas" />

      <header className="space-y-8">
        <h1 className="font-bold text-5xl tracking-tight">{meeting.title}</h1>

        <time className="flex items-center gap-x-1 text-muted-foreground text-sm">
          Última atualização em {formatDate(String(meeting.updatedAt))}
        </time>
      </header>

      <PageMain className="space-y-7">
        <header className="flex gap-2">
          <MeetingFormat format={meeting.format} />

          <MeetingStatus status={meeting.status} />
        </header>

        {meeting.location && (
          <div className="space-y-2 text-sm">
            <span className="flex items-center gap-x-2">
              <MapPin className="size-4" /> Local: {meeting.location}
            </span>
            <span className="flex items-center gap-x-2">
              <Calendar className="size-4" /> Data: {formattedDate} às{' '}
              {formattedTime}
            </span>
          </div>
        )}

        {meeting.agenda && (
          <section className="space-y-2">
            <h3 className="flex items-center gap-2 font-bold">
              <FileText className="size-4" />
              Pauta
            </h3>
            <p className="whitespace-pre-wrap text-justify">{meeting.agenda}</p>
          </section>
        )}

        <Separator />

        {meeting.minutes && (
          <Collapsible>
            <CollapsibleTrigger className="group flex w-full cursor-pointer items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCheckCorner className="size-4" />
                <span>Ata disponível</span>
              </div>
              <ChevronUp className="size-4 transition-transform group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-8 py-4">
              <div className="space-y-2">
                <p>{meeting.minutes.title}</p>

                <p>
                  Publicada em {formatDate(String(meeting.minutes.publishedAt))}
                </p>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link
                  href={meeting.minutes.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText />
                  Baixar Ata
                </Link>
              </Button>
            </CollapsibleContent>
          </Collapsible>
        )}

        {meeting.meetingLink && (
          <MeetingButton meetingLink={meeting.meetingLink} />
        )}
      </PageMain>
    </PageContainer>
  )
}
