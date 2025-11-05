import { Button } from '@components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
import { Trash } from 'lucide-react'

interface ITeamMember {
  id: string
  role: string
  userId: string
  user: {
    name: string
    id: string
    role: 'ADMIN' | 'USER'
    createdAt: string
    updatedAt: string
    avatarUrl: string | null
    emailAddress: string
    orcid: string | null
    phone: string | null
    lattesUrl: string | null
  }
}

export const teamMembersTableColumns: ColumnDef<ITeamMember>[] = [
  {
    id: 'name',
    header: 'Nome',
    cell: ({
      row: {
        original: {
          user: { name },
        },
      },
    }) => name,
  },
  {
    id: 'email',
    header: 'E-mail',
    cell: ({
      row: {
        original: {
          user: { emailAddress },
        },
      },
    }) => emailAddress,
  },
  {
    id: 'role',
    header: 'Cargo',
    cell: ({
      row: {
        original: { role },
      },
    }) => role,
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
      <Button
        className="cursor-pointer"
        onClick={() => {
          original.id ? meta?.handleRemove?.(original.id) : undefined
        }}
        type="button"
        variant="ghost"
      >
        Remover
        <Trash />
      </Button>
    ),
  },
]
