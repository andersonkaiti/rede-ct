import { api } from '@http/api-client'

export async function deleteMeetingMinute(meetingId: string) {
  await api.delete(`meeting/${meetingId}/minute`)
}
