import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetSDHCTeamMembersRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

export const getSDHCTeamMembersSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  members: z.array(
    z.object({
      id: z.string(),
      role: z.string(),
      description: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
      userId: z.string(),
      user: z.object({
        id: z.string(),
        name: z.string(),
        avatarUrl: z.string().nullable(),
        createdAt: z.string(),
        updatedAt: z.string(),
        emailAddress: z.string(),
        orcid: z.string().nullable(),
        phone: z.string().nullable(),
        lattesUrl: z.string().nullable(),
        role: z.enum(['ADMIN', 'USER']),
      }),
    }),
  ),
})

export async function getSDHCTeamMembers({
  filter,
  ...params
}: IGetSDHCTeamMembersRequest) {
  const searchParams = parseSearchParams({
    ...params,
    role: filter,
  })

  const data = await api
    .get('sdhc-team-member', {
      searchParams,
    })
    .json()

  return getSDHCTeamMembersSchema.parse(data)
}
