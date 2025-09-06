import { api } from '@http/api-client'

interface IGetTeamsProps {
  type: string
  filter?: string
}

export async function getTeams<T>({
  type,
  filter,
}: IGetTeamsProps): Promise<T> {
  const searchParams = new URLSearchParams()

  if (filter) {
    searchParams.set('name', filter)
  }

  return await api.get(`team/type/${type}?${searchParams}`).json()
}
