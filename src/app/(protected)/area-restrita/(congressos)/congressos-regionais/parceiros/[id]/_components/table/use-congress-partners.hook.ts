import { deleteRegionalCongressPartner } from '@http/congress/regional/partner/delete-regional-congress-partner'
import { getRegionalCongressPartnerByCongressId } from '@http/congress/regional/partner/get-regional-congress-partner-by-congress-id'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 10

export function useCongressPartners(congressId: string) {
  const queryClient = useQueryClient()

  const [{ page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['regional-congress-partners', congressId, page, limit]

  const { isLoading, ...rest } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getRegionalCongressPartnerByCongressId({
        id: congressId,
        page: Number(page),
        limit: Number(limit),
      }),
    staleTime: 0,
  })

  async function handleRemovePartner(id: string) {
    try {
      await deleteRegionalCongressPartner(id)

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
