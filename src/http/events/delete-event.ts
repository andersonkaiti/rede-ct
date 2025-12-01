import { api } from '@http/api-client'

interface IDeleteEventRequest {
  id: string
}

export async function deleteEvent({ id }: IDeleteEventRequest) {
  await api.delete(`event/${id}`)
}
