import { getNews } from '@http/news/get-news'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, useQueryState } from 'nuqs'

export function useNews() {
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState('order_by', parseAsString.withDefault(''))
  const [authorId] = useQueryState('author_id', parseAsString.withDefault(''))

  return useQuery({
    queryKey: ['news', filter, orderBy, authorId],
    queryFn: () => getNews({ filter, orderBy, authorId }),
  })
}
