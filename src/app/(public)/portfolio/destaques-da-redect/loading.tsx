import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import { Star } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { LoadingSkeleton } from './_components/loading-skeleton'

export default function Loading() {
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

      <div className="flex w-full gap-2 sm:w-fit">
        <Skeleton className="h-9 w-52" />
        <Skeleton className="h-9 w-10" />
      </div>

      <LoadingSkeleton />

      <Separator />

      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-52" />
        <div className="flex items-center gap-2">
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
        </div>
      </div>
    </PageContainer>
  )
}
