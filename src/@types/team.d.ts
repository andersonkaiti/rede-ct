import type { IUser } from './user'

export interface ITeamMember {
  role: string
  id?: string
  createdAt?: string
  updatedAt?: string
  description?: string
  user: IUser
}

export interface ITeam {
  id: string
  name: string
  type: string
  createdAt: string
  updatedAt: string
  members: ITeamMember[]
}
