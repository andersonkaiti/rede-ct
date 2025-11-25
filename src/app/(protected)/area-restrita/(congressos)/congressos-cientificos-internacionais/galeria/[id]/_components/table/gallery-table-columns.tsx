import { Button } from '@components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
import Link from 'next/link'
import { ActionsRow } from './actions-row'

interface IGalleryImage {
  id: string
  imageUrl: string
  caption?: string | null
  congressId: string
}

const CAPTION_MAX_LENGTH = 50
const ELLIPSIS = '...'

export const galleryTableColumns: ColumnDef<IGalleryImage>[] = [
  {
    id: 'imageUrl',
    header: 'URL da Imagem',
    cell: ({
      row: {
        original: { imageUrl },
      },
    }) => (
      <Button asChild variant="ghost">
        <Link href={imageUrl} target="_blank" rel="noopener noreferrer">
          Imagem
        </Link>
      </Button>
    ),
  },
  {
    id: 'caption',
    header: 'Legenda',
    cell: ({
      row: {
        original: { caption },
      },
    }) =>
      caption
        ? caption.length > CAPTION_MAX_LENGTH
          ? `${caption.slice(0, CAPTION_MAX_LENGTH)}${ELLIPSIS}`
          : caption
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
