import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { deletePendencyById } from '@http/documents/pendencies/delete-pendency'
import { useQueryClient } from '@tanstack/react-query'
import { Ellipsis } from 'lucide-react'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'
import { DeleteDialog } from '../../../_components/delete-dialog'
import { UpdatePendencyButton } from '../cadastradas/_components/update-pendency/update-pendency-button'

interface IPendencyActionsProps {
  id: string
}

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 4

export function PendencyActions({ id }: IPendencyActionsProps) {
  const [{ filtro: filter, orderBy, page, limit, userId }] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
    userId: parseAsString.withDefault(''),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const queryClient = useQueryClient()

  async function handleRemove() {
    try {
      await deletePendencyById(id)

      queryClient.invalidateQueries({
        queryKey: ['user', 'pendencies', filter, orderBy, page, limit, userId],
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
