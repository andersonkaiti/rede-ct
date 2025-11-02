import { api } from '@http/api-client'
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
  const data = await api.get(`partner/${id}`).json()

  return getPartnerByIdSchema.parse(data)
}
