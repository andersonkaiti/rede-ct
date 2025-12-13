import { BackArrow } from '@components/back-arrow'
import { Axis3DIcon } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicEPTAccordion = dynamic(() =>
  import('./_components/etp-accordion').then((m) => m.EPTAccordion),
)

export default function EixosTematicosPermanentesETPs() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-14 p-6 py-10 lg:p-28">
      <BackArrow href="/quem-somos/eixos-tematicos-permanentes" />

      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-primary/20 p-2">
            <Axis3DIcon className="text-primary" />
          </div>
          <h1 className="title-3 font-bold">Eixos Temáticos Permanentes</h1>
        </div>
        <p className="text-muted-foreground">
          Conheça os Eixos Temáticos Permanentes (ETPs) da Rede CT, suas áreas
          de atuação e os membros responsáveis por cada eixo.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicEPTAccordion />
      </Suspense>
    </main>
  )
}
