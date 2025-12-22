import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getRegimentByIdSchema = z.object({
  id: z.string(),
  title: z.string(),
  version: z.string(),
  publishedAt: z.string(),
  documentUrl: z.string(),
  status: z.enum(['DRAFT', 'IN_FORCE', 'REVOKED']),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export async function getRegimentById(id: string) {
  try {
    const data = await api.get(`regiment/${id}`).json()
    return getRegimentByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
