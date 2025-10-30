import { deleteNewsById } from '@http/news/delete-news-by-id'
import { getUserNews } from '@http/news/get-user-news'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'
import type { IPaginatedNews } from 'types/news'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = ''
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 7

export function useUserNews() {
  const queryClient = useQueryClient()

  const [{ filtro: filter, order_by: orderBy, page, limit }] = useQueryStates({
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    order_by: parseAsString.withDefault(DEFAULT_ORDER_BY),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const QUERY_KEY = ['user-news', filter, orderBy, page, limit]

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getUserNews({
        filter,
        orderBy,
        page,
        limit,
      }),
    staleTime: 0,
  })

  async function handleRemoveNews(id: string) {
    await deleteNewsById(id)

    queryClient.setQueryData(QUERY_KEY, (data: IPaginatedNews) => ({
      ...data,
      news: data.news.filter((news) => news.id !== id),
    }))

    toast.success('Notícia removida com sucesso!')
  }

  return {
    isLoading,
    handleRemoveNews,
    ...rest,
  }
}
