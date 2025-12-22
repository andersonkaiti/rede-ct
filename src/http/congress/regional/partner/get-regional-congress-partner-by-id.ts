import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

export const getRegionalCongressPartnerByIdSchema = z.object({
  id: z.string(),
  name: z.string(),
  logoUrl: z.string().nullable(),
  congressId: z.string(),
})

export async function getRegionalCongressPartnerById(id: string) {
  try {
    const data = await api.get(`regional-congress/partner/${id}`).json()

    return getRegionalCongressPartnerByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
