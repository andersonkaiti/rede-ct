import {
  UserCard as UserCardComponent,
  UserCardImage,
} from '@components/ui/user-card'
import type { ITeamMember } from 'types/team'

export function UserCard({ member }: { member: ITeamMember }) {
  return (
    <UserCardComponent>
      <UserCardImage
        alt={`${member.user?.first_name} ${member.user?.last_name || ''}`}
        src={member.user?.image_url as string}
      />
      <div className="flex flex-grow flex-col items-center justify-between gap-4">
        <h1 className="text-center font-bold text-xl">
          {member.user?.first_name} {member.user?.last_name || ''}
        </h1>
        <h2 className="text-center font-bold">{member.role}</h2>
      </div>
    </UserCardComponent>
  )
}
