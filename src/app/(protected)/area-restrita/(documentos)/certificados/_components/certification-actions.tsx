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
import { handleRemoveCertificationAction } from '../actions'
import { UpdateCertificationButton } from '../cadastrados/_components/update-certification/update-certification-button'

interface ICertificationActionsProps {
  id: string
}

export function CertificationActions({ id }: ICertificationActionsProps) {
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
      await handleRemoveCertificationAction(id)

      queryClient.invalidateQueries({
        queryKey: ['certifications', filter, orderBy, page, limit],
      })

      toast.success('Certificado deletado com sucesso!')
    } catch {
      toast.error('Erro ao deletar o certificado.')
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent alignOffset={20}>
        <DropdownMenuItem asChild>
          <UpdateCertificationButton id={id} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteDialog handleRemove={handleRemove} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
