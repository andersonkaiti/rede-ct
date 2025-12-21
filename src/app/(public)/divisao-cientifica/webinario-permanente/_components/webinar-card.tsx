import { Button } from '@components/ui/button'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

interface WebinarCardProps {
  webinar: {
    id: string
    title: string
    description: string | null
    scheduledAt: Date
    webinarLink: string | null
    thumbnailUrl: string
    createdAt: Date
    updatedAt: Date
    guests?:
      | {
          id: string
          name: string
          emailAddress: string
          avatarUrl: string | null
          createdAt: Date
          updatedAt: Date
          orcid: string | null
          phone: string | null
          lattesUrl: string | null
          role: 'USER' | 'ADMIN'
        }[]
      | undefined
  }
}

export function WebinarCard({
  webinar: { title, thumbnailUrl, guests, scheduledAt, id },
}: WebinarCardProps) {
  const formattedScheduledAt = format(
    scheduledAt,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

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
          <time className="text-muted-foreground text-sm leading-4">
            {formattedScheduledAt}
          </time>

          <h1 className="font-semibold text-foreground text-xl">{title}</h1>
        </div>

        <footer className="mt-4">
          <Button asChild variant="outline">
            <Link
              className="w-full"
              href={`/divisao-cientifica/webinario-permanente/${id}`}
            >
              Ver mais detalhes
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
