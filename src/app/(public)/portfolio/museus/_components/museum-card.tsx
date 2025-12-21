import { Button } from '@components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

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
    createdAt: Date
    updatedAt: Date
  }
}

export function MuseumCard({
  museum: { id, name, logoUrl, city, state, country },
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
        <div className="space-y-1">
          <h1 className="font-semibold text-2xl">{name}</h1>
          {location && (
            <p className="text-muted-foreground text-sm">{location}</p>
          )}
        </div>

        <footer className="mt-auto">
          <Button asChild className="w-full" variant="outline">
            <Link href={`/portfolio/museus/${id}`}>Ver detalhes</Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
