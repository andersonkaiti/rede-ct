import { api } from '@adapters/index'
import type { QueryFunctionContext } from '@tanstack/react-query'
import type { ITeam } from 'types/team'

export async function getTeam({ queryKey: [, id] }: QueryFunctionContext) {
  return await api.get<ITeam>(`/team/id/${id}`)
}
