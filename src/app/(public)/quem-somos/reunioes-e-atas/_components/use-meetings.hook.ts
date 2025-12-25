import { getMeetings } from '@http/institutional/meetings/get-meetings'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 6

export function useMeetings() {
  const [{ filtro: filter, format, status, orderBy, page, limit }] =
    useQueryStates({
      page: parseAsString.withDefault(String(DEFAULT_PAGE)),
      limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
      filtro: parseAsString.withDefault(DEFAULT_FILTER),
      format: parseAsStringEnum(['ONLINE', 'IN_PERSON', 'ALL']).withDefault(
        'ALL',
      ),
      status: parseAsStringEnum([
        'PENDING',
        'CANCELLED',
        'FINISHED',
        'ALL',
      ]).withDefault('ALL'),
      orderBy: parseAsStringEnum(['desc', 'asc']).withDefault(DEFAULT_ORDER_BY),
    })

  const result = useQuery({
    queryKey: ['meetings', page, limit, filter, orderBy, format, status],
    queryFn: () =>
      getMeetings({
        orderBy,
        page,
        limit,
        status: status === 'ALL' ? undefined : status,
        format: format === 'ALL' ? undefined : format,
      }),
  })

  return result
}
