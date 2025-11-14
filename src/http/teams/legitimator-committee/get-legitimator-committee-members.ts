import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetLegitimatorCommitteeRequest {
  filter?: string
}

export const getLegitimatorCommitteeSchema = z.object({
  members: z.array(
    z.object({
      id: z.string(),
      role: z.string(),
      description: z.string().nullable(),
      order: z.number(),
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
    })
  ),
})

export async function getLegitimatorCommitteeMembers(
  { filter }: IGetLegitimatorCommitteeRequest
) {
  const searchParams = parseSearchParams({
    role: filter,
  })

  const data = await api
    .get('legitimator-committee-member', {
      searchParams,
    })
    .json()

  return getLegitimatorCommitteeSchema.parse(data)
}
