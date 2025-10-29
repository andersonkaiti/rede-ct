export interface IPartner {
  id: string
  name: string
  logoUrl: string | null
  websiteUrl: string | null
  description: string | null
  category: string | null
  since: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
