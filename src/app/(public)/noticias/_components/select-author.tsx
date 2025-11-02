import { Avatar } from '@components/ui/avatar'
import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { Separator } from '@components/ui/separator'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { cn } from '@utils/cn'
import { getInitials } from '@utils/get-initials'
import { UserIcon } from 'lucide-react'
import { parseAsString, useQueryState } from 'nuqs'

interface ISelectAuthorProps {
  authors: {
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
  }[]
}

export function SelectAuthor({ authors }: ISelectAuthorProps) {
  const [authorId, setAuthorId] = useQueryState(
    'authorId',
    parseAsString.withDefault('')
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-muted-foreground" variant="ghost">
          <UserIcon />
          {authors.length}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-1">
        {authorId && (
          <>
            <DropdownMenuItem
              className={cn('gap-2', !authorId && 'bg-accent/50 font-semibold')}
              onSelect={() => setAuthorId('')}
            >
              <UserIcon className="size-4" />
              <span className="text-xs">Todos autores</span>
            </DropdownMenuItem>

            <Separator />
          </>
        )}

        {authors.length === 0 ? (
          <DropdownMenuItem disabled>
            <span className="text-muted-foreground text-xs">Nenhum autor</span>
          </DropdownMenuItem>
        ) : (
          authors.map(({ id, avatarUrl, name }) => (
            <DropdownMenuItem
              className={cn(
                'gap-2',
                authorId === id && 'bg-accent/50 font-semibold'
              )}
              key={id}
              onSelect={() => setAuthorId(id)}
            >
              <Avatar className="size-6">
                <AvatarImage src={avatarUrl ?? undefined} />
                <AvatarFallback>{getInitials(name)}</AvatarFallback>
              </Avatar>
              <span className="truncate text-xs">{name}</span>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
