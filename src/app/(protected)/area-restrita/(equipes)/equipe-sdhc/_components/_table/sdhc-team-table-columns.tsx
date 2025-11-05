import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from '../../../../_components/actions-row'
import { UpdateMemberForm } from '../update-member/update-member-form'

interface ISDHCTeamMemberUser {
  id: string
  name: string
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
  emailAddress: string
  orcid: string | null
  phone: string | null
  lattesUrl: string | null
  role: 'ADMIN' | 'USER'
}

interface ISDHCTeamMember {
  id: string
  role: string
  description: string | null
  createdAt: string
  updatedAt: string
  userId: string
  user: ISDHCTeamMemberUser
}

export const sdhcTeamTableColumns: ColumnDef<ISDHCTeamMember>[] = [
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
    id: 'description',
    header: 'Descrição',
    cell: ({
      row: {
        original: { description },
      },
    }) => description,
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
      row: {
        original: { id },
      },
      table: {
        options: { meta },
      },
    }) => (
      <ActionsRow
        form={UpdateMemberForm}
        handleRemove={() => meta?.handleRemove?.(id)}
        memberId={id}
      />
    ),
  },
]
