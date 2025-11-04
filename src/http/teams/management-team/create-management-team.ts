import { api } from '@http/api-client'

interface ICreateManagementTeamRequest {
  name: string
  description?: string
  members: {
    userId: string
    role: string
  }[]
}

export async function createManagementTeam(data: ICreateManagementTeamRequest) {
  await api.post('management-team', {
    json: data,
  })
}
