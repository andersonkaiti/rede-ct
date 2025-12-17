import { Suspense } from 'react'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { AdminWrapper } from '../../../_components/hoc/admin'
import { FilterInput } from '../../_components/filter-input'
import { CreateInternationalScientificCongressButton } from './_components/create-international-scientific-congress-button'
import { InternationalScientificCongressesDisplayOptions } from './_components/international-scientific-congress-display-options'
import { LoadingSkeleton } from './_components/table/loading-skeleton'
import { Table } from './_components/table/table'

export default function InternationalScientificCongresses() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Congressos Científicos Internacionais</PageTitle>
            <PageDescription>
              Gerencie os congressos científicos internacionais
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <InternationalScientificCongressesDisplayOptions />
          </PageActionsContainer>

          <CreateInternationalScientificCongressButton />
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
