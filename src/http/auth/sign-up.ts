import { api } from '@http/api-client'

interface ISignUpRequest {
  name: string
  emailAddress: string
  password: string
  confirmPassword: string
}

export async function signUp(data: ISignUpRequest) {
  return await api
    .post('auth/sign-up', {
      json: data,
    })
    .json()
}
