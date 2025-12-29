import {
  UserCard,
  UserCardContent,
  UserCardImage,
  UserCardWrapper,
} from '@components/ui/user-card'
import { UserProfileHoverCard } from '@components/ui/user-profile-hover-card'
import { ROLE_MAPPING, type Role } from '../../_components/constants'

interface IETPCoordenationProps {
  members: {
    id: string
    registrationNumber: string
    mainEtps: string
    formations: string
    degrees: ('DOCTOR' | 'MASTER' | 'BACHELOR' | 'TECHNICAL' | 'POSTGRADUATE')[]
    occupations: string
    seniority: 'SENIOR' | 'RESEARCHER' | 'JUNIOR' | 'HONOR'
    institutions: string
    biography: string
    createdAt: string
    updatedAt: string
    userId: string
    user: {
      id: string
      name: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      emailAddress: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      role: 'ADMIN' | 'USER'
    }
  }[]
}

export function ETPCoordenation({ members }: IETPCoordenationProps) {
  return (
    <>
      <h3 className="mb-2 font-semibold text-muted-foreground text-sm">
        Coordenação
      </h3>

      <UserCardWrapper>
        {members.map((member, index) => (
          <UserCard key={member.id + index}>
            <UserCardImage
              alt={member.user.name}
              src={member.user.avatarUrl || '/images/placeholder.png'}
            />
            <UserCardContent>
              <div className="flex grow flex-col items-center justify-between gap-1">
                <h1 className="text-center font-bold text-base">
                  <UserProfileHoverCard
                    user={member.user}
                    avatarVisibility={false}
                  />
                </h1>
                <h2 className="text-center font-semibold text-muted-foreground text-xs">
                  {ROLE_MAPPING[member.user.role as Role]}
                </h2>
              </div>
            </UserCardContent>
          </UserCard>
        ))}
      </UserCardWrapper>
    </>
  )
}
