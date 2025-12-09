import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetWorkGroupTeamMembersRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

export const getWorkGroupTeamMembersSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
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

export async function getWorkGroupTeamMembers(
  params: IGetWorkGroupTeamMembersRequest,
) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('work-group-team-member', {
      searchParams,
    })
    .json()

  return getWorkGroupTeamMembersSchema.parse(data)
}
