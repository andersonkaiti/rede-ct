import { api } from '@http/api-client'

export async function deletePendencyById(id: string) {
  await api.delete(`pendency/${id}`)
}
