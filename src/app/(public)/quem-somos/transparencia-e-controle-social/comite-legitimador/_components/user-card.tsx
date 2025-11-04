import {
  UserCard,
  UserCardContent,
  UserCardImage,
} from '@components/ui/user-card'
import UserProfileHoverCard from '@components/user-profile-hover-card'

interface IUserCardComponentProps {
  member: {
    id: string
    role: string
    description: string | null
    createdAt: string
    updatedAt: string
    userId: string
    user: {
      name: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      id: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      emailAddress: string
      role: 'ADMIN' | 'USER'
    }
  }
}

export function UserCardComponent({ member }: IUserCardComponentProps) {
  return (
    <UserCard>
      <UserCardImage
        alt={`${member.user.name}`}
        src={member.user.avatarUrl || '/images/placeholder.png'}
      />
      <UserCardContent>
        <div className="flex flex-grow flex-col items-center justify-between gap-1">
          <h1 className="text-center font-bold text-base">
            <UserProfileHoverCard avatarVisibility={false} user={member.user} />
          </h1>
          <h2 className="text-center font-semibold text-muted-foreground text-xs">
            {member.role}
          </h2>
        </div>
      </UserCardContent>
    </UserCard>
  )
}
