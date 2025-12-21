import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetReferenceCenterTeamMembersRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

export const getReferenceCenterTeamMembersSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  members: z.array(
    z.object({
      id: z.string(),
      role: z.string(),
      description: z.string().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
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

export async function getReferenceCenterTeamMembers(
  params: IGetReferenceCenterTeamMembersRequest,
) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('reference-center-team-member', {
      searchParams,
    })
    .json()

  return getReferenceCenterTeamMembersSchema.parse(data)
}
