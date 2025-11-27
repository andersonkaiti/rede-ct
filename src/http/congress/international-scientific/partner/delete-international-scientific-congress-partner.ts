import { api } from '@http/api-client'

export async function deleteInternationalScientificCongressPartner(id: string) {
  await api.delete(`international-scientific-congress/partner/${id}`)
}
