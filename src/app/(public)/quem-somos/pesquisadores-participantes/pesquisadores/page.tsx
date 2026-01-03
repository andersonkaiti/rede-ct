'use client'

import { BackArrow } from '@components/ui/back-arrow'
import { Badge } from '@components/ui/badge'
import { GraduationCap } from 'lucide-react'
import { ResearchersList } from './_components/researchers-list'

export default function ParticipatingResearchers() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-14 p-6 py-10 lg:p-28">
      <BackArrow href="/quem-somos/pesquisadores-participantes" />

      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <GraduationCap className="size-7" />
          </Badge>
          <h1 className="whitespace-normal font-bold text-2xl lg:text-4xl">
            Pesquisadores Participantes da RedeCT
          </h1>
        </div>
        <p className="text-muted-foreground">
          Conheça os pesquisadores participantes da Rede CT, organizados por
          categoria de atuação e experiência. Explore o perfil de cada
          pesquisador(a) para saber mais sobre sua trajetória, área de pesquisa
          e formas de contato.
        </p>
      </header>

      <ResearchersList />
    </main>
  )
}
