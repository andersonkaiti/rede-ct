import { api } from '@http/api-client'

interface ICreateManagementTeamRequest {
  name: string
  type: string
  members: {
    role: string
    user: {
      id: string
    }
  }[]
}

export async function createManagementTeam(data: ICreateManagementTeamRequest) {
  await api.post('team', {
    json: data,
  })
}
