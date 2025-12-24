import type { ColumnDef } from '@tanstack/react-table'
import { SENIORITY_LABEL_MAP } from '../seniority'
import { ActionsRow } from './actions-row'

interface IResearcher {
  id: string
  createdAt: string
  updatedAt: string
  registrationNumber: string
  mainEtps: string | null
  formations: string | null
  degrees: ('DOCTOR' | 'MASTER' | 'BACHELOR' | 'TECHNICAL' | 'POSTGRADUATE')[]
  occupations: string
  seniority: 'SENIOR' | 'RESEARCHER' | 'JUNIOR' | 'HONOR'
  institutions: string
  biography: string | null
  user: {
    id: string
    name: string
    emailAddress: string
    orcid: string | null
    lattesUrl: string | null
    avatarUrl: string | null
    phone: string | null
    createdAt: string
    updatedAt: string
    role: 'ADMIN' | 'USER'
  }
}

const NAME_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const researchersTableColumns: ColumnDef<IResearcher>[] = [
  {
    id: 'registrationNumber',
    header: 'Matrícula',
    cell: ({
      row: {
        original: { registrationNumber },
      },
    }) => registrationNumber,
  },
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
    id: 'seniority',
    header: 'Senioridade',
    cell: ({
      row: {
        original: { seniority },
      },
    }) => SENIORITY_LABEL_MAP[seniority],
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
