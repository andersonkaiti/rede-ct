interface IUser {
  id: string
  name: string
  avatarUrl: string | null
  createdAt: Date
  updatedAt: Date
  emailAddress: string
  orcid: string | null
  phone: string | null
  lattesUrl: string | null
  role: string
}

interface IResearcher {
  id: string
  registrationNumber: string
  mainEtps: string | null
  formations: string | null
  degrees: string[]
  occupations: string
  seniority: string
  institutions: string
  biography: string | null
  createdAt: Date
  updatedAt: Date
  user: IUser
}

interface IETPResearcher {
  etpId: string
  id: string
  researcher: IResearcher
  researcherId: string
}

export interface IETP {
  id: string
  createdAt: Date
  updatedAt: Date
  code: string
  title: string
  description: string | null
  notes: string | null
  leader: IETPResearcher | null
  deputyLeader: IETPResearcher | null
  secretary: IETPResearcher | null
  members: IResearcher[]
}
