import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { EditIcon, Ellipsis } from 'lucide-react'
import Link from 'next/link'
import type { ITeam } from 'types/team'

import { DeleteDialog } from '@/app/(protected)/area-restrita/_components/delete-dialog'

interface IActionsRowProps {
  data: ITeam
  handleRemove: () => void
}

export function ActionsRow({ data: team, handleRemove }: IActionsRowProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Ellipsis className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild className="p-0">
          <Link href={`/area-restrita/equipe-de-gestao/editar/${team.id}`}>
            <Button
              className="flex w-full cursor-pointer justify-between text-xs"
              variant="ghost"
            >
              Editar
              <EditIcon className="size-4 text-black dark:text-white" />
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
