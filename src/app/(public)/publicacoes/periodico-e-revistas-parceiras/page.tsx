import { Badge } from '@components/ui/badge'
import { FileText } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicMagazines = dynamic(() =>
  import('./_components/magazines').then((mod) => mod.Magazines)
)

export default function PeriodicoERevistasParceiras() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 md:gap-20 lg:p-25">
      <header className="space-y-8">
        <h1 className="title-2">Periódico Científico da RedeCT</h1>
        <p className="text-muted-foreground">
          A RedeCT está orientada para a criação de sua Revista Científica, com
          identidade específica entre universidade, ciência e Povos
          Tradicionais.
        </p>
      </header>

      <section className="space-y-8">
        <div className="flex items-center gap-2">
          <Badge className="rounded-full bg-primary/10 p-2 text-primary">
            <FileText className="!size-7" />
          </Badge>
          <h2 className="title-3">Uma breve explicação</h2>
        </div>
        <p className="rounded-md border border-primary/20 bg-primary/10 p-10 text-justify text-muted-foreground">
          Este é um projeto audacioso e complexo, exigindo planejamento técnico,
          editorial e político. Enquanto o periódico não está pronto,
          fortalecemos nossa presença científica através de{' '}
          <span className="font-semibold text-primary">revistas parceiras</span>
          .
        </p>
      </section>

      <section className="space-y-7">
        <h3 className="text-center font-semibold text-3xl md:text-4xl">
          Revistas Científicas Parceiras
        </h3>
        <p className="text-center text-muted-foreground">
          Colaboramos com revistas científicas renomadas para fortalecer a
          pesquisa e divulgação científica
        </p>
        <Suspense fallback={<LoadingSkeleton />}>
          <DynamicMagazines />
        </Suspense>
      </section>
    </main>
  )
}
