import {
  PageContainer,
  PageDescription,
  PageHeaderContent,
  PageTitle,
} from '@components/ui/page-container'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'

export default function LoadingEditGalleryImage() {
  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Editar Imagem da Galeria</PageTitle>
        <PageDescription>Carregando...</PageDescription>
      </PageHeaderContent>

      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-79.5 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>

      <Separator />

      <Skeleton className="h-9 w-full" />
    </PageContainer>
  )
}
