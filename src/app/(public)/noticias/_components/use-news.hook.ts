import { getNews } from '@http/news/get-news'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 9

export function useNews() {
  const [{ filtro: filter, orderBy, authorId, page, limit }] = useQueryStates({
    authorId: parseAsString.withDefault(''),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
  })

  const result = useQuery({
    queryKey: ['news', filter, orderBy, authorId, page, limit],
    queryFn: () =>
      getNews({
        filter,
        orderBy,
        authorId,
        page,
        limit,
      }),
  })

  return result
}
