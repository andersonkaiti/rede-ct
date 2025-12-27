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
        <PageTitle>Editar Extrato Detalhado</PageTitle>
        <PageDescription>
          Atualize o documento para editar o extrato de transação financeira.
        </PageDescription>
      </PageHeaderContent>

      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-32 w-full" />
        </div>

        <Skeleton className="h-10 w-full" />
      </div>
    </PageContainer>
  )
}
