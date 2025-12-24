'use client'

import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '@components/ui/card'
import Link from 'next/link'

export interface ETPMemberUser {
  id: string
  name: string
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
  emailAddress: string
  orcid: string | null
  phone: string | null
  lattesUrl: string | null
  role: 'ADMIN' | 'USER'
}

export interface ETPResearcher {
  id: string
  registrationNumber: string
  mainEtps: string
  formations: string
  degrees: ('DOCTOR' | 'MASTER' | 'BACHELOR' | 'TECHNICAL' | 'POSTGRADUATE')[]
  occupations: string
  seniority: 'SENIOR' | 'RESEARCHER' | 'JUNIOR' | 'HONOR'
  institutions: string
  biography: string
  createdAt: string
  updatedAt: string
  userId: string
  user: ETPMemberUser
}

export interface ETPRoleMember {
  id: string
  etpId: string
  researcherId: string
  researcher: ETPResearcher
}

export type EtpMember = ETPResearcher

export interface ETPCardProps {
  etp: {
    id: string
    code: string
    title: string
    description: string | null
    notes: string | null
    createdAt: string
    updatedAt: string
    leader: ETPRoleMember
    deputyLeader: ETPRoleMember
    secretary: ETPRoleMember
    members: EtpMember[]
  }
}

export function ETPCard({ etp }: ETPCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-semibold text-foreground text-xl">
            {etp.title}
          </CardTitle>

          <Badge className="whitespace-nowrap border-primary/20 bg-primary/20 text-primary text-xs">
            {etp.code}
          </Badge>
        </div>

        <h4 className="line-clamp-2 text-justify text-sm">{etp.description}</h4>
      </CardHeader>

      <CardFooter>
        <Button asChild className="w-full" variant="outline">
          <Link href={`/quem-somos/eixos-tematicos-permanentes/etps/${etp.id}`}>
            Ver mais detalhes
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
