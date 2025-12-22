import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getMeetingByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  scheduledAt: z.coerce.date(),
  format: z.enum(['ONLINE', 'IN_PERSON']),
  agenda: z.string(),
  meetingLink: z.string().nullable().optional(),
  location: z.string().nullable().optional(),
  status: z.enum(['PENDING', 'CANCELLED', 'FINISHED']),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  minutes: z.object({
    id: z.string(),
    meetingId: z.string(),
    title: z.string(),
    documentUrl: z.string(),
    publishedAt: z.coerce.date(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  }),
})

export async function getMeetingById(id: string) {
  try {
    const data = await api.get(`meeting/${id}`).json()

    return getMeetingByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
