import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { ArrowDown, ArrowUp, Ellipsis } from 'lucide-react'

interface IActionsRowProps {
  role: 'ADMIN' | 'USER'
  handlePromote: () => void
  handleDemote: () => void
}

export function ActionsRow({
  role,
  handlePromote,
  handleDemote,
}: IActionsRowProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Ellipsis className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {role === 'USER' && (
          <DropdownMenuItem asChild>
            <Button
              className="flex w-full justify-between text-xs"
              onClick={handlePromote}
              variant="ghost"
            >
              Promover para Admin
              <ArrowUp className="text-foreground" />
            </Button>
          </DropdownMenuItem>
        )}
        {role === 'ADMIN' && (
          <DropdownMenuItem asChild>
            <Button
              className="flex w-full justify-between text-xs"
              onClick={handleDemote}
              variant="ghost"
            >
              Rebaixar para Usuário
              <ArrowDown className="text-foreground" />
            </Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
