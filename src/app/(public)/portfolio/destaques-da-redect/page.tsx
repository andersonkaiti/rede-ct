import { Badge } from '@components/ui/badge'
import { Star } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicRedeCTHighlightList = dynamic(() =>
  import('./_components/redect-highlight-list').then(
    (mod) => mod.RedeCTHighlightList,
  ),
)

export default function DestaquesRedeCT() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <Star className="size-7" />
          </Badge>
          <h1 className="title-2">Destaques RedeCT</h1>
        </div>
        <p className="text-justify text-lg text-muted-foreground">
          A Academia, representada pela Rede Internacional de Pesquisadores
          sobre Povos Originários e Comunidades Tradicionais - RedeCT, reconhece
          e presta homenagem a pessoas e instituições que desenvolveram
          trabalhos significativos em prol dos Povos e Comunidades Tradicionais
          - PCTs. Especialmente, destacamos aqueles que enfrentaram o complexo
          desafio de convergir esforços e interesses acadêmicos com as pautas e
          demandas destes povos e comunidades, promovendo uma ciência
          comprometida com o diálogo intercultural e o respeito aos saberes
          tradicionais.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicRedeCTHighlightList />
      </Suspense>
    </main>
  )
}
