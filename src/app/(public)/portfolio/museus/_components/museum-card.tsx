import { Button } from '@components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import { ChevronUp, Clock, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

interface MuseumCardProps {
  museum: {
    id: string
    logoUrl: string | null
    name: string
    city: string | null
    state: string | null
    country: string | null
    description: string | null
    website: string | null
    email: string | null
    phone: string | null
    address: string | null
    functioning: string | null
    createdAt: string
    updatedAt: string
  }
}

export function MuseumCard({
  museum: {
    name,
    logoUrl,
    city,
    state,
    country,
    website,
    description,
    email,
    phone,
    address,
    functioning,
  },
}: MuseumCardProps) {
  const location = [city, state, country].filter(Boolean).join(', ')

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
          {location && (
            <span className="text-muted-foreground text-sm leading-4">
              {location}
            </span>
          )}

          <h1 className="font-semibold text-2xl">{name}</h1>
        </div>

        {description && (
          <Collapsible>
            <CollapsibleTrigger className="group flex cursor-pointer items-center justify-between gap-2 p-0 text-sm">
              Sobre o Museu
              <ChevronUp className="size-4 transition-all duration-300 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="mt-2 text-justify text-sm">{description}</p>
            </CollapsibleContent>
          </Collapsible>
        )}

        <div className="space-y-3">
          {email && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="size-4" />
              {email}
            </div>
          )}

          {phone && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Phone className="size-4" />
              <span>{phone}</span>
            </div>
          )}

          {address && (
            <div className="flex items-start gap-2 text-muted-foreground text-sm">
              <MapPin className="mt-0.5 size-4" />
              <span>{address}</span>
            </div>
          )}

          {functioning && (
            <div className="flex items-start gap-2 text-muted-foreground text-sm">
              <Clock className="mt-0.5 size-4" />
              <span>{functioning}</span>
            </div>
          )}
        </div>

        <footer className="mt-auto">
          <Button
            asChild
            className="group w-full font-bold"
            variant="outline"
            onClick={() => !website && toast.error('Link não disponível')}
          >
            <Link className="w-full" href={website || '#'} target="_blank">
              Visitar site
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
