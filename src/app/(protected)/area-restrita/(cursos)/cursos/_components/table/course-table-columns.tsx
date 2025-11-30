import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from './actions-row'

interface ICourse {
  id: string
  title: string
  imageUrl: string | null
  coordinator: {
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
  email: string
  scheduledAt: string
  location: string
  registrationLink: string | null
  description: string | null
  createdAt: string
  updatedAt: string
  instructors?: {
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
  }[]
}

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const courseTableColumns: ColumnDef<ICourse>[] = [
  {
    id: 'title',
    header: 'Título',
    cell: ({
      row: {
        original: { title },
      },
    }) =>
      title.length > TITLE_MAX_LENGTH
        ? `${title.slice(0, TITLE_MAX_LENGTH)}${ELLIPSIS}`
        : title,
  },
  {
    id: 'coordinator',
    header: 'Coordenador',
    cell: ({
      row: {
        original: { coordinator },
      },
    }) => coordinator.name,
  },
  {
    id: 'location',
    header: 'Localização',
    cell: ({
      row: {
        original: { location },
      },
    }) => location,
  },
  {
    id: 'scheduledAt',
    header: 'Data Agendada',
    cell: ({
      row: {
        original: { scheduledAt },
      },
    }) => formatDate(scheduledAt),
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
