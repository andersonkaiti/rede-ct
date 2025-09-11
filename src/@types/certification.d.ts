import type { IUser } from './user'

export interface ICertification {
  id: string
  title: string
  description: string
  certificationUrl: string
  userId: string
  user?: IUser
}
