import { getScientificArticles } from '@http/scientific-articles/get-scientific-articles'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 6

export function useScientificArticles() {
  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault(DEFAULT_ORDER_BY),
  })

  const result = useQuery({
    queryKey: ['public-scientific-articles', page, limit, filter, orderBy],
    queryFn: () =>
      getScientificArticles({
        filter,
        orderBy,
        page,
        limit,
      }),
  })

  return result
}
