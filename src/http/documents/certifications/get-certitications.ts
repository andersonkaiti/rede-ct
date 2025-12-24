import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface ICertificationsRequest {
  page?: string
  limit?: string
  filter?: string
  userId?: string
  orderBy?: string
}

export const getRegisteredCertificationsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
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

export async function getRegisteredCertifications({
  filter,
  ...params
}: ICertificationsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
    description: filter,
  })

  const data = await api
    .get('certification', {
      searchParams,
    })
    .json()

  return getRegisteredCertificationsSchema.parse(data)
}
