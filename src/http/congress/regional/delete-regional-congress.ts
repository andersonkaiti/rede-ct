import { api } from '@http/api-client'

export async function deleteRegionalCongress(id: string) {
  await api.delete(`regional-congress/${id}`)
}
