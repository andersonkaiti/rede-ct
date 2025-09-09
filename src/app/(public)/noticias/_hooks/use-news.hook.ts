import { getNews } from '@http/news/get-news'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'

export function useNews() {
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [authorId] = useQueryState('author_id', parseAsString.withDefault(''))
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('9'))

  const result = useQuery({
    queryKey: ['news', filter, orderBy, authorId, page, limit],
    queryFn: () => getNews({ filter, orderBy, authorId, page, limit }),
  })

  return {
    ...result,
    page,
  }
}
