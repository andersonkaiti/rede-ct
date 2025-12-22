import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from './actions-row'

interface IRedeCTHighlight {
  id: string
  type: 'PERSON' | 'INSTITUTION'
  user: {
    name: string
    orcid: string | null
    phone: string | null
    lattesUrl: string | null
    id: string
    avatarUrl: string | null
    createdAt: string
    updatedAt: string
    emailAddress: string
    role: 'ADMIN' | 'USER'
  }
  description: string | null
  honorableMention: boolean | null
  honoredAt: Date
  meritUrl: string | null
  createdAt: Date
  updatedAt: Date
}

const NAME_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const redectHighlightTableColumns: ColumnDef<IRedeCTHighlight>[] = [
  {
    id: 'user',
    header: 'Usuário',
    cell: ({
      row: {
        original: { user },
      },
    }) =>
      user.name.length > NAME_MAX_LENGTH
        ? `${user.name.slice(0, NAME_MAX_LENGTH)}${ELLIPSIS}`
        : user.name,
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
