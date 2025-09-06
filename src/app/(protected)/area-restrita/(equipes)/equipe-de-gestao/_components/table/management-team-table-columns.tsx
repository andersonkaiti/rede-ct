import type { ColumnDef } from '@tanstack/react-table'
import type { ITeam } from 'types/team'

import { ActionsRow } from './actions-row'

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
