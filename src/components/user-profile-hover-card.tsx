import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@components/ui/hover-card'
import { getInitials } from '@utils/get-initials'
import Link from 'next/link'
import type { IUser } from 'types/user'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface UserProfileHoverCardProps {
  user: IUser
  avatarVisibility?: boolean
}

export default function UserProfileHoverCard({
  user,
  avatarVisibility = true,
}: UserProfileHoverCardProps) {
  return (
    <HoverCard>
      <div className="flex items-center gap-2">
        {avatarVisibility && (
          <Avatar className="size-7 shrink-0">
            <AvatarImage alt={`Avatar de ${user.name}`} src={user.avatarUrl} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
        )}
        <div className="space-y-0.5">
          <HoverCardTrigger asChild>
            <Link
              className="font-medium text-sm hover:underline"
              href={`/perfil/${user.id}`}
            >
              <span className="font-medium text-sm">{user.name}</span>
            </Link>
          </HoverCardTrigger>
        </div>
      </div>
      <HoverCardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="size-10">
              <AvatarImage
                alt={`Avatar de ${user.name}`}
                src={user.avatarUrl}
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
