import type { ColumnDef } from '@tanstack/react-table'
import { ROLE_LABEL_MAP } from '../role'
import { ActionsRow } from './actions-row'

interface IInMemoriam {
  id: string
  name: string
  birthDate: string
  deathDate: string
  biography: string | null
  photoUrl: string | null
  role: 'RESEARCHER' | 'LEADER'
  createdAt: string
  updatedAt: string
}

const NAME_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const inMemoriamTableColumns: ColumnDef<IInMemoriam>[] = [
  {
    id: 'name',
    header: 'Nome',
    cell: ({
      row: {
        original: { name },
      },
    }) =>
      name.length > NAME_MAX_LENGTH
        ? `${name.slice(0, NAME_MAX_LENGTH)}${ELLIPSIS}`
        : name,
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
