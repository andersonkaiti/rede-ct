import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'

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

interface IGetInMemoriamResponse {
  page: number
  totalPages: number
  offset: number
  limit: number
  inMemoriam: {
    name: string
    biography: string | null
    role: InMemoriamRole
    id: string
    birthDate: Date
    deathDate: Date
    photoUrl: string | null
    createdAt: Date
    updatedAt: Date
  }[]
}

export async function getInMemoriam(
  params: IGetInMemoriamRequest
): Promise<IGetInMemoriamResponse> {
  const searchParams = parseSearchParams(params)

  return await api
    .get('in-memoriam', {
      searchParams,
    })
    .json()
}
