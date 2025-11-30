import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import UserProfileHoverCard from '@components/user-profile-hover-card'
import { format } from 'date-fns'
import { ChevronUp, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

interface WebinarCardProps {
  webinar: {
    id: string
    title: string
    description: string | null
    scheduledAt: string
    webinarLink: string | null
    thumbnailUrl: string
    createdAt: string
    updatedAt: string
    guests?:
      | {
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
        }[]
      | undefined
  }
}

export function WebinarCard({
  webinar: {
    title,
    thumbnailUrl,
    guests,
    scheduledAt,
    webinarLink,
    description,
  },
}: WebinarCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="v relative flex size-full overflow-hidden rounded-md">
          <Image
            alt={guests?.[0].name || '/placeholder.svg'}
            className="object-cover"
            fill
            priority
            src={thumbnailUrl}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent dark:from-black/70 dark:to-transparent" />
        </picture>
      </header>

      <div className="flex h-fit grow flex-col gap-4 py-2">
        <div className="space-y-4">
          <time className="flex items-center gap-2 text-sm leading-4">
            <span className="text-muted-foreground">
              Dia {format(new Date(scheduledAt), 'dd/MM/yyyy')} às{' '}
              {format(new Date(scheduledAt), 'HH:mm')}
            </span>
          </time>

          <CardTitle className="font-semibold text-2xl">{title}</CardTitle>
        </div>

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
          <h4 className="w-fit font-semibold text-sm">Convidados(as)</h4>
          <div className="flex flex-col justify-center gap-2">
            {guests?.map((guest) => (
              <UserProfileHoverCard key={guest.id} user={guest} />
            ))}
          </div>
        </div>

        <footer className="mt-auto">
          <Button
            asChild
            className="group w-full font-bold"
            variant="outline"
            onClick={() => !webinarLink && toast.error('Link não disponível')}
          >
            <Link className="w-full" href={webinarLink || '#'}>
              <Play className="size-4 transition-all duration-200 group-hover:translate-x-1" />
              Acessar Webinário
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
