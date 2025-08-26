import {
  UserCard,
  UserCardContent,
  UserCardImage,
} from '@components/ui/user-card'
import type { ITeamMember } from 'types/team'

export function UserCardComponent({ member }: { member: ITeamMember }) {
  return (
    <UserCard>
      <UserCardImage
        alt={`${member.user?.first_name} ${member.user?.last_name}`}
        src={member.user?.profile_image_url || '/images/placeholder.png'}
      />
      <UserCardContent>
        <div className="flex flex-grow flex-col items-center justify-between gap-1">
          <h1 className="text-center font-bold text-base">
            {member.user?.first_name} {member.user?.last_name}
          </h1>
          <h2 className="text-center font-semibold text-muted-foreground text-xs">
            {member.role}
          </h2>
        </div>
      </UserCardContent>
    </UserCard>
  )
}
