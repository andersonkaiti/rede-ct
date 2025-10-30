import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
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

      <PageContainer>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              <div className="group relative flex flex-col items-center">
                <Skeleton className="size-30 rounded-full shadow-lg sm:size-60" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-16 rounded-full" />
                <Skeleton className="h-9 w-full rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-16 rounded-full" />
                <Skeleton className="h-9 w-full rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-16 rounded-full" />
                <Skeleton className="h-9 w-full rounded-md" />
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
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-20 rounded-full" />
              <Skeleton className="h-9 w-full rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-20 rounded-full" />
              <Skeleton className="h-9 w-full rounded-md" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-20 rounded-full" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
          <Skeleton className="h-9 w-full rounded" />
        </form>
      </PageContainer>
    </PageContainer>
  )
}
