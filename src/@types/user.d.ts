export interface IUser {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  avatarUrl: string | null
  emailAddress: string
  role: 'ADMIN' | 'USER'
  orcid: string | null
  phone: string | null
  lattesUrl: string | null
}
