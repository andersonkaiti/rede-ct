import { Button } from '@components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
import { formatDate } from '@utils/format-date'
import Link from 'next/link'
import { ActionsRow } from '../../../../_components/actions-row'
import { UpdateLawForm } from '../update-law/update-law-form'

export interface ILaw {
  id: string
  title: string
  link: string
  country: string
  createdAt: string
  updatedAt: string
}

const TITLE_MAX_LENGTH = 40
const COUNTRY_MAX_LENGTH = 20
const ELLIPSIS = '...'

export const lawTableColumns: ColumnDef<ILaw>[] = [
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
    id: 'link',
    header: 'Link',
    cell: ({
      row: {
        original: { link },
      },
    }) => (
      <Button asChild variant="ghost">
        <Link href={link} rel="noopener noreferrer" target="_blank">
          Acessar
        </Link>
      </Button>
    ),
  },
  {
    id: 'country',
    header: 'País',
    cell: ({
      row: {
        original: { country },
      },
    }) =>
      country.length > COUNTRY_MAX_LENGTH
        ? `${country.slice(0, COUNTRY_MAX_LENGTH)}${ELLIPSIS}`
        : country,
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
      row: {
        original: { id },
      },
      table: {
        options: { meta },
      },
    }) => (
      <ActionsRow
        form={UpdateLawForm}
        handleRemove={() => meta?.handleRemove?.(id)}
        memberId={id}
      />
    ),
  },
]
