import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import type { INews } from 'types/news'

import { ActionsRow } from './actions-row'

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const newTableColumns: ColumnDef<INews>[] = [
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
    id: 'date',
    header: 'Data',
    cell: ({
      row: {
        original: { created_at },
      },
    }) => formatDate(created_at),
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
        data={original}
        handleRemove={() => meta?.handleRemove?.(original)}
      />
    ),
  },
]
