import { getRegiments } from '@http/institutional/regiments/get-regiments'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 6

export function useRegiments() {
  const [{ filtro: filter, status, orderBy, authorId, page, limit }] =
    useQueryStates({
      page: parseAsString.withDefault(String(DEFAULT_PAGE)),
      limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
      authorId: parseAsString.withDefault(''),
      filtro: parseAsString.withDefault(''),
      status: parseAsStringEnum([
        'DRAFT',
        'IN_FORCE',
        'REVOKED',
        'ALL',
      ]).withDefault('ALL'),
      orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
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

  return {
    ...result,
    page,
    limit,
  }
}
