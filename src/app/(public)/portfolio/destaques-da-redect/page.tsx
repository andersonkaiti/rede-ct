import { UserCardRedLine } from '@components/ui/user-card'
import { Star } from 'lucide-react'
import { Suspense } from 'react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { LoadingSkeleton } from './_components/loading-skeleton'
import { RedeCTHighlightList } from './_components/redect-highlight-list'

export default function DestaquesRedeCT() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <Star className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>Destaques RedeCT</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        A Academia, representada pela Rede Internacional de Pesquisadores sobre
        Povos Originários e Comunidades Tradicionais - RedeCT, reconhece e
        presta homenagem a pessoas e instituições que desenvolveram trabalhos
        significativos em prol dos Povos e Comunidades Tradicionais - PCTs.
        Especialmente, destacamos aqueles que enfrentaram o complexo desafio de
        convergir esforços e interesses acadêmicos com as pautas e demandas
        destes povos e comunidades, promovendo uma ciência comprometida com o
        diálogo intercultural e o respeito aos saberes tradicionais.
      </PageDescription>

      <section className="space-y-8">
        <div className="space-y-8">
          <h2 className="whitespace-normal text-center font-bold text-2xl lg:text-4xl">
            Pessoas e Instituições Homenageadas
          </h2>
          <UserCardRedLine />
        </div>

        <Suspense fallback={<LoadingSkeleton />}>
          <RedeCTHighlightList />
        </Suspense>
      </section>
    </PageContainer>
  )
}
