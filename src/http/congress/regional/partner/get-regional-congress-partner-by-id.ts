import { api } from '@http/api-client'
import z from 'zod'

export const getRegionalCongressPartnerByIdSchema = z.object({
  id: z.string(),
  name: z.string(),
  logoUrl: z.string().nullable(),
  congressId: z.string(),
})

export async function getRegionalCongressPartnerById(id: string) {
  const data = await api.get(`regional-congress/partner/${id}`).json()

  return getRegionalCongressPartnerByIdSchema.parse(data)
}
