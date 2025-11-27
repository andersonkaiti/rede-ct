import { api } from '@http/api-client'
import z from 'zod'

export const getInternationalScientificCongressPartnerByIdSchema = z.object({
  id: z.string(),
  name: z.string(),
  logoUrl: z.string(),
  congressId: z.string(),
})

export async function getInternationalScientificCongressPartnerById(
  partnerId: string,
) {
  const data = await api
    .get(`international-scientific-congress/partner/${partnerId}`)
    .json()

  return getInternationalScientificCongressPartnerByIdSchema.parse(data)
}
