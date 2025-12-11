import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { format } from 'date-fns'
import { Award, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

interface RedeCTHighlightCardProps {
  highlight: {
    id: string
    type: 'PERSON' | 'INSTITUTION'
    name: string
    description: string | null
    honorableMention: string | null
    imageUrl: string | null
    honoredAt: string
    meritUrl: string | null
    createdAt: string
    updatedAt: string
  }
}

export function RedeCTHighlightCard({
  highlight: {
    name,
    type,
    imageUrl,
    honoredAt,
    meritUrl,
    description,
    honorableMention,
  },
}: RedeCTHighlightCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <header className="h-80">
        <picture className="relative flex size-full overflow-hidden rounded-md">
          <Image
            alt={name}
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
              Homenageado em {format(new Date(honoredAt), 'dd/MM/yyyy')}
            </span>
          </time>

          <div className="space-y-1">
            <CardTitle className="font-semibold text-2xl">{name}</CardTitle>
            <p className="text-muted-foreground text-sm">
              {type === 'PERSON' ? 'Pessoa' : 'Instituição'}
            </p>
          </div>
        </div>

        {honorableMention && (
          <div className="flex items-start gap-2 rounded-md border bg-muted/30 p-3">
            <Award className="mt-0.5 size-4 shrink-0 text-primary" />
            <div className="space-y-1">
              <h4 className="font-semibold text-sm">Menção Honrosa</h4>
              <p className="text-muted-foreground text-sm">
                Este destaque recebeu menção honrosa
              </p>
            </div>
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

        <footer className="mt-auto">
          <Button
            asChild
            className="group w-full font-bold"
            variant="outline"
            onClick={() => !meritUrl && toast.error('Link não disponível')}
          >
            <Link className="w-full" href={meritUrl || '#'} target="_blank">
              Ver mérito
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
