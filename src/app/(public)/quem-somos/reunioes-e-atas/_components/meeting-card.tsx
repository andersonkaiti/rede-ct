'use client'

import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { Calendar, MapPin } from 'lucide-react'
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

      <CardContent className="flex flex-col gap-2">
        <span className="flex items-center gap-2 text-sm">
          <Calendar className="size-4" />
          {meeting.scheduledAt.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}{' '}
          às{' '}
          {meeting.scheduledAt.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>

        {meeting.location && (
          <span className="flex items-center gap-2 text-sm">
            <MapPin className="size-4" />
            {meeting.location}
          </span>
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
