import { UserCard, UserCardImage } from '@components/ui/user-card'
import UserProfileHoverCard from '@components/user-profile-hover-card'
import type { ITeamMember } from 'types/team'

export function UserCardComponent({ member }: { member: ITeamMember }) {
  return (
    <UserCard>
      <UserCardImage
        alt={member.user.name}
        src={member.user.avatarUrl as string}
      />
      <div className="flex flex-grow flex-col items-center justify-between gap-1">
        <h1 className="text-center font-bold text-xl">
          <UserProfileHoverCard avatarVisibility={false} user={member.user} />
        </h1>
        <h2 className="text-center font-semibold text-muted-foreground text-xs">
          {member.role}
        </h2>
      </div>
    </UserCard>
  )
}
