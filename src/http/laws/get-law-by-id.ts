import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getLawByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  link: z.string(),
  country: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export async function getLawById(id: string) {
  try {
    const data = await api.get(`law/${id}`).json()

    return getLawByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
