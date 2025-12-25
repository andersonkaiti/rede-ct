import { getRegiments } from '@http/institutional/regiments/get-regiments'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 6

export function useRegiments() {
  const [{ filtro: filter, status, orderBy, authorId, page, limit }] =
    useQueryStates({
      page: parseAsString.withDefault(String(DEFAULT_PAGE)),
      limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
      authorId: parseAsString.withDefault(''),
      filtro: parseAsString.withDefault(DEFAULT_FILTER),
      status: parseAsStringEnum([
        'DRAFT',
        'IN_FORCE',
        'REVOKED',
        'ALL',
      ]).withDefault('ALL'),
      orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
    })

  const result = useQuery({
    queryKey: ['regiments', filter, orderBy, authorId, page, limit, status],
    queryFn: () =>
      getRegiments({
        orderBy,
        page,
        limit,
        filter,
        status: status === 'ALL' ? undefined : status,
      }),
  })

  return result
}
