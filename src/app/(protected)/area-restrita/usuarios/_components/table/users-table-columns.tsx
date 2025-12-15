import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ActionsRow } from './actions-row'

interface IUser {
  avatarUrl: string | null
  createdAt: string
  emailAddress: string
  id: string
  lattesUrl: string | null
  name: string
  orcid: string | null
  phone: string | null
  role: 'ADMIN' | 'USER'
  updatedAt: string
}

const NAME_MAX_LENGTH = 30
const EMAIL_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const usersTableColumns: ColumnDef<IUser>[] = [
  {
    id: 'name',
    header: 'Nome',
    cell: ({
      row: {
        original: { name },
      },
    }) => {
      const nameText = name || '-'
      return nameText.length > NAME_MAX_LENGTH
        ? `${nameText.slice(0, NAME_MAX_LENGTH)}${ELLIPSIS}`
        : nameText
    },
  },
  {
    id: 'emailAddress',
    header: 'E-mail',
    cell: ({
      row: {
        original: { emailAddress },
      },
    }) => {
      const emailText = emailAddress || '-'
      return emailText.length > EMAIL_MAX_LENGTH
        ? `${emailText.slice(0, EMAIL_MAX_LENGTH)}${ELLIPSIS}`
        : emailText
    },
  },
  {
    id: 'role',
    header: 'Perfil',
    cell: ({
      row: {
        original: { role },
      },
    }) => (role === 'ADMIN' ? 'Administrador' : 'Usuário'),
  },
  {
    id: 'createdAt',
    header: 'Criado em',
    cell: ({
      row: {
        original: { createdAt },
      },
    }) => format(createdAt, 'dd/MM/yyyy'),
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
        handlePromote={() => meta?.handlePromote?.(original.id)}
        handleDemote={() => meta?.handleDemote?.(original.id)}
        role={original.role}
      />
    ),
  },
]
