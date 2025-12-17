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
import { AdminWrapper } from '../../_components/hoc/admin'
import { FilterInput } from '../_components/filter-input'
import { CreateEtpButton } from './_components/create-etp-button'
import { EtpsDisplayOptions } from './_components/etps-display-options'
import { LoadingSkeleton } from './_components/table/loading-skeleton'
import { Table } from './_components/table/table'

export default function ETPS() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>ETPs</PageTitle>
            <PageDescription>Gerencie os ETPs cadastrados</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <EtpsDisplayOptions />
          </PageActionsContainer>

          <CreateEtpButton />
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
