'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { getInitials } from '@utils/get-initials'
import { Medal } from 'lucide-react'
import Link from 'next/link'
import {
  DEGREE_LABEL_MAP,
  SENIORITY_LABEL_MAP,
  type Seniority,
} from './constants'

interface IResearcherListCardProps {
  researcher: {
    id: string
    createdAt: string
    registrationNumber: string
    mainEtps: string | null
    formations: string | null
    degrees: Array<
      'DOCTOR' | 'MASTER' | 'BACHELOR' | 'TECHNICAL' | 'POSTGRADUATE'
    >
    occupations: string
    seniority: Seniority
    institutions: string
    biography: string | null
    user: {
      id: string
      name: string
      emailAddress: string
      orcid: string | null
      lattesUrl: string | null
      avatarUrl: string | null
      phone: string | null
      createdAt: string
      role: 'ADMIN' | 'USER'
    }
  }
}

export function ResearcherListCard({ researcher }: IResearcherListCardProps) {
  const { name, avatarUrl, emailAddress } = researcher.user

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="mb-4 flex items-center gap-4">
          <Avatar className="size-16 shrink-0">
            <AvatarImage
              alt={`Avatar de ${name}`}
              src={avatarUrl ?? undefined}
            />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <CardTitle className="line-clamp-2 font-semibold text-foreground text-xl">
              {name}
            </CardTitle>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Medal className="h-3.5 w-3.5" />
              <span className="truncate">
                {SENIORITY_LABEL_MAP[researcher.seniority as Seniority]}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {researcher.degrees.slice(0, 2).map((degree) => (
            <Badge key={degree} variant="secondary">
              {DEGREE_LABEL_MAP[degree]}
            </Badge>
          ))}
          {researcher.degrees.length > 2 && (
            <Badge variant="secondary">+{researcher.degrees.length - 2}</Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
        {researcher.institutions && (
          <div className="space-y-1">
            <h2 className="text-muted-foreground">Instituições</h2>
            <p className="line-clamp-2 text-justify">
              {researcher.institutions}
            </p>
          </div>
        )}

        {emailAddress && (
          <div className="space-y-1">
            <h2 className="text-muted-foreground">E-mail</h2>
            <p className="truncate text-sm">{emailAddress}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="mt-auto">
        <Button className="flex-1" asChild variant="outline">
          <Link
            href={`/quem-somos/pesquisadores-participantes/pesquisadores/${researcher.id}`}
          >
            Ver mais detalhes
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
