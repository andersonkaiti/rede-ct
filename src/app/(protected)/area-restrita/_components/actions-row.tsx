import { Button } from '@components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { EditIcon, Ellipsis } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { useState } from 'react'
import { DeleteDialog } from './delete-dialog'

interface IActionsRowProps {
  memberId: string
  handleRemove: () => void
  form: React.ComponentType<{
    setIsOpen: (isOpen: boolean) => void
  }>
}

export function ActionsRow({
  memberId,
  handleRemove,
  form: Form,
}: IActionsRowProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [, setMemberId] = useQueryState('memberId')

  function handleOpenChange(open: boolean) {
    setIsOpen(open)

    if (open) {
      setMemberId(memberId)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Ellipsis className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild className="p-0">
          <Dialog onOpenChange={handleOpenChange} open={isOpen}>
            <DialogTrigger asChild>
              <Button
                className="flex w-full justify-between p-3 text-xs"
                size="icon"
                variant="ghost"
              >
                Editar
                <EditIcon className="size-4 text-foreground" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editar</DialogTitle>
              </DialogHeader>

              <Form setIsOpen={setIsOpen} />
            </DialogContent>
          </Dialog>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteDialog handleRemove={handleRemove} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
