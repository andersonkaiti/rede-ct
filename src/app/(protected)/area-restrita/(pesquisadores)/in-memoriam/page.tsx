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
import { AdminWrapper } from '../../../_components/hoc/admin'
import { FilterInput } from '../../_components/filter-input'
import { CreateInMemoriamButton } from './_components/create-in-memoriam-button'
import { InMemoriamDisplayOptions } from './_components/in-memoriam-display-options'
import { LoadingSkeleton } from './_components/table/loading-skeleton'
import { Table } from './_components/table/table'

export default function InMemoriam() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>In Memoriam</PageTitle>
            <PageDescription>Gerencie os In Memoriam</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <InMemoriamDisplayOptions />
          </PageActionsContainer>

          <CreateInMemoriamButton />
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
