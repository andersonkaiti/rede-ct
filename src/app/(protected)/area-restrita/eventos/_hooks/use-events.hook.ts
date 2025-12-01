'use client'

import { deleteEvent } from '@http/events/delete-event'
import { getEvents } from '@http/events/get-events'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs'
import { toast } from 'sonner'

export function useEvents() {
  const queryClient = useQueryClient()

  const [{ page, limit, filter, orderBy, status, format }] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    limit: parseAsInteger.withDefault(10),
    filter: parseAsString.withDefault(''),
    orderBy: parseAsString.withDefault('desc'),
    status: parseAsString.withDefault(''),
    format: parseAsString.withDefault(''),
  })

  const { data, isLoading } = useQuery({
    queryKey: ['events', { page, limit, filter, orderBy, status, format }],
    queryFn: () =>
      getEvents({
        page: String(page),
        limit: String(limit),
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
