import { getMeetings } from '@http/institutional/meetings/get-meetings'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 6
const DEFAULT_TOTAL_PAGES = 1

export function useMeetings() {
  const [{ filtro: filter, format, status, orderBy, page, limit }] =
    useQueryStates({
      filtro: parseAsString.withDefault(''),
      format: parseAsStringEnum(['ONLINE', 'IN_PERSON', 'ALL']).withDefault(
        'ALL',
      ),
      status: parseAsStringEnum([
        'PENDING',
        'CANCELLED',
        'FINISHED',
        'ALL',
      ]).withDefault('ALL'),
      orderBy: parseAsStringEnum(['desc', 'asc']).withDefault('desc'),
      page: parseAsString.withDefault(String(DEFAULT_PAGE)),
      limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
      totalPages: parseAsString.withDefault(String(DEFAULT_TOTAL_PAGES)),
    })

  const result = useQuery({
    queryKey: ['meetings', filter, orderBy, page, limit, format, status],
    queryFn: () =>
      getMeetings({
        orderBy,
        page,
        limit,
        status: status === 'ALL' ? undefined : status,
        format: format === 'ALL' ? undefined : format,
      }),
  })

  return {
    ...result,
    page,
    limit,
  }
}
