import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Editar Parceiro do Congresso</PageTitle>
        <PageDescription>
          Edite as informações do parceiro do congresso abaixo.
        </PageDescription>
      </PageHeaderContent>

      <form className="space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-3 w-48" />
            <Skeleton className="h-3 w-20" />
          </div>
          <Skeleton className="h-79.5 w-full rounded-md" />
        </div>

        <div className="flex justify-end pt-6">
          <Skeleton className="h-9 w-full rounded-md" />
        </div>
      </form>
    </PageContainer>
  )
}
