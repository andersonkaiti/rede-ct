import type { ColumnDef } from '@tanstack/react-table'
import type { IResearcher } from 'types/researcher'
import { SENIORITY_LABEL_MAP } from '../../_constants/seniority'
import { ActionsRow } from './actions-row'

export const researchersTableColumns: ColumnDef<IResearcher>[] = [
  {
    id: 'registrationNumber',
    header: 'Matrícula',
    cell: ({
      row: {
        original: { registrationNumber },
      },
    }) => registrationNumber,
  },
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
    id: 'seniority',
    header: 'Senioridade',
    cell: ({
      row: {
        original: { seniority },
      },
    }) => SENIORITY_LABEL_MAP[seniority],
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
