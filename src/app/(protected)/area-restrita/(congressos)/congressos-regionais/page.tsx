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
import { CreateRegionalCongressButton } from './_components/create-regional-congress-button'
import { RegionalCongressesDisplayOptions } from './_components/regional-congress-display-options'
import { LoadingSkeleton } from './_components/table/loading-skeleton'
import { Table } from './_components/table/table'

export default function CongressosRegionais() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Congressos Regionais</PageTitle>
            <PageDescription>Gerencie os Congressos Regionais</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <RegionalCongressesDisplayOptions />
          </PageActionsContainer>

          <CreateRegionalCongressButton />
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
