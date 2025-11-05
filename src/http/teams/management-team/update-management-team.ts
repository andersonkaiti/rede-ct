import { api } from '@http/api-client'

interface IUpdateManagementTeam {
  id: string
  name?: string
  description?: string
  members?: {
    userId: string
    role: string
  }[]
}

export async function updateManagementTeam({
  id,
  ...team
}: IUpdateManagementTeam) {
  await api.put(`management-team/${id}`, {
    json: team,
  })
}
