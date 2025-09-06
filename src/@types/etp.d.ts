interface IETPUser {
  name: string
  avatarUrl?: string
  lattesUrl?: string
  orcid?: string
  email?: string
  institution?: string
  title?: string
  notes?: string
}

export interface IETP {
  id: string
  code: string
  title: string
  description: string
  text: string
  members: {
    role: string
    user: IETPUser
  }[]
  gtMembers?: {
    name: string
    role?: string
    registration?: string
    institution?: string
    notes?: string
  }[]
  gtText: string
}
