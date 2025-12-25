import { deleteInternationalScientificCongressPartner } from '@http/congress/international-scientific/partner/delete-international-scientific-congress-partner'
import { getInternationalScientificCongressPartnerByCongressId } from '@http/congress/international-scientific/partner/get-international-scientific-congress-partner-by-congress-id'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useCongressPartners() {
  const queryClient = useQueryClient()
  const { congressId } = useParams<{
    congressId: string
  }>()

  const [{ page, limit, filtro: filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = [
    'congress-partners',
    congressId,
    page,
    limit,
    filter,
    orderBy,
  ]

  const result = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getInternationalScientificCongressPartnerByCongressId({
        id: congressId,
        page,
        limit,
        filter,
        orderBy,
      }),
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
    handleRemovePartner,
    ...result,
  }
}
