'use client'

import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { Separator } from '@components/ui/separator'
import { cn } from '@utils/cn'
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  FileCheck,
  FileText,
  ListCheck,
  MapPin,
  MonitorPlay,
} from 'lucide-react'
import Link from 'next/link'
import type { JSX } from 'react'
import { useState } from 'react'

type MeetingStatus = 'PENDING' | 'CANCELLED' | 'FINISHED'
type MeetingFormat = 'ONLINE' | 'IN_PERSON'

interface MeetingCardProps {
  meeting: {
    id: string
    title: string
    scheduledAt: string
    format: 'ONLINE' | 'IN_PERSON'
    agenda: string
    meetingLink?: string | null
    location?: string | null
    status: 'PENDING' | 'CANCELLED' | 'FINISHED'
    createdAt: string
    updatedAt: string
    minutes: {
      id: string
      title: string
      publishedAt: string
      documentUrl: string
      meetingId: string
      createdAt: string
      updatedAt: string
    } | null
  }
}

const statusConfig: Record<
  MeetingStatus,
  {
    label: string
    icon: typeof AlertCircle
    badgeClass: string
    ariaLabel: string
  }
> = {
  PENDING: {
    label: 'Agendada',
    icon: AlertCircle,
    badgeClass:
      'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
    ariaLabel: 'Status: Agendada',
  },
  FINISHED: {
    label: 'Finalizada',
    icon: CheckCircle,
    badgeClass:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    ariaLabel: 'Status: Finalizada',
  },
  CANCELLED: {
    label: 'Cancelada',
    icon: AlertCircle,
    badgeClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    ariaLabel: 'Status: Cancelada',
  },
}

const formatConfig: Record<
  MeetingFormat,
  { label: string; icon: JSX.Element }
> = {
  ONLINE: { label: 'Virtual', icon: <MonitorPlay className="size-4" /> },
  IN_PERSON: { label: 'Presencial', icon: <MapPin className="size-4" /> },
}

export function MeetingCard({ meeting }: MeetingCardProps) {
  const statusInfo = statusConfig[meeting.status]
  const formatInfo = formatConfig[meeting.format]
  const scheduledDate = new Date(meeting.scheduledAt)
  const [openAgenda, setOpenAgenda] = useState(false)
  const [openMinutes, setOpenMinutes] = useState(false)

  return (
    <Card className="flex flex-col">
      <CardHeader className="border-border border-b p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 font-semibold text-foreground text-xl">
            {meeting.title}
          </h3>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
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
            {formatInfo.icon}
            {formatInfo.label}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <Collapsible open={openAgenda} onOpenChange={setOpenAgenda}>
          <CollapsibleTrigger asChild>
            <Button
              type="button"
              className="group flex w-full items-center justify-between gap-2"
              variant="ghost"
            >
              <h4 className="flex gap-2 font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                <ListCheck className="size-4" />

                <span>Agenda</span>
              </h4>

              <ChevronDown
                className={cn(
                  'ml-1 size-4 text-muted-foreground transition-transform group-hover:cursor-pointer',
                  openAgenda && 'rotate-180',
                )}
              />
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="w-full p-4 text-justify text-foreground text-sm transition-all data-[state=open]:animate-fadeIn">
            {meeting.agenda}
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {meeting.minutes && (
          <>
            <Collapsible open={openMinutes} onOpenChange={setOpenMinutes}>
              <CollapsibleTrigger asChild>
                <Button
                  type="button"
                  className="group flex w-full items-center justify-between gap-2"
                  variant="ghost"
                >
                  <h4 className="flex gap-2 font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                    <FileCheck className="size-4" />

                    <span>Ata</span>
                  </h4>

                  <ChevronDown
                    className={cn(
                      'ml-1 size-4 text-muted-foreground transition-transform group-hover:cursor-pointer',
                      openMinutes && 'rotate-180',
                    )}
                  />
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-foreground text-sm">
                      {meeting.minutes.title}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                      Publicado em
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4 text-muted-foreground" />
                      <span className="text-foreground text-sm">
                        {new Date(
                          meeting.minutes.publishedAt,
                        ).toLocaleDateString('pt-BR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>

                  <Button asChild>
                    <Link
                      href={meeting.minutes.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="size-4" />

                      <span>Visualizar documento</span>
                    </Link>
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Separator />
          </>
        )}

        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar className="size-4" />
            <span>
              {scheduledDate.toLocaleDateString('pt-BR', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="size-4" />
            <span>
              {scheduledDate.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>

          {meeting.location && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="size-4" />
              <span className="text-foreground">{meeting.location}</span>
            </div>
          )}
        </div>
      </CardContent>

      {meeting.meetingLink && (
        <CardFooter className="mt-auto p-6 pt-0">
          <Button
            size="lg"
            className="flex-1 py-2 font-medium text-base"
            asChild
          >
            <Link
              href={meeting.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MonitorPlay />
              Participar
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
