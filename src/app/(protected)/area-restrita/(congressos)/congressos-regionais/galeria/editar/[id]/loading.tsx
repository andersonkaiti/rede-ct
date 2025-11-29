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
        <PageTitle>Editar Imagem da Galeria</PageTitle>
        <PageDescription>
          Edite a imagem da galeria do congresso regional.
        </PageDescription>
      </PageHeaderContent>

      <form className="space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-64 w-full rounded-md" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-24 w-full rounded-md" />
          </div>
        </div>

        <Skeleton className="h-px w-full" />

        <Skeleton className="h-10 w-full rounded-md" />
      </form>
    </PageContainer>
  )
}
