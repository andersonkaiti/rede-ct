import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from './actions-row'

interface IBookVolume {
  id: string
  volumeNumber: number
  year: number
  title: string
  author: {
    id: string
    name: string
    emailAddress: string
    avatarUrl: string | null
    orcid: string | null
    lattesUrl: string | null
    role: string
  }
  accessUrl: string | null
  coverImageUrl: string | null
  catalogSheetUrl: string | null
  description: string | null
  createdAt: Date
  updatedAt: Date
}

const TITLE_MAX_LENGTH = 40
const AUTHOR_MAX_LENGTH = 30
const DESCRIPTION_MAX_LENGTH = 50
const ELLIPSIS = '...'

export const bookVolumeTableColumns: ColumnDef<IBookVolume>[] = [
  {
    id: 'volumeNumber',
    header: 'Volume',
    cell: ({
      row: {
        original: { volumeNumber },
      },
    }) => `Vol. ${volumeNumber}`,
  },
  {
    id: 'year',
    header: 'Ano',
    cell: ({
      row: {
        original: { year },
      },
    }) => year,
  },
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
    id: 'author',
    header: 'Autor',
    cell: ({
      row: {
        original: { author },
      },
    }) =>
      author.name.length > AUTHOR_MAX_LENGTH
        ? `${author.name.slice(0, AUTHOR_MAX_LENGTH)}${ELLIPSIS}`
        : author.name,
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
