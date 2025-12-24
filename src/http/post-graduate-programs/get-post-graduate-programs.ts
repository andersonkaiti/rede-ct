import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetPostGraduateProgramsRequest {
  page?: string
  limit?: string
  filter?: string
  orderBy?: string
}

const getPostGraduateProgramsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  postGraduatePrograms: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      imageUrl: z.string().nullable(),
      description: z.string().nullable(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
      contact: z.string(),
      registrationLink: z.string().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
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
