import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { UserProfileHoverCard } from '@components/ui/user-profile-hover-card'
import { format } from 'date-fns'
import { ChevronUp, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

interface ResearchGroupCardProps {
  researchGroup: {
    id: string
    name: string
    acronym: string | null
    description: string | null
    url: string | null
    logoUrl: string | null
    foundedAt: string
    scope: string | null
    email: string | null
    leaderId: string
    deputyLeaderId: string
    createdAt: string
    updatedAt: string
    leader: {
      id: string
      name: string
      emailAddress: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      role: 'USER' | 'ADMIN'
    }
    deputyLeader: {
      id: string
      name: string
      emailAddress: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      role: 'USER' | 'ADMIN'
    }
  }
}

export function ResearchGroupCard({
  researchGroup: {
    name,
    acronym,
    logoUrl,
    foundedAt,
    url,
    description,
    scope,
    leader,
    deputyLeader,
  },
}: ResearchGroupCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="v relative flex size-full overflow-hidden rounded-md">
          <Image
            alt={name}
            className="object-cover"
            fill
            priority
            src={logoUrl || '/placeholder.svg'}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent dark:from-black/70 dark:to-transparent" />
        </picture>
      </header>

      <div className="flex h-fit grow flex-col gap-4 py-2">
        <div className="space-y-4">
          <time className="flex items-center gap-2 text-sm leading-4">
            <span className="text-muted-foreground">
              Fundado em {format(new Date(foundedAt), 'dd/MM/yyyy')}
            </span>
          </time>

          <div className="space-y-1">
            <CardTitle className="font-semibold text-2xl">{name}</CardTitle>
            {acronym && (
              <p className="text-muted-foreground text-sm">({acronym})</p>
            )}
          </div>
        </div>

        {scope && (
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">Escopo</h4>
            <p className="text-muted-foreground text-sm">{scope}</p>
          </div>
        )}

        {description && (
          <Collapsible>
            <CollapsibleTrigger className="group flex cursor-pointer items-center justify-between gap-2 p-0 text-sm">
              Descrição
              <ChevronUp className="size-4 transition-all duration-300 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="mt-2 text-justify text-sm">{description}</p>
            </CollapsibleContent>
          </Collapsible>
        )}

        <div className="space-y-2">
          <h4 className="w-fit font-semibold text-sm">Líder</h4>
          <div className="flex flex-col justify-center gap-2">
            <UserProfileHoverCard user={leader} />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="w-fit font-semibold text-sm">Vice-Líder</h4>
          <div className="flex flex-col justify-center gap-2">
            <UserProfileHoverCard user={deputyLeader} />
          </div>
        </div>

        <footer className="mt-auto">
          <Button
            asChild
            className="group w-full font-bold"
            variant="outline"
            onClick={() => !url && toast.error('Link não disponível')}
          >
            <Link className="w-full" href={url || '#'} target="_blank">
              <Globe className="size-4" />
              Visitar site
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
