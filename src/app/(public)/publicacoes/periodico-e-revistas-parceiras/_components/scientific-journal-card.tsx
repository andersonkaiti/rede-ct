import { Button } from '@components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface ScientificJournalCardProps {
  journal: {
    id: string
    name: string
    issn: string
    description: string
    journalUrl: string
    logoUrl: string | null
    directors: string | null
    editorialBoard: string | null
    createdAt: Date
    updatedAt: Date
  }
}

export function ScientificJournalCard({
  journal: { id, name, issn, logoUrl },
}: ScientificJournalCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="relative flex size-full overflow-hidden rounded-md">
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
          <h1 className="font-semibold text-foreground text-xl">{name}</h1>

          <div className="space-y-1 text-sm">
            <h2 className="text-muted-foreground">ISSN</h2>
            <p className="whitespace-pre-wrap text-justify">{issn}</p>
          </div>
        </div>

        <footer className="mt-4">
          <Button asChild variant="outline">
            <Link
              className="w-full"
              href={`/publicacoes/periodico-e-revistas-parceiras/${id}`}
            >
              Ver mais detalhes
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
