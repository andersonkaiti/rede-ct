import type { IUser } from './user'

export interface INews {
  title: string
  content: string
  date: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  id: string
  author: IUser
}

export interface IPaginatedNews {
  page: number
  totalPages: number
  offset: number
  limit: number
  news: INews[]
}
