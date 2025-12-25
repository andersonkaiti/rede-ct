import { Button } from '@components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import { STATUS_ICON_MAP, STATUS_LABEL_MAP } from '../constants'
import { ActionsRow } from './actions-row'

export interface IRegiment {
  id: string
  title: string
  version: string
  publishedAt: Date
  documentUrl: string
  status: 'DRAFT' | 'IN_FORCE' | 'REVOKED'
  createdAt: Date
  updatedAt: Date
}

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const regimentsTableColumns: ColumnDef<IRegiment>[] = [
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
    id: 'version',
    header: 'Versão',
    cell: ({
      row: {
        original: { version },
      },
    }) => version,
  },
  {
    id: 'publishedAt',
    header: 'Publicado em',
    cell: ({
      row: {
        original: { publishedAt },
      },
    }) => new Date(publishedAt).toLocaleDateString('pt-BR'),
  },
  {
    id: 'status',
    header: 'Status',
    cell: ({
      row: {
        original: { status },
      },
    }) => {
      const { icon: Icon, color } = STATUS_ICON_MAP[status]
      return (
        <span className="inline-flex items-center gap-2">
          <Icon className={`size-4 ${color}`} />
          <span className={color}>{STATUS_LABEL_MAP[status]}</span>
        </span>
      )
    },
  },
  {
    id: 'documentUrl',
    header: 'Documento',
    cell: ({
      row: {
        original: { documentUrl },
      },
    }) => (
      <Button asChild variant="ghost">
        <Link href={documentUrl} target="_blank" rel="noopener noreferrer">
          <Eye />
          <span>Ver documento</span>
        </Link>
      </Button>
    ),
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
