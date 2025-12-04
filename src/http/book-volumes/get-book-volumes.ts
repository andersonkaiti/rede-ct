import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetBookVolumesRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

const getBookVolumesSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  bookVolumes: z.array(
    z.object({
      id: z.string(),
      volumeNumber: z.number(),
      year: z.number(),
      title: z.string(),
      author: z.string(),
      accessUrl: z.string().nullable(),
      authorImageUrl: z.string().nullable(),
      coverImageUrl: z.string().nullable(),
      catalogSheetUrl: z.string().nullable(),
      description: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
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
