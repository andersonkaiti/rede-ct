import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IAuthenticatedUserCertificationsRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

export const getAuthenticatedUserCertificationsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  totalCertifications: z.number(),
  certifications: z.array(
    z.object({
      id: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      title: z.string(),
      description: z.string(),
      certificationUrl: z.string(),
      userId: z.string(),
    }),
  ),
})

export async function getAuthenticatedUserCertifications(
  params: IAuthenticatedUserCertificationsRequest,
) {
  const searchParams = parseSearchParams(params)

  const data = await api.get(`auth/certifications?${searchParams}`).json()

  return getAuthenticatedUserCertificationsSchema.parse(data)
}
