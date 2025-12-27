import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '../../../../../_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Editar Conta Corrente</PageTitle>
        <PageDescription>
          Atualize as informações da conta corrente.
        </PageDescription>
      </PageHeaderContent>

      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-9 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-9 w-full" />
        </div>

        <Skeleton className="h-9 w-full" />
      </div>
    </PageContainer>
  )
}
