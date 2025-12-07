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

const NAME_MAX_LENGTH = 30
const EMAIL_MAX_LENGTH = 30
const ROLE_MAX_LENGTH = 25
const ELLIPSIS = '...'

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
    }) =>
      name.length > NAME_MAX_LENGTH
        ? `${name.slice(0, NAME_MAX_LENGTH)}${ELLIPSIS}`
        : name,
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
    }) =>
      emailAddress.length > EMAIL_MAX_LENGTH
        ? `${emailAddress.slice(0, EMAIL_MAX_LENGTH)}${ELLIPSIS}`
        : emailAddress,
  },
  {
    id: 'role',
    header: 'Cargo',
    cell: ({
      row: {
        original: { role },
      },
    }) =>
      role.length > ROLE_MAX_LENGTH
        ? `${role.slice(0, ROLE_MAX_LENGTH)}${ELLIPSIS}`
        : role,
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
