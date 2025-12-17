'use client'

import {
  BookTextIcon,
  type BookTextIconHandle,
} from '@components/icons/book-text'
import { Badge } from '@components/ui/badge'
import { Card, CardContent, CardHeader } from '@components/ui/card'
import { useRef } from 'react'

export function ETPCard() {
  const iconRef = useRef<BookTextIconHandle>(null)

  return (
    <Card
      className="flex-1"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader>
        <h2 className="flex items-center gap-4 whitespace-normal font-bold text-xl lg:text-2xl">
          <Badge className="rounded-full bg-primary/20 p-1 text-primary">
            <BookTextIcon ref={iconRef} />
          </Badge>
          ETP - EIXO TEMÁTICO PERMANENTE
        </h2>
      </CardHeader>
      <CardContent className="space-y-7">
        <h3 className="whitespace-normal font-bold text-xl lg:text-2xl">
          O que são os ETPs?
        </h3>
        <p className="text-justify">
          O EIXO TEMÁTICO PERMANENTE - ETP assemelha-se e funciona como um
          &quot;grupo de pesquisa&quot;, se constituindo em um espaço imaterial
          que, orientando-se a uma determinada temática, se destina a planejar,
          articular, organizar e desenvolver a produção do conhecimento.
        </p>
        <p className="text-justify">
          Por exemplo, o ETP-04 Produção do conhecimento e educação escolar
          indígena, liderado pelo Dr. Alceu Zoia organiza e conduz este tema
          dentro da RedeCT, produzindo a seção temática específica no Congresso
          Científico Internacional da RedeCT (CCI da RedeCT), pode organizar
          congresso específico em âmbito regional, nacional ou internacional
          conduzindo a chancela da RedeCT, pode organizar um livro a partir dos
          trabalhos de sua seção no CCI da RedeCT, pode propor e desenvolver um
          projeto de extensão universitária e mesmo um processo de captação de
          recursos de modo vinculado à RedeCT e ao seu CNPJ.
        </p>
        <h3 className="whitespace-normal font-bold text-xl lg:text-2xl">
          Quantos ETPs a RedeCT possui?
        </h3>
        <p className="text-justify">
          Em 10/11/2023, dentro do IV CCI (Belém/PA), em Reunião Técnica da
          RedeCT (aberta aos interessados), foram propostos 22 ETPs, que estão
          disponibilizados logo abaixo (você encontrará mais adiante, ainda
          nesta seção, o detalhamento de cada ETP, inclusive com a composição de
          seu GTC).
        </p>
      </CardContent>
    </Card>
  )
}
