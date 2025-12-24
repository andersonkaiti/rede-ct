import { getNews } from '@http/news/get-news'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 9

export function useNews() {
  const [{ filtro: filter, orderBy, authorId, page, limit }] = useQueryStates({
    authorId: parseAsString.withDefault(''),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
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

  return {
    ...result,
    page,
  }
}
