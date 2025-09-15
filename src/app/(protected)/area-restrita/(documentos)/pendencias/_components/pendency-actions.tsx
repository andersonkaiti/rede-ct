import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { useQueryClient } from '@tanstack/react-query'
import { Ellipsis } from 'lucide-react'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'
import { toast } from 'sonner'
import { DeleteDialog } from '../../../_components/delete-dialog'
import { handleRemovePendencyAction } from '../actions'
import { UpdatePendencyButton } from '../cadastradas/_components/update-pendency/update-pendency-button'

interface IPendencyActionsProps {
  id: string
}

export function PendencyActions({ id }: IPendencyActionsProps) {
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('6'))

  const queryClient = useQueryClient()

  async function handleRemove() {
    try {
      await handleRemovePendencyAction(id)

      queryClient.invalidateQueries({
        queryKey: ['user', 'pendencies', filter, orderBy, page, limit],
      })

      toast.success('Pendência deletada com sucesso!')
    } catch {
      toast.error('Erro ao deletar a pendência.')
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent alignOffset={20}>
        <DropdownMenuItem asChild>
          <UpdatePendencyButton pendencyId={id} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteDialog handleRemove={handleRemove} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
