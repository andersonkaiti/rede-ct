import type { ColumnDef } from '@tanstack/react-table'
import type { IInMemoriam } from 'types/in-memoriam'
import { ROLE_LABEL_MAP } from '../../_constants/role'
import { ActionsRow } from './actions-row'

export const inMemoriamTableColumns: ColumnDef<IInMemoriam>[] = [
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
    id: 'role',
    header: 'Papel',
    cell: ({
      row: {
        original: { role },
      },
    }) => ROLE_LABEL_MAP[role],
  },
  {
    id: 'birthDate',
    header: 'Nascimento',
    cell: ({
      row: {
        original: { birthDate },
      },
    }) =>
      birthDate ? (
        new Date(birthDate).toLocaleDateString('pt-BR')
      ) : (
        <span className="text-muted-foreground text-xs">-</span>
      ),
  },
  {
    id: 'deathDate',
    header: 'Falecimento',
    cell: ({
      row: {
        original: { deathDate },
      },
    }) =>
      deathDate ? (
        new Date(deathDate).toLocaleDateString('pt-BR')
      ) : (
        <span className="text-muted-foreground text-xs">-</span>
      ),
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
