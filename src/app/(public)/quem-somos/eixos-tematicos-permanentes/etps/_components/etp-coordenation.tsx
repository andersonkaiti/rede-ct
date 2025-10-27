import {
  UserCard,
  UserCardContent,
  UserCardImage,
  UserCardWrapper,
} from '@components/ui/user-card'
import type { IETPResearcher } from 'types/etp'
import { ROLE_MAPPING, type Role } from '../_contents/roles'

interface IETPCoordenationProps {
  members: IETPResearcher[]
}

export function ETPCoordenation({ members }: IETPCoordenationProps) {
  return (
    <>
      <h3 className="mb-2 font-semibold text-muted-foreground text-sm">
        Coordenação
      </h3>
      <UserCardWrapper>
        {members.map((member) => (
          <UserCard key={member.id}>
            <UserCardImage
              alt={member.researcher.user.name}
              src={
                member.researcher.user.avatarUrl || '/images/placeholder.png'
              }
            />
            <UserCardContent>
              <div className="flex flex-grow flex-col items-center justify-between gap-1">
                <h1 className="text-center font-bold text-base">
                  {member.researcher.user.name}
                </h1>
                <h2 className="text-center font-semibold text-muted-foreground text-xs">
                  {ROLE_MAPPING[member.researcher.user.role as Role]}
                </h2>
              </div>
            </UserCardContent>
          </UserCard>
        ))}
      </UserCardWrapper>
    </>
  )
}
