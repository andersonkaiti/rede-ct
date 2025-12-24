import { Button } from '@components/ui/button'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

interface PostGraduateProgramCardProps {
  program: {
    id: string
    title: string
    imageUrl: string | null
    description: string | null
    startDate: Date
    endDate: Date
    contact: string
    registrationLink: string | null
    createdAt: Date
    updatedAt: Date
  }
}

export function PostGraduateProgramCard({
  program: { title, imageUrl, startDate, endDate, id },
}: PostGraduateProgramCardProps) {
  const formattedStartDate = format(
    startDate,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  const formattedEndDate = format(endDate, "d 'de' MMMM 'de' yyyy 'às' HH:mm", {
    locale: ptBR,
  })

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
          <h1 className="font-semibold text-foreground text-xl">{title}</h1>

          <div className="space-y-1 text-sm">
            <h2 className="text-muted-foreground">Inscrições de</h2>
            <p className="whitespace-pre-wrap text-justify">
              {formattedStartDate} até {formattedEndDate}
            </p>
          </div>
        </div>

        <footer className="mt-4">
          <Button asChild variant="outline">
            <Link
              className="w-full"
              href={`/divisao-cientifica/pos-graduacao/${id}`}
            >
              Ver mais detalhes
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
