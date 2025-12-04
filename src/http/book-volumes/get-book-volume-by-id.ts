import { api } from '@http/api-client'
import z from 'zod'

const getBookVolumeByIdSchema = z.object({
  id: z.string(),
  volumeNumber: z.number(),
  year: z.number(),
  title: z.string(),
  author: z.string(),
  accessUrl: z.string().nullable(),
  authorImageUrl: z.string().nullable(),
  coverImageUrl: z.string().nullable(),
  catalogSheetUrl: z.string().nullable(),
  description: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export async function getBookVolumeById(id: string) {
  const data = await api.get(`book-volumes/${id}`).json()

  return getBookVolumeByIdSchema.parse(data)
}
