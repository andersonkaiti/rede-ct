import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Perfil do Usuário</PageTitle>
          <PageDescription>
            Veja e gerencie suas informações de perfil
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>
      <PageMain>
        <form className="mt-10 flex flex-col items-center justify-evenly gap-8 md:gap-12 lg:flex-row lg:items-start">
          <div className="flex flex-1 flex-col items-center gap-4">
            <div className="group relative flex flex-col items-center">
              <Skeleton className="size-30 rounded-full shadow-lg sm:size-60" />
            </div>
            <div className="flex w-full flex-col items-center gap-3">
              <Skeleton className="h-7 w-full rounded-full" />
              <Skeleton className="h-4 w-24 rounded-full" />
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 md:w-2/3">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-16 rounded-full" />
              <Skeleton className="h-9 w-full rounded-md" />
            </div>

            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-16 rounded-full" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <Skeleton className="h-4 w-20 rounded-full" />
                <Skeleton className="h-8 w-full rounded-md" />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Skeleton className="h-4 w-24 rounded-full" />
                <Skeleton className="h-8 w-full rounded-md" />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="space-y-2">
                <Skeleton className="h-4 w-16 rounded-full" />
                <Skeleton className="h-9 w-full rounded-md" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-16 rounded-full" />
                <Skeleton className="h-9 w-full rounded-md" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-16 rounded-full" />
                <Skeleton className="h-9 w-full rounded-md" />
              </div>

              <Skeleton className="h-9 w-full rounded" />
            </div>
          </div>
        </form>
      </PageMain>
    </PageContainer>
  )
}
