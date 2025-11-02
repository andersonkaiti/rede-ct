import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

export type InMemoriamRole = 'RESEARCHER' | 'LEADER'
export type InMemoriamOrderBy = 'asc' | 'desc'

interface IGetInMemoriamRequest {
  page?: string
  limit?: string
  name?: string
  biography?: string
  role?: InMemoriamRole
  orderBy?: InMemoriamOrderBy
}

export const getInMemoriamSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
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
    })
  ),
})

export async function getInMemoriam(params: IGetInMemoriamRequest) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('in-memoriam', {
      searchParams,
    })
    .json()

  return getInMemoriamSchema.parse(data)
}
