import { BackArrow } from '@components/back-arrow'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicEquipeSdhc = dynamic(() =>
  import('./_components/equipe-sdhc').then((m) => m.EquipeSdhc)
)

export default function EquipeSdhc() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow />
      <h1 className="title-2">
        Atual equipe de gestão da associação Social Desenvolvimento Humano e
        Comunitário:
      </h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicEquipeSdhc />
      </Suspense>
    </main>
  )
}
