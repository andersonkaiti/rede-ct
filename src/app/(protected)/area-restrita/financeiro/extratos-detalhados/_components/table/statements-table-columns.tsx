import { Button } from '@components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import { ActionsRow } from './actions-row'

export interface IFinancialTransactionStatement {
  id: string
  documentUrl: string
  createdAt: Date
  updatedAt: Date
}

export const statementsTableColumns: ColumnDef<IFinancialTransactionStatement>[] =
  [
    {
      id: 'createdAt',
      header: 'Data de Criação',
      cell: ({
        row: {
          original: { createdAt },
        },
      }) => new Date(createdAt).toLocaleDateString('pt-BR'),
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
          <Link href={documentUrl} rel="noopener noreferrer" target="_blank">
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
