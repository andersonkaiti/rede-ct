import { Tooltip, TooltipContent, TooltipTrigger } from '@components/ui/tooltip'
import { UserCard, UserCardImage } from '@components/ui/user-card'
import { UserProfileHoverCard } from '@components/ui/user-profile-hover-card'
import { Award } from 'lucide-react'
import { TYPE_MAPPING } from './constants'

interface UserCardComponentProps {
  member: {
    id: string
    type: 'PERSON' | 'INSTITUTION'
    description: string | null
    honorableMention: boolean | null
    honoredAt: Date
    meritUrl: string | null
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
    createdAt: Date
    updatedAt: Date
  }
}

export function UserCardComponent({ member }: UserCardComponentProps) {
  return (
    <div className="relative">
      {member.honorableMention && (
        <div className="absolute top-2 right-2 z-10">
          <div className="flex items-center gap-1 rounded-full bg-amber-500/90 px-2 py-1 text-white shadow-md">
            <Award className="size-3" />
            <span className="font-semibold text-xs">Menção Honrosa</span>
          </div>
        </div>
      )}

      <UserCard>
        <Tooltip>
          <TooltipTrigger>
            <UserCardImage
              alt={member.user.name}
              src={member.user.avatarUrl as string}
            />
          </TooltipTrigger>
          <TooltipContent className="max-w-80">
            <p className="whitespace-pre-wrap text-justify">
              {member.description}
            </p>
          </TooltipContent>
        </Tooltip>
        <div className="flex grow flex-col items-center justify-between gap-1">
          <h1 className="text-center font-bold text-xl">
            <UserProfileHoverCard avatarVisibility={false} user={member.user} />
          </h1>
          <h2 className="text-center font-semibold text-muted-foreground text-xs">
            {TYPE_MAPPING[member.type]}
          </h2>
        </div>
      </UserCard>
    </div>
  )
}
