import { BackArrow } from '@components/back-arrow'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicCongresses = dynamic(() =>
  import('./_components/congresses').then((mod) => mod.Congresses)
)

export default function CongressosRegionais() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8">
      <BackArrow />
      <header className="space-y-8">
        <h1 className="title-2">Congressos Regionais da RedeCT</h1>
        <p className="text-lg text-muted-foreground">
          Nesta seção são apresentados os congressos credenciados pela Rede como
          sendo Congressos Regionais da RedeCT, ou mesmo operacionalizado em
          parceria institucional da Rede.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicCongresses />
      </Suspense>
    </main>
  )
}
