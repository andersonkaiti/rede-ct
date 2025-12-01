import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { format } from 'date-fns'
import { ArrowRight, ChevronUp, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

interface PostGraduateProgramCardProps {
  program: {
    id: string
    title: string
    imageUrl: string | null
    description: string | null
    startDate: string
    endDate: string
    contact: string
    registrationLink: string | null
    createdAt: string
    updatedAt: string
  }
}

export function PostGraduateProgramCard({
  program: {
    title,
    imageUrl,
    startDate,
    endDate,
    contact,
    registrationLink,
    description,
  },
}: PostGraduateProgramCardProps) {
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
          <div className="flex items-center gap-2 text-sm leading-4">
            <span className="text-muted-foreground">
              Inscrições de: {format(new Date(startDate), 'dd/MM/yyyy HH:mm')}{' '}
              até {format(new Date(endDate), 'dd/MM/yyyy HH:mm')}
            </span>
          </div>

          <CardTitle className="line-clamp-2 font-semibold text-2xl">
            {title}
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

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Mail className="size-4" />
            <span>Contato: {contact}</span>
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
