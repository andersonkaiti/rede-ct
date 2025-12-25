import { BackArrow } from '@components/ui/back-arrow'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../../_components/page-container'

export default function ResearcherDetailsLoading() {
  return (
    <PageContainer>
      <BackArrow href="/quem-somos/pesquisadores-participantes/pesquisadores" />

      <PageHeader className="flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Skeleton className="size-24 shrink-0 rounded-full" />

          <div className="flex-1 space-y-2">
            <Skeleton className="h-12 w-64" />
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>

        <Skeleton className="h-4 w-56" />

        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex w-full flex-wrap gap-2">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-28" />
            </div>

            <Skeleton className="h-9 w-32" />
          </div>

          <Separator />
        </div>
      </PageHeader>

      <PageMain className="space-y-7">
        <div className="space-y-1.5">
          <Skeleton className="h-6 w-32 rounded-full" />
          <Skeleton className="h-6 w-full rounded-full" />
          <Skeleton className="h-6 w-full rounded-full" />
          <Skeleton className="h-6 w-3/4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="space-y-1">
              <Skeleton className="h-6 w-32 rounded-full" />
              <Skeleton className="h-6 w-full rounded-full" />
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Skeleton className="h-6 w-40 rounded-full" />

          <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-1">
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-48 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </PageMain>
    </PageContainer>
  )
}
