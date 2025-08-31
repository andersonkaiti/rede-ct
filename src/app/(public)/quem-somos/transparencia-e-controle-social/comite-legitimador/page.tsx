export const dynamic = 'force-dynamic'

import { BackArrow } from '@components/back-arrow'
import { Badge } from '@components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { UserCardRedLine } from '@components/ui/user-card'
import { InfoIcon } from 'lucide-react'
import dynamicImport from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicComiteLegitimador = dynamicImport(() =>
  import('./_components/comite-legitimador').then((m) => m.ComiteLegitimador)
)

export default function ComiteLegitimador() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-7 p-5 py-8 lg:p-25">
      <BackArrow />

      <div className="space-y-8">
        <h2 className="text-center font-bold text-3xl md:text-4xl">
          Composição do Comitê Legitimador da RedeCT
        </h2>
        <UserCardRedLine />
      </div>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicComiteLegitimador />
      </Suspense>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
              <InfoIcon className="!size-5" />
            </Badge>
            <span className="font-bold text-2xl">Sobre o Comitê</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="space-y-4">
            <p className="text-justify">
              Sob responsabilidade da{' '}
              <strong className="text-primary">
                Vice-coordenadoria de Extensão Universitária e Cultura
              </strong>
              , o Comitê Legitimador é composto pelo Vice-coordenador de
              Extensão e Cultura (que tem a responsabilidade de organizar as
              pautas e reuniões, tendo direito à palavra e ao voto de minerva) e
              mais <strong className="text-primary">7</strong> membros
              representantes das áreas de Antropologia e Museologia e de{' '}
              <strong className="text-primary">
                cinco povos tradicionais diferentes
              </strong>
              , todos com direito à palavra e ao voto (sob presidência do
              vice-coordenador que tem voto de minerva em caso de caso de
              empate).
            </p>
            <aside className="w-fit rounded-md border-primary border-l-4 bg-primary/20 px-4 py-2 text-justify text-primary">
              <div className="text-sm">
                O Secretário Geral tem direito à palavra, mas não tem direito ao
                voto.
              </div>
            </aside>
          </CardDescription>
        </CardContent>
      </Card>
    </main>
  )
}
