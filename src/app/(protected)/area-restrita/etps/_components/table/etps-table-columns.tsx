import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ActionsRow } from './actions-row'

export interface ETPMemberUser {
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

export interface ETPResearcher {
  id: string
  registrationNumber: string
  mainEtps: string
  formations: string
  degrees: ('DOCTOR' | 'MASTER' | 'BACHELOR' | 'TECHNICAL' | 'POSTGRADUATE')[]
  occupations: string
  seniority: 'SENIOR' | 'RESEARCHER' | 'JUNIOR' | 'HONOR'
  institutions: string
  biography: string
  createdAt: string
  updatedAt: string
  userId: string
  user: ETPMemberUser
}

export interface ETPRoleMember {
  id: string
  etpId: string
  researcherId: string
  researcher: ETPResearcher
}

export type EtpMember = ETPResearcher

export interface IETP {
  id: string
  code: string
  title: string
  description: string | null
  notes: string | null
  createdAt: string
  updatedAt: string
  leader: ETPRoleMember
  deputyLeader: ETPRoleMember
  secretary: ETPRoleMember
  members: EtpMember[]
}

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const etpsTableColumns: ColumnDef<IETP>[] = [
  {
    id: 'code',
    header: 'Código',
    cell: ({
      row: {
        original: { code },
      },
    }) => code,
  },
  {
    id: 'title',
    header: 'Título',
    cell: ({
      row: {
        original: { title },
      },
    }) => {
      const titleText = title || '-'
      return titleText.length > TITLE_MAX_LENGTH
        ? `${titleText.slice(0, TITLE_MAX_LENGTH)}${ELLIPSIS}`
        : titleText
    },
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
    id: 'updatedAt',
    header: 'Atualizado em',
    cell: ({
      row: {
        original: { updatedAt },
      },
    }) => format(updatedAt, 'dd/MM/yyyy'),
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
