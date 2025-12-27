import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

const getCheckingAccountByTypeSchema = z.object({
  id: z.string(),
  type: z.enum(['EXCLUSIVE_REDECT_USE', 'EVENTS', 'COLLOQUIUM']),
  balance: z.number(),
  balanceInCents: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export async function getLatestCheckingAccountByType(
  type: 'EXCLUSIVE_REDECT_USE' | 'EVENTS' | 'COLLOQUIUM',
) {
  try {
    const data = await api.get(`checking-account/latest/${type}`).json()

    return getCheckingAccountByTypeSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
