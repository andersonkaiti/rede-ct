import type { ColumnDef } from '@tanstack/react-table'
import { ActionsRow } from './actions-row'

interface IRegionalCongress {
  id: string
  title: string
  edition: number
  startDate: string
  endDate: string
  description: string | null
  location: string | null
  congressLink: string | null
  noticeUrl: string | null
  scheduleUrl: string | null
  programUrl: string | null
  adminReportUrl: string | null
  proceedingsUrl: string | null
  createdAt: string
  updatedAt: string
  regionalCongressPartners: object[]
  regionalCongressGalleryItems: object[]
}

const NAME_MAX_LENGTH = 40
const LOCATION_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const regionalCongressesTableColumns: ColumnDef<IRegionalCongress>[] = [
  {
    id: 'title',
    header: 'Nome',
    cell: ({
      row: {
        original: { title },
      },
    }) =>
      title.length > NAME_MAX_LENGTH
        ? `${title.slice(0, NAME_MAX_LENGTH)}${ELLIPSIS}`
        : title,
  },
  {
    id: 'edition',
    header: 'Edição',
    cell: ({
      row: {
        original: { edition },
      },
    }) => edition,
  },
  {
    id: 'startDate',
    header: 'Início',
    cell: ({
      row: {
        original: { startDate },
      },
    }) =>
      new Date(startDate).toLocaleDateString('pt-BR', {
        dateStyle: 'short',
      }),
  },
  {
    id: 'endDate',
    header: 'Fim',
    cell: ({
      row: {
        original: { endDate },
      },
    }) =>
      new Date(endDate).toLocaleDateString('pt-BR', {
        dateStyle: 'short',
      }),
  },
  {
    id: 'location',
    header: 'Local',
    cell: ({
      row: {
        original: { location },
      },
    }) =>
      location
        ? location.length > LOCATION_MAX_LENGTH
          ? `${location.slice(0, LOCATION_MAX_LENGTH)}${ELLIPSIS}`
          : location
        : '-',
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
