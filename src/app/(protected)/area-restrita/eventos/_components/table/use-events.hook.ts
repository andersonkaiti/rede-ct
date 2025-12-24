'use client'

import { deleteEvent } from '@http/events/delete-event'
import { getEvents } from '@http/events/get-events'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

const DEFAULT_FILTER = ''
const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 10

export function useEvents() {
  const queryClient = useQueryClient()

  const [{ page, limit, filter, orderBy, status, format }] = useQueryStates({
    page: parseAsString.withDefault(String(DEFAULT_PAGE)),
    limit: parseAsString.withDefault(String(DEFAULT_LIMIT)),
    filter: parseAsString.withDefault(DEFAULT_FILTER),
    orderBy: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
    status: parseAsString.withDefault(''),
    format: parseAsString.withDefault(''),
  })

  const { data, isLoading } = useQuery({
    queryKey: ['events', { page, limit, filter, orderBy, status, format }],
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

  const { mutateAsync: deleteEventMutation } = useMutation({
    mutationFn: deleteEvent,
    onError: () => {
      toast.error('Erro ao remover o evento.')
    },
    onSuccess: async () => {
      toast.success('Evento removido com sucesso.')

      await queryClient.invalidateQueries({
        queryKey: ['events'],
      })
    },
  })

  async function handleRemoveEvent(eventId: string) {
    await deleteEventMutation({ id: eventId })
  }

  return {
    data,
    handleRemoveEvent,
    isLoading,
    page,
    limit,
  }
}
