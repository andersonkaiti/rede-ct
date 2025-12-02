import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { ChevronUp, ExternalLink } from 'lucide-react'
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
    createdAt: string
    updatedAt: string
  }
}

export function ScientificJournalCard({
  journal: {
    name,
    issn,
    description,
    journalUrl,
    logoUrl,
    directors,
    editorialBoard,
  },
}: ScientificJournalCardProps) {
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
          <div className="flex items-center gap-2 text-sm leading-4">
            <span className="text-muted-foreground">ISSN: {issn}</span>
          </div>

          <CardTitle className="line-clamp-2 font-semibold text-2xl">
            {name}
          </CardTitle>
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

        {directors && (
          <Collapsible>
            <CollapsibleTrigger className="group flex cursor-pointer items-center justify-between gap-2 p-0 text-sm">
              Diretores
              <ChevronUp className="size-4 transition-all duration-300 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="mt-2 text-justify text-sm">{directors}</p>
            </CollapsibleContent>
          </Collapsible>
        )}

        {editorialBoard && (
          <Collapsible>
            <CollapsibleTrigger className="group flex cursor-pointer items-center justify-between gap-2 p-0 text-sm">
              Conselho Editorial
              <ChevronUp className="size-4 transition-all duration-300 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="mt-2 text-justify text-sm">{editorialBoard}</p>
            </CollapsibleContent>
          </Collapsible>
        )}

        <footer className="mt-auto">
          <Button asChild className="group w-full font-bold" variant="outline">
            <Link className="w-full" href={journalUrl} target="_blank">
              Acessar revista
              <ExternalLink className="size-4 transition-all duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
