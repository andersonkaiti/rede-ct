import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import { Scale } from 'lucide-react'
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
          <Scale className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>
          Legislações de interesse dos pesquisadores da RedeCT
        </PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Compilação de legislações relevantes para povos e comunidades
        tradicionais de diversos países, com foco em direitos, proteção
        territorial e reconhecimento cultural.
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
