export interface INews {
  title: string
  content: string
  author: {
    id: string
    first_name: string
    last_name: string
    created_at: string
    image_url: string
    profile_image_url: string
    updated_at: string
  }
  date: string
  image_url?: string
  created_at: string
  updated_at: string
  id: string
  author_id: string
}

export interface IPaginatedNews {
  page: number
  totalPages: number
  offset: number
  limit: number
  news: INews[]
}
