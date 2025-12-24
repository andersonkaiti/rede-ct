import { deletePartner } from '@http/partners/delete-partner'
import { getPartners } from '@http/partners/get-partners'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 7

export function usePartners() {
  const queryClient = useQueryClient()

  const [{ page, limit, filtro: filter, orderBy }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  })

  const QUERY_KEY = ['partners', page, limit, filter, orderBy]

  const { isLoading, ...rest } = useQuery({
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
      const response = await deletePartner(id)

      if (response.ok) {
        await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

        toast.success('Parceiro removido com sucesso!')
      }
    } catch {
      toast.error('Erro ao remover parceiro.')
    }
  }

  return {
    isLoading,
    handleRemovePartner,
    ...rest,
  }
}
