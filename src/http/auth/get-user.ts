import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export const getAuthenticatedUserSchema = z.object({
  name: z.string(),
  orcid: z.string().nullable(),
  phone: z.string().nullable(),
  lattesUrl: z.string().nullable(),
  id: z.string(),
  avatarUrl: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  emailAddress: z.string(),
  role: z.enum(['ADMIN', 'USER']),
})

export async function getAuthenticatedUser() {
  try {
    const data = await api.get('auth/user').json()

    return getAuthenticatedUserSchema.parse(data)
  } catch (err) {
    if (err instanceof HTTPError) {
      const errorBody = await err.response.json()

      if (errorBody.invalid) {
        redirect('/api/auth/sign-out')
      }
    }

    redirect('/')
  }
}
