'use client'

import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'
import { MeetingFormat } from './meeting-format'
import { MeetingStatus } from './meeting-status'

interface IMeetingCardProps {
  meeting: {
    id: string
    title: string
    scheduledAt: Date
    format: 'ONLINE' | 'IN_PERSON'
    agenda: string
    meetingLink?: string | null
    location?: string | null
    status: 'PENDING' | 'CANCELLED' | 'FINISHED'
    createdAt: Date
    updatedAt: Date
    minutes: {
      id: string
      title: string
      publishedAt: string
      documentUrl: string
      meetingId: string
      createdAt: Date
      updatedAt: Date
    } | null
  }
}

export function MeetingCard({ meeting }: IMeetingCardProps) {
  const formattedScheduledAt = format(
    meeting.scheduledAt,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-2 font-semibold text-foreground text-xl">
          {meeting.title}
        </CardTitle>

        <div className="mt-4 flex flex-wrap gap-2">
          <MeetingStatus status={meeting.status} />

          <MeetingFormat format={meeting.format} />
        </div>
      </CardHeader>

      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1 text-sm">
          <h2 className="text-muted-foreground">Data e Horário</h2>
          <p className="whitespace-pre-wrap text-justify text-sm">
            {formattedScheduledAt}
          </p>
        </div>

        {meeting.location && (
          <div className="space-y-1 text-sm">
            <h2 className="text-muted-foreground">Local</h2>
            <p className="whitespace-pre-wrap text-justify text-sm">
              {meeting.location}
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="mt-auto">
        <Button className="flex-1" asChild variant="outline">
          <Link href={`/quem-somos/reunioes-e-atas/${meeting.id}`}>
            Ver mais detalhes
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
