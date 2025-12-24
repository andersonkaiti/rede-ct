import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetInMemoriamRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

export const getInMemoriamSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  inMemoriam: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      birthDate: z.string(),
      deathDate: z.string(),
      biography: z.string().nullable(),
      photoUrl: z.string().nullable(),
      role: z.enum(['RESEARCHER', 'LEADER']),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
})

export async function getInMemoriam({
  filter,
  ...params
}: IGetInMemoriamRequest) {
  const searchParams = parseSearchParams({
    ...params,
    name: filter,
    biography: filter,
    role: filter,
  })

  const data = await api
    .get('in-memoriam', {
      searchParams,
    })
    .json()

  return getInMemoriamSchema.parse(data)
}
