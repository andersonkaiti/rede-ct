'use client'

import { useAuth } from '@clerk/nextjs'
import { deleteNewsById } from '@http/news/delete-news-by-id'
import { getUserNews } from '@http/news/get-user-news'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'
import { useEffect } from 'react'
import { toast } from 'sonner'
import type { INews } from 'types/news'

export function useUserNews() {
  const { userId } = useAuth()

  const queryClient = useQueryClient()

  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState('order_by', parseAsString.withDefault(''))

  const QUERY_KEY = ['user-news', userId, filter, orderBy]

  const isUserIdAvailable = !!userId

  const { isLoading, refetch, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getUserNews({
        filter,
        orderBy,
        userId: userId || '',
      }),
    enabled: isUserIdAvailable,
    staleTime: 0,
  })

  useEffect(() => {
    if (isUserIdAvailable) {
      refetch()
    }
  }, [isUserIdAvailable, refetch])

  const isReallyLoading = isLoading || !isUserIdAvailable

  async function handleRemoveNews({ id, author_id, image_url }: INews) {
    if (userId !== author_id) {
      throw new Error('Você não tem permissão para deletar esta notícia!')
    }

    await deleteNewsById(id, image_url)

    queryClient.setQueryData(
      QUERY_KEY,
      (oldNews: INews[]) => oldNews.filter((news) => news.id !== id) || []
    )

    toast.success('Notícia removida com sucesso!')
  }

  return {
    isLoading: isReallyLoading,
    handleRemoveNews,
    ...rest,
  }
}
