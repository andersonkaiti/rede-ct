import { Badge } from '@components/ui/badge'
import { UserCard, UserCardImage } from '@components/ui/user-card'
import type { ITeamMember } from 'types/team'

export function UserCardComponent({ member }: { member: ITeamMember }) {
  return (
    <UserCard>
      <UserCardImage
        alt={`${member.user?.first_name} ${member.user?.last_name || ''}`}
        src={member.user?.profile_image_url ?? ''}
      />
      <div className="flex flex-grow flex-col items-center justify-between gap-2">
        <h1 className="text-center font-semibold text-xl">
          {member.user?.first_name} {member.user?.last_name ?? ''}
        </h1>
        <Badge className="rounded-full bg-primary px-4 py-1 text-white shadow-lg">
          <h2 className="text-center font-bold">{member.role}</h2>
        </Badge>
        <div className="rounded-lg bg-primary/20 px-4 py-2 text-center text-sm">
          {member.description}
        </div>
      </div>
    </UserCard>
  )
}
