import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

interface BookVolumeCardProps {
  volume: {
    id: string
    volumeNumber: number
    year: number
    title: string
    author: string
    accessUrl: string | null
    authorImageUrl: string | null
    coverImageUrl: string | null
    catalogSheetUrl: string | null
    description: string | null
    createdAt: string
    updatedAt: string
  }
}

export function BookVolumeCard({
  volume: {
    volumeNumber,
    year,
    title,
    author,
    accessUrl,
    authorImageUrl,
    catalogSheetUrl,
    coverImageUrl,
    description,
  },
}: BookVolumeCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="v relative flex size-full overflow-hidden rounded-md">
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
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm leading-4">
            <span className="text-muted-foreground">
              Volume {volumeNumber} {year}
            </span>
          </div>

          <CardTitle className="line-clamp-2 font-semibold text-2xl">
            {title}
          </CardTitle>

          <div className="flex items-center gap-3">
            {authorImageUrl && (
              <div className="relative size-12 overflow-hidden rounded-full">
                <Image
                  alt={author}
                  className="object-cover"
                  fill
                  src={authorImageUrl}
                />
              </div>
            )}
            <p className="text-muted-foreground text-sm">
              <span className="font-semibold">Autor:</span> {author}
            </p>
          </div>
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

        <footer className="mt-auto flex flex-col gap-2">
          <Button
            asChild
            onClick={() => !accessUrl && toast.error('Livro indisponível')}
            variant="outline"
          >
            <Link className="w-full" href={accessUrl || '#'}>
              Acessar livro
            </Link>
          </Button>

          {catalogSheetUrl && (
            <Button asChild variant="outline">
              <Link className="w-full" href={catalogSheetUrl}>
                Ver ficha catalográfica
              </Link>
            </Button>
          )}
        </footer>
      </div>
    </div>
  )
}
