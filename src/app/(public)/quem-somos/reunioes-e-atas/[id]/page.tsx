import { BackArrow } from '@components/ui/back-arrow'
import { Separator } from '@components/ui/separator'
import { getMeetingById } from '@http/institutional/meetings/get-meeting-by-id'
import { formatDate } from '@utils/format-date'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'
import { MeetingFormat } from '../_components/meeting-format'
import { MeetingStatus } from '../_components/meeting-status'
import { MeetingButton } from './_components/meeting-button'
import { MeetingMinute } from './_components/meeting-minute'
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

  const formattedDate = format(
    meeting.scheduledAt,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  return (
    <PageContainer>
      <BackArrow href="/quem-somos/reunioes-e-atas" />

      <PageHeader className="flex-col items-start gap-8">
        <h1 className="font-bold text-5xl tracking-tight">{meeting.title}</h1>

        <time className="flex items-center gap-x-1 text-muted-foreground text-sm">
          Última atualização em {formatDate(String(meeting.updatedAt))}
        </time>

        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full gap-4">
            <MeetingFormat format={meeting.format} />

            <MeetingStatus status={meeting.status} />
          </div>

          <Separator />
        </div>
      </PageHeader>

      <PageMain className="space-y-7">
        {meeting.location && (
          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            <div className="space-y-1">
              <h2 className="text-muted-foreground">Local</h2>
              <p>{meeting.location}</p>
            </div>

            <div className="space-y-1">
              <h2 className="text-muted-foreground">Data</h2>
              <p>{formattedDate}</p>
            </div>
          </div>
        )}

        {meeting.minutes && <MeetingMinute meeting={meeting} />}

        {meeting.agenda && (
          <div className="space-y-1 text-sm">
            <h2 className="text-muted-foreground">Agenda</h2>
            <p className="whitespace-pre-wrap text-justify text-sm">
              {meeting.agenda}
            </p>
          </div>
        )}

        {meeting.meetingLink && (
          <MeetingButton meetingLink={meeting.meetingLink} />
        )}
      </PageMain>
    </PageContainer>
  )
}
