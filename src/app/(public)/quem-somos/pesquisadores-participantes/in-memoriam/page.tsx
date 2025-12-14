import { BackArrow } from '@components/ui/back-arrow'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { GaleriaInMemoriamTitle } from './_components/galeria-in-memoriam-title'
import { LoadingSkeleton } from './_components/loading-skeleton'
import { ResearchersTitle } from './_components/researchers-title'
import { TraditionalLeadersTitle } from './_components/traditional-leaders-title'

const DynamicPesquisadores = dynamic(() =>
  import('./_components/researchers').then((m) => m.Researchers),
)

const DynamicPovosTradicionais = dynamic(() =>
  import('./_components/traditional-leaders').then((m) => m.TraditionalLeaders),
)

export default function InMemorian() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow href="/quem-somos/pesquisadores-participantes" />

      <GaleriaInMemoriamTitle />

      <section className="space-y-8">
        <ResearchersTitle />

        <p className="text-justify">
          Nesta seção, mantemos nossa homenagem aos saudosos Pesquisadores
          Filiados falecidos que deixaram sua contribuição e legado junto à
          RedeCT.
        </p>
      </section>
      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicPesquisadores />
      </Suspense>
      <section className="space-y-8">
        <TraditionalLeadersTitle />

        <p className="text-justify">
          Nesta seção, mantemos nossa homenagem aos líderes de Povos
          Tradicionais falecidos e que deixaram sua contribuição e legado na
          luta de resistência e de emancipação efetiva de seus povos e
          comunidades.
        </p>
      </section>
      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicPovosTradicionais />
      </Suspense>
    </main>
  )
}
