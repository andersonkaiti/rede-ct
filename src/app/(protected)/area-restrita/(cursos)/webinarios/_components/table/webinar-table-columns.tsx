import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'

import { ActionsRow } from './actions-row'

interface IWebinar {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  description: string | null
  scheduledAt: Date
  webinarLink: string | null
}

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const webinarTableColumns: ColumnDef<IWebinar>[] = [
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
    header: 'Data Agendada',
    cell: ({
      row: {
        original: { scheduledAt },
      },
    }) => formatDate(scheduledAt),
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
