'use client'

import { UsersIcon, type UsersIconHandle } from '@components/icons/users'
import { Badge } from '@components/ui/badge'
import { Card, CardContent, CardHeader } from '@components/ui/card'
import { ListNumber } from '@components/ui/list-number'
import { useRef } from 'react'

export function ResearchersClassificationCard() {
  const iconRef = useRef<UsersIconHandle>(null)

  return (
    <Card
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader className="flex items-center gap-4">
        <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
          <UsersIcon className="text-primary" ref={iconRef} />
        </Badge>
        <h2 className="font-semibold text-2xl">
          Classificação dos Pesquisadores
        </h2>
      </CardHeader>
      <CardContent className="space-y-7">
        <p className="text-justify">
          Os Pesquisadores Filiados são classificados como:
        </p>
        <ol className="space-y-4">
          <li className="flex items-start">
            <ListNumber>1</ListNumber>
            Pesquisador Senior (Doutor ou Livre-docente)
          </li>
          <li className="flex items-start">
            <ListNumber>2</ListNumber>
            Pesquisador (Mestre ou profissional com graduação concluída)
          </li>
          <li className="flex items-start">
            <ListNumber>3</ListNumber>
            Pesquisador Júnior (estudante de graduação ou mesmo de ensino médio,
            que tenham mais de 18 anos de idade)
          </li>
        </ol>
      </CardContent>
    </Card>
  )
}
