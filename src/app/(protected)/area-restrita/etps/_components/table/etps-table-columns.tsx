import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import type { IETP } from 'types/etp'
import { ActionsRow } from './actions-row'

export const etpsTableColumns: ColumnDef<IETP>[] = [
  {
    id: 'code',
    header: 'Código',
    cell: ({
      row: {
        original: { code },
      },
    }) => code,
  },
  {
    id: 'title',
    header: 'Título',
    cell: ({
      row: {
        original: { title },
      },
    }) => title || '-',
  },
  {
    id: 'createdAt',
    header: 'Criado em',
    cell: ({
      row: {
        original: { createdAt },
      },
    }) => format(createdAt, 'dd/MM/yyyy'),
  },
  {
    id: 'updatedAt',
    header: 'Atualizado em',
    cell: ({
      row: {
        original: { updatedAt },
      },
    }) => format(updatedAt, 'dd/MM/yyyy'),
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
