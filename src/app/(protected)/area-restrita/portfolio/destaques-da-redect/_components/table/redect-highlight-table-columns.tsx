import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from './actions-row'

interface IRedeCTHighlight {
  id: string
  type: 'PERSON' | 'INSTITUTION'
  name: string
  description: string | null
  honorableMention: string | null
  imageUrl: string | null
  honoredAt: string
  meritUrl: string | null
  createdAt: string
  updatedAt: string
}

const NAME_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const redectHighlightTableColumns: ColumnDef<IRedeCTHighlight>[] = [
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
    id: 'type',
    header: 'Tipo',
    cell: ({
      row: {
        original: { type },
      },
    }) => (type === 'PERSON' ? 'Pessoa' : 'Instituição'),
  },
  {
    id: 'honoredAt',
    header: 'Data da Homenagem',
    cell: ({
      row: {
        original: { honoredAt },
      },
    }) => formatDate(honoredAt),
  },
  {
    id: 'createdAt',
    header: 'Criado em',
    cell: ({
      row: {
        original: { createdAt },
      },
    }) => formatDate(createdAt),
  },
  {
    id: 'updatedAt',
    header: 'Atualizado em',
    cell: ({
      row: {
        original: { updatedAt },
      },
    }) => formatDate(updatedAt),
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
