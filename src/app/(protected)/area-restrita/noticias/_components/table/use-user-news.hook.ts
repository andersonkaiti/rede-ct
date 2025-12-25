import { deleteNewsById } from '@http/news/delete-news-by-id'
import { getUserNews } from '@http/news/get-user-news'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useUserNews() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
  })

  const QUERY_KEY = ['user-news', page, limit, filter, orderBy]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getUserNews({
        filter,
        orderBy,
        page,
        limit,
      }),
  })

  async function handleRemoveNews(id: string) {
    await deleteNewsById(id)

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    })

    toast.success('Notícia removida com sucesso!')
  }

  return {
    handleRemoveNews,
    ...result,
  }
}
