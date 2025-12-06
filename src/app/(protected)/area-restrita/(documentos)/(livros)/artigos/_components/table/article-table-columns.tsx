import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from './actions-row'

interface IScientificArticle {
  id: string
  title: string
  author: string
  journal: string | null
  volume: string | null
  edition: string | null
  pageStart: number | null
  pageEnd: number | null
  startDate: string
  endDate: string
  city: string | null
  state: string | null
  country: string | null
  publisher: string | null
  description: string | null
  year: number | null
  accessUrl: string | null
  createdAt: string
  updatedAt: string
}

const TITLE_MAX_LENGTH = 40
const AUTHOR_MAX_LENGTH = 30
const JOURNAL_MAX_LENGTH = 30
const PUBLISHER_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const scientificArticleTableColumns: ColumnDef<IScientificArticle>[] = [
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
      author.length > AUTHOR_MAX_LENGTH
        ? `${author.slice(0, AUTHOR_MAX_LENGTH)}${ELLIPSIS}`
        : author,
  },
  {
    id: 'journal',
    header: 'Periódico',
    cell: ({
      row: {
        original: { journal },
      },
    }) => {
      if (!journal) return '-'
      return journal.length > JOURNAL_MAX_LENGTH
        ? `${journal.slice(0, JOURNAL_MAX_LENGTH)}${ELLIPSIS}`
        : journal
    },
  },
  {
    id: 'year',
    header: 'Ano',
    cell: ({
      row: {
        original: { year },
      },
    }) => year || '-',
  },
  {
    id: 'publisher',
    header: 'Editora',
    cell: ({
      row: {
        original: { publisher },
      },
    }) => {
      if (!publisher) return '-'
      return publisher.length > PUBLISHER_MAX_LENGTH
        ? `${publisher.slice(0, PUBLISHER_MAX_LENGTH)}${ELLIPSIS}`
        : publisher
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
