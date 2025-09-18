import { Button } from '@components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
import { Trash } from 'lucide-react'
import type { ITeamMember } from 'types/team'

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
        onClick={() =>
        {
          console.log(original.id)
          original.id ? meta?.handleRemove?.(original.id) : undefined
        }
        }
        type="button"
        variant="ghost"
      >
        Remover
        <Trash />
      </Button>
    ),
  },
]
