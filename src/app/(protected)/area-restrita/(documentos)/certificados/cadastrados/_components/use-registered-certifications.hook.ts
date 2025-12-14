import { getRegisteredCertifications } from '@http/documents/certifications/get-certitications'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 4

export function useRegisteredCertifications() {
  const [{ filtro: filter, orderBy, page, limit, userId }] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
    userId: parseAsString.withDefault(''),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const { data, isLoading } = useQuery({
    queryKey: ['users', 'certifications', filter, orderBy, page, limit, userId],
    queryFn: () =>
      getRegisteredCertifications({
        filter,
        orderBy,
        page,
        limit,
        userId,
      }),
  })

  return {
    data,
    isLoading,
    page,
    limit,
  }
}
