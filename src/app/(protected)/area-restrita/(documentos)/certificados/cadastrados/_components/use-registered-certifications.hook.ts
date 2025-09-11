import { getRegisteredCertifications } from '@http/documents/certifications/get-certitications'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryState } from 'nuqs'

export function useRegisteredCertifications() {
  const [filter] = useQueryState('filtro', parseAsString.withDefault(''))
  const [orderBy] = useQueryState(
    'order_by',
    parseAsStringEnum(['desc', 'asc']).withDefault('desc')
  )
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [limit] = useQueryState('limit', parseAsString.withDefault('6'))

  const { data: paginatedResults, isLoading } = useQuery({
    queryKey: ['users', 'certifications', filter, orderBy, page, limit],
    queryFn: () =>
      getRegisteredCertifications({
        filter,
        orderBy,
        page,
        limit,
      }),
    placeholderData: keepPreviousData,
  })

  return {
    paginatedResults,
    isLoading,
    page,
  }
}
