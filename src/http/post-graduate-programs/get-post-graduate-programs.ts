import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetPostGraduateProgramsRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

const getPostGraduateProgramsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  postGraduatePrograms: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      imageUrl: z.string().nullable(),
      description: z.string().nullable(),
      startDate: z.string(),
      endDate: z.string(),
      contact: z.string(),
      registrationLink: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
})

export async function getPostGraduatePrograms({
  filter,
  ...params
}: IGetPostGraduateProgramsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    title: filter,
    description: filter,
    contact: filter,
  })

  const data = await api
    .get('post-graduate-programs', {
      searchParams,
    })
    .json()

  return getPostGraduateProgramsSchema.parse(data)
}
