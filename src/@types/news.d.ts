export interface INews {
  title: string
  content: string
  date: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  id: string
  author: {
    id: string
    name: string
    createdAt: string
    avatarUrl: string
    updatedAt: string
  }
}

export interface IPaginatedNews {
  page: number
  totalPages: number
  offset: number
  limit: number
  news: INews[]
}
