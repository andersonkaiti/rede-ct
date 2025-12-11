import { api } from '@http/api-client'
import z from 'zod'

const getRedeCTHighlightByIdSchema = z
  .object({
    id: z.string(),
    type: z.enum(['PERSON', 'INSTITUTION']),
    name: z.string(),
    description: z.string().nullable(),
    honorableMention: z.string().nullable(),
    imageUrl: z.string().nullable(),
    honoredAt: z.string(),
    meritUrl: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .nullable()

export async function getRedeCTHighlightById(id: string) {
  const data = await api.get(`redect-highlight/${id}`).json()

  return getRedeCTHighlightByIdSchema.parse(data)
}
