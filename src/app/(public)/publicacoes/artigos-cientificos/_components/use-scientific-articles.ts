import { getScientificArticles } from '@http/scientific-articles/get-scientific-articles'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 6
const DEFAULT_TOTAL_PAGES = 1

export function useScientificArticles() {
  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    totalPages: parseAsString.withDefault(String(DEFAULT_TOTAL_PAGES)),
  })

  const result = useQuery({
    queryKey: ['public-scientific-articles', filter, orderBy, page, limit],
    queryFn: () =>
      getScientificArticles({
        filter,
        orderBy,
        page,
        limit,
      }),
  })

  return {
    ...result,
    page,
    limit,
  }
}
