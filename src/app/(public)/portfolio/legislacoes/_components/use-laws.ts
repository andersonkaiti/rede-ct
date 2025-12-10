import { getLaws } from '@http/laws/get-laws'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 10
const DEFAULT_TOTAL_PAGES = 1

export function useLaws() {
  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    totalPages: parseAsString.withDefault(String(DEFAULT_TOTAL_PAGES)),
  })

  const result = useQuery({
    queryKey: ['public-laws', filter, orderBy, page, limit],
    queryFn: () =>
      getLaws({
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
