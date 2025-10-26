export type InMemoriamRole = 'RESEARCHER' | 'LEADER'

export interface IInMemoriam {
  name: string
  biography: string | null
  role: InMemoriamRole
  id: string
  birthDate: Date
  deathDate: Date
  photoUrl?: string | null
  createdAt: Date
  updatedAt: Date
}
