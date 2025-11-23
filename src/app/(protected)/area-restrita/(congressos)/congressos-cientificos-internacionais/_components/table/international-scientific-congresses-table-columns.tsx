import type { ColumnDef } from '@tanstack/react-table'
import { Ban, CheckCircle2, Clock } from 'lucide-react'
import { ActionsRow } from './actions-row'

interface IInternationalScientificCongress {
  id: string
  title: string
  edition: number
  startDate: string
  endDate: string
  description: string | null
  location: string | null
  congressLink: string | null
  noticeUrl: string | null
  scheduleUrl: string | null
  programUrl: string | null
  adminReportUrl: string | null
  proceedingsUrl: string | null
  createdAt: string
  updatedAt: string
  partners: object[]
  galleries: object[]
  format?: 'ONLINE' | 'IN_PERSON'
  status?: 'PENDING' | 'CANCELLED' | 'FINISHED'
}

const FORMAT_LABEL_MAP: Record<
  NonNullable<IInternationalScientificCongress['format']>,
  string
> = {
  ONLINE: 'Online',
  IN_PERSON: 'Presencial',
}

const STATUS_LABEL_MAP: Record<
  NonNullable<IInternationalScientificCongress['status']>,
  string
> = {
  PENDING: 'Pendente',
  CANCELLED: 'Cancelado',
  FINISHED: 'Finalizado',
}

const STATUS_ICON_MAP: Record<
  NonNullable<IInternationalScientificCongress['status']>,
  { icon: React.ElementType; color: string }
> = {
  PENDING: { icon: Clock, color: 'text-yellow-500' },
  CANCELLED: { icon: Ban, color: 'text-destructive' },
  FINISHED: { icon: CheckCircle2, color: 'text-emerald-600' },
}

const NAME_MAX_LENGTH = 40
const LOCATION_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const internationalScientificCongressesTableColumns: ColumnDef<IInternationalScientificCongress>[] =
  [
    {
      id: 'title',
      header: 'Nome',
      cell: ({
        row: {
          original: { title },
        },
      }) =>
        title.length > NAME_MAX_LENGTH
          ? `${title.slice(0, NAME_MAX_LENGTH)}${ELLIPSIS}`
          : title,
    },
    {
      id: 'edition',
      header: 'Edição',
      cell: ({
        row: {
          original: { edition },
        },
      }) => edition,
    },
    {
      id: 'startDate',
      header: 'Início',
      cell: ({
        row: {
          original: { startDate },
        },
      }) =>
        new Date(startDate).toLocaleDateString('pt-BR', {
          dateStyle: 'short',
        }),
    },
    {
      id: 'endDate',
      header: 'Fim',
      cell: ({
        row: {
          original: { endDate },
        },
      }) =>
        new Date(endDate).toLocaleDateString('pt-BR', {
          dateStyle: 'short',
        }),
    },
    {
      id: 'location',
      header: 'Local',
      cell: ({
        row: {
          original: { location },
        },
      }) =>
        location
          ? location.length > LOCATION_MAX_LENGTH
            ? `${location.slice(0, LOCATION_MAX_LENGTH)}${ELLIPSIS}`
            : location
          : '-',
    },
    {
      id: 'format',
      header: 'Formato',
      cell: ({
        row: {
          original: { format },
        },
      }) => (format ? FORMAT_LABEL_MAP[format] : '-'),
    },
    {
      id: 'status',
      header: 'Status',
      cell: ({
        row: {
          original: { status },
        },
      }) => {
        if (!status) return '-'
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
