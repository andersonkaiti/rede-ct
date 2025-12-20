import { BookTextIcon } from '@components/icons/book-text'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { LoadingSkeleton } from './_components/loading-skeleton'

export default function Loading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <BookTextIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>Pós-Graduação</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Conheça os programas de pós-graduação oferecidos pela RedeCT. Amplie sua
        formação acadêmica e profissional com nossos cursos de excelência.
      </PageDescription>

      <div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex w-full gap-2 sm:w-fit">
          <Skeleton className="h-9 w-52" />
          <Skeleton className="h-9 w-10" />
        </div>
      </div>

      <LoadingSkeleton />

      <Separator />

      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-52" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
        </div>
      </div>
    </PageContainer>
  )
}
