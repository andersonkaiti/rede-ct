import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { Suspense } from 'react'
import { AdminWrapper } from '../../../../_components/hoc/admin'
import { FilterInput } from '../../../_components/filter-input'
import { OrderByButton } from '../../../_components/order-by-button'
import { BookVolumeDisplayOptions } from './_components/book-volume-display-options'
import { CreateBookVolumeButton } from './_components/create-book-volume-button'
import { LoadingSkeleton } from './_components/table/loading-skeleton'
import { Table } from './_components/table/table'

export default function VolumesDeLivros() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Volumes de Livros</PageTitle>
            <PageDescription>Gerencie os volumes de livros</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <BookVolumeDisplayOptions />

            <OrderByButton />
          </PageActionsContainer>

          <CreateBookVolumeButton />
        </PageHeader>

        <PageMain>
          <Suspense fallback={<LoadingSkeleton />}>
            <Table />
          </Suspense>
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
