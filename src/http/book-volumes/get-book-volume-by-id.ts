import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import z from 'zod'

const getBookVolumeByIdSchema = z
  .object({
    id: z.string(),
    volumeNumber: z.number(),
    year: z.number(),
    title: z.string(),
    author: z.object({
      name: z.string(),
      orcid: z.string().nullable(),
      phone: z.string().nullable(),
      lattesUrl: z.string().nullable(),
      id: z.string(),
      avatarUrl: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
      emailAddress: z.string(),
      role: z.enum(['ADMIN', 'USER']),
    }),
    accessUrl: z.string().nullable(),
    coverImageUrl: z.string().nullable(),
    catalogSheetUrl: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
  .nullable()

export async function getBookVolumeById(id: string) {
  try {
    const data = await api.get(`book-volumes/${id}`).json()

    return getBookVolumeByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      return null
    }

    throw error
  }
}
