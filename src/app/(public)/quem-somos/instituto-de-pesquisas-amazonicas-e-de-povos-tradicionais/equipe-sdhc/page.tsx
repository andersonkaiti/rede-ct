export const dynamic = 'force-dynamic'

import { BackArrow } from '@components/back-arrow'
import { UserCardRedLine } from '@components/ui/user-card'
import dynamicImport from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicEquipeSdhc = dynamicImport(() =>
  import('./_components/equipe-sdhc').then((m) => m.EquipeSdhc)
)

export default function EquipeSDHC() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow href="/quem-somos/instituto-de-pesquisas-amazonicas-e-de-povos-tradicionais" />

      <div className="space-y-8">
        <h1 className="title-2 text-center">
          Atual equipe de gestão da associação Social Desenvolvimento Humano e
          Comunitário:
        </h1>
        <UserCardRedLine />
      </div>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicEquipeSdhc />
      </Suspense>
    </main>
  )
}
