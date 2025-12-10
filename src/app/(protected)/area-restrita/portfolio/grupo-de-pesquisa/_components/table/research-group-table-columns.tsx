import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from './actions-row'

interface IResearchGroup {
  id: string
  name: string
  acronym: string | null
  description: string | null
  url: string | null
  logoUrl: string | null
  foundedAt: string
  scope: string | null
  email: string | null
  leaderId: string
  deputyLeaderId: string
  createdAt: string
  updatedAt: string
  leader: {
    id: string
    name: string
    emailAddress: string
    avatarUrl: string | null
    createdAt: string
    updatedAt: string
    orcid: string | null
    phone: string | null
    lattesUrl: string | null
    role: 'USER' | 'ADMIN'
  }
  deputyLeader: {
    id: string
    name: string
    emailAddress: string
    avatarUrl: string | null
    createdAt: string
    updatedAt: string
    orcid: string | null
    phone: string | null
    lattesUrl: string | null
    role: 'USER' | 'ADMIN'
  }
}

const NAME_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const researchGroupTableColumns: ColumnDef<IResearchGroup>[] = [
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
    id: 'acronym',
    header: 'Sigla',
    cell: ({
      row: {
        original: { acronym },
      },
    }) => acronym || '-',
  },
  {
    id: 'leader',
    header: 'Líder',
    cell: ({
      row: {
        original: { leader },
      },
    }) => leader.name,
  },
  {
    id: 'foundedAt',
    header: 'Data de Fundação',
    cell: ({
      row: {
        original: { foundedAt },
      },
    }) => formatDate(foundedAt),
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
