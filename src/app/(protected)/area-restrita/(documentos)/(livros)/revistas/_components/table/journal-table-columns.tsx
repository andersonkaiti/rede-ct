import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from './actions-row'

interface IScientificJournal {
  id: string
  name: string
  issn: string
  description: string
  journalUrl: string
  logoUrl: string | null
  directors: string | null
  editorialBoard: string | null
  createdAt: string
  updatedAt: string
}

const NAME_MAX_LENGTH = 30
const DESCRIPTION_MAX_LENGTH = 40
const DIRECTORS_MAX_LENGTH = 30
const EDITORIAL_BOARD_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const scientificJournalTableColumns: ColumnDef<IScientificJournal>[] = [
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
    id: 'issn',
    header: 'ISSN',
    cell: ({
      row: {
        original: { issn },
      },
    }) => issn,
  },
  {
    id: 'description',
    header: 'Descrição',
    cell: ({
      row: {
        original: { description },
      },
    }) =>
      description.length > DESCRIPTION_MAX_LENGTH
        ? `${description.slice(0, DESCRIPTION_MAX_LENGTH)}${ELLIPSIS}`
        : description,
  },
  {
    id: 'directors',
    header: 'Diretores',
    cell: ({
      row: {
        original: { directors },
      },
    }) => {
      if (!directors) return '-'
      return directors.length > DIRECTORS_MAX_LENGTH
        ? `${directors.slice(0, DIRECTORS_MAX_LENGTH)}${ELLIPSIS}`
        : directors
    },
  },
  {
    id: 'editorialBoard',
    header: 'Conselho Editorial',
    cell: ({
      row: {
        original: { editorialBoard },
      },
    }) => {
      if (!editorialBoard) return '-'
      return editorialBoard.length > EDITORIAL_BOARD_MAX_LENGTH
        ? `${editorialBoard.slice(0, EDITORIAL_BOARD_MAX_LENGTH)}${ELLIPSIS}`
        : editorialBoard
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
