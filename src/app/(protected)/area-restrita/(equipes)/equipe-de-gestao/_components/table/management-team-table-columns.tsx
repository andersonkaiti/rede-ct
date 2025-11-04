import type { ColumnDef } from '@tanstack/react-table'
import { ActionsRow } from './actions-row'

interface ITeam {
  id: string
  name: string
  description: string | null
  createdAt: string
  updatedAt: string
  members: {
    id: string
    role: string
    description: string | null
    createdAt: string
    updatedAt: string
    teamId: string
    userId: string
    user: {
      id: string
      name: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      emailAddress: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      role: string
    }
  }[]
}

export const managementTeamTableColumns: ColumnDef<ITeam>[] = [
  {
    id: 'name',
    header: 'Nome',
    cell: ({
      row: {
        original: { name },
      },
    }) => name,
  },
  {
    id: 'membersQuantity',
    header: 'Quantidade de membros',
    cell: ({
      row: {
        original: { members },
      },
    }) => members.length,
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
