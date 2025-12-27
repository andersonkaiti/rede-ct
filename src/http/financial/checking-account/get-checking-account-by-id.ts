import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

const getCheckingAccountByIdSchema = z.object({
  id: z.string(),
  type: z.enum(['EXCLUSIVE_REDECT_USE', 'EVENTS', 'COLLOQUIUM']),
  balance: z.number(),
  balanceInCents: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export async function getCheckingAccountById(id: string) {
  try {
    const data = await api.get(`checking-account/${id}`).json()

    return getCheckingAccountByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
