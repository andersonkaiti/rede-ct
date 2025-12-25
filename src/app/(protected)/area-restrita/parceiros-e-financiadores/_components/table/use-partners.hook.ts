import { deletePartner } from '@http/partners/delete-partner'
import { getPartners } from '@http/partners/get-partners'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function usePartners() {
  const queryClient = useQueryClient()

  const [{ page, limit, filtro: filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['partners', page, limit, filter, orderBy]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getPartners({
        page,
        limit,
        filter,
        orderBy,
      }),
  })

  async function handleRemovePartner(id: string) {
    try {
      await deletePartner(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Parceiro removido com sucesso!')
    } catch {
      toast.error('Erro ao remover parceiro.')
    }
  }

  return {
    handleRemovePartner,
    ...result,
  }
}
