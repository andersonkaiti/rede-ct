import { Button } from '@components/ui/button'
import { CardTitle } from '@components/ui/card'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

interface ResearchGroupCardProps {
  researchGroup: {
    id: string
    name: string
    acronym: string | null
    description: string | null
    url: string | null
    logoUrl: string | null
    foundedAt: Date
    scope: string | null
    email: string | null
    leaderId: string
    deputyLeaderId: string
    createdAt: Date
    updatedAt: Date
    leader: {
      id: string
      name: string
      emailAddress: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      role: 'USER' | 'ADMIN'
    }
    deputyLeader: {
      id: string
      name: string
      emailAddress: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      role: 'USER' | 'ADMIN'
    }
  }
}

export function ResearchGroupCard({
  researchGroup: { id, name, acronym, logoUrl, foundedAt, scope },
}: ResearchGroupCardProps) {
  const formattedFoundedAt = format(foundedAt, 'dd/MM/yyyy')

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
          <CardTitle className="font-semibold text-2xl">{name}</CardTitle>
          {acronym && (
            <p className="text-muted-foreground text-sm">({acronym})</p>
          )}
        </div>

        <div className="space-y-1">
          <h4 className="text-muted-foreground text-sm">Fundado em</h4>
          <p className="text-sm">{formattedFoundedAt}</p>
        </div>

        <footer className="mt-auto">
          <Button asChild className="w-full" variant="outline">
            <Link href={`/portfolio/grupo-de-pesquisa/${id}`}>
              Ver detalhes
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}
