import { api } from '@http/api-client'
import { HTTPError } from 'ky'
import { redirect } from 'next/navigation'

interface IAuthenticatedUserResponse {
  name: string
  orcid: string | null
  phone: string | null
  lattesUrl: string | null
  id: string
  avatarUrl: string
  createdAt: string
  updatedAt: string
  emailAddress: string
  role: 'ADMIN' | 'USER'
}

export async function getAuthenticatedUser(): Promise<IAuthenticatedUserResponse> {
  try {
    return await api.get('auth/user').json()
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
