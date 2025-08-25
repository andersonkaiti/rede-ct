import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicEvents = dynamic(() =>
  import('./_components/events').then((mod) => mod.Events)
)

export default function CalendarioDeEventos() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <h1 className="title-2">Calendário de eventos</h1>
        <p className="text-justify text-lg text-muted-foreground">
          Nesta seção são divulgados os eventos científicos relacionados direta
          ou indiretamente à pauta central da RedeCT (também os eventos que não
          são conduzidos pelos Pesquisadores Filiados, mas de interesse destes).
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicEvents />
      </Suspense>
    </main>
  )
}
