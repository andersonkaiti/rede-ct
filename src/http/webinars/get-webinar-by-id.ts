import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import z from 'zod'

const getWebinarByIdSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string().nullable(),
    scheduledAt: z.coerce.date(),
    webinarLink: z.string().nullable(),
    thumbnailUrl: z.url(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    guests: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        avatarUrl: z.url().nullable(),
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
  try {
    const data = await api.get(`webinars/${id}`).json()

    return getWebinarByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      return null
    }
  }
}
