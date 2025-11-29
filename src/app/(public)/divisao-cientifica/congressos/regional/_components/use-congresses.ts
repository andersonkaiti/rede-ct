import { getRegionalCongresses } from '@http/congress/regional/get-regional-congresses'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 6
const DEFAULT_TOTAL_PAGES = 1

export function useCongresses() {
  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    totalPages: parseAsString.withDefault(String(DEFAULT_TOTAL_PAGES)),
  })

  const result = useQuery({
    queryKey: ['regional-congresses', filter, orderBy, page, limit],
    queryFn: () =>
      getRegionalCongresses({
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
