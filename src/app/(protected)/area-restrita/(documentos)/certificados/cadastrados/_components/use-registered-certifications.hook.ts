import { getRegisteredCertifications } from '@http/documents/certifications/get-certitications'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 4

export function useRegisteredCertifications() {
  const [{ filtro: filter, orderBy, page, limit, userId }] = useQueryStates({
    userId: parseAsString.withDefault(''),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filtro: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
  })

  const result = useQuery({
    queryKey: ['users', 'certifications', page, limit, filter, orderBy, userId],
    queryFn: () =>
      getRegisteredCertifications({
        filter,
        orderBy,
        page,
        limit,
        userId,
      }),
  })

  return result
}
