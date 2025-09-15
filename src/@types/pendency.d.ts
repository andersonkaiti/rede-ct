import type { IUser } from './user'

export interface IPendency {
  id: string
  title: string
  description: string | null
  status: 'PENDING' | 'PAID'
  dueDate: string | null
  documentUrl: string
  createdAt: string
  updatedAt: string
  userId: string
  user: IUser
}
