import { UserCard, UserCardImage } from '@components/ui/user-card'
import UserProfileHoverCard from '@components/user-profile-hover-card'

interface UserCardComponentProps {
  member: {
    id: string
    role: string
    description: string | null
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
  }
}

export function UserCardComponent({ member }: UserCardComponentProps) {
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
