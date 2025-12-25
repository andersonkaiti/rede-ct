import { getResearchers } from '@http/researchers/get-researchers'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 10

export function useResearchers() {
  const [{ filtro: filter, page, limit, orderBy, seniority }] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    orderBy: parseAsString.withDefault(DEFAULT_ORDER_BY),
    seniority: parseAsString.withDefault('ALL'),
  })

  const result = useQuery({
    queryKey: ['researchers', page, limit, filter, orderBy, seniority],
    queryFn: async () =>
      await getResearchers({
        filter,
        page,
        limit,
        orderBy,
        seniority,
      }),
  })

  return {
    ...result,
  }
}
