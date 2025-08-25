import { api } from '@adapters/index'

export async function getTeams<T>(type: string) {
  return await api.get<T>(`/team/type/${type}`)
}
