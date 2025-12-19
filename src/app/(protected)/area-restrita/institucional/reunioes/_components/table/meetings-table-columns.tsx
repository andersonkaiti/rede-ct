import type { ColumnDef } from '@tanstack/react-table'
import { Ban, CheckCircle2, Clock } from 'lucide-react'
import { ActionsRow } from './actions-row'

interface IMeeting {
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

const FORMAT_LABEL_MAP: Record<IMeeting['format'], string> = {
  ONLINE: 'Online',
  IN_PERSON: 'Presencial',
}

const STATUS_LABEL_MAP: Record<IMeeting['status'], string> = {
  PENDING: 'Pendente',
  CANCELLED: 'Cancelada',
  FINISHED: 'Finalizada',
}

const STATUS_ICON_MAP: Record<
  IMeeting['status'],
  { icon: React.ElementType; color: string }
> = {
  PENDING: { icon: Clock, color: 'text-yellow-500' },
  CANCELLED: { icon: Ban, color: 'text-destructive' },
  FINISHED: { icon: CheckCircle2, color: 'text-emerald-600' },
}

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const meetingsTableColumns: ColumnDef<IMeeting>[] = [
  {
    id: 'title',
    header: 'Título',
    cell: ({
      row: {
        original: { title },
      },
    }) =>
      title.length > TITLE_MAX_LENGTH
        ? `${title.slice(0, TITLE_MAX_LENGTH)}${ELLIPSIS}`
        : title,
  },
  {
    id: 'scheduledAt',
    header: 'Data',
    cell: ({
      row: {
        original: { scheduledAt },
      },
    }) =>
      new Date(scheduledAt).toLocaleString('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'short',
      }),
  },
  {
    id: 'format',
    header: 'Formato',
    cell: ({
      row: {
        original: { format },
      },
    }) => FORMAT_LABEL_MAP[format],
  },
  {
    id: 'status',
    header: 'Status',
    cell: ({
      row: {
        original: { status },
      },
    }) => {
      const { icon: Icon, color } = STATUS_ICON_MAP[status]
      return (
        <span className="inline-flex items-center gap-2">
          <Icon className={`size-4 ${color}`} />
          <span className={color}>{STATUS_LABEL_MAP[status]}</span>
        </span>
      )
    },
  },
  {
    id: 'actions',
    header: 'Ações',
    cell: ({
      row: { original },
      table: {
        options: { meta },
      },
    }) => (
      <ActionsRow
        handleRemove={() => meta?.handleRemove?.(original.id)}
        id={original.id}
      />
    ),
  },
]
