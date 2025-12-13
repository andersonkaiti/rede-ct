import { api } from '@http/api-client'
import z from 'zod'

export const getMeetingMinuteByMeetingIdSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    publishedAt: z.string(),
    documentUrl: z.string(),
    meetingId: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    meeting: z.object({
      id: z.string(),
      title: z.string(),
      scheduledAt: z.string(),
      format: z.enum(['ONLINE', 'IN_PERSON']),
      agenda: z.string(),
      meetingLink: z.string(),
      location: z.string().nullable(),
      status: z.enum(['PENDING', 'CANCELLED', 'FINISHED']),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  })
  .nullable()

export async function getMeetingMinuteByMeetingId(meetingId: string) {
  const data = await api.get(`meeting/${meetingId}/minute`).json()

  return getMeetingMinuteByMeetingIdSchema.parse(data)
}
