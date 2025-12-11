import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetMuseumsRequest {
  filter?: string
  orderBy?: string
  page?: string
  limit?: string
}

const getMuseumsSchema = z.object({
  page: z.number(),
  totalPages: z.number(),
  offset: z.number(),
  limit: z.number(),
  museums: z.array(
    z.object({
      id: z.string(),
      logoUrl: z.string().nullable(),
      name: z.string(),
      city: z.string().nullable(),
      state: z.string().nullable(),
      country: z.string().nullable(),
      description: z.string().nullable(),
      website: z.string().nullable(),
      email: z.string().nullable(),
      phone: z.string().nullable(),
      address: z.string().nullable(),
      functioning: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  ),
})

export async function getMuseums({ filter, ...params }: IGetMuseumsRequest) {
  const searchParams = parseSearchParams({
    ...params,
    name: filter,
    city: filter,
    state: filter,
    country: filter,
  })

  const data = await api
    .get('museum', {
      searchParams,
    })
    .json()

  return getMuseumsSchema.parse(data)
}
