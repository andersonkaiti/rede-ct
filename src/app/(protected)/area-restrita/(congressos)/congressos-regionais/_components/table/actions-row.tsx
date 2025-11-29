import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { EditIcon, Ellipsis, Handshake, Image } from 'lucide-react'
import Link from 'next/link'
import { DeleteDialog } from '../../../../_components/delete-dialog'

interface IActionsRowProps {
  id: string
  handleRemove: () => void
}

export function ActionsRow({ id, handleRemove }: IActionsRowProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Ellipsis className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild className="p-0">
          <Link href={`/area-restrita/congressos-regionais/editar/${id}`}>
            <Button
              className="flex w-full justify-between text-xs"
              variant="ghost"
            >
              Editar
              <EditIcon className="text-foreground" />
            </Button>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="p-0">
          <Link href={`/area-restrita/congressos-regionais/galeria/${id}`}>
            <Button
              className="flex w-full justify-between text-xs"
              variant="ghost"
            >
              Galeria
              <Image className="text-foreground" />
            </Button>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="p-0">
          <Link href={`/area-restrita/congressos-regionais/parceiros/${id}`}>
            <Button
              className="flex w-full justify-between text-xs"
              variant="ghost"
            >
              Parceiros
              <Handshake className="text-foreground" />
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
