import { Badge } from '@components/ui/badge'
import {
  UserCard,
  UserCardButtonLattes,
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
        <div className="flex flex-grow flex-col items-center justify-between gap-2">
          <h1 className="text-center font-bold text-xl md:text-3xl">
            {member.user?.first_name} {member.user?.last_name}
          </h1>
          <Badge className="rounded-full border border-primary/20 bg-primary/20 px-4 py-1 text-primary shadow-lg">
            <h2 className="text-center font-bold">{member.role}</h2>
          </Badge>
        </div>

        <UserCardButtonLattes href={member.user?.lattesUrl || ''} />
      </UserCardContent>
    </UserCard>
  )
}
