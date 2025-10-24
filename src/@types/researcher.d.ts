import type { IUser } from './user'

export interface IResearcher {
  id: string
  registrationNumber: string
  mainEtps: string | null
  formations: string | null
  degrees: string[]
  occupations: string
  seniority: string
  institutions: string
  biography: string | null
  createdAt: string
  updatedAt: string
  user: IUser
}
