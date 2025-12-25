import type { ColumnDef } from '@tanstack/react-table'
import {
  FORMAT_LABEL_MAP,
  STATUS_ICON_MAP,
  STATUS_LABEL_MAP,
} from '../contants'
import { ActionsRow } from './actions-row'

export interface IInternationalScientificCongress {
  id: string
  title: string
  edition: number
  startDate: Date
  endDate: Date
  description: string | null
  location: string | null
  congressLink: string | null
  noticeUrl: string | null
  scheduleUrl: string | null
  programUrl: string | null
  adminReportUrl: string | null
  proceedingsUrl: string | null
  createdAt: Date
  updatedAt: Date
  partners: object[]
  galleries: object[]
  format?: 'ONLINE' | 'IN_PERSON'
  status?: 'PENDING' | 'CANCELLED' | 'FINISHED'
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
