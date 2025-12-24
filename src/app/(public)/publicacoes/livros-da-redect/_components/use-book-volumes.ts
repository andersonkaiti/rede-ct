import { getBookVolumes } from '@http/book-volumes/get-book-volumes'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 6

export function useBookVolumes() {
  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  })

  const result = useQuery({
    queryKey: ['book-volumes', filter, orderBy, page, limit],
    queryFn: () =>
      getBookVolumes({
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
