import { api } from '@http/api-client'

interface IGetTeamMemberByIdResponse {
  id: string
  role: string
  description: string | null
  createdAt: Date
  updatedAt: Date
  teamId: string
  userId: string
}

export async function getTeamMemberById(
  memberId: string
): Promise<IGetTeamMemberByIdResponse> {
  return await api.get(`team/member/${memberId}`).json()
}
