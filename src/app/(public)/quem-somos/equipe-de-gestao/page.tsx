import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LoadingSkeleton from './_components/loading-skeleton'

const ManagementTeamsDynamic = dynamic(() =>
  import('./_components/management-teams').then((m) => m.ManagementTeams)
)

export default function EquipeDeGestao() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <header className="mb-8 space-y-8">
        <h1 className="title-2">Conheça a equipe da RedeCT</h1>
        <p className="text-muted-foreground">
          Nossa equipe é formada por profissionais dedicados que trabalham para
          fortalecer a colaboração entre a academia e os povos tradicionais.
          Veja abaixo quem faz parte da gestão da RedeCT.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <ManagementTeamsDynamic />
      </Suspense>
    </main>
  )
}
