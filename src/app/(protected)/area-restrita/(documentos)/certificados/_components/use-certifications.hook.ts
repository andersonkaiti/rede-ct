import { getAuthenticatedUserCertifications } from '@http/auth/get-user-certifications'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'

export function useCertifications() {
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('4'))

  const { data: paginatedResults, isLoading } = useQuery({
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
    paginatedResults,
    isLoading,
    page,
    limit,
  }
}
