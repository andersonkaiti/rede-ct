import { api } from '@http/api-client'
import z from 'zod'

const getWebinarByIdSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string().nullable(),
    scheduledAt: z.string(),
    webinarLink: z.string().nullable(),
    thumbnailUrl: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    guests: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        avatarUrl: z.string().nullable(),
        createdAt: z.string(),
        updatedAt: z.string(),
        emailAddress: z.email(),
        orcid: z.string().nullable(),
        phone: z.string().nullable(),
        lattesUrl: z.string().nullable(),
        role: z.enum(['USER', 'ADMIN']),
      }),
    ),
  })
  .nullable()

export async function getWebinarById(id: string) {
  const data = await api.get(`webinars/${id}`).json()

  return getWebinarByIdSchema.parse(data)
}
