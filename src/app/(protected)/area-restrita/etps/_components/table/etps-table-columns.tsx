import type { etpSchema } from '@http/etps/get-etps'
import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import type z from 'zod'
import { ActionsRow } from './actions-row'

interface IETP extends z.infer<typeof etpSchema> {}

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

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
    }) => {
      const titleText = title || '-'
      return titleText.length > TITLE_MAX_LENGTH
        ? `${titleText.slice(0, TITLE_MAX_LENGTH)}${ELLIPSIS}`
        : titleText
    },
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
