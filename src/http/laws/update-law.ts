import { api } from '@http/api-client'

interface IUpdateLawRequest {
  id: string
  title?: string
  link?: string
  country?: string
}

export async function updateLaw({ id, ...data }: IUpdateLawRequest) {
  await api.put(`law/${id}`, {
    json: data,
  })
}
