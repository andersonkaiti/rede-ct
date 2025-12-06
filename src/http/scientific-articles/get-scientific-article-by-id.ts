import { api } from '@http/api-client'
import z from 'zod'

const getScientificArticleByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  journal: z.string().nullable(),
  volume: z.string().nullable(),
  edition: z.string().nullable(),
  pageStart: z.number().nullable(),
  pageEnd: z.number().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  country: z.string().nullable(),
  publisher: z.string().nullable(),
  description: z.string().nullable(),
  year: z.number().nullable(),
  accessUrl: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export async function getScientificArticleById(id: string) {
  const data = await api.get(`scientific-articles/${id}`).json()

  return getScientificArticleByIdSchema.parse(data)
}
