import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import UserProfileHoverCard from '@components/user-profile-hover-card'
import { format } from 'date-fns'
import { ArrowRight, ChevronUp, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

interface CourseCardProps {
  course: {
    id: string
    title: string
    imageUrl: string | null
    coordinator: {
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
    email: string
    scheduledAt: string
    location: string
    registrationLink: string | null
    description: string | null
    createdAt: string
    updatedAt: string
    instructors?:
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

export function CourseCard({
  course: {
    title,
    imageUrl,
    instructors,
    scheduledAt,
    location,
    registrationLink,
    description,
    coordinator,
  },
}: CourseCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="v relative flex size-full overflow-hidden rounded-md">
          <Image
            alt={title}
            className="object-cover"
            fill
            priority
            src={imageUrl || '/placeholder.svg'}
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
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <MapPin className="size-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="w-fit font-semibold text-sm">Coordenador(a)</h4>
          <div className="flex flex-col justify-center gap-2">
            <UserProfileHoverCard user={coordinator} />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="w-fit font-semibold text-sm">Instrutores(as)</h4>
          <div className="flex flex-col justify-center gap-2">
            {instructors?.map((instructor) => (
              <UserProfileHoverCard key={instructor.id} user={instructor} />
            ))}
          </div>
        </div>

        <footer className="mt-auto">
          <Button
            asChild
            className="group w-full font-bold"
            variant="outline"
            onClick={() =>
              !registrationLink && toast.error('Link não disponível')
            }
          >
            <Link className="w-full" href={registrationLink || '#'}>
              Inscreva-se
              <ArrowRight className="size-4 transition-all duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
