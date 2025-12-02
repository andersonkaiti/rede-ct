import { api } from '@http/api-client'
import z from 'zod'

const getScientificJournalByIdSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    issn: z.string(),
    description: z.string(),
    journalUrl: z.string(),
    logoUrl: z.string().nullable(),
    directors: z.string().nullable(),
    editorialBoard: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .nullable()

export async function getScientificJournalById(id: string) {
  const data = await api.get(`scientific-journals/${id}`).json()

  return getScientificJournalByIdSchema.parse(data)
}
