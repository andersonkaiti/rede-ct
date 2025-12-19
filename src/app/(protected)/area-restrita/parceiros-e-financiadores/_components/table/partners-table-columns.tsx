import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { CheckCircle, X } from 'lucide-react'
import { ActionsRow } from './actions-row'

interface IPartner {
  name: string
  id: string
  logoUrl: string | null
  websiteUrl: string | null
  description: string | null
  category: string | null
  since: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const NAME_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const partnersTableColumns: ColumnDef<IPartner>[] = [
  {
    id: 'name',
    header: 'Nome',
    cell: ({ row: { original } }) => {
      const name = original.name || '-'
      return name.length > NAME_MAX_LENGTH
        ? `${name.slice(0, NAME_MAX_LENGTH)}${ELLIPSIS}`
        : name
    },
  },
  {
    id: 'isActive',
    header: 'Ativo',
    cell: ({ row: { original } }) =>
      original.isActive ? (
        <span className="flex items-center gap-1 text-green-600">
          <CheckCircle className="size-4" />
          <span className="hidden md:inline">Ativo</span>
        </span>
      ) : (
        <span className="flex items-center gap-1 text-red-600">
          <X className="size-4" />
          <span className="hidden md:inline">Inativo</span>
        </span>
      ),
  },
  {
    id: 'createdAt',
    header: 'Criado em',
    cell: ({ row: { original } }) =>
      original.createdAt
        ? format(new Date(original.createdAt), 'dd/MM/yyyy')
        : '-',
  },
  {
    id: 'updatedAt',
    header: 'Atualizado em',
    cell: ({ row: { original } }) =>
      original.updatedAt
        ? format(new Date(original.updatedAt), 'dd/MM/yyyy')
        : '-',
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
