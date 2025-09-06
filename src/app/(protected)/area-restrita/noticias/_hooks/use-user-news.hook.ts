'use client'

import { deleteNewsById } from '@http/news/delete-news-by-id'
import { getUserNews } from '@http/news/get-user-news'
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'
import { toast } from 'sonner'
import type { IPaginatedNews } from 'types/news'

export function useUserNews() {
  const queryClient = useQueryClient()

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState('order_by', parseAsString.withDefault(''))
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('7'))

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
    placeholderData: keepPreviousData,
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
