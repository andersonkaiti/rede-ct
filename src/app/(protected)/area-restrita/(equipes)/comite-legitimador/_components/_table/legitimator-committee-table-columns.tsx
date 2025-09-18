import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import type { IUser } from 'types/user'
import { ActionsRow } from '../../../../_components/actions-row'
import { UpdateMemberForm } from '../update-member/update-member-form'

export interface ILegitimatorCommitteeTeamMember {
  role: string
  id: string
  createdAt: string
  updatedAt: string
  description: string
  user: IUser
}

export interface ILegitimatorCommittee {
  id: string
  name: string
  type: string
  createdAt: string
  updatedAt: string
  members: ILegitimatorCommitteeTeamMember[]
}

export const legitimatorCommitteeTableColumns: ColumnDef<ILegitimatorCommitteeTeamMember>[] =
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
      }) => {
        return name
      },
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
      id: 'created_at',
      header: 'Criado em',
      cell: ({
        row: {
          original: { createdAt },
        },
      }) => formatDate(createdAt),
    },
    {
      id: 'updated_at',
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
