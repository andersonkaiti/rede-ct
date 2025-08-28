interface IETPUser {
  first_name: string
  last_name: string
  profile_image_url?: string
  lattesUrl?: string
  orcid?: string
  email?: string
  institution?: string
  title?: string
  notes?: string
}

export interface IETP {
  name: string
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
