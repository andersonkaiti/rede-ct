import { api } from '@http/api-client'
import z from 'zod'

export const getMeetingByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  scheduledAt: z.string(),
  format: z.enum(['ONLINE', 'IN_PERSON']),
  agenda: z.string(),
  meetingLink: z.string().nullable().optional(),
  location: z.string().nullable().optional(),
  status: z.enum(['PENDING', 'CANCELLED', 'FINISHED']),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export async function getMeetingById(id: string) {
  const data = await api.get(`meeting/${id}`).json()

  return getMeetingByIdSchema.parse(data)
}
