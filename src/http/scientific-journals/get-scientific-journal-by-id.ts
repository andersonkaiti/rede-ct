import { api } from '@http/api-client'
import { HTTPError } from 'ky'
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
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  })
  .nullable()

export async function getScientificJournalById(id: string) {
  try {
    const data = await api.get(`scientific-journals/${id}`).json()

    return getScientificJournalByIdSchema.parse(data)
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 404) {
      return null
    }

    throw error
  }
}
