import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getPartnerByIdSchema = z.object({
  name: z.string(),
  id: z.string(),
  logoUrl: z.string().nullable(),
  websiteUrl: z.string().nullable(),
  description: z.string().nullable(),
  category: z.string().nullable(),
  since: z.coerce.date(),
  isActive: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export async function getPartnerById(id: string) {
  try {
    const data = await api.get(`partner/${id}`).json()

    return getPartnerByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
