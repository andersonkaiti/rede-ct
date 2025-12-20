import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import { ActionsRow } from './actions-row'

interface IPostGraduateProgram {
  id: string
  title: string
  imageUrl: string | null
  description: string | null
  startDate: Date
  endDate: Date
  contact: string
  registrationLink: string | null
  createdAt: Date
  updatedAt: Date
}

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const postGraduateProgramTableColumns: ColumnDef<IPostGraduateProgram>[] =
  [
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
      id: 'contact',
      header: 'Contato',
      cell: ({
        row: {
          original: { contact },
        },
      }) => contact,
    },
    {
      id: 'startDate',
      header: 'Data de Início',
      cell: ({
        row: {
          original: { startDate },
        },
      }) => formatDate(startDate),
    },
    {
      id: 'endDate',
      header: 'Data de Término',
      cell: ({
        row: {
          original: { endDate },
        },
      }) => formatDate(endDate),
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
