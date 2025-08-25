import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { EditIcon, Ellipsis } from 'lucide-react'
import Link from 'next/link'
import type { INews } from 'types/news'

import { DeleteDialog } from '../../../_components/delete-dialog'

interface IActionsRowProps {
  data: INews
  handleRemove: () => void
}

export function ActionsRow({ data: news, handleRemove }: IActionsRowProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild className="p-0">
          <Link href={`/area-restrita/noticias/editar/${news.id}`}>
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
