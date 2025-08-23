import { Button } from '@components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
import { Trash } from 'lucide-react'
import type { ITeamMember } from 'types/team'
import type { IUser } from 'types/user'

export const teamMembersTableColumns: ColumnDef<ITeamMember>[] = [
  {
    id: 'name',
    header: 'Nome',
    cell: ({
      row: {
        original: { user },
      },
    }) => {
      const { first_name, last_name } = user as IUser

      return `${first_name} ${last_name || ''}`
    },
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
        onClick={() => meta?.handleRemove?.(original)}
        type="button"
        variant="ghost"
      >
        Remover
        <Trash />
      </Button>
    ),
  },
]
