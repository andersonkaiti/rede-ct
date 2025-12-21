import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetScientificJournalsRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

const getScientificJournalsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  scientificJournals: z.array(
    z.object({
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
    }),
  ),
})

export async function getScientificJournals({
  filter,
  ...params
}: IGetScientificJournalsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    name: filter,
    description: filter,
    issn: filter,
    directors: filter,
    editorialBoard: filter,
  })

  const data = await api
    .get('scientific-journals', {
      searchParams,
    })
    .json()

  return getScientificJournalsSchema.parse(data)
}
