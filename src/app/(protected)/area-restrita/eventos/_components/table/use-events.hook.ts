'use client'

import { deleteEvent } from '@http/events/delete-event'
import { getEvents } from '@http/events/get-events'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export const DEFAULT_FILTER = ''
export const DEFAULT_ORDER_BY = 'desc'
export const DEFAULT_PAGE = 1
export const DEFAULT_LIMIT = 10

export function useEvents() {
  const queryClient = useQueryClient()

  const [{ page, limit, filter, orderBy, status, format }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filter: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault(DEFAULT_ORDER_BY),
    status: parseAsString.withDefault(''),
    format: parseAsString.withDefault(''),
  })

  const QUERY_KEY = ['events', page, limit, filter, orderBy, status, format]

  const result = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () =>
      getEvents({
        page,
        limit,
        filter,
        orderBy,
        status,
        format,
      }),
  })

  async function handleRemoveEvent(id: string) {
    try {
      await deleteEvent(id)

      await queryClient.invalidateQueries({ queryKey: QUERY_KEY })

      toast.success('Evento removido com sucesso!')
    } catch {
      toast.error('Erro ao remover evento.')
    }
  }

  return {
    handleRemoveEvent,
    ...result,
  }
}
