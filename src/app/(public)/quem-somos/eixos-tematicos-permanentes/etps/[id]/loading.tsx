import { BackArrow } from '@components/ui/back-arrow'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import { UserCardSkeleton, UserCardWrapper } from '@components/ui/user-card'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../../_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <BackArrow href="/quem-somos/eixos-tematicos-permanentes/etps" />

      <PageHeader className="flex-col items-start gap-8">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <Skeleton className="h-14 w-3/4 max-w-4xl" />

          <Skeleton className="h-8 w-24 rounded-full" />
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <Skeleton className="h-5 w-64" />

            <div className="flex items-center justify-end">
              <Skeleton className="h-9 w-9 rounded-md" />
            </div>
          </div>

          <Separator />
        </div>
      </PageHeader>

      <PageMain className="space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-7 w-32" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-48 rounded-full" />
          <UserCardWrapper>
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
          </UserCardWrapper>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-5 w-56" />

          <div className="flex w-full flex-col items-center justify-between gap-2">
            <div className="flex w-full gap-4">
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
            </div>

            <Separator />

            <div className="flex w-full gap-4">
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
            </div>

            <Separator />

            <div className="flex w-full gap-4">
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
            </div>

            <Separator />

            <div className="flex w-full gap-4">
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-full rounded-lg" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-7 w-32" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </PageMain>
    </PageContainer>
  )
}
