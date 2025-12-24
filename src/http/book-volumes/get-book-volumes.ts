import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetBookVolumesRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

const getBookVolumesSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  bookVolumes: z.array(
    z.object({
      id: z.string(),
      volumeNumber: z.number(),
      year: z.number(),
      title: z.string(),
      author: z.object({
        id: z.string(),
        name: z.string(),
        emailAddress: z.string(),
        avatarUrl: z.string().nullable(),
        orcid: z.string().nullable(),
        lattesUrl: z.string().nullable(),
        role: z.string(),
      }),
      accessUrl: z.string().nullable(),
      coverImageUrl: z.string().nullable(),
      catalogSheetUrl: z.string().nullable(),
      description: z.string().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    }),
  ),
})

export async function getBookVolumes({
  filter,
  ...params
}: IGetBookVolumesRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
    author: filter,
    description: filter,
  })

  const data = await api
    .get('book-volumes', {
      searchParams,
    })
    .json()

  return getBookVolumesSchema.parse(data)
}
