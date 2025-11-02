import { getAuthenticatedUserCertifications } from '@http/auth/get-user-certifications'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 4

export function useCertifications() {
  const [{ filtro: filter, orderBy, page, limit }] = useQueryStates({
    filtro: parseAsString.withDefault(''),
    orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
  })

  const { data, isLoading } = useQuery({
    queryKey: ['user', 'certifications', filter, orderBy, page, limit],
    queryFn: () =>
      getAuthenticatedUserCertifications({
        filter,
        orderBy,
        page,
        limit,
      }),
  })

  return {
    data,
    isLoading,
    page,
    limit,
  }
}
