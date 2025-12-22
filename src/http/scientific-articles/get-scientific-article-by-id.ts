import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
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
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  country: z.string().nullable(),
  publisher: z.string().nullable(),
  description: z.string().nullable(),
  year: z.number().nullable(),
  accessUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export async function getScientificArticleById(id: string) {
  try {
    const data = await api.get(`scientific-articles/${id}`).json()

    return getScientificArticleByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
