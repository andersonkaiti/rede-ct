import { api } from '@adapters/index'

interface IGetTeamsProps {
  type: string
  filter?: string
}

export async function getTeams<T>({ type, filter }: IGetTeamsProps) {
  const searchParams = new URLSearchParams()

  if (filter) {
    searchParams.set('name', String(filter))
  }

  return await api.get<T>(`/team/type/${type}?${searchParams}`)
}
