import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import z from 'zod'

export const getNewsByIdSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  title: z.string(),
  content: z.string(),
  imageUrl: z.string().nullable(),
  author: z.object({
    name: z.string(),
    id: z.string(),
    avatarUrl: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
    emailAddress: z.string(),
    orcid: z.string().nullable(),
    phone: z.string().nullable(),
    lattesUrl: z.string().nullable(),
    role: z.enum(['ADMIN', 'USER']),
  }),
})

export async function getNewsById(id: string) {
  try {
    const data = await api.get(`news/${id}`).json()

    return getNewsByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      return null
    }
  }
}
