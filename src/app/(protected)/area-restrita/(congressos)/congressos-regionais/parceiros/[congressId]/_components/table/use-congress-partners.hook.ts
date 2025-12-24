import { deleteRegionalCongressPartner } from '@http/congress/regional/partner/delete-regional-congress-partner'
import { getRegionalCongressPartnerByCongressId } from '@http/congress/regional/partner/get-regional-congress-partner-by-congress-id'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 10

export function useCongressPartners() {
  const queryClient = useQueryClient()
  const { congressId } = useParams<{ congressId: string }>()

  const [{ page, limit, filtro: filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
  })

  const QUERY_KEY = [
    'regional-congress-partners',
    congressId,
    page,
    limit,
    filter,
    orderBy,
  ]

  const { isLoading, ...rest } = useSuspenseQuery({
    queryKey: QUERY_KEY,
    queryFn: async () =>
      await getRegionalCongressPartnerByCongressId({
        id: congressId,
        page,
        limit,
        filter,
        orderBy,
      }),
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
