import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { CheckCircle, X } from 'lucide-react'
import type { IPartner } from 'types/partner'
import { ActionsRow } from './actions-row'

export const partnersTableColumns: ColumnDef<IPartner>[] = [
  {
    id: 'name',
    header: 'Nome',
    cell: ({ row: { original } }) => original.name || '-',
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
