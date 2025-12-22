import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
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
  try {
    const data = await api
      .get(`international-scientific-congress/partner/${partnerId}`)
      .json()

    return getInternationalScientificCongressPartnerByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
