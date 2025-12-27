import type { ColumnDef } from '@tanstack/react-table'
import { ACCOUNT_TYPE_LABELS } from '../constants'
import { ActionsRow } from './actions-row'

export interface ICheckingAccount {
  id: string
  type: 'EXCLUSIVE_REDECT_USE' | 'EVENTS' | 'COLLOQUIUM'
  balance: number
  balanceInCents: number
  createdAt: Date
  updatedAt: Date
}

export const accountsTableColumns: ColumnDef<ICheckingAccount>[] = [
  {
    id: 'type',
    header: 'Tipo',
    cell: ({
      row: {
        original: { type },
      },
    }) => ACCOUNT_TYPE_LABELS[type],
  },
  {
    id: 'balance',
    header: 'Saldo',
    cell: ({
      row: {
        original: { balance },
      },
    }) =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(balance),
  },
  {
    id: 'updatedAt',
    header: 'Última Atualização',
    cell: ({
      row: {
        original: { updatedAt },
      },
    }) => new Date(updatedAt).toLocaleDateString('pt-BR'),
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
