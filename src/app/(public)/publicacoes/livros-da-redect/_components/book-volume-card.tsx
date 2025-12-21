import { Button } from '@components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface BookVolumeCardProps {
  volume: {
    id: string
    volumeNumber: number
    year: number
    title: string
    author: {
      id: string
      name: string
      emailAddress: string
      avatarUrl: string | null
      orcid: string | null
      lattesUrl: string | null
      role: string
    }
    accessUrl: string | null
    coverImageUrl: string | null
    catalogSheetUrl: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
  }
}

export function BookVolumeCard({
  volume: { id, volumeNumber, year, title, coverImageUrl },
}: BookVolumeCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="relative flex size-full overflow-hidden rounded-md">
          <Image
            alt={title}
            className="object-cover"
            fill
            priority
            src={coverImageUrl || '/placeholder.svg'}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent dark:from-black/70 dark:to-transparent" />
        </picture>
      </header>

      <div className="flex h-fit grow flex-col gap-4 py-2">
        <h1 className="font-semibold text-foreground text-xl">{title}</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <h2 className="text-muted-foreground">Volume</h2>
            <p className="whitespace-pre-wrap text-justify">{volumeNumber}</p>
          </div>

          <div className="space-y-1">
            <h2 className="text-muted-foreground">Ano</h2>
            <time className="whitespace-pre-wrap text-justify">{year}</time>
          </div>
        </div>

        <footer className="mt-4">
          <Button asChild variant="outline">
            <Link
              className="w-full"
              href={`/publicacoes/livros-da-redect/${id}`}
            >
              Ver mais detalhes
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
