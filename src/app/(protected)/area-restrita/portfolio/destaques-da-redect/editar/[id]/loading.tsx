import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
} from '../../../../../_components/page-container'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <Skeleton className="h-9 w-2/4" />
          <Skeleton className="h-5 w-1/4" />
        </PageHeaderContent>
      </PageHeader>

      <div className="space-y-6">
        {/* Tipo */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        {/* Usuário */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        {/* Data da Homenagem */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-32 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        {/* Menção Honrosa */}
        <div className="flex flex-row items-start space-x-2">
          <Skeleton className="size-5 rounded" />

          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-28 rounded-md" />
            <Skeleton className="h-3 w-80 rounded-md" />
          </div>
        </div>

        {/* URL do Mérito */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24 rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>

        {/* Descrição */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-20 rounded-md" />
          <Skeleton className="h-16 w-full rounded-md" />
        </div>

        {/* Botão */}
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
    </PageContainer>
  )
}
