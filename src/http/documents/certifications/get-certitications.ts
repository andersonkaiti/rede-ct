import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface ICertificationsRequest {
  filter: string
  orderBy: string
  page: string
  limit: string
  userId: string
}

export const getRegisteredCertificationsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  certifications: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      certificationUrl: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      userId: z.string(),
      user: z.object({
        id: z.string(),
        name: z.string(),
        avatarUrl: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        emailAddress: z.string(),
        orcid: z.string(),
        phone: z.string(),
        lattesUrl: z.string(),
        role: z.enum(['ADMIN', 'USER']),
      }),
    })
  ),
})

export async function getRegisteredCertifications(
  params: ICertificationsRequest
) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('certification', {
      searchParams,
    })
    .json()

  return getRegisteredCertificationsSchema.parse(data)
}
