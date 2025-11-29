import { api } from '@http/api-client'

export async function deleteRegionalCongressPartner(id: string) {
  await api.delete(`regional-congress/partner/${id}`)
}
