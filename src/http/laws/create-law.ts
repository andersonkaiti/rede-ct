import { api } from '@http/api-client'

interface ICreateLawRequest {
  title: string
  link: string
  country: string
}

export async function createLaw(data: ICreateLawRequest) {
  await api.post('law', {
    json: data,
  })
}
