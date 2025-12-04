import { deleteBookVolumeById } from '@http/book-volumes/delete-book-volume'
import { getBookVolumes } from '@http/book-volumes/get-book-volumes'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = ''
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useBookVolumes() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsString.withDefault(DEFAULT_ORDER_BY),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['book-volumes', filter, orderBy, page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getBookVolumes({
        filter,
        orderBy,
        page,
        limit,
      }),
    staleTime: 0,
  })

  async function handleRemoveBookVolume(id: string) {
    await deleteBookVolumeById(id)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Volume removido com sucesso!')
  }

  return {
    isLoading,
    handleRemoveBookVolume,
    page,
    limit,
    ...rest,
  }
}
