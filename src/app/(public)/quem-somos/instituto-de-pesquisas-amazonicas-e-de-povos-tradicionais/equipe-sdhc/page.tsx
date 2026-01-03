import { BackArrow } from '@components/ui/back-arrow'
import { UserCardRedLine } from '@components/ui/user-card'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'
import { SDHCTeam as SDHCTeamContent } from './_components/sdhc-team'

export default function SDHCTeam() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow href="/quem-somos/instituto-de-pesquisas-amazonicas-e-de-povos-tradicionais" />

      <div className="space-y-8">
        <h1 className="whitespace-normal text-center font-bold text-2xl lg:text-4xl">
          Atual equipe de gestão da associação Social Desenvolvimento Humano e
          Comunitário:
        </h1>
        <UserCardRedLine />
      </div>

      <Suspense fallback={<LoadingSkeleton />}>
        <SDHCTeamContent />
      </Suspense>
    </main>
  )
}
