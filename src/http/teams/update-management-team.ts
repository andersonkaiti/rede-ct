import { api } from '@http/api-client'

interface IUpdateManagementTeam {
  id: string
  name: string
  members: {
    role: string
    id: string
    user: {
      id: string
    }
  }[]
}

export async function updateManagementTeam({
  id,
  ...team
}: IUpdateManagementTeam) {
  return await api.put(`team/${id}`, {
    json: team,
  })
}
