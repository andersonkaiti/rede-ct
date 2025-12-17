import { deleteInternationalScientificCongressPartner } from '@http/congress/international-scientific/partner/delete-international-scientific-congress-partner'
import { getInternationalScientificCongressPartnerByCongressId } from '@http/congress/international-scientific/partner/get-international-scientific-congress-partner-by-congress-id'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function useCongressPartners() {
  const queryClient = useQueryClient()
  const { congressId } = useParams<{
    congressId: string
  }>()

  const [{ page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['congress-partners', congressId, page, limit]

  const { isLoading, ...rest } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getInternationalScientificCongressPartnerByCongressId({
        id: congressId,
        page: Number(page),
        limit: Number(limit),
      }),
    staleTime: 0,
  })

  async function handleRemovePartner(id: string) {
    try {
      await deleteInternationalScientificCongressPartner(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Parceiro removido com sucesso!')
    } catch {
      toast.error('Erro ao remover parceiro.')
    }
  }

  return {
    isLoading,
    handleRemovePartner,
    page,
    limit,
    ...rest,
  }
}
