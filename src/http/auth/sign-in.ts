import { api } from '@http/api-client'
import z from 'zod'

interface ISignInRequest {
  email: string
  password: string
}

const signInSchema = z.object({
  token: z.string(),
})

export async function signIn(data: ISignInRequest) {
  const result = await api
    .post('auth/sign-in', {
      json: data,
    })
    .json()

  return signInSchema.parse(result)
}
