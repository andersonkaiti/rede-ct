import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@components/ui/hover-card'
import { getInitials } from '@utils/get-initials'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

interface UserProfileHoverCardProps {
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
  avatarVisibility?: boolean
}

export function UserProfileHoverCard({
  user,
  avatarVisibility = true,
}: UserProfileHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex w-fit cursor-pointer items-center gap-2 rounded-md px-2 py-1 transition hover:bg-muted">
          {avatarVisibility && (
            <Avatar className="size-7 shrink-0">
              <AvatarImage
                alt={`Avatar de ${user.name}`}
                src={user.avatarUrl ?? undefined}
              />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>
          )}
          <Link className="text-sm" href={`/perfil/${user.id}`}>
            {user.name}
          </Link>
        </div>
      </HoverCardTrigger>

      <HoverCardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="size-10">
              <AvatarImage
                alt={`Avatar de ${user.name}`}
                src={user.avatarUrl ?? undefined}
              />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>

            <div className="space-y-0.5 text-start">
              <span className="block font-medium text-sm">{user.name}</span>
              <span className="block text-muted-foreground text-xs">
                {user.emailAddress}
              </span>
            </div>
          </div>

          <span className="block text-start text-muted-foreground text-xs">
            Membro desde{' '}
            {new Date(user.createdAt).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
            })}
            .
          </span>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
