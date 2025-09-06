import {
  UserCard,
  UserCardContent,
  UserCardImage,
  UserCardWrapper,
} from '@components/ui/user-card'
import type { IETP } from 'types/etp'

interface IETPCoordenationProps {
  members: IETP['members']
}

export function ETPCoordenation({ members }: IETPCoordenationProps) {
  if (!members || members.length === 0) {
    return null
  }

  return (
    <>
      <h3 className="mb-2 font-semibold text-muted-foreground text-sm">
        Coordenação
      </h3>
      <UserCardWrapper>
        {members.map((member) => (
          <UserCard key={member.user.name}>
            <UserCardImage
              alt={member.user.name}
              src={member.user?.avatarUrl || '/images/placeholder.png'}
            />
            <UserCardContent>
              <div className="flex flex-grow flex-col items-center justify-between gap-1">
                <h1 className="text-center font-bold text-base">
                  {member.user.title} {member.user?.name}
                </h1>
                <h2 className="text-center font-semibold text-muted-foreground text-xs">
                  {member.role}
                </h2>
                {member.user?.institution && (
                  <span className="text-muted-foreground text-xs">
                    {member.user.institution}
                  </span>
                )}
              </div>
            </UserCardContent>
          </UserCard>
        ))}
      </UserCardWrapper>
    </>
  )
}
