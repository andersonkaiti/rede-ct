import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetManagementTeamRequest {
  filter?: string
}

export const getManagementTeamSchema = z.object({
  teams: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string().nullable(),
      order: z.number().optional(),
      createdAt: z.string(),
      updatedAt: z.string(),
      members: z.array(
        z.object({
          id: z.string(),
          role: z.string(),
          description: z.string().nullable(),
          createdAt: z.string(),
          updatedAt: z.string(),
          teamId: z.string(),
          userId: z.string(),
          user: z.object({
            id: z.string(),
            name: z.string(),
            role: z.enum(['ADMIN', 'USER']),
            createdAt: z.string(),
            updatedAt: z.string(),
            avatarUrl: z.url().nullable(),
            emailAddress: z.email(),
            orcid: z.string().nullable(),
            phone: z.string().nullable(),
            lattesUrl: z.url().nullable(),
          }),
        }),
      ),
    }),
  ),
})

export async function getManagementTeam({ filter }: IGetManagementTeamRequest) {
  const searchParams = parseSearchParams({
    name: filter,
    description: filter,
  })

  const data = await api
    .get('management-team', {
      searchParams,
    })
    .json()

  return getManagementTeamSchema.parse(data)
}
