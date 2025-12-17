'use client'

import { UsersIcon, type UsersIconHandle } from '@components/icons/users'
import { Badge } from '@components/ui/badge'
import { Card, CardContent, CardHeader } from '@components/ui/card'
import { useRef } from 'react'

export function GTCCard() {
  const iconRef = useRef<UsersIconHandle>(null)

  return (
    <Card
      className="flex-1"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader>
        <h2 className="flex items-center gap-4 whitespace-normal font-bold text-xl lg:text-2xl">
          <Badge className="rounded-full bg-primary/20 p-1 text-primary">
            <UsersIcon ref={iconRef} />
          </Badge>
          GTC - GRUPO DE TRABALHO CIENTÍFICO
        </h2>
      </CardHeader>
      <CardContent className="space-y-7">
        <h3 className="whitespace-normal font-bold text-xl lg:text-2xl">
          O que são os GTCs?
        </h3>
        <p className="text-justify">
          O Grupo de Trabalho Científico - GTC é um grupo de Pesquisadores
          Filiados à RedeCT, que por sua vez, se organizam a partir de um líder
          e um vice-líder, assumindo a organização e gestão continuada de um
          ETP.
        </p>
        <p className="text-justify">
          Assim, não existe um ETP sem que haja um GTC para a sua
          sustentação. Cada ETP é planejado e conduzido por um GTC.
        </p>
      </CardContent>
    </Card>
  )
}
