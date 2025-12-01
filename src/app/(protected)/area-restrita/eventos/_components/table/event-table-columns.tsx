import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from './actions-row'

interface IEvent {
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

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

const STATUS_LABELS = {
  PENDING: 'Pendente',
  CANCELLED: 'Cancelado',
  FINISHED: 'Finalizado',
}

const FORMAT_LABELS = {
  ONLINE: 'Online',
  IN_PERSON: 'Presencial',
}

export const eventTableColumns: ColumnDef<IEvent>[] = [
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
    id: 'status',
    header: 'Status',
    cell: ({
      row: {
        original: { status },
      },
    }) => STATUS_LABELS[status],
  },
  {
    id: 'format',
    header: 'Formato',
    cell: ({
      row: {
        original: { format },
      },
    }) => FORMAT_LABELS[format],
  },
  {
    id: 'startDate',
    header: 'Data de Início',
    cell: ({
      row: {
        original: { startDate },
      },
    }) => formatDate(startDate),
  },
  {
    id: 'endDate',
    header: 'Data de Término',
    cell: ({
      row: {
        original: { endDate },
      },
    }) => formatDate(endDate),
  },
  {
    id: 'createdAt',
    header: 'Criado em',
    cell: ({
      row: {
        original: { createdAt },
      },
    }) => formatDate(createdAt),
  },
  {
    id: 'updatedAt',
    header: 'Atualizado em',
    cell: ({
      row: {
        original: { updatedAt },
      },
    }) => formatDate(updatedAt),
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
