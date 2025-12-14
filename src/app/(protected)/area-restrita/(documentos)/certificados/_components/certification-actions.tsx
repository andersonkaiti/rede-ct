import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { deleteCertificationById } from '@http/documents/certifications/delete-certification'
import { useQueryClient } from '@tanstack/react-query'
import { Ellipsis } from 'lucide-react'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'
import { DeleteDialog } from '../../../_components/delete-dialog'
import { UpdateCertificationButton } from '../cadastrados/_components/update-certification/update-certification-button'

interface ICertificationActionsProps {
  id: string
}

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 6

export function CertificationActions({ id }: ICertificationActionsProps) {
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
      await deleteCertificationById(id)

      queryClient.invalidateQueries({
        queryKey: ['certifications', filter, orderBy, page, limit, userId],
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
