import { api } from '@http/api-client'

interface ISignInRequest {
  email: string
  password: string
}

interface ISignResponse {
  token: string
}

export async function signIn(data: ISignInRequest): Promise<ISignResponse> {
  return await api
    .post('auth/sign-in', {
      json: data,
    })
    .json()
}
