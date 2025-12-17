import { api } from '@http/api-client'
import { parseSearchParams } from '@utils/parse-search-params'
import z from 'zod'

interface IGetUsersRequest {
  page?: string | number
  limit?: string | number
  name?: string
  emailAddress?: string
  phone?: string
  lattesUrl?: string
  orcid?: string
}

const userSchema = z.object({
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
})

export const getUsersSchema = z.object({
  page: z.number().nullable(),
  totalPages: z.number().nullable(),
  offset: z.number().nullable(),
  limit: z.number().nullable(),
  users: z.array(userSchema),
})

export async function getUsers(params: IGetUsersRequest) {
  const searchParams = parseSearchParams(params)

  const data = await api
    .get('user', {
      searchParams,
    })
    .json()

  return getUsersSchema.parse(data)
}
