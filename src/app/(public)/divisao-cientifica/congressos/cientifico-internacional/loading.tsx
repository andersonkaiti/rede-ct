import { BackArrow } from '@components/ui/back-arrow'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import { GraduationCap } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../../_components/page-container'
import { LoadingSkeleton } from './_components/loading-skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <BackArrow href="/divisao-cientifica/congressos" />

      <PageHeader>
        <PageHeaderIcon>
          <GraduationCap className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>Congresso Científico Internacional</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Participe do nosso Congresso Científico Internacional, um evento
        dedicado à troca de conhecimentos e experiências entre pesquisadores e
        profissionais de diversas áreas.
      </PageDescription>

      <div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex w-full gap-2 sm:w-fit">
          <Skeleton className="h-9 w-52" />
          <Skeleton className="h-9 w-10" />
        </div>
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
