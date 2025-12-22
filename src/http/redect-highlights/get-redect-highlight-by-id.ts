import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { notFound } from 'next/navigation'
import z from 'zod'

const getRedeCTHighlightByIdSchema = z
  .object({
    id: z.string(),
    type: z.enum(['PERSON', 'INSTITUTION']),
    description: z.string().nullable(),
    honorableMention: z.boolean().nullable(),
    honoredAt: z.string(),
    meritUrl: z.string().nullable(),
    userId: z.string(),
    user: z.object({
      id: z.string(),
      name: z.string(),
      avatarUrl: z.string().nullable(),
      emailAddress: z.string(),
    }),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .nullable()

export async function getRedeCTHighlightById(id: string) {
  try {
    const data = await api.get(`redect-highlight/${id}`).json()

    return getRedeCTHighlightByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      notFound()
    }

    throw error
  }
}
