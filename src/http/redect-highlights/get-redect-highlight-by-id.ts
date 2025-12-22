import { api } from '@http/api-client'
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
  const data = await api.get(`redect-highlight/${id}`).json()

  return getRedeCTHighlightByIdSchema.parse(data)
}
