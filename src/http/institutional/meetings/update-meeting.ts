import { api } from '@http/api-client'

export interface IUpdateMeetingRequest {
  id: string
  title?: string
  scheduledAt?: Date
  format?: 'ONLINE' | 'IN_PERSON'
  agenda?: string
  meetingLink?: string | null
  location?: string | null
  status?: 'PENDING' | 'CANCELLED' | 'FINISHED'
}

export async function updateMeeting({ id, ...data }: IUpdateMeetingRequest) {
  await api.put(`meeting/${id}`, {
    json: data,
  })
}
