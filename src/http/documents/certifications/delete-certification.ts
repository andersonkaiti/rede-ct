import { api } from '@http/api-client'

export async function deleteCertificationById(id: string) {
  await api.delete(`certification/${id}`)
}
