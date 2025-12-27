import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

const getTotalBalanceSchema = z.object({
  totalBalance: z.number(),
  totalBalanceInCents: z.number(),
  accounts: z.object({
    exclusiveRedectUse: z
      .object({
        id: z.string(),
        balance: z.number(),
        balanceInCents: z.number(),
        updatedAt: z.string(),
      })
      .nullable(),
    events: z
      .object({
        id: z.string(),
        balance: z.number(),
        balanceInCents: z.number(),
        updatedAt: z.string(),
      })
      .nullable(),
    colloquium: z
      .object({
        id: z.string(),
        balance: z.number(),
        balanceInCents: z.number(),
        updatedAt: z.string(),
      })
      .nullable(),
  }),
})

export async function getTotalBalance() {
  try {
    const data = await api.get('checking-account/total-balance').json()

    return getTotalBalanceSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
