import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from '../../../../_components/actions-row'
import { UpdateMemberForm } from '../update-member/update-member-form'

interface IReferenceCenterTeamMember {
  id: string
  role: string
  description: string | null
  createdAt: Date
  updatedAt: Date
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
    role: 'ADMIN' | 'USER'
  }
}

const NAME_MAX_LENGTH = 30
const EMAIL_MAX_LENGTH = 30
const ROLE_MAX_LENGTH = 25
const DESCRIPTION_MAX_LENGTH = 40
const ELLIPSIS = '...'

export const referenceCenterTeamTableColumns: ColumnDef<IReferenceCenterTeamMember>[] =
  [
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
      id: 'description',
      header: 'Descrição',
      cell: ({
        row: {
          original: { description },
        },
      }) => {
        if (!description) return '-'
        return description.length > DESCRIPTION_MAX_LENGTH
          ? `${description.slice(0, DESCRIPTION_MAX_LENGTH)}${ELLIPSIS}`
          : description
      },
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
