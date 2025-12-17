import { Button } from '@components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
import Link from 'next/link'
import { ActionsRow } from './actions-row'

interface ICongressPartner {
  id: string
  name: string
  logoUrl: string
  congressId: string
}

const NAME_MAX_LENGTH = 40
const ELLIPSIS = '...'

export const partnersTableColumns: ColumnDef<ICongressPartner>[] = [
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
    id: 'logoUrl',
    header: 'Logo',
    cell: ({
      row: {
        original: { logoUrl },
      },
    }) => (
      <Button asChild variant="ghost">
        <Link href={logoUrl} target="_blank" rel="noopener noreferrer">
          Ver Logo
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
