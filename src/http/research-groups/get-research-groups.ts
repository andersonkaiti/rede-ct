import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetResearchGroupsRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

const getResearchGroupsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  researchGroups: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      acronym: z.string().nullable(),
      description: z.string().nullable(),
      url: z.string().nullable(),
      logoUrl: z.string().nullable(),
      foundedAt: z.coerce.date(),
      scope: z.string().nullable(),
      email: z.string().nullable(),
      leaderId: z.string(),
      deputyLeaderId: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      leader: z.object({
        id: z.string(),
        name: z.string(),
        emailAddress: z.email(),
        avatarUrl: z.string().nullable(),
        createdAt: z.string(),
        updatedAt: z.string(),
        orcid: z.string().nullable(),
        phone: z.string().nullable(),
        lattesUrl: z.string().nullable(),
        role: z.enum(['USER', 'ADMIN']),
      }),
      deputyLeader: z.object({
        id: z.string(),
        name: z.string(),
        emailAddress: z.email(),
        avatarUrl: z.string().nullable(),
        createdAt: z.string(),
        updatedAt: z.string(),
        orcid: z.string().nullable(),
        phone: z.string().nullable(),
        lattesUrl: z.string().nullable(),
        role: z.enum(['USER', 'ADMIN']),
      }),
    }),
  ),
})

export async function getResearchGroups({
  filter,
  ...params
}: IGetResearchGroupsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    name: filter,
    acronym: filter,
    description: filter,
    leader: filter,
  })

  const data = await api
    .get('research-groups', {
      searchParams,
    })
    .json()

  return getResearchGroupsSchema.parse(data)
}
