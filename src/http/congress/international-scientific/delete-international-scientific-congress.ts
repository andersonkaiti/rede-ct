import { api } from '@http/api-client'

export async function deleteInternationalScientificCongress(id: string) {
  await api.delete(`international-scientific-congress/${id}`)
}
