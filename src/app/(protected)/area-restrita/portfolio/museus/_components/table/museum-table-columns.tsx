import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from './actions-row'

interface IMuseum {
  id: string
  logoUrl: string | null
  name: string
  city: string | null
  state: string | null
  country: string | null
  description: string | null
  website: string | null
  email: string | null
  phone: string | null
  address: string | null
  functioning: string | null
  createdAt: string
  updatedAt: string
}

const NAME_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const museumTableColumns: ColumnDef<IMuseum>[] = [
  {
    id: 'name',
    header: 'Nome',
    cell: ({
      row: {
        original: { name },
      },
    }) =>
      name.length > NAME_MAX_LENGTH
        ? `${name.slice(0, NAME_MAX_LENGTH)}${ELLIPSIS}`
        : name,
  },
  {
    id: 'city',
    header: 'Cidade',
    cell: ({
      row: {
        original: { city },
      },
    }) => city || '-',
  },
  {
    id: 'state',
    header: 'Estado',
    cell: ({
      row: {
        original: { state },
      },
    }) => state || '-',
  },
  {
    id: 'country',
    header: 'País',
    cell: ({
      row: {
        original: { country },
      },
    }) => country || '-',
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
