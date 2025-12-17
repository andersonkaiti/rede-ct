import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { EditIcon, Ellipsis } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { DeleteDialog } from '../../../../../../_components/delete-dialog'

interface IActionsRowProps {
  id: string
  handleRemove: () => void
}

export function ActionsRow({ id, handleRemove }: IActionsRowProps) {
  const { congressId } = useParams<{ congressId: string }>()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Ellipsis className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild className="p-0">
          <Link
            href={`/area-restrita/congressos-cientificos-internacionais/parceiros/${congressId}/editar/${id}`}
          >
            <Button
              className="flex w-full justify-between text-xs"
              variant="ghost"
            >
              Editar
              <EditIcon className="text-foreground" />
            </Button>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <DeleteDialog handleRemove={handleRemove} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
