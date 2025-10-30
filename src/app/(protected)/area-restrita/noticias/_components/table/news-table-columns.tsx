import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import type { INews } from 'types/news'

import { ActionsRow } from './actions-row'

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const newsTableColumns: ColumnDef<INews>[] = [
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
        data={original}
        handleRemove={() => meta?.handleRemove?.(original.id)}
      />
    ),
  },
]
